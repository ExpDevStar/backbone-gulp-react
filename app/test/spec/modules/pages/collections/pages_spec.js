describe( "Pages", function() {
	var pages = null;

	beforeEach( function( done ) {
		require( [ 
			"js/include/modules/pages/collections/pages",
			"config/fixtures"
			],
			function( Pages, Fixtures ) {

			pages = new Pages( Fixtures.pages );

			done();
		} );
	} );

	it( "returns page by slug", function() {
		var gallery_page = pages.findWhere( { slug : "gallery" } );

		expect( gallery_page.get( "title" ) ).toBe( "Gallery Page" );
	} );
	
	it( "returns home page if empty slug is requested", function() {
		var default_page = pages.findWhere( { slug : "" } );

		expect( default_page.get( "title" ) ).toBe( "Home Page" );
	} );

	afterEach( function() {
		pages = null;
	} );
} );
