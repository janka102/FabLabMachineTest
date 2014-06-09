var connect = require('connect'),
    http = require('http'),
    port = process.env.PORT || 3000;


var app = connect()
    //.use(connect.logger('dev'))
    .use(connect.compress())
    .use(connect.static('public'));

http.createServer(app).listen(port);
console.log('Fab Lab started on port', port);