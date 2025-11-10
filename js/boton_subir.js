const btn_scrolltop = document.getElementById("btn_scrolltop")
btn_scrolltop.addEventListener("click",()=>{
	window.scrollTo(0,0)
})

window.onscroll = () =>{
	add_btn_scrolltop()
}

const add_btn_scrolltop =()=>{
	if(window.scrollY < 300){
		btn_scrolltop.clasList.remove("btn_scrolltop-on")
	}else{
		btn_scrolltop.clasList.add("btn_scrolltop-on")
	}
}