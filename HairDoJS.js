
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
                show_image ("http://i.ytimg.com/vi/GJ4KSL6nOPE/mqdefault.jpg");
				show_video ("http://www.youtube.com/v/GJ4KSL6nOPE?version=3&amp;hl=en_US ");
                //alert("Your hair is short");
            }
			
			//conditional 10//
        if (document.getElementById('a').checked && document.getElementById('f').checked) {
                length = document.getElementById('a').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('f').value;
                document.getElementById("bye").innerHTML = type;
                show_image("http://www.short-haircut.com/wp-content/uploads/2014/12/20-Wavy-Hairstyles-for-Short-Hair_4.jpg");
                show_video ("hhtp://www.youtube.com/v/MPCI-JefPgE?version=3&amp;hl=en_US");
				//alert("Your hair is short");
            }
			
			//conditional 11//
        if (document.getElementById('a').checked && document.getElementById('g').checked) {
                length = document.getElementById('a').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('g').value;
                document.getElementById("bye").innerHTML = type;
                show_image("http://i.ytimg.com/vi/eUQSk5fNrZU/0.jpg");
				show_video("http://www.youtube.com/v/eUQSk5fNrZU?hl=en_US&amp;version=3");
            }
			
			//conditional 12//
		if (document.getElementById('b').checked && document.getElementById('e').checked) {
            length = document.getElementById('b').value;
            document.getElementById("hi").innerHTML = length;
            type = document.getElementById('e').value;
            document.getElementById("bye").innerHTML = type;
            show_image("http://img.youtube.com/vi/wLJgEOIN-uY/mqdefault.jpg");
			show_video ("http: //www.youtube.com/v/wLJgEOIN-uY?hl=en_US&amp;version=3");
            }
			
			//conditional 13//
        if (document.getElementById('b').checked && document.getElementById('f').checked) {
             length = document.getElementById('b').value;
             document.getElementById("hi").innerHTML = length;
             type = document.getElementById('f').value;
             document.getElementById("bye").innerHTML = type;
             show_image("http://images.beautyriot.com/photos/galleries/easy-styles-curly-hair-keri-russell-01.jpg");
			 show_video ("http: //www.youtube.com/v/p0iblipOleU?version=3&amp;hl=en_US");
            }
			
			//conditional 14//
        if (document.getElementById('b').checked && document.getElementById('g').checked) {
             length = document.getElementById('b').value;
             document.getElementById("hi").innerHTML = length;
             type = document.getElementById('g').value;
             document.getElementById("bye").innerHTML = type;
             show_image("http://i.ytimg.com/vi/Bf-gRNE0uDs/0.jpg");
			 show_video ("http: //www.youtube.com/v/Bf-gRNE0uDs?version=3&amp;hl=en_US");
            }
			
			//conditional 15//
        if (document.getElementById('c').checked && document.getElementById('e').checked) {
             length = document.getElementById('c').value;
             document.getElementById("hi").innerHTML = length;
             type = document.getElementById('e').value;
             document.getElementById("bye").innerHTML = type;
             show_image("http://img.youtube.com/vi/eaQb8MuGe9Y/0.jpg");
            show_video ("http://www.youtube.com/v/eaQb8MuGe9Y?version=3&amp;hl=en_US");
			}
			
			//conditional 16//
        if (document.getElementById('c').checked && document.getElementById('f').checked) {
             length = document.getElementById('c').value;
             document.getElementById("hi").innerHTML = length;
             type = document.getElementById('f').value;
             document.getElementById("bye").innerHTML = type;
             show_image("http://i.ytimg.com/vi/jLNY1vbesuA/hqdefault.jpg");
			 show_video ("http://www.youtube.com/v/jLNY1vbesuA?version=3&amp;hl=en_US")
            }
			
			//conditional 17//
        if (document.getElementById('c').checked && document.getElementById('g').checked) {
             length = document.getElementById('c').value;
             document.getElementById("hi").innerHTML = length;
             type = document.getElementById('g').value;
             document.getElementById("bye").innerHTML = type;
             show_image("http://i1.ytimg.com/vi/KylkbQ4YYKM/hqdefault.jpg");
			 show_video ("http://www.youtube.com/v/LVS2UcTnYUg?hl=en_US&amp;version=3")
            }		
}
}

