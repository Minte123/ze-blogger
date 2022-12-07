<h1 align="center">
🌐 MERN Stack
   Ze Blogger
</h1>
<p align="center">
MongoDB, Expressjs, React/ Nodejs
</p>

<p align="center">
   <a href="https://github.com/amazingandyyy/mern/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
   </a>
   <a href="https://circleci.com/gh/amazingandyyy/mern">
      <img src="https://circleci.com/gh/amazingandyyy/mern.svg?style=svg" />
   </a>
</p>

> MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

MERN stack is the idea of using Javascript/Node for fullstack web development.

## clone or download

```terminal
$ git clone https://github.com/Minte123/ze-blogger.git
$ yarn # or npm i
```

## project structure

```terminal
LICENSE
package.json
server/
   package.json
   .env (to create .env, check [prepare your secret session])
client/
   package.json
...
```

# Usage (run fullstack app on your machine)

## Prerequisites

- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)

```terminal
$ cd client          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm run dev        // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## Server-side usage(PORT: 5000)

### Prepare your secret

run the script at the first level:

(You need to add a JWT_SECRET in .env to connect to MongoDB)

```terminal
// in the root level
$ cd server
$ echo "JWT_SECRET=YOUR_JWT_SECRET" >> src/.env
```

### Start

```terminal
$ cd server   // go to server folder
$ npm i       // npm install packages
$ npm run dev // run it locally
$ npm run build // this will build the server code to es5 js codes and generate a dist file
```

## Deploy Server to [Heroku](https://dashboard.heroku.com/)

```terminal
$ npm i -g heroku
$ heroku login
...
$ heroku create
$ npm run heroku:add <your-super-amazing-heroku-app>
// remember to run this command in the root level, not the server level, so if you follow the documentation along, you may need to do `cd ..`
$ pwd
/Users/<your-name>/mern
$ npm run deploy:heroku
```

### After creating heroku

remember to update the file of [client/webpack.prod.js]

```javascript
 'API_URI': JSON.stringify('https://your-super-amazing-heroku-app.herokuapp.com')
```

# Dependencies(tech-stacks)

| Client-side                   | Server-side           |
| ----------------------------- | --------------------- |
| axios: ^0.15.3                | bcrypt-nodejs: ^0.0.3 |
| babel-preset-stage-1: ^6.1.18 | body-parser: ^1.15.2  |
| lodash: ^3.10.1               | cors: ^2.8.1          |
| react: ^16.2.0                | dotenv: ^2.0.0        |
| react-dom: ^16.2.0            | express: ^4.14.0      |
| react-redux: ^4.0.0           | jwt-simple: ^0.5.1    |
| react-router-dom: ^4.2.2      | mongoose: ^4.7.4      |
| redux: ^3.7.2                 | morgan: ^1.7.0        |
| redux-thunk: ^2.1.0           |

# Screenshots of this project

User visit public and Home page
![User visit public and Home page](https://drive.google.com/file/d/1vpmFFpyCfUQisxIhA2ig3dohAPfDxi8h/view?usp=sharing)

User can sign in or sign up
![User can sign in or sign up](https://drive.google.com/file/d/1qOrNNKA6d49PrXGAYT2kyJNgRk9Yfqds/view?usp=sharing)

![User can sign in or sign up](https://drive.google.com/file/d/1yoYhmdfsJILSlRmdGUe2FbfwixyLyuXD/view?usp=sharing)

## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## BUGs or comments

[Create new Issues](https://github.com/Minte123/Minte123) (preferred)

Email Me: netacademy1986minte@yahoo.com (welcome, say hi)

## Author

[Mintesnot Bekele](https://www.linkedin.com/in/mintesnot-bekele-018b301bb/)

I recently launch my monthly mentorship program, feel free to reach out and see what we can grow together:

<a href="https://mentorcruise.com/mentor/andychen/"> <img src="https://cdn.mentorcruise.com/img/banner/fire-sm.svg" width="240" alt="MentorCruise"> </a>
