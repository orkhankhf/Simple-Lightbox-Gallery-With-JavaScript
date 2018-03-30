var imgSources = ["img/0.jpg","img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg","img/9.jpg","img/10.jpg","img/11.jpg","img/12.jpg"];
var popUp = document.querySelector(".popup");
var popUpImg = document.querySelector(".popup img");
var popUpBg = document.querySelector(".popup div");
popUpBg.addEventListener("click", closePopUp);

for(a=0; a<imgSources.length; a++){
	var img = document.createElement("img");
	var appendTo = document.getElementsByClassName("thumb-images")[0];
	img.setAttribute("src", imgSources[a]);
	appendTo.appendChild(img);
	img.addEventListener("click", show);
}

function show(){
	clickedImg = this.getAttribute("src");
	popUpImg.setAttribute("src" , clickedImg);
	popUp.style.display = "block";
}

function closePopUp(){
	popUp.style.display = "none";
}