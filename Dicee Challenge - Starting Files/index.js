

var imageElement1 = document.lastElementChild.querySelector(".img1");
var imageElement2 = document.lastElementChild.querySelector(".img2");


var num = Math.floor(Math.random() * 6) + 1;
var num1 = Math.floor(Math.random() * 6) + 1;
if(num===1)
    {
        imageElement1.src = "/images/dice1.png";
    }
else if(num===2)
    {
        imageElement1.src = "/images/dice2.png";
    }
else if(num===3)
    {
        imageElement1.src = "/images/dice3.png";
    }

else if(num===4)
    {
        imageElement1.src = "/images/dice4.png";
    }
else if(num===5)
    {
        imageElement1.src = "/images/dice5.png";
    }
else if(num===6)
    {
        imageElement1.src = "/images/dice6.png";
    }

                              

if(num1===1)
    {
        imageElement2.src = "/images/dice1.png";
    }
else if(num1===2)
    {
        imageElement2.src = "/images/dice2.png";
    }
else if(num1===3)
    {
        imageElement2.src = "/images/dice3.png";
    }

else if(num1===4)
    {
        imageElement2.src = "/images/dice4.png";
    }
else if(num1===5)
    {
        imageElement2.src = "/images/dice5.png";
    }
else if(num1===6)
    {
        imageElement2.src = "/images/dice6.png";
    }

                                  
    