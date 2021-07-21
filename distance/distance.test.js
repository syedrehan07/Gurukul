const Distance = require('./distance');

describe ('isCentimeterEqualsToMeter', () => {

    const distanceInCentimeter = new Distance(100, "centimeter");
    const distanceInMeter = new Distance(1, "meter");

     it('should return true while comparing 100 centimeters with 1 meter', ()=>{
         
        const result = distanceInCentimeter.isCentimeterEqualsToMeter(distanceInMeter);
        expect(result).toBeTruthy();
     });
});