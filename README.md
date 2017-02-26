# icirr-app

## Overview
This is a cross-platform [Cordova](https://cordova.apache.org/) application running assets built via webpack.

## Installation
First, clone the repository by running `git clone https://github.com/chi-immigration-task-force/icirr-app.git` (or `git clone git@github.com:chi-immigration-task-force/icirr-app.git` if you prefer ssh).

### Install yarn
Follow the instructions [here](https://yarnpkg.com/lang/en/docs/install/#mac-tab).
Using whatever approach you prefer.

### Install Cordova
Instructions directly from cordova are [here](https://cordova.apache.org/docs/en/latest/guide/cli/index.html)

1. Globally install cordova with `npm install -g cordova`. Depending on your npm setup, you may need to add sudo but don't do it blindly!
2. To use Cordova for iOS developement, you'll need [Cocoapods](https://guides.cocoapods.org/using/getting-started.html). To install this, add the following to your `~/.profile` or `~/.bash_profile` (or anything else)

  ```bash
  export GEM_HOME=$HOME/.gem
  export PATH=$GEM_HOME/bin:$PATH
  ```

  `source` that file or open a new shell, and then run `gem install cocoapods`.
  To make sure it's installed, check with `gem which cocoapods`.

3. Run `pod setup` to sync the cocoapods repo. This takes forever and cordova actually warns you of this. Cocoapods is mostly great, but this part of it fucking sucks.

### Install Android Studio
1. [Download Android studio](https://developer.android.com/studio/index.html)
2. Follow the installation instructions listed there (aka drag the app into the Applications folder and open it)
3. Open the SDK Manager from Android studio. The button is towards the right and is a downward arrow
4. From there, open the standalone SDK manager (maybe not needed?) and install "Android SDK Build-tools" Rev 24.0.3. You'll need to accept the licenses.

And you're done! You may need to install more than just that one build tool. If that's the case, please update the docs.

### Install Xcode
1. Download it from the app store? I think you can also download it directly from the apple developer site, which I usually try to do because then updates don't act as stupidly...
2. Open Xcode at least once to accept the license agreement and
  install the command line tools

## Running the app
### Initializing the platforms and plugins
Run `./project.sh -i` to initialize and install all the plugins and platforms. **Untested on a new machine. Please let Yonatan know if you hit any issues.**

Once the platforms are installed, you can run `cordova emulate ios --target="iPad-Air-2, 10.1"` to open the iPad Simulator.

## Developing
We're doing development like it's a website and then copying the results of a
production build of the web assets into cordova to generate the native apps.
To get started, run `yarn && yarn start`. You should then be able to see
the existing site at `http://localhost:3000/`.

All the website files live in `/web/src`. Feel free to poke around! The
primary technologies we use are:

1. [React](https://facebook.github.io/react/)
2. [Redux](http://redux.js.org/)


## Debugging
### iOS
#### Debugging the native <-> webview interface
Using Xcode, open `platforms/ios/IcirrApp.xcworkspace`. From here, you can run the app normally, set breakpoints, see console logs, etc. Here's Cordova's [iOS debugging page](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html#debugging)

#### Debugging the webview itself
With the app running, open Safari, select `Develop -> Simulator -> localhost`. You then have the standard Safari debugger. Change `Simulator` to the relevant device name and `localhost` to the relevant title as needed.

### Android
TODO...
