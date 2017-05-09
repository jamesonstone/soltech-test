"use strict";

describe( 'Open Positions Page', function() {

	var OpenPositionsPage = require( "./../pages/OpenPositionsPage" ),
		QUALITY_ASSURANCE_AUTOMATION_ENGINEER = "QA",
		QUALITY_ASSURANCE_AUTOMATION_ENGINEER_ID = "2017-1958";

	it( 'should be able to find ID 2017-1958', function() {
		// browser.driver.get( 'http://soltech.net' );
		// browser.driver.findElement( by.xpath( '//*[@id="navbar"]/a/span[1]' ) ).click();
		// browser.sleep(1000);
		// browser.driver.findElement( by.xpath( '//*[@id="transformedObject"]/div/div/div[3]/ul[2]/li[3]/a' ) ).click();
		// browser.sleep(1000);
		browser.driver.get( 'https://careers-soltech.icims.com/jobs/search?hashed=-435773336' );
		browser.driver.switchTo().frame( 'icims_content_iframe' );
		browser.driver.findElement( by.css( '#jsb_f_keywords_i' ) ).sendKeys( QUALITY_ASSURANCE_AUTOMATION_ENGINEER );
		browser.driver.findElement( by.css( '#jsb_form_submit_i' ) ).click();
		browser.driver.findElement( by.xpath( '/html/body/div[2]/table/tbody/tr[1]/td[2]' ) ).getText().then( function( id ) {
			console.log( "QUALITY ASSURANCE AUTOMATION ENGINEER ID: " + id );
		} );
		expect( browser.driver.findElement( by.xpath( '/html/body/div[2]/table/tbody/tr[1]/td[2]' ) ).getText() ).toBe( QUALITY_ASSURANCE_AUTOMATION_ENGINEER_ID );
	} );
} );


//mixing xpath and css
//window size not respected
//iframe solution and scope
//resettings state between tests
//take out sleeps
//url in position test keeps state -- need to refresh
