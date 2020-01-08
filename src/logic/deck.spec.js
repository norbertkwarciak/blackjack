import { getDeck, getFigureValue } from './deck';

describe('getDeck function', () => {
  test('should exist', () => {
    expect(getDeck).toBeDefined();
  });

  test('should return 52 elements', () => {
    expect(getDeck().length).toBe(52);
  });

  test('should return value property for each element', () => {
    expect(getDeck()[0].value).toBeGreaterThan(1);
  });

  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  values.map(value => (
    test(`should include value ${value}`, () => {
      expect(getDeck().find((element) => element.value === value)).toBeTruthy();
    })
  ));

  // test.each`
  // cardValue
  // ${2}
  // ${3}
  // ${4}
  // `('should include value ${cardValue}', ({cardValue}) => {
  //     expect(getDeck().find((element) => element.value === cardValue)).toBeTruthy();
  // });
})

describe('getFigureValue function', () => {
  test('should exist', () => {
    expect(getFigureValue).toBeDefined();
  });

  test('should return 11 if A', () => {
    expect(getFigureValue('A'));
  });

  const figures = ['J', 'D', 'K'];

  figures.map(f => (
    test('should return 10 if J, D or K', () => {
      expect(getFigureValue(f)).toBe(10);
    })
  ));
})