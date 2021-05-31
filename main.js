//A Text Generator that returns a random message every time it is called.

// Arrays with Message options (Need at least 3)
/* List of fortunes
Be on the lookout for coming events; They cast their shadows beforehand.
The man on the top of the mountain did not fall there.
 */
let planet = [
  'The Moon spends the day in your creative sector, and you readily find the inspiration to share your ideas and creations.',
  "With the Moon in your home and family sector all day, you gravitate to easygoing or familiar activities.",
  "With the Sun's alignment with the North Node, you might connect with the right person, resources, or ideas that further your interests.",
  'In the first half of the day, Venus in your sign forms a tense aspect with Pluto.'
];
let romance = [
  'Relationship and practical goals may seem to clash in spots today, however.',
  'Cosmic conditions encourage you to face daunting relationship challenges.',
  "Overcome your fears about dating, or find space and time to talk with a lover about whatever's on your mind.",
  'Embrace the veritable magic that seems to surround matters of the heart right now, because it has arrived, just for you.'
];
let advice = [
  'Problems, particularly work or health-related, can more easily be solved today, and you seem to have the tools to handle tricky areas.',
  'You may not always feel understood right now so that working at your own pace would be best.',
  'Bringing ideas to life can be in focus, and you can enjoy some spontaneity now.',
  'Expressing yourself and sharing your ideas can be satisfying today.',
  'You are in an excellent position to share ideas with people you care about, and you can be quite impressive to others now.'
];
let outro = [
  "This week holds unusual energy as you're called to break out of past patterns, yet you're also encouraged to take care of unfinished business.",
  'It can be an excellent time to recognize your attachments and embrace the healthy ones while considering elements that need to go.',
  "This way, you'll be better equipped to handle your responsibilities and succeed in your public and professional lives. Look for ways to boost your faith in your emotional life.",
];
// Function to return random Message, using Math.random();

let horoscopeGenerator = () => {
  let message = '';
  let a = planet[(Math.floor((Math.random() * (planet.length))))];
  let b = romance[(Math.floor((Math.random() * (romance.length))))];
  let c = advice[(Math.floor((Math.random() * (advice.length))))];
  let d = outro[(Math.floor((Math.random() * (outro.length))))];
  return `${a} ${b} ${c} ${d}`
};

console.log(horoscopeGenerator());