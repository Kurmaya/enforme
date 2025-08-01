const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)")
const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")


gsap.set(photos, {yPercent:-100,opacity:0.5})

const allPhotos = gsap.utils.toArray(".desktopPhoto")


// create
let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(min-width: 600px)", () => {

  // this setup code only runs when viewport is at least 600px wide
  console.log("desktop")
	
  ScrollTrigger.create({
	trigger:".gallery",
	start:"top top",
	end:"bottom bottom",
	pin:".right"
})

//create scrolltrigger for each details section
//trigger photo animation when headline of each details section 
//reaches 80% of window height
details.forEach((detail, index)=> {

	let headline = detail.querySelector("h3")
	let animation = gsap.timeline()
	   .to(photos[index], {yPercent:0,opacity:1})
	   .set(allPhotos[index], {autoAlpha:0})
	ScrollTrigger.create({
		trigger:headline,
		start:"top 70%",
		end:"top 45%",
		animation:animation,
		scrub:true,
		markers:false
	})
})
	
	
  
  return () => { // optional
    // custom cleanup code here (runs when it STOPS matching)
	  console.log("mobile")
  };
});


let tl = gsap.timeline({
    scrollTrigger:{
        trigger:'#about',
        start:'top 70%',
        end:'top 20%',
        ease:'none',
        scrub:true,
        // markers:true
    }
});

tl.from('.zoom',{
    opacity:0,
    scale:0
})
tl.from('#about h2',{
    x:-800,
},'<')
tl.from('#about h4',{
    x:-800
},'<')











 

