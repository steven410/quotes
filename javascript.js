var quotes = [
['It\'s like a party for limo drivers.'],
['I have very little patience for stupidity.'],
['You guys I\'m like really smart now.'],
['I ate a seahorse.'],
['I\'m not superstitious, but I\'m a little-stitious.'],
['Just pretend like we\'re talking until the cops leave.'],
['It has to be official and it <em>has</em> to be urine.'],
['I know that patience and loyalty are good, and virtuous traits. But sometimes I just think you need to grow a pair.'],
['It\'s performance review day, company-wide. Last year, my performance review started with Michael asking me what my hopes and dreams were, and it ended with him telling me he could bench-press 190 pounds. So, I don\'t really know what to expect.'],
['I wake up every morning in a bed that\'s too small, drive my daughter to a school that\'s too expensive, and then I go to work to a job for which I get paid too little, but on Pretzel Day? Well, I like pretzel day.']
]

var names = [
	['Holly Flax'],
	['Kevin Malone'],
	['Kelly Kapoor'],
	['Andy Bernard'],
	['Michael Scott'],
	['Creed Bratton'],
	['Dwight Schrute'],
	['Angela Martin'],
	['Pam Beesly'],
	['Stanley Hudson']
]

function newQuote() {
document.getElementById('newQuote').onclick = displayQuote();
}

function displayQuote() {
	let randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber][0];
	document.getElementById('tweet').href = "https://twitter.com/intent/tweet?text=" + quotes[randomNumber][0];
	document.getElementById('nameDisplay').innerHTML = names[randomNumber][0];
	
}

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));