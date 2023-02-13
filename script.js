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
     alert('If Your An Eagles Fan, I Think Your Best Bet Is To Hop In The Dumpster And Be Taken To The Nearest Land Fill Where You Belong');
 }
 function complementWd() {
     alert("Your Breath Doesn't stink today");
     alert("You BUZZCUT Looks Better Than Ever");
     alert('You Dont Have That Big Of An Ego. Enless Your Cade.');
     alert('You Have No Friends For Good Reason');
     alert('Your The Best Person Ever (But Only If You Are A Chiefs Fan)')
 }
 function newsWd() {
     alert('No Snitching');
     alert('No Giving The Site Link To Anybody Without My Concent');
     alert('No Letting The Teacher See And Report My Site');
     alert('The Chief One The Super Bowl. All Eagals Fans Must Be Taken Out With The Trash');
 }

 //Calling All Functions & Event Listeners
 insultBtn.addEventListener('click', insultWd);
 complementBtn.addEventListener('click', complementWd);
 currentNews.addEventListener('click', newsWd);