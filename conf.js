"use strict";

var height = 974;
var width = 1814;

exports.config = {

	OnPrepare : function() {
		//width: 1814 height: 974
		browser.manage().window().setSize(width, height);
	},

	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: [ './tests/*.js' ]
};