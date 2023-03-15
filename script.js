//variables
const insultBtn = document.querySelector('.insult');
const complementBtn = document.querySelector('.complement');
const currentNews = document.querySelector('.currentNews');

//functions
function insultWd() {
    alert('Your Tragicly Dumb To The Point Where Got Regrets Making You');
    alert('Your Father Jumped Of A Cliff To Get Away From You');
    alert('Everybody Hates You And Only You');
    alert('Jump Off A Cliff Because You Being Dead Would Make The World A Better Place');
    alert('I Think Your Best Bet Is To Hop In The Dumpster And Be Taken To The Nearest Land Fill Where You Belong');
}
function complementWd() {
    alert("Your Breath Doesn't stink today");
    alert("You BUZZCUT Looks Better Than Ever");
    alert("You Dont Have That Big Of An Ego. (I Can't Say Enless Your Cade Anymore Because Cade Now Uses My Site)");
    alert('You Have Tons Of Friends Because Your The Best');
}
function newsWd() {
   alert('Updates Are Going To Slow Down Thanks To Me Being In Hot Water With School I.T.');
   alert('I Can"t Predict When The Next Update Will Be');
   alert('Again DO NOT Give This Site To Anyone. Snitches Have Started Getting My Site Such As Sammy. If Sammy Happens To Be On My Site Reading This...');
   alert('Sammy Go Fuck Yourself');
}

//Calling All Functions & Event Listeners
insultBtn.addEventListener('click', insultWd);
complementBtn.addEventListener('click', complementWd);
currentNews.addEventListener('click', newsWd);
