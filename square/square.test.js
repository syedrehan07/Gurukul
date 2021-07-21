const Square = require('./square');

describe ('area', () => {

     it('should return 25 when the side is 5', ()=>{
         /*
         let square = Rectangle.createSquare(5);
         */
        const result = Square.area(5);
        expect(result).toBe(25);
     });
});

describe ('perimeter', () => {

    it('should return 20 when the side is 5', ()=>{
        /*
        let square = Rectangle.createSquare(5);
        */
       const result = Square.perimeter(10, 5);
       expect(result).toBe(20);
    });
});