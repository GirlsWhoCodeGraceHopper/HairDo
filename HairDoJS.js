
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
	$("#video").append('<embed width="560" height="315" src="' + vidlink + '">');

	} 
	
function newFunction() {
	//show_image("https://lh6.googleusercontent.com/f0Afo_malHBKaZClIb4w-8X8yQ69mUnmpKw9wJSycTZNbxkEwPQaVmrIfjni1a_vrtE9Gw=s190");
	//show_image("https://lh5.googleusercontent.com/5wR_2UTjEdyiHBsGGUZMGHQE-SO0gifOCXNI7MWTZQ6mW5iON3jSbNTnwahsoAtSe8FShQ=w1034-h627");

	
    if (humidity < 0.31) {
	
		//condtional 1//
        if (document.getElementById('a').checked && document.getElementById('e').checked) {
            length = document.getElementById('a').value;
            document.getElementById("hi").innerHTML = length;
            type = document.getElementById('e').value;
            document.getElementById("bye").innerHTML = type;
			show_image("http://images.beautyriot.com/photos/galleries/easy-styles-curly-hair-03.jpg");
			show_video("http://www.youtube.com/embed/m6JCf320OBQ");
			}
			
			//conditional 2//
		if (document.getElementById('a').checked && document.getElementById('f').checked) {
            length = document.getElementById('a').value;
            document.getElementById("hi").innerHTML = length;
            type = document.getElementById('f').value;
            document.getElementById("bye").innerHTML = type;
            show_image("http://www.short-haircut.com/wp-content/uploads/2014/12/Short-Haircuts-Wavy-Hair.jpg");
			show_video("http://www.youtube.com/v/SJuB03Zg614");
            }
			
			//conditional 3//
		if (document.getElementById('a').checked && document.getElementById('g').checked) {
            length = document.getElementById('a').value;
            document.getElementById("hi").innerHTML = length;
            type = document.getElementById('g').value;
            document.getElementById("bye").innerHTML = type;
            show_image("http://media-cache-ak0.pinimg.com/236x/59/41/5a/59415acb5d1cd10614661d3835c0d6ec.jpg");
			show_video("https://www.youtube.com/v/MFQWTvdJ5m8?hl=en_US&amp;version=3");
                //alert("Your hair is short");
            }	
			
			//conditional 3//
		if (document.getElementById('b').checked && document.getElementById('e').checked) {
            length = document.getElementById('b').value;
            document.getElementById("hi").innerHTML = length;
            type = document.getElementById('e').value;
            document.getElementById("bye").innerHTML = type;
            show_image("http://hairstylesweekly.com/images/2012/11/Taylor-Swift-Cute-Curly-Updo-Hairstyle.jpg");
			show_video("https://www.youtube.com/v/ihdDaNkqAYc?version=3&amp;hl=en_US");
            }
			//conditional 4//
		if (document.getElementById('b').checked && document.getElementById('f').checked) {
            length = document.getElementById('b').value;
            document.getElementById("hi").innerHTML = length;
            type = document.getElementById('f').value;
            document.getElementById("bye").innerHTML = type;
            show_image("http://media-cache-ec0.pinimg.com/236x/f0/5c/9d/f05c9d5ca50e043f90a1ff594c57317d.jpg");
			show_video ("http://www.youtube.com/v/m9mGm-MJSmI?hl=en_US&amp;version=3");
			}
			//conditional 5//
        if (document.getElementById('b').checked && document.getElementById('g').checked) {
            length = document.getElementById('b').value;
            document.getElementById("hi").innerHTML = length;
            type = document.getElementById('g').value;
            document.getElementById("bye").innerHTML = type;
            show_image("http://uhairtv.com/wp-content/themes/videozoom/scripts/timthumb.php?src=http://uhairtv.com/wp-content/uploads/2013/03/0236.jpg&h=160&w=228&zc=1");
			show_video ("http://www.youtube.com/v/MNoQLcRAg9g?version=3&amp;hl=en_US");
            alert("Your hair is mediumlength");
            }
			//conditional 6//
        if (document.getElementById('c').checked && document.getElementById('e').checked) {
            length = document.getElementById('c').value;
            document.getElementById("hi").innerHTML = length;
            type = document.getElementById('e').value;
            document.getElementById("bye").innerHTML = type;
            show_image("http://images.beautyriot.com/photos/galleries/easy-styles-curly-hair-emmy-rossum-11.jpg");
			show_video ("http://www.youtube.com/v/BXD8ty2LfZc?version=3&amp;hl=en_US");
            }	
		//conditional 7//

		 if (document.getElementById('c').checked && document.getElementById('f').checked) {
                length = document.getElementById('c').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('f').value;
                document.getElementById("bye").innerHTML = type;
                show_image("http://3.bp.blogspot.com/-RHLpNmPruWs/TaNA-ulx6OI/AAAAAAAAAiQ/rbhMwQxhTyc/s1600/low+bun2.jpg");
				show_video ("//www.youtube.com/v/xwpoyhUq3m8?version=3&amp;hl=en_US");
            }
			
			//conditional 8//
         if (document.getElementById('c').checked && document.getElementById('g').checked) {
            length = document.getElementById('c').value;
            document.getElementById("hi").innerHTML = length;
            type = document.getElementById('g').value;
            document.getElementById("bye").innerHTML = type;
            show_image("http://stylenoted.com/wp-content/uploads/2012/06/kim-kardashian-sleek-ponytail-hairstyle.jpg");
			show_video ("http: //www.youtube.com/v/2ABcn-9-P0Y?version=3&amp;hl=en_US");
			}	
	}
	if (humidity > 0.32 && humidity < 0.70) {
        //conditional 9//
		if (document.getElementById('a').checked && document.getElementById('e').checked) {
                length = document.getElementById('a').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('e').value;
                document.getElementById("bye").innerHTML = type;
                show_image ("http://media-cache-ak0.pinimg.com/236x/76/1b/f7/761bf7e5342baef66c8672b9d159dfa8.jpg");
                //alert("Your hair is short");
            }
			
			//conditional 10//
        if (document.getElementById('a').checked && document.getElementById('f').checked) {
                length = document.getElementById('a').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('f').value;
                document.getElementById("bye").innerHTML = type;
                show_image("http://www.short-haircut.com/wp-content/uploads/2014/12/20-Wavy-Hairstyles-for-Short-Hair_4.jpg");
                //alert("Your hair is short");
            }
			
			//conditional 11//
        if (document.getElementById('a').checked && document.getElementById('g').checked) {
                length = document.getElementById('a').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('g').value;
                document.getElementById("bye").innerHTML = type;
                show_image("http://www.short-haircut.com/wp-content/uploads/2014/07/20-Straight-Hairstyles-for-Short-Hair_4.jpg");
            }
			
			//conditional 12//
		if (document.getElementById('b').checked && document.getElementById('e').checked) {
            length = document.getElementById('b').value;
            document.getElementById("hi").innerHTML = length;
            type = document.getElementById('e').value;
            document.getElementById("bye").innerHTML = type;
            show_image("http://www.hairstylesco.com/wp-content/uploads/2014/01/Volumized-Short-Hairstyles-for-Curly-Hair.jpg");
            alert("Your hair is mediumlength");
            }
			
			//conditional 13//
        if (document.getElementById('b').checked && document.getElementById('f').checked) {
             length = document.getElementById('b').value;
             document.getElementById("hi").innerHTML = length;
             type = document.getElementById('f').value;
             document.getElementById("bye").innerHTML = type;
             show_image("http://images.beautyriot.com/photos/galleries/easy-styles-curly-hair-keri-russell-01.jpg");
             alert("Your hair is mediumlength");
            }
			
			//conditional 14//
        if (document.getElementById('b').checked && document.getElementById('g').checked) {
             length = document.getElementById('b').value;
             document.getElementById("hi").innerHTML = length;
             type = document.getElementById('g').value;
             document.getElementById("bye").innerHTML = type;
             show_image("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTRzjlSkM4IbvzNOW3OAap1-rU5i5QwyhE1IwlRszbVeL6Io9358Q");
             alert("Your hair is mediumlength");
            }
			
			//conditional 15//
        if (document.getElementById('c').checked && document.getElementById('e').checked) {
             length = document.getElementById('c').value;
             document.getElementById("hi").innerHTML = length;
             type = document.getElementById('e').value;
             document.getElementById("bye").innerHTML = type;
             show_image("http://www.yayhairstyles.com/wp-content/uploads/2014/08/homecoming-hairstyles-half-up-half-down-curly-updo-hairstyles-for-prom-53e5b00c1e7f3-500x500.jpg");
            }
			
			//conditional 16//
        if (document.getElementById('c').checked && document.getElementById('f').checked) {
             length = document.getElementById('c').value;
             document.getElementById("hi").innerHTML = length;
             type = document.getElementById('f').value;
             document.getElementById("bye").innerHTML = type;
             show_image("http://www.viphairstyles.com/wp-content/uploads/2013/11/Reddish-Brown-Highlights.jpg");
            }
			
			//conditional 17//
        if (document.getElementById('c').checked && document.getElementById('g').checked) {
             length = document.getElementById('c').value;
             document.getElementById("hi").innerHTML = length;
             type = document.getElementById('g').value;
             document.getElementById("bye").innerHTML = type;
             show_image("http://www.womanhaircolor.com/hairstyles/side-swept-hairstyles-2014_6.jpg");
            }		
}
}