/*convert an independent class to a child class
1) change the class name --> class Classname extends ParentClass
2) should not change the consturctor() and image()
3) Relplace ' this.body = Bodies.rectangle' with super
4) remove options

*/

class Bird extends Baseclass {
    constructor(x, y) {
     super(x, y, 50, 50);
      this.image = loadImage("sprites/bird.png")
      
    };

    display(){
      super.display();
      this.body.position.x = mouseX,
      this.body.position.y = mouseY
    }
      };
      
 
  