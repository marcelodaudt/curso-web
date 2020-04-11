		$(document).ready(function(){

			$("#logotipo").on("mouseover",function(){

				//console.log("Passou o mouse no logotipo!");
				//$("#banner h1").css({"color":"red", "font-size":"12em", "transition":"1s"});
				
				$("#banner h1").addClass("efeito");

			}).on("mouseout", function(){

				$("#banner h1").removeClass("efeito");

			});

			$("#input-search").on("focus", function(){

				$("li.search").addClass("ativo");

			}).on("blur", function(){

				$("li.search").removeClass("ativo");				
				
			});

			$(".thumbnails").owlCarousel({

				items: 4

			});

			var owl = $(".thumbnails").data('owlCarousel');

		  	$('#btn-news-prev').on("click", function(){

		  		owl.prev();

		  	});

		  	$('#btn-news-next').on("click", function(){

		  		owl.next();

		  	});

		  	$("#page-up").on("click", function(event){

		  		$("body").animate({
		  			scrollTop:0
		  		}, 1000);

		  		event.preventDefault();

		  	});

		  	$("#btn-bars").on("click", function(){

		  		$("header").toggleClass("open-menu");
		  		
		  	});

		    $("#menu-mobile-mask, .btn-close").on("click", function(){

		      $("header").removeClass("open-menu");


		    });

		    $("#btn-search").on("click", function(){

		      $("header").toggleClass("open-search");
		      $("#input-search-mobile").focus();

		    });

			/*
			$(".thumbnails").owlCarousel({
				loop:true,
				margin:10,
				nav:true,
				navText: ["Anterior","Próximo"],
				responsive: {
					0 : {
						items: 1
					},
					480 : {
						items: 3
					},
					1000 : {
						items: 4
					}
				}
			});
			*/

		});