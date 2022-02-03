import involvementApi from '../src/modules/InvolvementAPI.js';

describe('tests on getCommentCounter from InvolvementAPI', () => {
  test('getCommentCounter returns comment counter of zero (0) if an array isnt passed as parameter', () => {
    const testVal = { item: 1, number: 2 };
    expect(involvementApi.getCommentCounter(testVal)).toBe(0);
  });

  test('getCommentCounter returns comment counter of six (6) if an array with 6 values is passed to it', () => {
    const testVal = [1, 2, 3, 4, 5, 6];
    expect(involvementApi.getCommentCounter(testVal)).toBe(6);
  });
});