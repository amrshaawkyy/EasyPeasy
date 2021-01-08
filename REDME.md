# PROJECT EasyPeasy V0

## Description

```
- The application is the new Facebook  with the focus on the yummiest thing in this world: FOOD A myriad of recipes, easy choosing by ingredients & based on the number of people eating.
- With Easy Peasy App we show people that cooking can be easier. We help to connect people and
    businesses who are crazy about cooking.
- Our main goal is to provide a communication platform as a solution for improvement of existing
    processes and similar sites by having an easy access of information for food enthusiasts and food
    lovers with standardized recipes and easy to follow guidelines. We aim at a platform that will
    allow easy exchange of ideas and information related to food. A platform that will connect
    different cultures. A platform to share stories about food with help of famous food bloggers, who
    can create profiles and users can follow to view their recipes, rate, save and comment on them.
- The stories will be shared in the form of texts, photos and videos.
```

## Requirements

For development, you will only need Node.js and Spring Boot installed on your environement.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/). You should be able to run
the following command after the installation procedure below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer. Also, be sure to have `git` available in
your PATH, `npm` might need it.

---

## Install

    $ git clone https://github.com/amrshaawkyy/GithubIssues
    $ cd PROJECT
    $ npm install

## Start & watch

    $ npm start

## Simple build for production

    $ npm run build

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often. A common way to update is by
doing

    $ git pull
    $ npm prune
    $ npm install

To run those 3 commands you can just do

    $ npm run pull

## Enable git hooks (unix only :/)

    $ npm run create-hook-symlinks

### `post-merge` (≃ `npm install`)

This hook will `npm prune && npm install` each time you `git pull` something if the `package.json` has been modified.

### `pre-commit` (≃ `npm test`)

This hook will just ensure you will commit something not broken bye pruning npm packages not in the `package.json` &
eventually reinstall missings/not correctly removed packages. Then it will try a production build.

---

## Languages & tools

## Front-End

### HTML

### CSS

- [React-Bootstrap](https://react-bootstrap.github.io/).
- [Styled-Components](https://styled-components.com/).

### JavaScript

- [React](http://facebook.github.io/react).
- [Webpack](https://webpack.js.org/).
- [Babel](https://babeljs.io/).

###     

## Back-End

### Java

- [Spring Boot](https://spring.io/projects/spring-boot).

#### GET

- http://localhost:8080/rest/recipes/

#### GET BY ID

- http://localhost:8080/rest/recipes/100

#### POST

- http://localhost:8080/rest/recipes

#### PUT

- http://localhost:8080/rest/recipes

#### DELETE BY ID

- http://localhost:8080/rest/recipes/100

##### Request Format

{
"recipeName": "Meat",
"recipeDes": "Meat Steak"
}