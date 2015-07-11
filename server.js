var request = require('request'),
    express = require('express'),
    apiUrl = process.env.URL.trim(),
    port = process.env.PORT || 9000;

if (typeof apiUrl !== 'string' || apiUrl.length === 0){
    throw new Error('Env variable URL must be specified');
}

function endpointProxy(req, res){
    var url = apiUrl + req.originalUrl;
    console.log(url);
    req.pipe(request(url)).pipe(res);
}

var app = express();
app.listen(port, function () {
    app.use(endpointProxy);
});
