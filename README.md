# socket.io-android-chat
Android chat application based on socket.io with local node.js server

# How to start node.js server (this project)
**1.** Open cmd and go to `.../socket.io-local-chat-server` path.

**2.** Run `node index.js` **OR** `nodemon index`command. (**Note** :- Make sure you have properly installed node.js in your system)

# Configure node.js server on your own
**1.** Download `node.js` from [https://www.nodejs.org/en/](https://www.nodejs.org/en/) and install it in your system.

**2.** Open `cmd` and go to directory where you want initialize node project.

**3.** Initialize/Configure project using `npm init` command; just go through the steps and keep all default settings, as a result it will create `package.json` configuration file in current directory.

**4.** Install and save `express` module by running `npm install express --save` command; as a result it will install/create node_modules in current directory.

**5.** Install and save `nodemon` by running `npm install nodemon --save-dev` command in dev-dependency. **(Not Mandatory)**
> Note :- nodemon installation is not necessary as it's used to auto-restarts the server when there is any change in main/index.js file instead of manually restart the server.

**6.** Create new file `index.js` inside current directory and voila....! We have configured our `node.js` project so we are good to go to build server-script and run our own node.js local server.

# Bibliography/References
* You can get more details about it by watching this video series/tutorials by The Net Ninja.

> [WebSockets (using Socket.io) Tutorial](https://www.youtube.com/watch?v=vQjiN8Qgs3c&list=PL4cUxeGkcC9i4V-_ZVwLmOusj8YAUhj_9)

* For more details about socket.io and and android-client head on to [Native Socket.IO and Android](https://socket.io/blog/native-socket-io-and-android/) page.