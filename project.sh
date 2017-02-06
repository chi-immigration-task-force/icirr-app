#!/bin/bash
# Source: https://gist.github.com/jonathandixon/7043297

# ----
# Text Colors and Messaging Functions

textReset=$(tput sgr0)
textRed=$(tput setaf 1)
textGreen=$(tput setaf 2)
textYellow=$(tput setaf 3)

message_info () {
  echo "$textGreen[dashboard-native]$textReset $1"
}
message_warn () {
    echo "$textYellow[dashboard-native]$textReset $1"
}
message_error () {
    echo "$textRed[dashboard-native]$textReset $1"
}

# ----
# Help Output

show_help () {
    echo ""
    message_info "This script performs the necessary command-line operations for this app."
    message_info ""
    message_info "The following options are available:"
    message_info ""
    message_info "    -c (--clean): Removes generated directories and content. Combine with -i."
    message_info "    -h (--help): Displays this help message."
    message_info "    -i (--init): Runs all operations necessary for initialization."
    message_info "    -m (--merge): Merges content of 'platform-merges' with 'platform'."
    message_info "    -n (--icons): Copies icon and splash screen images to platform directories."
    message_info "    -p (--plugins): (Re)Installs all plugins."
    message_info "    -u (--update): Update platform codebase, runs 'cordova prepare'."
    message_info "    -up (--update_plugin plugin_name): Updates a specific plugin"
    message_info "                                       Must already be defined in config.xml"
    message_info ""
    message_info "Examples:"
    message_info ""
    message_info "    ./project.sh   # This is the same as using the -i option."
    message_info "    ./project.sh -c -i"
    message_info "    ./project.sh --update_plugin com-tock-plugins-echo"
    echo ""
}

# ----
# Script Option Parsing

init=0;
merge=0;
plugins=0;
icons=0;
clean=0;
update=0;
update_plugin=0;
plugin_name="";

while :; do
    case $1 in
        -h | --help | -\?)
            show_help
            exit 0
            ;;
        -i | --init)
            init=1
            ;;
        -m | --merge)
            merge=1
            ;;
        -p | --plugins)
            plugins=1
            ;;
        -n | --icons)
            icons=1
            ;;
        -c | --clean)
            clean=1
            ;;
        -u | --update)
            update=1
            ;;
        -up | --update_plugin)
            update_plugin=1
            plugin_name=$2
            shift
            ;;
        --) # End of all options
            break
            ;;
        -*)
            echo ""
            message_error "WARN: Unknown option (ignored): $1"
            show_help
            exit 1
            ;;
        *)  # no more options. Stop while loop
            break
            ;;
    esac
    shift
done

# Specific Utils
# Plugin Utils
if [[ $update_plugin = 1 ]]  ; then
    message_info "Updating Plugin $plugin_name"
    cordova plugin rm $plugin_name
    cordova plugin add $plugin_name
fi

if [[ $merge = 0 ]] && [[ $plugins = 0 ]] && [[ $icons = 0 ]] && [[ $clean = 0 ]] && [[ $update = 0 ]] && [[ $update_plugin = 0 ]] ; then
    # If no options specified then we're doing initialization.
    init=1
fi

# ----
# Clean

if [[ $clean = 1 ]] ; then
    if [[ -d "plugins" ]] ; then
        message_info "Removing 'plugins' directory."
        rm -rf plugins
    fi

    if [[ -d "platforms" ]] ; then
        message_info "Removing 'platforms' directory."
        rm -rf platforms
    fi
fi

if [[ $merge = 0 ]] && [[ $plugins = 0 ]] && [[ $icons = 0 ]] && [[ $init = 0 ]] && [[ $update = 0 ]] ; then
    exit 0
fi

# ----
# Make sure necessary directories exist, regardless of options.

if [[ ! -d "plugins" ]] ; then
    message_info "Creating 'plugins' directory."
    mkdir plugins
fi

if [[ ! -d "platforms" ]] ; then
    message_info "Creating 'platforms' directory."
    mkdir platforms
fi

# ----
# Add platforms

if [[ $init = 1 ]] ; then
    # TODO Check if platforms have already been added
    # 'cordova platforms'

    message_info "Adding Android platform..."
    cordova platform add android

    message_info "Adding iOS platform..."
    cordova platform add ios
fi

# ----
# Merge platform overrides.

if [[ $init = 1 ]] || [[ $merge = 1 ]] ; then
    message_info "Merging Android platform customizations..."
    cp -R platform-merges/android/* platforms/android/

    message_info "Merging iOS platform customizations..."
    cp -R platform-merges/ios/* platforms/ios/
fi

# ----
# Copy App Icons and Splash Screen Images

if [[ $init = 1 ]] || [[ $icons = 1 ]] ; then
    # This would probably be better if we parsed www/config.xml,
    # but for now we know the files and where they need to go.

    message_error "Icons not yet implemented. See source script for example"
fi

# ----
# Add Plugins

if [[ $init = 1 ]] || [[ $plugins = 1 ]] ; then
    message_info "Adding Crosswalk Webview Plugin"
    cordova plugin add cordova-plugin-crosswalk-webview@2.2.0 --save

    message_info "Adding WKWebView Engine Plugin"
    cordova plugin add cordova-plugin-wkwebview-engine@1.1.0 --save
fi

# ----
# Prepare Platforms
if [[ $init = 1 ]] || [[ $update = 1 ]] ; then
    message_info "Syncing 'www' with Android platform..."
    cordova prepare android

    message_info "Syncing 'www' with iOS platform..."
    cordova prepare ios
fi
