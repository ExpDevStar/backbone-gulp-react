xdescribe( "MenuItemView", function() {
	var MenuItemView = null;
	var MenuItem = null;

	beforeEach( function( done ) {
		require( [
			"js/include/navigation/views/menu_item",
			"js/include/navigation/models/menu_item"
			],
			function( view, model ) {
			MenuItemView = view;
			MenuItem = model;

			done();
		} );
	} );

	it( "contains link representation of a model", function() {
		var menu_item = new MenuItem( {
			title : "Contact",
			slug : "contact"
		} );

		var menu_item_view = new MenuItemView( {
			model : menu_item
		} );

		menu_item_view.render();

		var $model_link = menu_item_view.$el.find( "a" );

		expect( $model_link.length ).toBe( 1 );
		expect( menu_item_view.$el.html() ).toContain( menu_item.get( "title" ) );
		expect( $model_link.attr( "href" ) ).toBe( menu_item.get( "slug" ) );
	} );

	it( "represents li element", function() {
		var menu_item_view = new MenuItemView( new MenuItem( {
			title : "Home",
			slug : "/"
		} ) );

		expect( menu_item_view.tagName ).toBe( "li" );
	} );

	afterEach( function() {
		MenuItemView = null;
		MenuItem = null;
	} );
} );
