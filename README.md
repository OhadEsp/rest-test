# rest-API-test

This project simulates access to data through web-api, using json-server for mocking, and displaying it in a table.

## Requirements

For development, you will only need Node.js installed on your environement.

### Node

[Node](http://nodejs.org/) is really easy to install & include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v10.16.3

    $ npm --version
    6.9.0

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

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git clone https://github.com/OhadEsp/rest-test.git
    $ cd PROJECT
    $ npm install

## Start & watch

    $ npm start

## Run Json-Server

    $ npm run mock:api

## Simple build for production

    $ npm run build

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

---

## How to use

Insert address that fit the api/db.json and fit the OData protocol and click the button to display the data.
```
Type: http:\\localhost:4000\users
Click the button and get all users data.

Type: http:\\localhost:4000\users\2
Click the button and get data for user with id=2.

Type: http:\\localhost:4000\companies?name=Facebook
Click the button and get data for facebook company.
```