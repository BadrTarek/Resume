$(document).ready(function(){
	setInterval(function(){
		$(".loading").removeClass("d-flex");		
		$(".loading").addClass("d-none");
	},2000);
	var profile_open = "#about-me";
	var active_link = "#about-me-link";
	function profile_nav(nav_link , profile , e){
		//e.preventDefault();
		if(profile_open != profile)
		{
			$(nav_link).parent().addClass("active");
			$(active_link).parent().removeClass("active");
			$(profile_open).fadeOut("slow",function(){
				$(profile).fadeIn("slow");
			});
			profile_open = profile;
			active_link = nav_link;
		}
	}
	$("#about-me-link").click(function(e){
		e.preventDefault();
		profile_nav("#about-me-link" , "#about-me" , e);
	});

	// $("#education-link").click(function(e){
	// 	e.preventDefault();
	// 	profile_nav("#education-link" , "#education" , e);
	// });

	$("#skills-link").click(function(e){
		e.preventDefault();
		profile_nav("#skills-link" , "#skills" , e);
	});

	$("#about-me-nav").click(function(e){
		profile_nav("#about-me-link" , "#about-me" , e);
	});

	// $("#education-nav").click(function(e){
	// 	profile_nav("#education-link" , "#education" , e);
	// });

	$("#skills-nav").click(function(e){
		profile_nav("#skills-link" , "#skills" , e);
	});
	
	$("#about-me-nav-footer").click(function(e){
		profile_nav("#about-me-link" , "#about-me" , e);
	});

	// $("#education-nav-footer").click(function(e){
	// 	profile_nav("#education-link" , "#education" , e);
	// });

	$("#skills-nav-footer").click(function(e){
		profile_nav("#skills-link" , "#skills" , e);
	});

});