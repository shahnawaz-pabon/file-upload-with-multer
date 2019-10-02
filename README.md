<div align="center">
    <img src="https://img.icons8.com/cute-clipart/128/000000/cloud-checked.png">
    <h1>
      Uploading files with Multer in Node
    </h1>
</div>

## [Node](https://nodejs.org) and [NPM](https://www.npmjs.com/) versions I have used
> [NPM](https://www.npmjs.com/) version `v6.9.0` and [Node](https://nodejs.org) version `v10.16.3`

### Table of Contents
* [Technologies](#technologies)
* [Installation](#installation)

## Technologies

#### Technologies I have used are as follows
* [Typed.js](https://github.com/mattboldt/typed.js/)
* [Multer](https://www.npmjs.com/package/multer)
* [FilePond](https://github.com/pqina/filepond)

## 🛠️ Installation

#### It requires [Node.js](https://nodejs.org) to run.

#### Install the dependencies and start the server.

```bash
$ git clone https://github.com/PabonSEC/File-Upload-With-Multer.git
$ cd File-Upload-With-Multer/Server
$ npm i
$ node server.js
```

#### Open the browser and type https://localhost:9002

#### Server is running with https now, if you want it run with http just find out below section in the `server.js` file

```javascript
httpsServer.listen(9002, LANAccess, function () {

    console.log("\n*****");
    console.log("Server is listening...");
    console.log("*****\n\n\n");

});
```

#### Replace `httpsServer` with `httpServer` and run `node server.js` this command in the console.
