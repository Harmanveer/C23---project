class bottom
{
    constructor(x,y)
    {
        var options = 
    {
        'isStatic': true,
    }
    this.body = Bodies.rectangle(x, y, 200, 20, options);
    this.width = 200;
    this.height = 20;
    
    World.add(world, this.body);
  }
  display()
  {
    var pos =this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(0, 0, this.width, this.height);
  }
};