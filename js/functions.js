/* PRELOADER */
$(window).on('load', function () {

	$('body').css({
		'overflow': 'hidden',
	});
	//Preloader
	setTimeout(function () {

		$('.preloader').fadeOut(400);

	}, 1000);

});

/*PRELOADER FIX */
$(document).ready(function () {
	setTimeout(function () {

		$('body').addClass('preloaderFix');
	}, 1000);
});


/* MENU SIZE  */
$(document).ready(function () {
	var h = $(window).height();
	if (h > 700) {
		$(".timeWrapper").show();
		var a = h - 245;
		$('#menuContent').css({
			height: a,
		});
	} else {
		$(".timeWrapper").hide();
		var a = h - 155;
		$('#menuContent').css({
			height: a,
		});
	}
});

$(window).resize(function () {
	var h = $(window).height();
	if (h > 700) {
		$(".timeWrapper").show();
		var a = h - 245;
		$('#menuContent').css({
			height: a,
		});
	} else {
		$(".timeWrapper").hide();
		var a = h - 155;
		$('#menuContent').css({
			height: a,
		});
	}
});


/* SIDE BAR TIME FUNCTION */
var datetime = null,
	date = null;
var update = function () {
	date = moment(new Date())
	datetime.html(date.format('LL '));
};
datetime = $('.current-time')
update();
setInterval(update, 60000);
var update = function () {
	date = moment(new Date())
	datetime1.html(date.format('h:mm a'));
};
datetime1 = $('.current-time2')
update();
setInterval(update, 60000);