if (humidity > 0.71) {
        if (document.getElementById('a').checked && document.getElementById('e').checked) {
                length = document.getElementById('a').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('e').value;
                document.getElementById("bye").innerHTML = type;
                show_image("https://i.ytimg.com/vi/Js0M1xW4NQo/hqdefault.jpg");
				show_video ("http://www.youtube.com/v/Js0M1xW4NQo?version=3&amp;hl=en_US");
                //alert("Your hair is short");
            }

        if (document.getElementById('a').checked && document.getElementById('f').checked) {
                length = document.getElementById('a').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('f').value;
                document.getElementById("bye").innerHTML = type;
                show_image("http://i.ytimg.com/vi/mINGzR61W8Y/mqdefault.jpg");
                show_video ("http://www.youtube.com/v/mINGzR61W8Y?hl=en_US&amp;version=3");
				//alert("Your hair is short");
            }
            if (document.getElementById('a').checked && document.getElementById('g').checked) {
                length = document.getElementById('a').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('g').value;
                document.getElementById("bye").innerHTML = type;
                show_image("https://i.ytimg.com/vi/CyBEUS8RMrM/hqdefault.jpg");
				show_video ("http://www.youtube.com/v/CyBEUS8RMrM?hl=en_US&amp;version=3");
                //alert("Your hair is short");
            }
        if (document.getElementById('b').checked && document.getElementById('e').checked) {
                length = document.getElementById('b').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('e').value;
                document.getElementById("bye").innerHTML = type;
                show_image("http://i1.ytimg.com/vi/g0TMEjGS9FQ/hqdefault.jpg");
				show_video("http://www.youtube.com/v/g0TMEjGS9FQ?version=3&amp;hl=en_US");
				
            }
        if (document.getElementById('b').checked && document.getElementById('f').checked) {
                length = document.getElementById('b').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('f').value;
                document.getElementById("bye").innerHTML = type;
                show_image("http://media-cache-ec0.pinimg.com/236x/64/f9/f3/64f9f30d97e0ca1d000c7f7e9433c364.jpg");
                show_video ("//www.youtube.com/v/Mf7ynpJahY0?version=3&amp;hl=en_US");
            }
        if (document.getElementById('b').checked && document.getElementById('g').checked) {
                length = document.getElementById('b').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('g').value;
                document.getElementById("bye").innerHTML = type;
                show_image("https://i.ytimg.com/vi/Ul8RTTXXp3s/maxresdefault.jpg");
                show_video ("http://www.youtube.com/v/Ul8RTTXXp3s?hl=en_US&amp;version=3");
            }
        if (document.getElementById('c').checked && document.getElementById('e').checked) {
                length = document.getElementById('c').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('e').value;
                document.getElementById("bye").innerHTML = type;
                show_image("http://updoguru.com/wp-content/uploads/2012/10/Curly-Hair-Updos.png");
				show_video ("http://www.youtube.com/v/JB_RVgiPqdA?version=3&amp;hl=en_US" );
            }
        if (document.getElementById('c').checked && document.getElementById('f').checked) {
                length = document.getElementById('c').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('f').value;
                document.getElementById("bye").innerHTML = type;
                show_image ("http://2.bp.blogspot.com/-9jZzvbZcz5M/T1lzLPPuuJI/AAAAAAAAEQs/E_N0B7Ra-Bk/s1600/1.jpg");
				show_video("http://www.youtube.com/v/mIk28nw0eUQ?hl=en_US&amp;version=3");
            }
        if (document.getElementById('c').checked && document.getElementById('g').checked) {
                length = document.getElementById('c').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('g').value;
                document.getElementById("bye").innerHTML = type;
                show_image("http://blog.muipr.com/wp-content/uploads/2014/06/Screen-Shot-2014-06-26-at-1.03.09-PM.png")
				show_video ("http://www.youtube.com/v/ZyZkowmdZv8?hl=en_US&amp;version=3");
            }
        }