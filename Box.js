class Box{
    constructor(x,y,width,height){
     var properties={
      isStatic:true   
     }   
     this.Body=Bodies.rectangle(x,y,width,height,properties)
     this.width=width
     this.height=height
     World.add(world,this.Body)
    }
   display(){
    var pos=this.Body.position
    stroke("red")
    fill("red")   
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)
   }    
}