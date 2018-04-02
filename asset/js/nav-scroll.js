$(function(){
	var headermenu = $('.header-menu');
	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 50){
			headermenu.removeClass('header-menu-scroll');
			headermenu.removeClass('navigasi');
			headermenu.removeClass('navigasi2');
		} else {
			headermenu.addClass('header-menu-scroll');
			headermenu.addClass('navigasi');
			headermenu.addClass('navigasi2');
		}
	});
});