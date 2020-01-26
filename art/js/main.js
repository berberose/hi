
var image1 = new Image();
image1.src = "img/slide2.jpg";

var image2 = new Image();
image2.src = "img/slide3.png";

var image3 = new Image();
image3.src = "img/img1.jpg";

var image4 = new Image();
image4.src = "img/kam87.png";

var image5 = new Image();
image5.src = "img/kam88.png";

var image6 = new Image();
image6.src = "img/elmektub.jpg";

var image7 = new Image();
image7.src = "img/img5.jpg";

var image8 = new Image();
image8.src = "img/img1.jpg";

var image9 = new Image();
image9.src = "img/elmektub.jpg";

var image10 = new Image();
image10.src = "img/img5.jpg";

var images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

var step = 0;
function slider(){
	if(step<=4){
	document.getElementById('slide1').src = images[step].src;
	document.getElementById('slide2').src = images[step+1].src;
	document.getElementById('slide3').src = images[step+2].src;
	document.getElementById('slide4').src = images[step+3].src;
	document.getElementById('slide5').src = images[step+4].src;
	document.getElementById('slide6').src = images[step+5].src;
	step++;
	}
	if(step>4){
		step = 0;
	}
	setTimeout("slider()", 2500);
}
slider();
