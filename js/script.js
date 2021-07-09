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

	$("#education-link").click(function(e){
		e.preventDefault();
		profile_nav("#education-link" , "#education" , e);
	});

	$("#skills-link").click(function(e){
		e.preventDefault();
		profile_nav("#skills-link" , "#skills" , e);
	});

	$("#about-me-nav").click(function(e){
		profile_nav("#about-me-link" , "#about-me" , e);
	});

	$("#education-nav").click(function(e){
		profile_nav("#education-link" , "#education" , e);
	});

	$("#skills-nav").click(function(e){
		profile_nav("#skills-link" , "#skills" , e);
	});
	
	$("#about-me-nav-footer").click(function(e){
		profile_nav("#about-me-link" , "#about-me" , e);
	});

	$("#education-nav-footer").click(function(e){
		profile_nav("#education-link" , "#education" , e);
	});

	$("#skills-nav-footer").click(function(e){
		profile_nav("#skills-link" , "#skills" , e);
	});




	/*$("#education-link").click(function(e){
		e.preventDefault();
		$("#about-me-link").parent().removeClass("active");
		$("#education-link").parent().addClass("active");
		

		$("#about-me").fadeOut("slow",function(){
			$("#education").fadeIn("slow");
		});

	});*/




	/*
	function aboutMeFadeIn(){
		$("#about-me-link").parent().addClass("active");
		$("#experience-link").parent().removeClass("active");

		$("#experience").fadeOut("slow",function(){
			$("#about-me").fadeIn("slow");
		});
	};
	function experienceFadeIn(){
		$("#experience-link").parent().addClass("active");
		$("#about-me-link").parent().removeClass("active");
		$("#about-me").fadeOut("slow",function(){
			$("#experience").fadeIn("slow",function(){
				$(".precentage-slide .slide div").each(function(){
					$(this).css("width",$(this).attr("precentage"));
				});
			});
		});
	};
	$(".about-nav").click(function(e){
		if($("#about-me").css("display")=="none"){
			aboutMeFadeIn();
		}
	});
	$(".experience-nav").click(function(e){
		if($("#experience").css("display")=="none"){
			experienceFadeIn();
		}
	});
	$("#about-me-link").click(function(e){
		e.preventDefault();
		aboutMeFadeIn();
	});
	$("#experience-link").click(function(e){
		e.preventDefault();
		experienceFadeIn();
	});
	function skillsCarousel()
	{
		var numberOfslides = $(".skills-container .skills-container-group").length;
		var openSlide = 1;
		$(window).scroll(function() {
			if($(window).scrollTop()>660){
				$(".skills-container .skills-container-group:nth-child("+openSlide+") .skill-card .slide div").each(function(){
				 	$(this).css("width",$(this).attr("precentage"));
				});
			}
		});
		if($(window).scrollTop()>1000){
			$(".skills-container .skills-container-group:nth-child("+openSlide+") .skill-card .slide div").each(function(){
			 	$(this).css("width",$(this).attr("precentage"));
			});
		}
		$(".next").click(function(e){
			if(openSlide!=numberOfslides){
				$(".skills-container .skills-container-group:nth-child("+openSlide+")").animate({
					marginLeft:"-90%"
				},{ 
					duration: 1000, 
					queue: false ,
					easing: "swing" ,
					complete: function(){
						$(".skills-container .skills-container-group:nth-child("+openSlide+") .skill-card .slide div").each(function(){
						 	$(this).css("width",$(this).attr("precentage"));
						 });
					}
				});

				openSlide++;
			}else{
				e.preventDefault();
			}
		});
		$(".back").click(function(e){
			if(openSlide!=1)
			{
				openSlide--;
				$(".skills-container .skills-container-group:nth-child("+openSlide+")").animate({
					marginLeft:"5%"
				},{
				 	duration: 1000,
				  	queue: false ,
				  	easing: "swing",
				  	complete: function(){
						$(".skills-container .skills-container-group:nth-child("+openSlide+") .skill-card .slide div").each(function(){
						 	$(this).css("width",$(this).attr("precentage"));
						 });
					}
				});
			}else{
				e.preventDefault();
			}
		});
	}
	skillsCarousel();
	*/
});