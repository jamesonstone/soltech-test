"use strict";

var height = 974;
var width = 1814;

exports.config = {

	OnPrepare : function() {
		global.ec = protractor.ExpectedConditions;

		// ignore for non-angular apps
		browser.driver.ignoreSynchronization = true;

		//width: 1814 height: 974
		// browser.manage().window().setSize(width, height);
		browser.driver.manage().window().maximize();
	},

	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: [ './tests/*.js' ]
};