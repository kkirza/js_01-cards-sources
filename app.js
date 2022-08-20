const slides = document.querySelectorAll('.slide')
const body = document.body
for (const slide of slides){
	slide.addEventListener('click', () =>{
		clearActiveClasses()
		body.style.backgroundImage  = slide.style.backgroundImage 
		slide.classList.add('active')
	})
}

function clearActiveClasses(){
	slides.forEach((slide)=>{
		slide.classList.remove('active')
	})
}
