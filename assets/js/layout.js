$(function(){

	document.getElementById("header").innerHTML =
	"<header id='js-header' class='u-header u-header--static u-header--toggle' data-header-fix-moment='500' data-header-fix-effect='slide'><div class='u-header__section u-header__section--light g-bg-white g-transition-0_3 g-py-10' data-header-fix-moment-exclude='g-bg-white g-py-10' data-header-fix-moment-classes='g-bg-white-opacity-0_9 u-shadow-v18 g-py-3'><div class='container'><div class='col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding'><div class='col-lg-8 col-md-8 col-sm-6 col-xs-12 header-logo no-padding'> <a href='index.html' class='navbar-brand'> <img src='assets/img/logo/logo-1.png' alt='Image Description'> </a></div><div class='col-lg-4 col-md-4 col-sm-6 col-xs-12 header-menu'><div class='d-inline-block hidden-xs-down g-pos-rel g-valign-middle g-pl-30 g-pl-0--lg search-button'><form class='navbar-form -search ' role='search'><div class='input-group'></div></div></form></div></div></div></div><div class='clearfix'></div> <nav class='js-mega-menu navbar navbar-toggleable-md nav-main-menu'><div class='container'><div class='col-lg-12 col-md-12 col-sm-12 col-xs-12 nav-toggle-menu no-padding'> <button class='navbar-toggler navbar-toggler-right btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-right-0 nav-btn' type='button' aria-label='Toggle navigation' aria-expanded='false' aria-controls='navBar' data-toggle='collapse' data-target='#navBar'> <span class='hamburger hamburger--slider'> <span class='hamburger-box'> <span class='hamburger-inner'></span> </span> </span> </button><div class='collapse navbar-collapse align-items-center flex-sm-row g-pt-10 g-pt-5--lg g-mr-40--lg ' id='navBar'><ul class='navbar-nav nav-menu text-uppercase g-font-weight-600'><li class='nav-item hs-has-sub-menu g-mx-10--lg g-mx-15--xl main-menu-list'> <a class='nav-link g-py-7 g-px-0 menu-nav-title' href='index.html' aria-haspopup='true' aria-expanded='false' aria-controls='nav-submenu--home'>Home </a></li><li class='hs-has-mega-menu nav-item g-mx-10--lg g-mx-15--xl main-menu-list'> <a class='nav-link g-py-7 g-px-0 menu-nav-title' href='about.html' aria-haspopup='true' aria-expanded='false'>About Us </a></li><li class='hs-has-mega-menu nav-item g-mx-10--lg g-mx-15--xl main-menu-list hidden-lg-up'> <a class='nav-link g-py-7 g-px-0 menu-nav-title' href='facilities.html' aria-haspopup='true' aria-expanded='false'>Facilities</a></li><li class='hs-has-mega-menu nav-item g-mx-10--lg g-mx-15--xl main-menu-list btn-group hidden-md-down'> <a class='nav-link g-py-7 g-px-0 menu-nav-title' href='facilities.html' aria-haspopup='true' aria-expanded='true'>Facilities</a> <button type='button' class='btn btn-transperant dropdown-toggle dropdown-toggle-split nav-link' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'> <span class='sr-only'>Toggle Dropdown</span> </button><ul class='dropdown-menu' id='facilities-dropdown-menu'></ul></li><li class='hs-has-mega-menu nav-item g-mx-10--lg g-mx-15--xl main-menu-list hidden-lg-up'> <a class='nav-link g-py-7 g-px-0 menu-nav-title' href='commercial-courses.html' aria-haspopup='true' aria-expanded='false'>Commercial Courses </a></li><li class='hs-has-mega-menu nav-item g-mx-10--lg g-mx-15--xl main-menu-list btn-group hidden-md-down'> <a class='nav-link g-py-7 g-px-0 menu-nav-title' href='commercial-courses.html' aria-haspopup='true' aria-expanded='true'>Commercial Courses </a> <button type='button' class='btn btn-transperant dropdown-toggle dropdown-toggle-split nav-link' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'> <span class='sr-only'>Toggle Dropdown</span> </button><ul class='dropdown-menu' id='dropdown-menu'></ul></li><li class='hs-has-mega-menu nav-item g-mx-10--lg g-mx-15--xl main-menu-list'> <a class='nav-link g-py-7 g-px-0 menu-nav-title' href='contact-us.html' aria-haspopup='true' aria-expanded='false'>Contact us </a></li><li class='hs-has-mega-menu nav-item g-mx-10--lg g-mx-15--xl main-menu-list'> <a class='nav-link g-py-7 g-px-0 menu-nav-title' href='cart.html' aria-haspopup='true' aria-expanded='false'><i class='fa fa-shopping-cart' aria-hidden='true'></i> Cart </a></li></ul></div></div></div> </nav></div> </header>";

	document.getElementById("footer").innerHTML ="<div class='scroll-up'><a href='#' class='scrollToTop'><i class='fa fa-arrow-up' aria-hidden='true'></i></a></div><div class='g-bg-black-opacity-0_9 g-color-white-opacity-0_8 g-py-60'><div class='container'><div class='row'><div class='col-lg-3 col-md-6 g-mb-40 g-mb-0--lg'> <a class='d-block g-mb-20' href='index.html'> <img src='assets/img/logo/logo-1.png' alt='Image Description'> </a><p>The National Maritime College of Ireland (NMCI) is the first third level college in the country to be built under the Government’s Public-Private Partnership scheme.</p><p class='mb-0'>In this case the public partners are the Cork Institute of Technology (CIT) and the Irish Naval Service (INS) and the private partner is Focus Education</p></div><div class='col-lg-3 col-md-6 g-mb-40 g-mb-0--lg'><div class='u-heading-v3-1 g-brd-white-opacity-0_3 g-mb-25'><h2 class='u-heading-v3__title h6 text-uppercase g-brd-primary'>Commercial Courses</h2></div><ul class='list-unstyled g-mt-minus-10 mb-0' id='footerCategoryLinks'></ul></div><div class='col-lg-3 col-md-6 g-mb-40 g-mb-0--lg'><div class='u-heading-v3-1 g-brd-white-opacity-0_3 g-mb-25'><h2 class='u-heading-v3__title h6 text-uppercase g-brd-primary'>Useful Links</h2></div> <nav class='text-uppercase1'><ul class='list-unstyled g-mt-minus-10 mb-0'><li class='g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10'><h4 class='h6 g-pr-20 mb-0'> <a class='g-color-white-opacity-0_8 g-color-white--hover' href='about.html'>About Us</a></h4></li><li class='g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10'><h4 class='h6 g-pr-20 mb-0'> <a class='g-color-white-opacity-0_8 g-color-white--hover' href='facilities.html'>Facilities</a></h4></li><li class='g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10'><h4 class='h6 g-pr-20 mb-0'> <a class='g-color-white-opacity-0_8 g-color-white--hover' href='commercial-courses.html'>Commercial Courses</a></h4></li><li class='g-pos-rel g-py-10'><h4 class='h6 g-pr-20 mb-0'> <a class='g-color-white-opacity-0_8 g-color-white--hover' href='contact-us.html'>Contact Us</a></h4></li></ul> </nav></div><div class='col-lg-3 col-md-6'><div class='u-heading-v3-1 g-brd-white-opacity-0_3 g-mb-25'><h2 class='u-heading-v3__title h6 text-uppercase g-brd-primary'>Our Contacts</h2></div><address class='g-bg-no-repeat g-line-height-2 g-mt-minus-4' style='background-image: url(assets/img/maps/map2.png);'> <br>Phone:+353 (0)21 433 5601 ,<br>+353 (0)21 433 5600 <br>NMCIS/SNO/GTSS: +353 (0)21 433 5609 <br>Email: <a href='mailto:info@htmlstream.com' class='footermail'>E:reception@nmci.ie </a> </address></div></div></div></div> <footer class='g-bg-gray-dark-v1 g-color-white-opacity-0_8 g-py-20'><div class='container'><div class='row'><div class='col-md-8 text-center text-md-left g-mb-15 g-mb-0--md'><div class='d-lg-flex'> <small class='d-block g-font-size-default g-mr-10 g-mb-10 g-mb-0--md'>2017 © All Rights Reserved.</small><ul class='u-list-inline'><li class='list-inline-item'> <a href='pixehub.com'>Privacy Policy</a></li><li class='list-inline-item'> <span>|</span></li><li class='list-inline-item'> <a href='pixehub.com'>pixehub</a></li></ul></div></div><div class='col-md-4 align-self-center'><ul class='list-inline text-center text-md-right mb-0'><li class='list-inline-item g-mx-10' data-toggle='tooltip' data-placement='top' title='Facebook'> <a href='#' class='g-color-white-opacity-0_5 g-color-white--hover'> <i class='fa fa-facebook'></i> </a></li><li class='list-inline-item g-mx-10' data-toggle='tooltip' data-placement='top' title='Skype'> <a href='#' class='g-color-white-opacity-0_5 g-color-white--hover'> <i class='fa fa-skype'></i> </a></li><li class='list-inline-item g-mx-10' data-toggle='tooltip' data-placement='top' title='Linkedin'> <a href='#' class='g-color-white-opacity-0_5 g-color-white--hover'> <i class='fa fa-linkedin'></i> </a></li><li class='list-inline-item g-mx-10' data-toggle='tooltip' data-placement='top' title='Pinterest'> <a href='#' class='g-color-white-opacity-0_5 g-color-white--hover'> <i class='fa fa-pinterest'></i> </a></li><li class='list-inline-item g-mx-10' data-toggle='tooltip' data-placement='top' title='Twitter'> <a href='#' class='g-color-white-opacity-0_5 g-color-white--hover'> <i class='fa fa-twitter'></i> </a></li><li class='list-inline-item g-mx-10' data-toggle='tooltip' data-placement='top' title='Dribbble'> <a href='#' class='g-color-white-opacity-0_5 g-color-white--hover'> <i class='fa fa-dribbble'></i> </a></li></ul></div></div></div> </footer>";

	});
	$(document).ready(function () {
	    var url = window.location;

	    $('header nav ul li a[href="'+ url +'"]').parent().addClass('active');

	    $('header nav ul li a').filter(function() {
	         return this.href == url;
	    }).parent().addClass('active');

			$( "header nav.dropdown-menu li a" ).on("mouseover", function () {
			   alert(2525);

			});

	});
