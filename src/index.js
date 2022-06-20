function logger(fn) {
	const func = fn;
	fn = function (...args) {
		console.log(`Arguments are ${JSON.stringify(args)}`);
		func(...args);
	};
	return fn;
}
//The logger has been implemented in the class as shown below.
class User {
	@logger
	getUser(id) {
		//Method implementation
	}

	@logger
	saveUser(user) {
		//Method implementation
	}
}
let user = new User();
user.getUser(1);
