const Rectangle = require('./rectangle');

describe ('area', () => {

     it('should return 50 when length is 10 and breadth is 5', ()=>{

        const result = Rectangle.area(10, 5);
        expect(result).toBe(50);
     });
});

describe ('perimeter', () => {

    it('should return 30 when length is 10 and breadth is 5', ()=>{

       const result = Rectangle.area(10, 5);
       expect(result).toBe(30);
    });
});