$(document).ready(function () {

	/* CUSTOM CONTENT SCROLLER */
	(function ($) {

		$(window).load(function () {
			$("#latestActivityContent").mCustomScrollbar({
				theme: "dark-thin",
				autoHideScrollbar: true,
				autoHideScrollbar: true
			});

			$("#mailboxContent").mCustomScrollbar({
				theme: "dark-thin",
				scrollInertia: 300
			});

			$("#mainWrapper").mCustomScrollbar({
				theme: "dark",
				autoHideScrollbar: true,
				autoHideScrollbar: true,
				scrollInertia: 300
			});

			$("#menuContent").mCustomScrollbar({
				theme: "dark-thin",
				autoHideScrollbar: true,
				scrollInertia: 300
			});

		});
	})(jQuery);




	var menu = document.getElementById('menu-toggle'),
		toggled = false;

	menu.addEventListener('click', function () {
		if (!toggled) {
			this.className += " toggled";
			toggled = true;
		} else {
			this.className = this.className.replace(/\b\stoggled\b/, "");
			toggled = false;
		}
	}, false);


	/* MAIN MENU BUTTON FUNCTION */
	$("#menu-toggle").click(function (e) {

		var w = $(window).width();
		if (w < 1024) {
			$("body").toggleClass("mobileSidebar");
			$(this).toggleClass("active");
			$(this).removeClass("activeClick");
		} else {
			$("body").toggleClass("noSidebar");
			$(this).toggleClass("activeClick");
		}
		e.preventDefault();
	});

	$(window).bind("resize", function () {
		if ($(this).width() < 1024) {
			$('body').addClass('bodySmall');
			$("#menu-toggle").addClass("active");
		} else {
			$('body').removeClass('bodySmall mobileSidebar');
			$("#menu-toggle").removeClass("active");
		}
	});

	if ($(this).width() < 1024) {
		$('body').addClass('bodySmall')
	} else {
		$('body').removeClass('bodySmall')
	}


	var userAgent = navigator.userAgent,
		uaCheck = {
			ios: userAgent.match(/(iPhone|iPod|iPad)/),
			ipad: userAgent.match(/(iPad)/),
			iphone: userAgent.match(/(iPhone)/),
			blackberry: userAgent.match(/BlackBerry/),
			android: userAgent.match(/Android/)
		};

	if (uaCheck.ios || uaCheck.blackberry || uaCheck.android) {
		$("#menuIcon").addClass("active");
	}

	/*  MENU */

(function() {
		var menuEl = document.getElementById('ml-menu'),
			mlmenu = new MLMenu(menuEl, {
				// breadcrumbsCtrl : true, // show breadcrumbs
				// initialBreadcrumb : 'all', // initial breadcrumb text
				backCtrl : false, // show back button
				// itemsDelayInterval : 60, // delay between each menu item sliding animation
				onItemClick: loadDummyData // callback: item that doesn´t have a submenu gets clicked - onItemClick([event], [inner HTML of the clicked item])
			});

		// mobile menu toggle
		var openMenuCtrl = document.querySelector('.action--open'),
			closeMenuCtrl = document.querySelector('.action--close');

		openMenuCtrl.addEventListener('click', openMenu);
		closeMenuCtrl.addEventListener('click', closeMenu);

		function openMenu() {
			classie.add(menuEl, 'menu--open');
		}

		function closeMenu() {
			classie.remove(menuEl, 'menu--open');
		}

		// simulate grid content loading
		var gridWrapper = document.querySelector('.content');

		function loadDummyData(ev, itemName) {
			//ev.preventDefault();

			closeMenu();
			gridWrapper.innerHTML = '';
			classie.add(gridWrapper, 'content--loading');
			setTimeout(function() {
				classie.remove(gridWrapper, 'content--loading');
				gridWrapper.innerHTML = '<ul class="products">' + dummyData[itemName] + '<ul>';
			}, 700);
		}
	})();



	var link = window.location.pathname.split('http://91.234.35.26/').pop(-1);
	$('#menu  a[href="' + link + '"]').addClass('actual');



	var actual = $("a.actual").closest("ul");
	if (actual.hasClass("collapse")) {
		actual.addClass("in").parent().addClass("active");;
	}


	/* RESS FOOTER TO BOTTOM FUNCTION */
	function footerToBottom() {
		var browserHeight = $(window).height(),
			footerOuterHeight = $('.fotterWrapper').outerHeight(true),
			mainHeightMarginPaddingBorder = $('.footerfix').outerHeight(true) - $('.footerfix').height();
		$('.footerfix').css({
			'min-height': browserHeight - footerOuterHeight - mainHeightMarginPaddingBorder - 60,
		});
	};
	footerToBottom();
	$(window).resize(function () {
		footerToBottom();
	});


	/* LATEST ACTIVITY SHOW / HIDE FUNCTION HEADER */
	var container = $(".latestActivity");
	$(".latestActivityIcon").click(function () {
		$(".latestActivity").addClass("show");
	});
	$(".closelatestActivity").click(function () {
		$(".latestActivity").removeClass("show");
	});
	$(document).mouseup(function (e) {
		if (container.has(e.target).length === 0) {
			$(".latestActivity").removeClass("show");
		}
	});


	/* MAIL BOX SHOW / HIDE FUNCTION HEADER */
	var container = $(".mailboxShow");
	$(".mailboxIcon").click(function () {
		$(".mailboxShow").addClass("show");
	});
	$(".closeMailbox").click(function () {
		$(".mailboxShow").removeClass("show");
	});
	$(document).mouseup(function (e) {
		if (container.has(e.target).length === 0) {
			$(".mailboxShow").removeClass("show");
		}
	});

	/*REMINDER SHOW / HIDE FUNCTION HEADER */
	var container = $(".reminderShow");
	$(".reminderIcon").click(function () {
		$(".reminderShow").addClass("show");
	});
	$(".closeReminde").click(function () {
		$(".reminderShow").removeClass("show");
	});
	$(document).mouseup(function (e) {
		if (container.has(e.target).length === 0) {
			$(".reminderShow").removeClass("show");
		}
	});



	/*  BUTTONS EFFECT */
	Waves.attach('.float-dark', ['waves-button', 'waves-dark']);
	Waves.attach('.float-button', ['waves-button', 'waves-light']);
	Waves.attach('.float-button-light', ['waves-button', 'waves-float', 'waves-light']);
	Waves.attach('.float-button-dark', ['waves-button', 'waves-float', 'waves-dark']);
	Waves.init();


	/* ANT PANEL FUNCTIONS */
	$(".fullScreen").click(function () {
		$(this).closest('div.panel').toggleClass("panelFull");
	});

	$('.remove').click(function (e) {
		$(this).closest('div.panel').remove();
		e.preventDefault();
	});
	$(".colWhite").click(function () {
		$(this).closest('div.panel-heading').removeClass('colorWhite colorTheme colorPink  colorCyan colorPurpule colorYellow').addClass('colorWhite');
	});
	$(".colTheme").click(function () {
		$(this).closest('div.panel-heading').removeClass('colorWhite colorTheme colorPink  colorCyan colorPurpule colorYellow').addClass('colorTheme');
	});
	$(".colPink").click(function () {
		$(this).closest('div.panel-heading').removeClass('colorWhite colorTheme colorPink  colorCyan colorPurpule colorYellow').addClass('colorPink');
	});
	$(".colCyan").click(function () {
		$(this).closest('div.panel-heading').removeClass('colorWhite colorTheme colorPink  colorCyan colorPurpule colorYellow').addClass('colorCyan');
	});
	$(".colPurpule").click(function () {
		$(this).closest('div.panel-heading').removeClass('colorWhite colorTheme colorPink  colorCyan colorPurpule colorYellow').addClass('colorPurpule');
	});
	$(".colYellow").click(function () {
		$(this).closest('div.panel-heading').removeClass('colorWhite colorTheme colorPink  colorCyan colorPurpule colorYellow').addClass('colorYellow');
	});

	/* SPINNING BUTTONS fotter */
	$('.fab').hover(function () {
		$(this).toggleClass('active');
	});

	$('[data-toggle="tooltip"]').tooltip();

});







/* BLUE COLOR 
$("#header").addClass("colBlue");
$(".badge").addClass("colBlue");
$(".breadcrumb").addClass("breadcrumbColorBlue");
$('.sb-icon-search').css({ "background" : "#1c84c6"	});
*/



/* GREEN COLOR 
$("#header").addClass("colGreen");
$(".badge").addClass("colGreen");
$(".breadcrumb").addClass("breadcrumbColorGreen");
$('.sb-icon-search').css({ "background" : "#00ce74"	});
*/


/* RED COLOR 
$("#header").addClass("colRed");
$(".badge").addClass("colRed");
$(".breadcrumb").addClass("breadcrumbColorRed");
$('.sb-icon-search').css({ "background" : "#ef6262"	});

*/









