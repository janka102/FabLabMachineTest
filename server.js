var connect = require('connect');

connect(
	//connect.logger('dev'),
	connect.compress(),
	connect.static(__dirname + '/public')
).listen(3000);

