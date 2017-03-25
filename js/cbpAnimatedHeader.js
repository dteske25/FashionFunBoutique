/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-default' ),
		didScroll = false,
		changeHeaderOn = 150;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
			$("#navbarLogo").empty().append('<img id="headerLogo" src="img/logos/white-logo.png"/>');
		}
		else {
			classie.remove( header, 'navbar-shrink' );
			$("#navbarLogo").empty()
				.append('<img id="headerLogoExpanded" class="hidden-xs" src="img/logos/logo.png"/>')
				.append('<img id="headerLogo" class="hidden-sm hidden-md hidden-lg" src="img/logos/white-logo.png"/>');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();
	scrollPage();
})();