
//function show_image(src, width, height, alt) {
function show_image(imglink) { 
   /*var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img);
    //make sure newFunction contains the humididty*/
		
		
	alert("changing picture!");
	//clear the picture div
	$("#picture").html("");
	//append img id 
	$("#picture").append('<img width="350" height="350" align="right" src="' + imglink + '" />');
}

function show_video(vidlink) {
	alert("adding tutorial!");
	$("#video").html("");
	//appending vid id
	$("#video").append('<embed width="560" height="315" src="' + vidlink + '" >');
	} 
	
function newFunction() {
    var humidity = 11;

	//show_image("https://lh6.googleusercontent.com/f0Afo_malHBKaZClIb4w-8X8yQ69mUnmpKw9wJSycTZNbxkEwPQaVmrIfjni1a_vrtE9Gw=s190");
	//show_image("https://lh5.googleusercontent.com/5wR_2UTjEdyiHBsGGUZMGHQE-SO0gifOCXNI7MWTZQ6mW5iON3jSbNTnwahsoAtSe8FShQ=w1034-h627");

	
    if (humidity < 31) {
        if (document.getElementById('a').checked && document.getElementById('e').checked) {
            length = document.getElementById('a').value;
            document.getElementById("hi").innerHTML = length;
            type = document.getElementById('e').value;
            document.getElementById("bye").innerHTML = type;
			alert("hey");
			show_image("http://images.beautyriot.com/photos/galleries/easy-styles-curly-hair-03.jpg");
			alert("sup yo");
			show_video("http://www.youtube.com/embed/m6JCf320OBQ");
			}
		if (document.getElementById('a').checked && document.getElementById('f').checked) {
            length = document.getElementById('a').value;
            document.getElementById("hi").innerHTML = length;
            type = document.getElementById('f').value;
            document.getElementById("bye").innerHTML = type;
            show_image("http://www.short-haircut.com/wp-content/uploads/2014/12/Short-Haircuts-Wavy-Hair.jpg");
            //alert("Your hair is short");
			show_video("http://www.youtube.com/v/SJuB03Zg614");
            }
		if (document.getElementById('a').checked && document.getElementById('g').checked) {
            length = document.getElementById('a').value;
            document.getElementById("hi").innerHTML = length;
            type = document.getElementById('g').value;
            document.getElementById("bye").innerHTML = type;
            show_image("http://www.short-haircut.com/wp-content/uploads/2014/12/20-Haircuts-for-Short-Wavy-Hair_9.jpg");
			show_video("http://www.youtube.com/v/s6Bt0eukkkk?version=3&amp;hl=en_US");
                //alert("Your hair is short");
            }	
		if (document.getElementById('b').checked && document.getElementById('e').checked) {
            length = document.getElementById('b').value;
            document.getElementById("hi").innerHTML = length;
            type = document.getElementById('e').value;
            document.getElementById("bye").innerHTML = type;
            show_image("http://hairstylesweekly.com/images/2012/11/Taylor-Swift-Cute-Curly-Updo-Hairstyle.jpg");
            alert("Your hair is mediumlength");
            }
		if (document.getElementById('b').checked && document.getElementById('f').checked) {
            length = document.getElementById('b').value;
            document.getElementById("hi").innerHTML = length;
            type = document.getElementById('f').value;
            document.getElementById("bye").innerHTML = type;
            show_image("http://www.short-haircut.com/wp-content/uploads/2014/12/Hairstyles-for-Short-Wavy-Hair.jpg");
             alert("Your hair is mediumlength");
			}
        if (document.getElementById('b').checked && document.getElementById('g').checked) {
            length = document.getElementById('b').value;
            document.getElementById("hi").innerHTML = length;
            type = document.getElementById('g').value;
            document.getElementById("bye").innerHTML = type;
            show_image("http://www.short-haircut.com/wp-content/uploads/2014/12/Short-Straight-Hair1.jpg");
            alert("Your hair is mediumlength");
            }
        if (document.getElementById('c').checked && document.getElementById('e').checked) {
            length = document.getElementById('c').value;
            document.getElementById("hi").innerHTML = length;
            type = document.getElementById('e').value;
            document.getElementById("bye").innerHTML = type;
            show_image("http://images.beautyriot.com/photos/galleries/easy-styles-curly-hair-emmy-rossum-11.jpg");
            }	
		 if (document.getElementById('c').checked && document.getElementById('f').checked) {
                length = document.getElementById('c').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('f').value;
                document.getElementById("bye").innerHTML = type;
                show_image("http://3.bp.blogspot.com/-RHLpNmPruWs/TaNA-ulx6OI/AAAAAAAAAiQ/rbhMwQxhTyc/s1600/low+bun2.jpg");
            }
         if (document.getElementById('c').checked && document.getElementById('g').checked) {
            length = document.getElementById('c').value;
            document.getElementById("hi").innerHTML = length;
            type = document.getElementById('g').value;
            document.getElementById("bye").innerHTML = type;
            show_image("http://www.courtneypecora.com/wp-content/uploads/2013/08/elizabeth-olsen-top-knot-bun-.jpg");
			}	
	}
	if (humidity > 31 && humidity < 70) {
        if (document.getElementById('a').checked && document.getElementById('e').checked) {
                length = document.getElementById('a').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('e').value;
                document.getElementById("bye").innerHTML = type;
                show_image ("http://media-cache-ak0.pinimg.com/236x/76/1b/f7/761bf7e5342baef66c8672b9d159dfa8.jpg");
                //alert("Your hair is short");
            }
        if (document.getElementById('a').checked && document.getElementById('f').checked) {
                length = document.getElementById('a').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('f').value;
                document.getElementById("bye").innerHTML = type;
                show_image("http://www.short-haircut.com/wp-content/uploads/2014/12/20-Wavy-Hairstyles-for-Short-Hair_4.jpg");
                //alert("Your hair is short");
            }
        if (document.getElementById('a').checked && document.getElementById('g').checked) {
                length = document.getElementById('a').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('g').value;
                document.getElementById("bye").innerHTML = type;
                show_image("http://www.short-haircut.com/wp-content/uploads/2014/07/20-Straight-Hairstyles-for-Short-Hair_4.jpg");
            }
		if (document.getElementById('b').checked && document.getElementById('e').checked) {
            length = document.getElementById('b').value;
            document.getElementById("hi").innerHTML = length;
            type = document.getElementById('e').value;
            document.getElementById("bye").innerHTML = type;
            show_image("http://www.hairstylesco.com/wp-content/uploads/2014/01/Volumized-Short-Hairstyles-for-Curly-Hair.jpg");
            alert("Your hair is mediumlength");
            }
        if (document.getElementById('b').checked && document.getElementById('f').checked) {
             length = document.getElementById('b').value;
             document.getElementById("hi").innerHTML = length;
             type = document.getElementById('f').value;
             document.getElementById("bye").innerHTML = type;
             show_image("http://images.beautyriot.com/photos/galleries/easy-styles-curly-hair-keri-russell-01.jpg");
             alert("Your hair is mediumlength");
            }
        if (document.getElementById('b').checked && document.getElementById('g').checked) {
             length = document.getElementById('b').value;
             document.getElementById("hi").innerHTML = length;
             type = document.getElementById('g').value;
             document.getElementById("bye").innerHTML = type;
             show_image("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTRzjlSkM4IbvzNOW3OAap1-rU5i5QwyhE1IwlRszbVeL6Io9358Q");
             alert("Your hair is mediumlength");
            }
        if (document.getElementById('c').checked && document.getElementById('e').checked) {
             length = document.getElementById('c').value;
             document.getElementById("hi").innerHTML = length;
             type = document.getElementById('e').value;
             document.getElementById("bye").innerHTML = type;
             show_image("http://www.yayhairstyles.com/wp-content/uploads/2014/08/homecoming-hairstyles-half-up-half-down-curly-updo-hairstyles-for-prom-53e5b00c1e7f3-500x500.jpg");
            }
        if (document.getElementById('c').checked && document.getElementById('f').checked) {
             length = document.getElementById('c').value;
             document.getElementById("hi").innerHTML = length;
             type = document.getElementById('f').value;
             document.getElementById("bye").innerHTML = type;
             show_image("http://www.viphairstyles.com/wp-content/uploads/2013/11/Reddish-Brown-Highlights.jpg");
            }
        if (document.getElementById('c').checked && document.getElementById('g').checked) {
             length = document.getElementById('c').value;
             document.getElementById("hi").innerHTML = length;
             type = document.getElementById('g').value;
             document.getElementById("bye").innerHTML = type;
             show_image("http://www.womanhaircolor.com/hairstyles/side-swept-hairstyles-2014_6.jpg");
            }		
}
}