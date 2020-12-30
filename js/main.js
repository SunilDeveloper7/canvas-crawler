//console.log('🐸');
//reference to DOM ELEMENTS i will get
//Hot off the press new way of doing things 


//references to DOM Elements I will use
//Hot off the press, new way of doing things (let movementDisplay = movement;)
let movementDisplay = document.getElementById('movement')
let game = document.getElementById('game')

game.setAttribute('width', '1000px')
game.height = 700
//Get some Context
let ctx = game.getContext('2d')
//get some context  
let drawBox = (x,y,size,color) => {
    ctx.fillStyle = color
    ctx.fillRect(x,y,size,size)
}

//create some characters
let ogre = {
    x:30,
    y:10,
    color:'#bada55',
    width:40,
    height:80,
    alive:true,
    render:function() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.width,this.height)

    }
}


let hero = {
    x:50,
    y:100,
    color:'hotpink',
    width:60,
    height:60,
    alive:true,
    render:function() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.width,this.height)
    }
}




ogre.render()

hero.render()
//function render() {
  //  ctx.fillStyle = 'red'
    //ctx.fillRect (10,10,60,60)

//Do Some drawing
//fill color
//ctx.fillStyle = 'white'
//line color
//ctx.strokeStyle ='red'

//line width
//ctx.linewidth = 20

//ctx.fillRect(10,10,100,100);
//ctx.strokeRect(0,0,100,100)
