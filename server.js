var connect = require('connect');

connect(
	//connect.logger('dev'),
	connect.static(__dirname + '/public')
).listen(3000);

