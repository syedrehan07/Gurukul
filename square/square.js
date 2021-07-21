class Square{

    constructor(side){
        
        this.side = side;
    }
    area(side){
      
       return this.side * this.side;
    }

    perimeter(side){

        return 4 * this.side;
     }
}
module.exports = Square;