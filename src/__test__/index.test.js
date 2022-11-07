import sortСharacters from '../js/app';

test('sort characters', () => {
  const charactersArr = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const sortedCharactersArr = sortСharacters(charactersArr);
  expect(sortedCharactersArr).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});
