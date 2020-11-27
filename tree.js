class tree{
    constructor(x, y, width, height, ) {
     
    
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
      
      this.image=loadImage("tree.png")
        
        World.add(world, this.image);
      }
      display(){
    
        push();

         imageMode(CENTER);
        image(this.image,this.x ,this.y, this.width, this.height);
        pop();
      }
}