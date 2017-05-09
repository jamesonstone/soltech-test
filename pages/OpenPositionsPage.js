"use strict";

/**
 * This page object covers the Open PositionsPage
 *
 */

var OpenPositionsPage = {
	/**
	 * gets the Open Positions Page
	 */
	get : function() {
		browser.driver.get( 'https://careers-soltech.icims.com/jobs/search?hashed=-435773336' );
	},

	/**
	 * Click search button
	 */
	clickSearchButton : function() {
		browser.driver.findElement( by.css( '#jsb_form_submit_i' ) ).click();
	},

	/**
	 * Sets k
	 * @param keyword searchable text
	 */
	setSearchKeyword : function( keyword ) {
		browser.driver.findElement( by.css( '#jsb_f_keywords_i' ) ).sendKeys( keyword );
	},

	/**
	 * Searches for a position by key term
	 * @param position keyword to be searched
	 * @returns first search result ID
	 */
	searchPosition : function( position ) {
		browser.driver.switchTo().frame('icims_content_iframe');
		this.setSearchKeyword( position );
		this.clickSearchButton();
		return browser.driver.findElement( by.xpath( '/html/body/div[2]/table/tbody/tr[1]/td[2]')).getText().then( function (id) {
			console.log("QUALITY ASSURANCE AUTOMATION ENGINEER ID: " + id);
			return id;
		});
	}
};

module.exports = OpenPositionsPage;