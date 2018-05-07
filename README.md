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
We're doing development like it's a website and then copying the results of a
production build of the web assets into cordova to generate the native apps.
To get started, change directory to `icirr-app/web/`, run `yarn && yarn start`. You should then be able to see the existing site at `http://localhost:3000/`.

All the website files live in `/web/src`. Feel free to poke around! The
primary technologies we use are:

1. [React](https://facebook.github.io/react/)
2. [Redux](http://redux.js.org/)

## Deploying web app to heroku
For more details instructions, check out heroku's instructions on how to deploy
[node.js](https://devcenter.heroku.com/articles/deploying-nodejs).

```sh
git push heroku master
```

## Architecture Overview
### Used technologies
- [React](https://github.com/facebook/react)
  This is the framework we use for all our rendering
- [Redux](https://github.com/reactjs/redux)
  This is what we use for all the local state management. There's very
  little, however
- [Reselect](https://github.com/reduxjs/reselect)
  This is a way to memoize computed values coming from the state.

### TODOs / Known tech debt
- [ ] Material UI icons don't render if you have an ad blocker.
  We should be able to host the font ourselves but may want to only include
  the icons we need.
- [ ] There's some unused CSS that should be cleaned up.
