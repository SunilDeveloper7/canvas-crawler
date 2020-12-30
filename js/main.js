console.log('🐸');
//reference to DOM ELEMENTS i will get
//Hot off the press new way of doing things 


//references to DOM Elements I will use
//Hot off the press, new way of doing things (let movementDisplay = movement;)
let movementDisplay = document.getElementById('movement')
let game = document.getElementById('game')

game.setAttribute('width', '800px')
game.height = 400;
//Get some Context
let ctx = game.getContext('2d')

//Do Some drawing
//fill color
ctx.fillStyle = 'white'
//line color
ctx.strokeStyle ='red'

//line width
ctx.linewidth = 20

ctx.fillRect(10,10,100,100);
ctx.strokeRect(0,0,100,100)
