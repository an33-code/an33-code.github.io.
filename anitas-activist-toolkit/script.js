/*
KEY FEATURE: Personalize it
https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
*/

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
//Will need to explain that sometimes the DOM doesn't load all the way, so the browser can't find the element for JavaScript to use

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

/*
REFACTOR ITEM 2: 
Create a separate function for displaying the script.
Be sure to update function names.
*/


//Move these variables to the top
var factList = [
  "It is estimated that between 720 and 811 million people in the world faced hunger in 2020", 
  "Around 660 million people may still face hunger in 2030, in part due to lasting effects of the COVID-19 pandemic on global food security", 
  "Nearly one in three people in the world (2.37 billion) did not have access to adequate food in 2020 – that’s an increase of almost 320 million people in just one year", 
  "Globally, 149.2 million (22.0 percent) of children under the age of five years suffered from stunting", 
  "Of the total number of undernourished people in 2020 (768 million): 282 million live in Africa, 418 million live in Asia, and  60 million live in Latin America and the Caribbean", 
  "The gender gap in the prevalence of moderate or severe food insecurity has grown even larger in the year of the COVID-19 pandemic, with the prevalence of moderate or severe food insecurity being 10 percent higher among women than men in 2020, compared with 6 percent in 2019."
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}

var displayName = document.getElementById("secret");
var button = document.getElementById("myButton");

button.addEventListener("click", displaySecret);

function displaySecret(){
  var text = document.getElementById("myText").value;
  displayName.innerHTML = text + ", did you know that by fighting to end world hunger you can help save 870 million people from starving?"
}
