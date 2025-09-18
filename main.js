let coins = 100
document.querySelector('span.coins').innerText = coins

document.querySelector('button.minBtn').addEventListener('click', minBtn)
function minBtn(){
  addSubtract(1)
}

document.querySelector('button.maxBtn').addEventListener('click', maxBtn)
function maxBtn(){
  addSubtract(10)
}

function addSubtract(bet){
  coins -= bet
  if(coins <=0){
    alert('Insert More Coins')
  }
document.querySelector('span.coins').innerText = coins

let images = [ 'Dango.png', 'Cake.png', 'Chocolate.png', 'Coffee.png', 'Tea.png' ]
let img1 = Math.floor(Math.random()*images.length)
document.querySelector('.reel1 img').src=images [img1]
let img2 = Math.floor(Math.random()*images.length)
document.querySelector('.reel2 img').src=images [img2]
let img3 = Math.floor(Math.random()*images.length)
document.querySelector('.reel3 img').src=images [img3]

if(img1 == img2 && img3 == img2){
  coins += bet*10
document.querySelector('span.coins').innertext = coins
}
}