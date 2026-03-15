// photo slider

let photos=[
"images/photo1.jpg",
"images/photo2.jpg",
"images/photo3.jpg",
"images/photo4.jpg",
"images/photo5.jpg",
"images/photo6.jpg",
"images/photo7.jpg",
"images/photo8.jpg",
"images/photo9.jpg"
]
let i=0

function changePhoto(){

i++

if(i>=photos.length){

let i=0

}

document.getElementById("slider").src=photos[i]

}

setInterval(changePhoto,2000)


// hearts animation

function createHeart(){

const heart=document.createElement("span")

heart.innerHTML="❤️"

heart.style.left=Math.random()*100+"%"

heart.style.fontSize=Math.random()*30+20+"px"

document.querySelector(".hearts").appendChild(heart)

setTimeout(()=>{

heart.remove()

},8000)

}
setInterval(createHeart,400)


// popup

function openPopup(){

document.getElementById("popup").style.display="flex"

startTyping()

confetti({

particleCount:200,

spread:120

})

}

function closePopup(){

document.getElementById("popup").style.display="none"

}


// typing message

let text="🎂 Happy Birthday ❤️  You are the most special person in my life.  Your smile makes my world brighter every day.  I wish all your dreams come true.  Stay happy always. 🥰Love you so much bala❤️ Happy Birthday Bayko❤️ Even if I’m not there on your birthday, you’re always in my heart.” ❤️ "
let index=0

function startTyping(){

let box=document.getElementById("typeMsg")

box.innerHTML=""

index=0

let typing=setInterval(()=>{

if(index<text.length){

box.innerHTML+=text.charAt(index)

index++

}else{

clearInterval(typing)

}

},60)

}