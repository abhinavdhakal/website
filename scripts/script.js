//get two buttons with id btn1,btn2
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let song = new Audio();


btn1.addEventListener("click", neverGonnaGiveYouUp)
btn2.addEventListener("click", superIdol)

neverGonnaGiveYouUpGif = document.createElement('img')
neverGonnaGiveYouUpGif.src = "./contents/neverGonnaGiveYouUpGif.gif"
neverGonnaGiveYouUpGif.classList.add("gif")

superIdolGif = document.createElement('img')
superIdolGif.src = "./contents/superIdolGif.gif"
superIdolGif.classList.add("gif")





function neverGonnaGiveYouUp() {
	song.pause();
	song = new Audio("./contents/neverGonnaGiveYouUp.mp3");
	song.play();
	document.body.appendChild(neverGonnaGiveYouUpGif);
}

function superIdol() {
	song.pause()
	song = new Audio("./contents/superIdol.mp3");
	song.play();
	document.body.appendChild(superIdolGif);
}

