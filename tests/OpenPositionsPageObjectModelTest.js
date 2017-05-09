"use strict";

/**
 * This test illustrates the use of the page object model
 */

describe( 'Open Positions Page using Page Object Model', function() {

	var OpenPositionsPage = require( "./../pages/OpenPositionsPage" ),
		QUALITY_ASSURANCE_AUTOMATION_ENGINEER = "QA",
		QUALITY_ASSURANCE_AUTOMATION_ENGINEER_ID = "2017-1958";

	it( 'should be able to find ID 2017-1958', function() {
		OpenPositionsPage.get();
		expect( OpenPositionsPage.searchPosition( QUALITY_ASSURANCE_AUTOMATION_ENGINEER ) ).toBe( QUALITY_ASSURANCE_AUTOMATION_ENGINEER_ID );
	} );
} );