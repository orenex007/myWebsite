$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$(".navbar").addClass("sticky");
		}
		else{
			$(".navbar").removeClass("sticky");
		}
		if(this.scrollY > 500){
			$(".scroll-up-btn").addClass("show");
		}
		else{
			$(".scroll-up-btn").removeClass("show")
		}
	});

	//slide-up script
	$(".scroll-up-btn").click(function(){
		$("html").animate({scrollTop: 0});
	});
	// toogle menu/navbar script 
	$(".menu-btn").click(function(){
		$(".navbar .menu").toggleClass("active");
		$(".menu-btn i").toggleClass("active");
	});
	//typing animation script(from website of cdnjs)
	var typed = new Typed(".typing-1", {
		strings: ["Developer", "Freelancer"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});	
	var typed = new Typed(".typing-2", {
		strings: ["Developer", "Freelancer"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});
});


/*to APP!!! app.use(express.static('/public'));*** https://stackoverflow.com/questions/49635253/image-not-found-in-webpage-served-with-node-js-and-express   https://www.youtube.com/watch?v=BNfmCdec1es*/