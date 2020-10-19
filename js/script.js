$(document).ready(function(){
	setInterval(function(){
		$(".loading").css("display","none");
	},2000);
	var isOpen = false;
	$("#navbar-dropdown").click(function(e){
		e.preventDefault();
		if(!isOpen){
			$("#navbar").slideDown("slow");
			$("#header").css("background","rgba(19, 18, 18,0.5)");
			isOpen = true;
		}else{
			$("#navbar").slideUp("slow");
			$("#header").css("background","none");
			isOpen=false;
		}
	});
	function landingPageSlide(){
		var countOfCareers = $("#careers div").length;
		var count = 1;
		for(i=2 ; i<=countOfCareers ;i++)
		{
			$("#careers div:nth-child("+i+")").css('display','none');
		};
		$("#careers div:nth-child("+count+") h6").css("marginLeft","-200px;");
		setInterval(function(){
			$("#careers div:nth-child("+count+") h6").animate({
				marginLeft:'+=1500px',
			},2000,function(){
				$("#careers div:nth-child("+count+")").css("display","none");

				$("#careers div:nth-child("+count+") h6").css("margin-left","0px");
				if(count==countOfCareers)
					count = 1;
				else
					count++;
				$("#careers div:nth-child("+count+") h6").css("marginLeft","-200px");
				$("#careers div:nth-child("+count+")").css("display","block");
				$("#careers div:nth-child("+count+") h6").animate({
					marginLeft:"+=200px"
				},650);
			});
		},5000)
	}
	landingPageSlide();
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
});