alert("hello");
console.log("???");

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
    alert("my function reached");
	console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    var humidity = 38;

	//show_image("https://lh6.googleusercontent.com/f0Afo_malHBKaZClIb4w-8X8yQ69mUnmpKw9wJSycTZNbxkEwPQaVmrIfjni1a_vrtE9Gw=s190");
	//show_image("https://lh5.googleusercontent.com/5wR_2UTjEdyiHBsGGUZMGHQE-SO0gifOCXNI7MWTZQ6mW5iON3jSbNTnwahsoAtSe8FShQ=w1034-h627");
	show_image("http://cdn.superbwallpapers.com/wallpapers/animals/kitten-16219-400x250.jpg");
	
    /*if (humidity < 31) {
        //a=short
        if (document.getElementById('a').checked && document.getElementById('e').checked) {
            length = document.getElementById('a').value;
            document.getElementById("hi").innerHTML = length;
            type = document.getElementById('e').value;
            document.getElementById("bye").innerHTML = type;
              
                show_image("https://lh6.googleusercontent.com/f0Afo_malHBKaZClIb4w-8X8yQ69mUnmpKw9wJSycTZNbxkEwPQaVmrIfjni1a_vrtE9Gw=s190", 120, 130, "Google Logo");
                var optionsList = ["cool", "yo"];
                for (i = 0; i < optionsList.length; i++) {
                    console.log("dedededdedededeedde");
                    document.getElementById("styles").nnerHTML= optionsList[i];
                }

            if (document.getElementById('a').checked && document.getElementById('f').checked) {
                length = document.getElementById('a').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('f').value;
                document.getElementById("bye").innerHTML = type;
                show_image("https://lh6.googleusercontent.com/f0Afo_malHBKaZClIb4w-8X8yQ69mUnmpKw9wJSycTZNbxkEwPQaVmrIfjni1a_vrtE9Gw=s190", 120, 130, "Google Logo");
                //alert("Your hair is short");
            }
            if (document.getElementById('a').checked && document.getElementById('g').checked) {
                length = document.getElementById('a').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('g').value;
                document.getElementById("bye").innerHTML = type;
                show_image("https://lh5.googleusercontent.com/5wR_2UTjEdyiHBsGGUZMGHQE-SO0gifOCXNI7MWTZQ6mW5iON3jSbNTnwahsoAtSe8FShQ=w1034-h627", 120, 130, "Google Logo");
                //alert("Your hair is short");
            }
            if (document.getElementById('b').checked && document.getElementById('e').checked) {
                length = document.getElementById('b').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('e').value;
                document.getElementById("bye").innerHTML = type;
                show_image(src, 120, 130, "Google Logo");
                alert("Your hair is mediumlength");
            }
            if (document.getElementById('b').checked && document.getElementById('f').checked) {
                length = document.getElementById('b').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('f').value;
                document.getElementById("bye").innerHTML = type;
                show_image(src, 120, 130, "Google Logo");
                alert("Your hair is mediumlength");
            }
            if (document.getElementById('b').checked && document.getElementById('g').checked) {
                length = document.getElementById('b').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('g').value;
                document.getElementById("bye").innerHTML = type;
                show_image(src, 120, 130, "Google Logo");
                alert("Your hair is mediumlength");
            }
            if (document.getElementById('c').checked && document.getElementById('e').checked) {
                length = document.getElementById('c').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('e').value;
                document.getElementById("bye").innerHTML = type;
                show_image(src, 120, 130, "Google Logo");
            }
            if (document.getElementById('c').checked && document.getElementById('f').checked) {
                length = document.getElementById('c').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('f').value;
                document.getElementById("bye").innerHTML = type;
                show_image(src, 120, 130, "Google Logo");
            }
            if (document.getElementById('c').checked && document.getElementById('g').checked) {
                length = document.getElementById('c').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('g').value;
                document.getElementById("bye").innerHTML = type;
                show_image("http://images.beautyriot.com/photos/galleries/easy-styles-curly-hair-06.jpg", 120, 130, "Google Logo");
            }
        }

        if (humidity > 31 && humidity < 70) {
            if (document.getElementById('a').checked && document.getElementById('e').checked) {
                length = document.getElementById('a').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('e').value;
                document.getElementById("bye").innerHTML = type;
                show_image("https://lh5.googleusercontent.com/ztFWCogQmwy1apj6IlOEFjGud9zLsTbwTEFm9gJSiHJitKr4Vt-P1Jd-I2_OslaUNW8Icw=s190", 120, 130, "Google Logo");
                //alert("Your hair is short");
            }
            if (document.getElementById('a').checked && document.getElementById('f').checked) {
                length = document.getElementById('a').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('f').value;
                document.getElementById("bye").innerHTML = type;
                show_image("https://lh4.googleusercontent.com/GyxCZ19G7vwOR0orAwrebfsB5S1P09MorjARaZ9J7JG_0Ngfu-zXhKmjHpU774SCHhrnqQ=s190", 120, 130, "Google Logo");
                //alert("Your hair is short");
            }
            if (document.getElementById('a').checked && document.getElementById('g').checked) {
                length = document.getElementById('a').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('g').value;
                document.getElementById("bye").innerHTML = type;
                show_image("", 120, 130, "Google Logo");

                //alert("Your hair is short");
            }
            if (document.getElementById('b').checked && document.getElementById('e').checked) {
                length = document.getElementById('b').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('e').value;
                document.getElementById("bye").innerHTML = type;
                show_image("http://images.beautyriot.com/photos/galleries/easy-styles-curly-hair-beyonce-10.jpg", 120, 130, "Google Logo");
                alert("Your hair is mediumlength");
            }
            if (document.getElementById('b').checked && document.getElementById('f').checked) {
                length = document.getElementById('b').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('f').value;
                document.getElementById("bye").innerHTML = type;
                show_image(src, 120, 130, "Google Logo");
                alert("Your hair is mediumlength");
            }
            if (document.getElementById('b').checked && document.getElementById('g').checked) {
                length = document.getElementById('b').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('g').value;
                document.getElementById("bye").innerHTML = type;
                show_image(src, 120, 130, "Google Logo");
                alert("Your hair is mediumlength");
            }
            if (document.getElementById('c').checked && document.getElementById('e').checked) {
                length = document.getElementById('c').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('e').value;
                document.getElementById("bye").innerHTML = type;
                show_image(src, 120, 130, "Google Logo");
            }
            if (document.getElementById('c').checked && document.getElementById('f').checked) {
                length = document.getElementById('c').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('f').value;
                document.getElementById("bye").innerHTML = type;
                show_image(src, 120, 130, "Google Logo");
            }
            if (document.getElementById('c').checked && document.getElementById('g').checked) {
                length = document.getElementById('c').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('g').value;
                document.getElementById("bye").innerHTML = type;
                show_image("http://images.beautyriot.com/photos/galleries/easy-styles-curly-hair-06.jpg", 120, 130, "Google Logo");
            }
        }
        if (humidity > 30 && humidity < 70) {
            if (document.getElementById('a').checked && document.getElementById('e').checked) {
                length = document.getElementById('a').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('e').value;
                document.getElementById("bye").innerHTML = type;
                show_image("http://images.beautyriot.com/photos/galleries/easy-styles-curly-hair-06.jpg", 120, 130, "Google Logo");
                //alert("Your hair is short");
            }

            if (document.getElementById('a').checked && document.getElementById('f').checked) {
                length = document.getElementById('a').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('f').value;
                document.getElementById("bye").innerHTML = type;
                show_image("http://images.beautyriot.com/photos/galleries/easy-styles-curly-hair-emmy-rossum-11.jpg", 120, 130, "Google Logo");
                //alert("Your hair is short");
            }
            if (document.getElementById('a').checked && document.getElementById('g').checked) {
                length = document.getElementById('a').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('g').value;
                document.getElementById("bye").innerHTML = type;
                show_image(src, 120, 130, "Google Logo");
                //alert("Your hair is short");
            }
            if (document.getElementById('b').checked && document.getElementById('e').checked) {
                length = document.getElementById('b').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('e').value;
                document.getElementById("bye").innerHTML = type;
                show_image("http://images.beautyriot.com/photos/galleries/easy-styles-curly-hair-beyonce-10.jpg", 120, 130, "Google Logo");
                alert("Your hair is mediumlength");
            }
            if (document.getElementById('b').checked && document.getElementById('f').checked) {
                length = document.getElementById('b').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('f').value;
                document.getElementById("bye").innerHTML = type;
                show_image(src, 120, 130, "Google Logo");
                alert("Your hair is mediumlength");
            }
            if (document.getElementById('b').checked && document.getElementById('g').checked) {
                length = document.getElementById('b').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('g').value;
                document.getElementById("bye").innerHTML = type;
                show_image(src, 120, 130, "Google Logo");
                alert("Your hair is mediumlength");
            }
            if (document.getElementById('c').checked && document.getElementById('e').checked) {
                length = document.getElementById('c').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('e').value;
                document.getElementById("bye").innerHTML = type;
                show_image(src, 120, 130, "Google Logo");
            }
            if (document.getElementById('c').checked && document.getElementById('f').checked) {
                length = document.getElementById('c').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('f').value;
                document.getElementById("bye").innerHTML = type;
                show_image(src, 120, 130, "Google Logo");
            }
            if (document.getElementById('c').checked && document.getElementById('g').checked) {
                length = document.getElementById('c').value;
                document.getElementById("hi").innerHTML = length;
                type = document.getElementById('g').value;
                document.getElementById("bye").innerHTML = type;
                show_image("http://images.beautyriot.com/photos/galleries/easy-styles-curly-hair-06.jpg", 120, 130, "Google Logo");
            }
        }
    }*/
}