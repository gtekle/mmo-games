import gamesApi from '../src/modules/GamesAPI.js';

test('add all games method', () => {
  gamesApi.games.push(1, 2, 3);
  expect(gamesApi.getNumberOfGames()).toBe(3);
});