//variables
const insultBtn = document.querySelector('.insult');
const complementBtn = document.querySelector('.complement');
const currentNews = document.querySelector('.currentNews');

//functions
function insultWd() {
    alert('Your Insanly Dumb');
    alert('Nobody Looks Worse Than YOU!!!');
    alert('Everybody Hates You And Only You');
    alert('I Dont Know Anybody I Hate More That You');
    alert('I Think Your Best Bet Is To Hop In The Dumpster And Be Taken To The Nearest Land Fill Where You Belong');
    alert('Make Sure To Fill Out The Form At The Bottom At The Page To Stay Notifyed');
}
function complementWd() {
    alert("Your Breath Doesn't stink today");
    alert("You BUZZCUT Looks Better Than Ever");
    alert("You Dont Have That Big Of An Ego. (I Can't Say Enless Your Cade Anymore Because Cade Now Uses My Site)");
    alert('You Have Tons Of Friends Because Your The Best');
    alert('Make Sure To Fill Out The Form At The Bottom At The Page To Stay Notifyed');
}
function newsWd() {
   alert('Update 3.0 Will Occure Before March!');
   alert('What Do You Call A Fish With No Eyes? A Fsh');
   alert('Get It, I Know You Laughed And You Can"t Denie It');
   alert('Make Sure To Fill Out The Form At The Bottom At The Page To Stay Notifyed');
}

//Calling All Functions & Event Listeners
insultBtn.addEventListener('click', insultWd);
complementBtn.addEventListener('click', complementWd);
currentNews.addEventListener('click', newsWd);
