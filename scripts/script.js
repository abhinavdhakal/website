//get two buttons with id btn1,btn2
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.addEventListener("click", neverGonnaGiveYouUp)
btn2.addEventListener("click", superIdol)

neverGonnaGiveYouUpGif = document.createElement('img')
neverGonnaGiveYouUpGif.src = "./contents/neverGonnaGiveYouUpGif.gif"
neverGonnaGiveYouUpGif.classList.add("gif")

superIdolGif = document.createElement('img')
superIdolGif.src = "./contents/superIdolGif.gif"
superIdolGif.classList.add("gif")



let rickrollSong = new Audio("./contents/neverGonnaGiveYouUp.mp3");
let superIdolSong = new Audio("./contents/superIdol.mp3");


function neverGonnaGiveYouUp() {
	superIdolSong.pause();
	rickrollSong.currentTime = 0;
	rickrollSong.play();
	document.body.appendChild(neverGonnaGiveYouUpGif);
}

function superIdol() {
	rickrollSong.pause();
	superIdolSong.currentTime = 0;
	superIdolSong.play();

	document.body.appendChild(superIdolGif);
}

