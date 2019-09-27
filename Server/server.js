/*
  1. body-parser extract the entire body portion of an incoming
  request stream and exposes it on req.body
  2. Cross-origin resource sharing (CORS) allows AJAX requests
  to skip the Same-origin policy and access resources from remote hosts.
 */
const express = require('express'),

bodyParser = require('body-parser'),
app = express(),
multer = require('multer'),
fs = require('fs');
https = require('https'),
http = require('http'),
cors = require('cors'),
os = require('os'),
ifaces = os.networkInterfaces(),


app.use(bodyParser.urlencoded({extended: true}));

app.options('*', cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested- With, Content-Type, Accept");
  next();
});

/* Set static files */
app.use(express.static(__dirname + '/../Client/assets/'));

var path = require('path');

app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.use(bodyParser.json());


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, Date.now() + '-'+file.originalname);
  }
})

var upload = multer({ storage: storage }).single('myFile');


// Public Self-Signed Certificates for HTTPS connection
var privateKey = fs.readFileSync('certificates/key.pem', 'utf8');
var certificate = fs.readFileSync('certificates/cert.pem', 'utf8');
var credentials = { key: privateKey, cert: certificate };

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);


/**
 *  Show in the console the URL access for other devices in the network
 */
Object.keys(ifaces).forEach(function (ifname) {
    var alias = 0;

    ifaces[ifname].forEach(function (iface) {
        if ('IPv4' !== iface.family || iface.internal !== false) {
            // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
            return;
        }

        if (alias >= 1) {
            console.log("Multiple ipv4 addreses were found ... ");
            // this single interface has multiple ipv4 addresses
            console.log(ifname + ':' + alias, "https://" + iface.address + ":9002");
        } else {
            // this interface has only one ipv4 adress
            console.log("");
            console.log("");
            console.log("");
            console.log(ifname, "https://" + iface.address + ":9002");
        }

        ++alias;
    });
});

// End of Show in the console the URL access for other devices in the network

// server's listening port
var LANAccess = "0.0.0.0";

httpsServer.listen(9002, LANAccess, function () {

    console.log("\n*****");
    console.log("Server is listening...");
    console.log("*****\n\n\n");

});


/* Default root file */
app.get('/',function(req,res){

  // res.send('Hello World');

  res.sendFile(path.resolve(__dirname + '/../Client/index.html'));

});
