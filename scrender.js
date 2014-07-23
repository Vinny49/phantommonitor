/*
phantomjs scrender.js a810-bisweb.nyc.gov/bisweb/bispi00.jsp & phantomjs scrender.js https://hpdonline.hpdnyc.org/HPDonline/provide_address.aspx & phantomjs scrender.js yahoo.com


*/
var	page = require('webpage').create(),
	system = require('system'),
	t, address;

t = Date.now();

function checkProtocol(){
	// checks a string to see if a protocol is specified.  Should use regex.
}

function saveRender(address) {
	page.render(address + '.png');
	return true;
}

function cdnUpload() {
	// uploads files from saveRender to a cdn like s3 or cloudfiles
}

function save() {
	// saves data to mongodb
}

function checkSpeed(status) {
	if (status !== 'success'){
		console.log("Failed");
	} else {
		return '{load_time_msec:' + (Date.now()-t) + '}';
	}

}

if (system.args.length === 1) {
	console.log("Usage: checkspeed.js <some url>");
	phantom.exit();
}

address = system.args[1];

page.open('http://'+address,function(status,t){
	saveRender(address);
	console.log( checkSpeed(status,t) );
	phantom.exit();	 // why is phantom.exit() here instead of at the end of the script?
});

