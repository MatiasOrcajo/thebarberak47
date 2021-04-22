const headerImage = document.querySelector('.headerImage')

const tl = gsap.timeline({ defaults: { ease: 'power1.out' } })

tl.to(".text", { y: "0%", duration: 1.5, stagger: 0.25 })
tl.to(".intro-slide", { y: "-100%", duration: 1.5, delay: 0.5 })
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1")

tl.fromTo(".header", { opacity: 0 }, { opacity: 1, duration: 1 })
tl.fromTo(".flexContainer", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1")

// tl.fromTo(headerImage, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })