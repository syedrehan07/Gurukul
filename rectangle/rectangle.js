class Rectangle{

    constructor(length, breadth){
        
        this.length = length;
        this.breadth = breadth;
    }
    /*
    static createSquare(side){
        return new Rectangle(side, side)
    }
    */
    area(length, breadth){
      
       return this.length * this.breadth;
    }

    perimeter(length, breadth){

        return 2 * (this.length+this.breadth);
     }
}
module.exports = Rectangle;