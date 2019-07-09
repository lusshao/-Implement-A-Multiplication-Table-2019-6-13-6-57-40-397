const multiplicationTable = require('../src/multiplicationTable');

it('should return null when invork createMultiplicationTable given start bigger than enc', function () {
    //given
    const start = 5;
    const end = 2;
    //when
    const result = multiplicationTable(start,end);
    //then
    expect(result).toBe(null);
});


it('should return table String when invork createMultiplicationTable given a valid date', function () {
    //given
    const start = 2;
    const end = 4;
    //when
    const result = multiplicationTable(start,end);
    //then
    expect(result).toBe("2*2=4\n2*3=6\t3*3=9\n2*4=8\t3*4=12\t4*4=16\n");
});