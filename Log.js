class Log extends Baseclass{
    constructor(x, y, height, angle) {
    
      super(x, y, 20, height);
      this.image=loadImage("sprites/log.png");
      Matter.Body.setAngle(this.body, angle);
    }
  };
  