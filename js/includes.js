
$(document).ready(function(){
	
	/*$('ul.cc_playlist_tabs li').on('click',function(){
		$(this).siblings('li').removeClass('active');
		$(this).addClass('active');
		$('.cc_items_container').siblings().removeClass('active');
		$('#'+$(this).attr('name')).addClass('active');
	});*/
	
	$('.cc_current_country').click(function(){
		$('ul.cc_listed_countries').slideToggle();
	});	
	$('.cc_listed_countries li').click(function(){
		var countryName =  jQuery(this).html();
		$('.cc_current_country').html(countryName);
		$('.cc_listed_countries').slideToggle()
	});	
	
	/*$('.cc_ringtone_download').on('click', function(){
		location.href = "ringback_tones_thank_you.html"
	});
	
	$('.cc_song_download').on('click', function(){
		location.href = "playlist_thank_you.html"
	});
	
	$('.cc_wallpaper_download').on('click', function(){
		location.href = "wallpaper_thank_you.html"
	});*/
	
	var myCirclePlayer = new CirclePlayer("#jquery_jplayer_1",
	{
		mp3: "media/Miaow-07-Bubble.mp3",
		oga: "media/Miaow-07-Bubble.ogg",
		m4a: "media/Miaow-07-Bubble.m4a"
	}, {
		cssSelectorAncestor: "#cp_container_1"
	});
	
});