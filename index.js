var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];

function theBeatlesPlay(musicians, instruments) {
  const beatlesInfo = [];
  for (let i = 0, l = musicians.length; i < l; i++) {
  beatlesInfo.push(`${musicians[i]} plays ${instruments[i]}`)
} return beatlesInfo;
}

function johnLennonFacts(facts) {
  const loudFacts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];
  let i = 0; 
  while(i < loudFacts.length) {
  console.log(`${facts[i]}!!!`)
  i++
} return loudFacts;
}