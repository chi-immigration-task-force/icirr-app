# icirr-app

## Getting started
We use [github issues](https://github.com/chi-immigration-task-force/icirr-app/issues) to track the tasks we need to do for this project.

If you're interested in getting involved technically, all you need to do is clone the repository and [install yarn](https://github.com/chi-immigration-task-force/icirr-app#installation). Then check out the section on [developing](https://github.com/chi-immigration-task-force/icirr-app#developing).

If you don't know React yet, Facebook's [React tutorial](https://facebook.github.io/react/tutorial/tutorial.html) is a good place to start.

If you don't know Javascript yet, check out a tutorial. [Khan Academy's introduction](https://www.khanacademy.org/computing/computer-programming/programming) is pretty good.
I think that [Code Academy's](https://www.codecademy.com/learn/learn-javascript) is a bit faster if you already feel comfortable programming, but in a different language. I also generally recommend [Javascript the Good Parts](http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf) even to experienced developers.

## Installation
First, clone the repository by running `git clone https://github.com/chi-immigration-task-force/icirr-app.git` (or `git clone git@github.com:chi-immigration-task-force/icirr-app.git` if you prefer ssh).

### Install yarn
Follow the instructions [here](https://yarnpkg.com/lang/en/docs/install/#mac-tab).
Using whatever approach you prefer.

## Developing
To get started, run `yarn && yarn start`. You should then be able to see the existing site at `http://localhost:3000/`.

All the website files live in `/src`. Feel free to poke around! The
primary technologies we use are:

1. [React](https://facebook.github.io/react/)
2. [Redux](http://redux.js.org/)

### The build process
The build process is run by [gulp](https://www.npmjs.com/package/gulp), which
chains together tasks. The `build` task (defined in `gulp/tasks/build.js`) runs
and html build task and a [webpack](https://webpack.js.org/) build task. The html
build task more-or-less just copies over the index.html file, but with some
variable substitution.

## Deploying web app to heroku
For more details instructions, check out heroku's instructions on how to deploy
[node.js](https://devcenter.heroku.com/articles/deploying-nodejs).

We have two environments!
A [staging environment](https://icirr-demo-staging.herokuapp.com/)
and a [prod environment](https://icirrapp.herokuapp.com/).

ALWAYS DEPLOY TO STAGING FIRST AND TEST BEFORE
DEPLOYING TO PRODUCTION.

```sh
git push heroku-staging master
```

If that looks okay, you can run the same command
pushing to the remote you have configured for production.

## Architecture Overview
### Used technologies
- [React](https://github.com/facebook/react)
  This is the framework we use for all our rendering
- [Redux](https://github.com/reactjs/redux)
  This is what we use for all the local state management. There's very
  little, however
- [Reselect](https://github.com/reduxjs/reselect)
  This is a way to memoize computed values coming from the state.

### CSS
We use scss as our css preprocessor for no particular reason over the other
preprocessors, it's just what I've used at work so it was familiar.
Similarly, the CSS folder structure is from [ITCSS](https://speakerdeck.com/dafed/managing-css-projects-with-itcss).

**Icons**

Our icons come from [Material Design Icons](https://google.github.io/material-design-icons/).
We're currently pulling them in from Google web fonts, but may want to move to hosting
it ourselves or bundling it in, since ad blockers may block them.

### Translations
We're using a library called [react-localization](https://www.npmjs.com/package/react-localization) to handle
translation. With that, we construct a `LocalizedStrings` object (in [`src/js/localization/index.js`](https://github.com/chi-immigration-task-force/icirr-app/blob/master/src/js/localization/index.js)). Each key
in this is a language code (currently only english and spanish are supported), and the values are objects with
the strings in that language to render. They are generally organized by route.

**Translating the app**

To access the translations, you need to wrap the relevant component in `withTranslate`. This will expose
`this.props.translate` on the component, which takes a string representing the object path
(e.g. to access `{ discover: { infoHeader: 'Desired String } }` you would pass it `discover.infoHeader`).
You should pretty much never write user-visible text directly into a component. Instead, put it in
the `LocalizedStrings` object and then use `this.props.translate`.

**Changing the active language**

`LocalizedStrings` exposes a method called `setLanguage`. At present, we just call
this whenever anyone changes the selected language.
Specificly, in the `settings.js` reducer whenever a `SET_LANGUAGE` action is dispatched.

**Adding new languages**

It's as easy as adding a new top-level key (e.g. `kr`) and providing
the relevant translations. If any translation is missing, it will fall
back to English (I think since it's the first defined key).

### Usage / error tracking
We use Google Analytics and Rollbar.js. These are configured in index.html,
and the variables `GA_TRACKING_ID` and `ROLLBAR_ENV` are substituted in by
environmental variables that are configured on heroku.

### TODOs / Known tech debt
- [ ] Material UI icons don't render if you have an ad blocker.
  We should be able to host the font ourselves but may want to only include
  the icons we need.
- [ ] There's some unused CSS that should be cleaned up.
- [ ] We should probably have a test that makes sure every key is present
in every language.
