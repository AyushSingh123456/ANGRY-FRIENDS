class Bird extends BaseClass {
  constructor(x,y){
    
    super(x,y,50,50);
    this.body.density=4.0
    this.image = loadImage("sprites/Screen Shot 2020-05-25 at 3.14.37 PM (1).png");
    this.smokeImage = loadImage("sprites/Screen Shot 2020-05-25 at 2.58.20 PM (2).png");
    
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
