"use strict";

describe( 'Open Positions Page', function() {

	var QUALITY_ASSURANCE_AUTOMATION_ENGINEER = "QA",
		QUALITY_ASSURANCE_AUTOMATION_ENGINEER_ID = "2017-1958",
		width = 1814,
		height = 974;

	it( 'should be able to find ID 2017-1958', function() {
		browser.manage().window().setSize( width, height );
		browser.driver.get( 'http://soltech.net' );
		browser.driver.findElement( by.xpath( '//*[@id="navbar"]/div/ul/li[5]/a' ) ).click();
		browser.sleep( 500 );
		browser.driver.findElement( by.xpath( '//*[@id="navbar"]/div/ul/li[5]/ul/li[2]/a' ) ).click();
		browser.sleep( 1000 );
		browser.driver.getAllWindowHandles().then( function( handles ) {
			browser.driver.switchTo().window( handles[ 1 ] );
			browser.driver.switchTo().frame( 'icims_content_iframe' );
			browser.driver.findElement( by.xpath( '//*[@id="jsb_f_keywords_i"]' ) ).sendKeys( QUALITY_ASSURANCE_AUTOMATION_ENGINEER );
			browser.driver.findElement( by.xpath( '//*[@id="jsb_form_submit_i"]' ) ).click();
			browser.driver.findElement( by.xpath( '/html/body/div[2]/table/tbody/tr[1]/td[2]' ) ).getText().then( function( id ) {
				console.log( "QUALITY ASSURANCE AUTOMATION ENGINEER ID: " + id );
			} );
			expect( browser.driver.findElement( by.xpath( '/html/body/div[2]/table/tbody/tr[1]/td[2]' ) ).getText() ).toBe( QUALITY_ASSURANCE_AUTOMATION_ENGINEER_ID );
		} );
	} );
} );


//using xpath and css
//iframe solution and scope
//take out sleeps
//url in position test keeps state -- need to refresh
