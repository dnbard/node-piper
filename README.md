# Node Piper
NodeJS proxy server

This server will proxy incoming request to another server and then return its response.

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

* Optionaly: you can define filter RegExp with `FILTER` variable. All requests with url that matches the expression is going to be filtered.