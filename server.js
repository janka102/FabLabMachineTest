var connect = require('connect'),
    port = process.env.PORT || 3000;

connect(
	//connect.logger('dev'),
	connect.compress(),
	connect.static(__dirname + '/public')
).listen(port);

