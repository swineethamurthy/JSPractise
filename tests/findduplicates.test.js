const { TestScheduler } = require('jest')
const findDuplicates = require('../findduplicates')

test('duplicate exists simple', () => {
    expect(findDuplicates([1,5,6,5,10,6,15])).toBe(2);
})
test('multiple occurences exists', () => {
    expect(findDuplicates([1,5,6,5,10,6,5,15])).toBe(2);
})
test('duplicate exists at the end', () => {
    expect(findDuplicates([1,5,6,5,10,6,5,15,1])).toBe(3);
})
test('no duplicate exist', () => {
    expect(findDuplicates([1,5,6,10,64,8,15,13])).toBe(0);
})

