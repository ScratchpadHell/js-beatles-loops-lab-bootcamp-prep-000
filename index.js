var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];

function theBeatlesPlay(musicians, instruments) {
  const beatlesInfo = [];
  for (let i = 0, l = musicians.length; i < l; i++) {
  beatlesInfo.push(`${musicians[i]} plays ${instruments[i]}`)
} return beatlesInfo;
}

function johnLennonFacts(facts) {
  const loudFacts = [];
  let i = 0; 
  while(i < loudFacts.length) {
  loudFacts.push(`${facts[i]}!!!`)
  i++
} return loudFacts;
}