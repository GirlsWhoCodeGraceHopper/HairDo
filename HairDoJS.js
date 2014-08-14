
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
	$("#picture").append('<img src="' + imglink + '" />');
}

function newFunction() {
    var humidity = 41;

	//show_image("https://lh6.googleusercontent.com/f0Afo_malHBKaZClIb4w-8X8yQ69mUnmpKw9wJSycTZNbxkEwPQaVmrIfjni1a_vrtE9Gw=s190");
	//show_image("https://lh5.googleusercontent.com/5wR_2UTjEdyiHBsGGUZMGHQE-SO0gifOCXNI7MWTZQ6mW5iON3jSbNTnwahsoAtSe8FShQ=w1034-h627");

	
    if (humidity < 31) {
        if (document.getElementById('a').checked && document.getElementById('e').checked) {
            length = document.getElementById('a').value;
            document.getElementById("hi").innerHTML = length;
            type = document.getElementById('e').value;
            document.getElementById("bye").innerHTML = type;
			show_image("http://images.beautyriot.com/photos/galleries/easy-styles-curly-hair-03.jpg");
			}
		if (document.getElementById('a').checked && document.getElementById('f').checked) {
                length = document.getElementById('a').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('f').value;
                document.getElementById("bye").innerHTML = type;
                show_image("http://www.short-haircut.com/wp-content/uploads/2014/12/Short-Haircuts-Wavy-Hair.jpg");
                //alert("Your hair is short");
            }
		if (document.getElementById('a').checked && document.getElementById('g').checked) {
                length = document.getElementById('a').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('g').value;
                document.getElementById("bye").innerHTML = type;
                show_image("http://www.short-haircut.com/wp-content/uploads/2014/12/20-Haircuts-for-Short-Wavy-Hair_9.jpg");
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
                show_image("http://media-cache-ak0.pinimg.com/236x/76/1b/f7/761bf7e5342baef66c8672b9d159dfa8.jpg)")
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

                //alert("Your hair is short");
            }
			}
}