export default function sortСharacters(characters) {
  return characters.sort((a, b) => b.health - a.health);
}

document.querySelector('.sorted-list').textContent = sortСharacters([
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
]);
