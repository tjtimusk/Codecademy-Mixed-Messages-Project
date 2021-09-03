//A horoscope generator that returns random woowoo any time the function is called
// Page elements
let fortune = document.querySelector('.fortune');
let button = document.querySelector('.generator');
// Arrays with horoscope components
let planet = [
  'The Moon spends the day in your creative sector, and you readily find the inspiration to share your ideas and creations.',
  "With the Moon in your home and family sector all day, you gravitate to easygoing or familiar activities.",
  "With the Sun's alignment with the North Node, you might connect with the right person, resources, or ideas that further your interests.",
  'In the first half of the day, Venus in your sign forms a tense aspect with Pluto.',
  'Try not to be your worst enemy today, as can be the inclination with a Sun-Pluto aspect active. Left unchecked, you might end up sabotaging the very things you feel you want the most with controlling or compulsive behavior.'
];
let romance = [
  'Relationship and practical goals may seem to clash in spots today, however.',
  'Cosmic conditions encourage you to face daunting relationship challenges.',
  "Overcome your fears about dating, or find space and time to talk with a lover about whatever's on your mind.",
  'Embrace the veritable magic that seems to surround matters of the heart right now, because it has arrived, just for you.',
  "In matters of the heart, you can enjoy some spontaneity now. What you have is profound cosmic support for your most authentic, heartfelt agenda related to love, but it can only flourish if you're aligned with your golden truth."
];
let advice = [
  'Problems, particularly work or health-related, can more easily be solved today, and you seem to have the tools to handle tricky areas.',
  'You may not always feel understood right now, so working at your own pace would be best.',
  'Expressing yourself and sharing your ideas can be satisfying. Today, bringing ideas to life can be in focus.',
  'You are in an excellent position to share ideas with people you care about, and you can be quite impressive to others now.',
  'Money matters and questions of ownership can be tricky issues, needing careful handling. This can stir up doubts about a person in your life. Consider that decisions made under pressure will not serve you well, so aim to find a place of calm before you jump into anything.'
];
let outro = [
  "This week holds unusual energy as you're called to break out of past patterns, yet you're also encouraged to take care of unfinished business.",
  'It can be an excellent time to recognize your attachments and embrace the healthy ones while considering elements that need to go.',
  "This way, you'll be better equipped to handle your responsibilities and succeed in your public and professional lives. Look for ways to boost your faith in your emotional life.",
  'You may naturally gravitate towards unusual and wonderful ideas and things. You might also get a stronger clue as to where you are headed in a larger sense through the events or feelings of the day.',
  "Be open to the possibilities that are offered to you today, because you're sitting on a treasure-trove of opportunity for growth and passionate expansion."
];

// Function to return random Message, using Math.random()
let fortuneGenerator = () => {

  let message = '';
  let a = planet[(Math.floor((Math.random() * (planet.length))))];
  let b = romance[(Math.floor((Math.random() * (romance.length))))];
  let c = advice[(Math.floor((Math.random() * (advice.length))))];
  let d = outro[(Math.floor((Math.random() * (outro.length))))];
  //return `${a} ${b} ${c} ${d}`
  fortune.textContent = `${a} ${b} ${c} ${d}`;
};



//Call Function
button.addEventListener('click', () => {
  fortuneGenerator()
});