const { TestScheduler } = require('jest')
const fizzbuzz = require('../fizzbuzz')

test('fizzbuzz of 3', () => {
    expect(fizzbuzz(3)).toStrictEqual([1,2,'Fizz'])
})

test('fizzbuzz of 5', () => {
    expect(fizzbuzz(5)).toStrictEqual([1,2,'Fizz',4,'Buzz'])
})

test('fizzbuzz of 15', () => {
    expect(fizzbuzz(15)).toStrictEqual([1,2,'Fizz',4,'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'])
})