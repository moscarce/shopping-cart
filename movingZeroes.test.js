const moveZero = require('./movingZeroes');

test("That we can move zeroes to the end",()=>{
    expect(moveZero([0])).toStrictEqual([0])
})