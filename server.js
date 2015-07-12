var request = require('request'),
    express = require('express'),
    apiUrl = process.env.TARGET_URL.trim(),
    port = process.env.PORT || 9000,
    filterString = process.env.FILTER,
    filter;

if (typeof apiUrl !== 'string' || apiUrl.length === 0){
    throw new Error('Env variable URL must be specified');
}

if (filterString){
    filter = new RegExp(filterString);
    console.log('Filter - %s', filterString);
}

function endpointProxy(req, res){
    var url = apiUrl + req.originalUrl;

    if (filter.test(url)){
        console.log('Blocked - %s', url);
        return res.status(500).send();
    }

    console.log('Sent - %s', url);
    return req.pipe(request(url)).pipe(res);
}

var app = express();
app.listen(port, function () {
    app.use(endpointProxy);
});
