# Node Piper
NodeJS proxy server

This server will proxy all incoming requests to another server and then return its responses.

## How to run

* Clone the code
```
git clone https://github.com/dnbard/node-piper.git
cd node-piper
```

* Install dependencies
```
npm install
```

* Specify the target server url and run proxy server
```
TARGT_URL=%TARGET_URL% node server.js
```
` %TARGET_URL% ` - path to another server. ` %TARGET_URL% ` should not have ending backslash!

In example:
```
TARGET_URL=https://api.example.com node server.js
```