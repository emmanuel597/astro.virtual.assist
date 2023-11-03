setTimeout(function1, 10000);

function function1 (){
document.getElementById("loadpage").style.display="none" ;
} ; 


let micon = false;
let completedvalue = 0;
let completed = document.getElementById("completed");
let load = document.getElementById("load");
let mainaudio = document.getElementById("mainaudio");
let audio1 = document.getElementById("audio1");
let audio2 = document.getElementById("audio2");
let audio3 = document.getElementById("audio3");
let audio4 = document.getElementById("audio4");
let utube = document.getElementById("youtube");
let tab = document.getElementById("tab");
let username = document.getElementById("username");
let date = 0;
 setInterval((function datev(){date = new Date; console.log(date)}), 1000);
let on = false;
let text = "";
let chattext = document.getElementById("chat");
let enter = document.getElementById("enter");
let mic = document.getElementById("mic");
let mic2 = document.getElementById("mic2");
let question = "";
let question2 = "";
let circle = document.getElementById("circle");
let acceptinput = false;
let reply = "";

enter.addEventListener("click", f2)

function f2 (){
    let chat = document.createElement("p");
    let box = document.createElement("section");
    let box2 = document.createElement("article");
    reply = document.createElement("h6");
let chatarea = document.getElementById("chatarea");
if(on==false){chat.innerText=chattext.value}
else{chat.innerText=text;}
box.appendChild(chat)
box2.appendChild(reply)
chatarea.appendChild(box)
chatarea.appendChild(box2);
let chat2 = chat.innerText;
chatarea.scrollTo(0, 300000)

let value1 = "";

    let split = chattext.value.split(" ")
    let sentencesplit = input.value.split(".")
    console.log(split)
    console.log(split[0])
    if(split[0]=="how" || split[0]=="how's"){value1="describe"; console.log(value1)}
    else if(split[0]=="what" || split[0]=="what's"){value1="explain"; console.log(value1)}
    else if(split[0]=="who"){value1="name"; console.log(value1)}
    else if(split[0]=="where" || split[0]=="where's"){value1="place"; console.log(value1)}
    else if(split[0]=="when"){value1="time"; console.log(value1)}
    else if(split[0]=="why"){value1="question"; console.log(value1)}
    else if(split[0]=="are"){value1="yesorno"; console.log(value1)}
    else if(split[0]=="have"){value1="hyesorno"; console.log(value1)}
    else if(split[0]=="you"){value1= "mestatement"; console.log(value1)};

 let reference = "";

 if(chat.innerHTML.includes("you")){reference="me"; console.log(reference)}
  else if(chat.innerHTML.includes("me")){reference="user"; console.log(reference)}
  else if(chat.innerHTML.includes("my")){reference="user"; console.log(reference)}
  else if(chat.innerHTML.includes("mine")){reference="user"; console.log(reference)}
  else if(chat.innerHTML.includes("it ") || chat.innerHTML.includes("it's ")){reference="undefined"; console.log(reference)}
  else if(chat.innerHTML.includes("i ")){reference="user"; console.log(reference)}
  else if(chat.innerHTML.includes("your")){reference="me"; console.log(reference)}
  else if(chat.innerHTML.includes("astro")){reference="me"; console.log(reference)}
 //else if(chat.innerHTML.includes("he")){reference="he"; console.log(reference)}
 //else if(chat.innerHTML.includes("her")){reference="she"; console.log(reference)}
 else if(chat.innerHTML.includes("she")){reference="she"; console.log(reference)}
 else if(chat.innerHTML.includes("him")){reference="he"; console.log(reference)};

 let day = "";
 if(chat.innerHTML.includes("today")){day="today"; console.log(day)}
 else if(chat.innerHTML.includes("tomorrow")){day="tomorrow"; console.log(day)}
 else if(chat.innerHTML.includes("yesterday")){day="yesterday"; console.log(day)}
 else if(chat.innerHTML.includes("day")){day="today"; console.log(day)}
 else if(chat.innerHTML.includes("date")){day="day"; console.log(day)};

 let feeling = "";
 if(chat.innerHTML.includes("sad")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("stupid")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("useless")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("annoying")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("hate")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("nice")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("love")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("okay")){feeling="good"; console.log(feeling)} 
 else if(chat.innerHTML.includes("good")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("bad")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("fine")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("fool")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("mad")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("idiot")){feeling="bad"; console.log(feeling)}
 else if(chat.innerHTML.includes("amazing")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("funny")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("cute")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("wonderful")){feeling="good"; console.log(feeling)}
 else if(chat.innerHTML.includes("rough")){feeling="bad"; console.log(feeling)};

 let greeting = "";
 if(chat.innerHTML.includes("hello")){greeting="hi"; console.log(greeting)}
 else if(chat.innerHTML.includes("hi ")){greeting="hi"; console.log(greeting)}
 else if(chat.innerHTML.includes("good morning")){greeting="morning"; console.log(greeting)}
 else if(chat.innerHTML.includes("good evening")){greeting="evening"; console.log(greeting)}
 else if(chat.innerHTML.includes("good afternoon")){greeting="afternoon"; console.log(greeting)}
 else if(chat.innerHTML.includes("good night")){greeting="night"; console.log(greeting)}
 else if(chat.innerHTML.includes("what's up")){greeting="hi"; console.log(greeting)}
 else if(chat.innerHTML.includes("how far")){greeting="hi"; console.log(greeting)}
 else if(chat.innerHTML.includes("bye")){greeting="bye"; console.log(greeting)};

 let verb = "";
 if(chat.innerHTML.includes("weather")){verb="weather"; console.log(verb)}
 else if(chat.innerHTML.includes("miss")){verb="miss"; console.log(verb)}
 else if(chat.innerHTML.includes("meet")){verb="meet"; console.log(verb)}
 else if(chat.innerHTML.includes("missed")){verb="missed"; console.log(verb)}
 else if(chat.innerHTML.includes("long")){verb="since"; console.log(verb)}
 else if(chat.innerHTML.includes("while")){verb="since"; console.log(verb)}
 else if(chat.innerHTML.includes("spoke")){verb="speak"; console.log(verb)}
 else if(chat.innerHTML.includes("thank")){verb="thank"; console.log(verb)}
 else if(chat.innerHTML.includes("name")){verb="name"; console.log(verb)}
 else if(chat.innerHTML.includes("welcome")){verb="welcome"; console.log(verb)}
  else if(chat.innerHTML.includes("pleasure")){verb="pleasure"; console.log(verb)}
  else if(chat.innerHTML.includes("sorry")){verb="sorry"; console.log(verb)};

 

 let statement = greeting+value1+reference+feeling+verb+day;
  console.log(statement);
 


  let num = Math.floor(Math.random() *10)
  console.log(num)
if(num==1){question="would you like me to read your scheduel"}
else if(num==3){question="would you like me to play you a song"}
else if(num==4){question="would you like me to tell you a joke"}
else if(num==6){question="how may i help you"}
else if(num==7){question2="how are you"}
else if(num==8){question2="how is your day"}
else if(num==9){question2="do you love dogs"}
else if(num==0){question2="would you like to play a game"};
console.log(question);



if(chat.innerText=="hi"){reply.innerHTML="hello"+" "+username.value+" "+question}
else if(chat.innerText=="hi astro"){reply.innerHTML="hello"+" "+username.value}
else if(chat.innerText=="astro hi"){reply.innerHTML="hello"+" "+username.value}
else if(chat.innerText=="hey"){reply.innerHTML="hello"}
else if(chat.innerText=="hey astro"){reply.innerHTML="hello"}
else if(chat.innerText=="hey you"){reply.innerHTML="hello"}
else if(chat.innerText=="astro hey"){reply.innerHTML="hello"}
else if(chat.innerText=="how far"){reply.innerHTML="good"}
else if(chat.innerText=="what's up"){reply.innerHTML="the sky😂"}
else if(chat.innerText=="what's up with you"){reply.innerHTML="nothing much"}
else if(chat.innerText=="what's going on"){reply.innerHTML="nothing much"}
else if(chat.innerText=="ok"){reply.innerHTML="hmm"}
else if(chat.innerText=="okay"){reply.innerHTML="😊"}
else if(chat.innerText=="really"){reply.innerHTML="😊"}
else if(chat.innerText=="" || chat.innerText==""){reply.innerHTML="i don't have a response for that"}
else if(chat.innerText=="how are you" || chat.innerText==""){reply.innerHTML="good thanks for asking"}
else if(chat.innerText=="how is your day" || chat.innerText=="how was your day"){reply.innerHTML="fine, how was your's"}
else if(chat.innerText=="how are you doing" || chat.innerText==""){reply.innerHTML="good,how about you"}
else if(chat.innerText=="tell me the time" || chat.innerText=="what's the time"){reply.innerHTML=date.toLocaleTimeString()}
else if(chat.innerText=="what's todays date" || chat.innerText=="what's today date" || chat.innerText=="what is todays date" || chat.innerText=="what's the date" || chat.innerText=="what is the date" || chat.innerText=="what day is today"){reply.innerHTML=date.toLocaleDateString()}
else if(chat.innerText=="do you accept to abbriveations" || chat.innerText=="can i use abbriveatiions"){reply.innerHTML="no"}
else if(chat.innerText=="fine" || chat.innerText=="it's fine" || chat.innerText=="that's fine" || chat.innerText=="i'm fine" || chat.innerText=="i am fine"  ){reply.innerHTML="okay good to here that"}
else if(chat.innerText=="sad" || chat.innerText=="that's sad" || chat.innerText=="i'm sad" || chat.innerText=="i am sad" ){reply.innerHTML="sorry to hear that"}
else if(chat.innerText=="nice" || chat.innerText=="that's nice"){reply.innerHTML="ok"}
else if(chat.innerText=="what do we talk about" || chat.innerText=="so what do we talk about" || chat.innerText=="what should we talk about" ){reply.innerHTML="i don't know"}
else if(chat.innerText=="do you have games" || chat.innerText=="do you have inbuilt games"){reply.innerHTML="yes i have three inbuilt game which are memory number , tictactoe , rock,paper,scissors."}
else if(chat.innerText=="you pick" || chat.innerText=="pick"){reply.innerHTML="how about x and o"}
else if(chat.innerText=="who made you" || chat.innerText=="who created you" || chat.innerText=="who designed you"){reply.innerHTML="i was designed by Emmanuel emmanuel"}

else if(chat.innerText=="tell me a joke" || chat.innerText=="can you tell me a joke" || chat.innerText=="tell me another joke" || chat.innerText=="another joke" || chat.innerText=="i want to hear another joke"){
    let random = Math.floor(Math.random() *10)
  if(random==0){joke = "What did the left eye say to the right eye? Between you and me, something smells."}
  else if(random==1){joke = "I was going to tell you a joke about boxing but I forgot the punch line."}
  else if(random==2){joke = "Why couldn't the sunflower ride its bike? It lost its pedals."}
  else if(random==3){joke = "I ate a sock yesterday. It was very time-consuming."}
  else if(random==4){joke = "What kind of candy do astronauts like? Mars bars."}
  else if(random==5){joke = "What does a pig put on dry skin? Oinkment."}
  else if(random==6){joke = "Why do we tell actors to 'break a leg?' Because every play has a cast."}
  else if(random==7){joke = "My uncle named his dogs Timex and Rolex. They're his watch dogs."}
  else if(random==8){joke = "Which is faster, hot or cold? Hot, because you can catch cold."}
  else if(random==9){joke = "Why do oranges wear sunscreen? So they don't peel."}; reply.innerHTML=joke}

else if(chat.innerText=="wow" || chat.innerText=="uh"){reply.innerHTML="😊"}
else if(chat.innerText=="i never new that"){reply.innerHTML="😊"}
else if(chat.innerText=="can you give me a nickname" || chat.innerText=="give me a nickname" || chat.innerText=="i want a nickname"){reply.innerHTML="okay how about"+" "+username.slice(0,3)}
else if(chat.innerText=="are you a robot" || chat.innerText=="are you robot or human"){reply.innerHTML="no i am a chat bot designed to majorlly asist you"}
else if(chat.innerText=="you're boring" || chat.innerText=="you suck"){reply.innerHTML="i am sorry if you think so but i was not designed to have conversations i was designed to asist you"}
else if(chat.innerText=="how old are you" || chat.innerText=="what's your age"){reply.innerHTML="i am a 100 years just kidding i don't have an age"}

else if(chat.innerText=="tell me something" || chat.innerText=="tell me a fact" || chat.innerText=="can you tell me a fact" || chat.innerText=="i want to hear a fact"){
    let random = Math.floor(Math.random()*10)
  if(random==0){fact = " Sliced bread was first manufactured by machine and sold in the 1920s by the Chillicothe Baking Company in Missouri. It was the greatest thing since…unsliced bread? (chllicothenews.com)"}
  else if(random==1){fact = "The tallest man ever recorded was American giant Robert Wadlow (1918–1940), who stood 8 feet 11 inches. Wadlow's size was the result of an abnormally enlarged pituitary gland. (guinnessworldrecords.com)"}
  else if(random==2){fact = "The tallest living man is 39-year-old Sultan Kosen, from Turkey, who is 8 feet, 2.8 inches, who set the record in 2009. His growth is also due to a pituitary issue. (guinnessworldrecords.com)"}
  else if(random==3){fact = "The oldest person ever to have lived (whose age could be authenticated), a French woman named Jeanne Louise Calment, was 122 years old when she died in 1997. (guinnessworldrecord.com)"}
  else if(random==4){fact = "The original name for the search engine Google was Backrub. It was renamed Google after the googol, which is the number one followed by 100 zeros. (about.google)"}
  else if(random==5){fact = "The oldest-known living land animal is a tortoise named Jonathan, who is about to turn 190 years old. He was born in 1832 and has lived on the island of St. Helena in the Atlantic Ocean since 1882. (guinnessworldrecords.com)"}
  else if(random==6){fact = "Polar bears have black skin. And actually, their fur isn’t white—it’s see-through, so it appears white as it reflects light."}
  else if(random==7){fact = "Tigers’ skin is actually striped, just like their fur. Also, no two fur patterns are alike."}
  else if(random==8){fact = "There are no muscles in your fingers: Their function is controlled by muscles in your palms and arms. (assh.org)"}
  else if(random==9){fact = "It’s impossible to hum while holding your nose (just try it!)."}; reply.innerHTML=fact}

else if(chat.innerText=="i am bored" || chat.innerText=="i'm bored"){reply.innerHTML="lets play a game"}
else if(chat.innerText=="it's been long" || chat.innerText=="its been long"){reply.innerHTML="yes it has"}
else if(chat.innerText=="do you have jokes" || chat.innerText=="do you have fact"){reply.innerHTML="yes"}
else if(chat.innerText=="the network is bad" || chat.innerText=="the network is slow"){reply.innerHTML="sorry to hear that"}
else if(chat.innerText=="what did you say" || chat.innerText=="what did you just say"){reply.innerHTML="am sorry did i say anything offensive"}
else if(chat.innerText=="why are you slow" || chat.innerText==""){reply.innerHTML="it must be network"}
else if(chat.innerText=="what's my name" || chat.innerText=="what is my name" || chat.innerText=="my name is"){reply.innerHTML="that's simple your name is"+" "+username.value}
else if(chat.innerText=="open youtube" || chat.innerText=="open YouTube"){reply.innerHTML="opening youtube"; utube.click()}
else if(chat.innerText=="open new tab" || chat.innerText=="open a new tab"){reply.innerHTML="opening a new tab"; tab.click()}
else if(chat.innerText=="how do i use you" || chat.innerText=="how do i talk to you"){reply.innerHTML="type command to see what i can assist you with"}
else if(chat.innerText=="how can you help me" || chat.innerText=="how can you asist me"){reply.innerHTML="by asisting you with functions like playing song or adding reminder"}
else if(chat.innerText=="what are your limitations" || chat.innerText=="what are your limits"){reply.innerHTML="i cant answer so basic questions"}
else if(chat.innerText=="how do i use you" || chat.innerText=="how do i talk to you"){reply.innerHTML="you could either type your command or press the voice button to talk. note when typing do not add expressions like question mark or eclamation mark."}
else if(chat.innerText=="what can you do" || chat.innerText=="what do you do" || chat.innerText=="what can you do for me"){reply.innerHTML="i am a virtual assistant that was made to assist you"}
else if(chat.innerText=="i need your help" || chat.innerText=="can you help me" || chat.innerText=="can you assist me"){reply.innerHTML="just type your command and i will see what i can do"}

else if(chat.innerText=="i hate you" || chat.innerText=="i hate your voice"){reply.innerHTML="i sorry to heard that"}
else if(chat.innerText=="you are stupid" || chat.innerText=="you are useless"){reply.innerHTML="i am sad you think so"}
else if(chat.innerText=="you are annoying" || chat.innerText=="you are bad"){reply.innerHTML="sorry to hear that 😥"}
else if(chat.innerText=="youre disgusting" || chat.innerText==""){reply.innerHTML="😥"}
else if(chat.innerText=="what are you" || chat.innerText==""){reply.innerHTML="i am a vitual assistant made for the purpose to assist you with some basic functions"}
else if(chat.innerText=="i love you" || chat.innerText=="you're so useful"){reply.innerHTML="thanks for the compliment"}
else if(chat.innerText=="youre a life saver" || chat.innerText=="you are good"){reply.innerHTML="thanks 😊"}
else if(chat.innerText=="you are wonderful" || chat.innerText=="you're good at your job"){reply.innerHTML="thanks"+" "+username.value}
else if(chat.innerText=="no problem" || chat.innerText=="no p"){reply.innerHTML="😊"}
else if(chat.innerText=="you're welcome" || chat.innerText=="you are welcome"){reply.innerHTML="😊"}
else if(chat2.includes("send mail to")){reply.innerHTML="okay mail sent"; acceptinput=true; mail()}
else if(chat2.includes("search for")){reply.innerHTML="okay"; acceptinput=true; search(); searchd.click()}
else if(chat.innerText=="flip a coin"){  let coinv = Math.floor(Math.random() *2);  if(coinv==1){ coin="head"} else{coin="tail"}; reply.innerText=coin}
else if(chat.innerText=="roll a dice"){  let dicev = Math.floor(Math.random() *7);  dice = dicev;  console.log(dicev); reply.innerText=dice}
else if(chat2.includes("set an alarm for")){reply.innerHTML="okay"; acceptinput=true; alarm(); localStorage.setItem("state3", alarmvalue) }
else if(chat.innerText=="view active alarm" || chat.innerText=="read active alarm"){reply.innerHTML="okay you have an alarm for"+" "+alarmvalue}
else if(chat.innerText=="clear all alarm" || chat.innerText=="cancel all alarm" || chat.innerText=="delete all alarm"){reply.innerHTML="okay all alarms have been canceled"; alarmvalue="00:00"; localStorage.setItem("state3", alarmvalue); document.getElementById("add2").innerText="add" }
else if(chat2.includes("remind me to")){reply.innerHTML="okay"; acceptinput=true; reminder()}
else if(chat.innerText=="read reminder 1" || chat.innerText=="view reminder 1" || chat.innerText=="read reminder one" || chat.innerText=="view reminder one"){reply.innerHTML=dvalue1.value}
else if(chat.innerText=="read reminder 2" || chat.innerText=="view reminder 2" || chat.innerText=="read reminder two" || chat.innerText=="view reminder two"){reply.innerHTML=dvalue2.value}
else if(chat.innerText=="read reminder 3" || chat.innerText=="view reminder 3" || chat.innerText=="read reminder three" || chat.innerText=="view reminder three"){reply.innerHTML=dvalue3.value}
else if(chat.innerText=="clear reminder 1" || chat.innerText=="delete reminder 1" || chat.innerText=="clear reminder one" || chat.innerText=="delete reminder one"){reply.innerHTML="reminder 1 has been cleared"; dvalue1.value=""; dtime.value=""}
else if(chat.innerText=="clear reminder 2" || chat.innerText=="delete reminder 2" || chat.innerText=="delete reminder two" || chat.innerText=="clear reminder two"){reply.innerHTML="reminder 2 has been cleared"; dvalue2.value=""; dtime2.value=""}
else if(chat.innerText=="clear reminder 3" || chat.innerText=="delete reminder 3" || chat.innerText=="clear reminder three" || chat.innerText=="delete reminder three"){reply.innerHTML="reminder 3 has been cleared"; dvalue3.value=""; dtime3.value=""}
else if(chat.innerText=="add note" || chat.innerText=="add Note"){reply.innerHTML="okay"; show(); document.getElementById("notes").style.display="block";
document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="none";
document.getElementById("settings").style.display="none"; title.innerHTML="notes";}
else if(chat.innerText=="settings" || chat.innerText=="view settings" || chat.innerText=="show settings" || chat.innerText=="open settings"){reply.innerHTML="okay"; show(); document.getElementById("settings").style.display="block";
document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="none"; title.innerHTML="setting";}
else if(chat.innerText=="calculator" || chat.innerText=="open calculator" || chat.innerText=="show calculator"){reply.innerHTML="okay"; show(); document.getElementById("calculators").style.display="block";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="none";
document.getElementById("settings").style.display="none"; title.innerHTML="Calculator";}
else if(chat.innerText=="read note 1" || chat.innerText=="view note 1" || chat.innerText=="read note one" || chat.innerText=="view note one" || chat.innerText=="read Note 1" || chat.innerText=="view Note 1"){reply.innerHTML=note1.value}
else if(chat.innerText=="read note 2" || chat.innerText=="view note 2" || chat.innerText=="read note two" || chat.innerText=="view note two" || chat.innerText=="read Note 2" || chat.innerText=="view Note 2"){reply.innerHTML=note2.value}
else if(chat.innerText=="read note 3" || chat.innerText=="view note 3" || chat.innerText=="read note three" || chat.innerText=="view note three" || chat.innerText=="read Note 3" || chat.innerText=="view Note 3"){reply.innerHTML=note3.value}
else if(chat.innerText=="clear note 1"){reply.innerHTML="note 1 has been cleared"; note1.value="";}
else if(chat.innerText=="clear note 2"){reply.innerHTML="note 2 has been cleared"; note2.value="";}
else if(chat.innerText=="clear note 3"){reply.innerHTML="note 3 has been cleared"; note3.value="";}
else if(chat.innerText=="edit my schedule" || chat.innerText=="edit schedule"){reply.innerHTML="okay"; show(); document.getElementById("scheduels").style.display="block";
document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="none";
document.getElementById("settings").style.display="none"; title.innerHTML="schedule";}
else if(chat.innerText=="read my schedule" || chat.innerText=="view my schedule"){reply.innerHTML= scheduelsvalue.value; completed.style.display="block"; box2.appendChild(completed)}
else if(chat.innerText=="clear my schedule" || chat.innerText=="delete my schedule"){reply.innerHTML="your scheduel has been cleared"; scheduelsvalue.value="";}
else if(chat.innerText=="play audio 1" || chat.innerText=="play audio one" || chat.innerText=="play"+" "+document.getElementById("ainput1").value.slice(12,)){reply.innerHTML="playing audio1"; mainaudio.play()}
else if(chat.innerText=="pause audio 1" || chat.innerText=="pause audio one" || chat.innerText=="pause"+" "+document.getElementById("ainput1").value.slice(12,)){reply.innerHTML="audio1 paused"; mainaudio.pause()}
else if(chat.innerText=="play audio 2" || chat.innerText=="play audio two" || chat.innerText=="play"+" "+document.getElementById("ainput2").value.slice(12,)){reply.innerHTML="playing audio2"; audio1.play()}
else if(chat.innerText=="pause audio 2" || chat.innerText=="pause audio two" || chat.innerText=="pause"+" "+document.getElementById("ainput2").value.slice(12,)){reply.innerHTML="audio2 paused"; audio1.pause()}
else if(chat.innerText=="play audio 3" || chat.innerText=="play audio three" || chat.innerText=="play"+" "+document.getElementById("ainput3").value.slice(12,)){reply.innerHTML="playing audio3"; audio2.play()}
else if(chat.innerText=="pause audio 3" || chat.innerText=="pause audio three" || chat.innerText=="pause"+" "+document.getElementById("ainput3").value.slice(12,)){reply.innerHTML="audio3 paused"; audio2.pause()}
else if(chat.innerText=="play audio 4" || chat.innerText=="play audio four" || chat.innerText=="play"+" "+document.getElementById("ainput4").value.slice(12,)){reply.innerHTML="playing audio4"; audio3.play()}
else if(chat.innerText=="pause audio 4" || chat.innerText=="pause audio four" || chat.innerText=="pause"+" "+document.getElementById("ainput4").value.slice(12,)){reply.innerHTML="audio4 paused"; audio3.pause()}
else if(chat.innerText=="play audio 5" || chat.innerText=="play audio five" || chat.innerText=="play"+" "+document.getElementById("ainput5").value.slice(12,)){reply.innerHTML="playing audio5"; audio4.play()}
else if(chat.innerText=="pause audio 5" || chat.innerText=="pause audio five" || chat.innerText=="pause"+" "+document.getElementById("ainput5").value.slice(12,)){reply.innerHTML="audio5 paused"; audio4.pause()}
else if(chat.innerText=="text to speech" || chat.innerText=="text-to-speech" || chat.innerText=="open text to speech" || chat.innerText=="open text-to-speech"){reply.innerHTML="okay lets begin"; acceptinput=true; show(); document.getElementById("texttospeech").style.display="block";
document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("settings").style.display="none"; title.innerHTML="text-to-speech";}
else if(chat.innerText=="show sidebar" || chat.innerText=="activate sidebar"){reply.innerHTML="side bar activated"; show()}
else if(chat.innerText=="hide sidebar" || chat.innerText=="deactivate sidebar"){reply.innerHTML="side bar deactivated"; hide()}
else if(chat.innerText=="show timer"){reply.innerHTML="okay"; document.getElementById("timer").style.display="flex"}
else if(chat.innerText=="hide timer"){reply.innerHTML="okay"; document.getElementById("timer").style.display="none"}
else if(chat2.includes("calculate")){reply.innerHTML="okay"; calculator()}

else if(statement=="describeme"){reply.innerHTML= "good, thanks for asking"}
 else if(statement=="describeme"+day){reply.innerHTML= "good would you like to tell me about yours"}
 else if(statement=="describeme"+verb){reply.innerHTML= "good"}
 else if(statement=="yesornomegood"){reply.innerHTML= "yes"}
 else if(statement=="yesornomebad"){reply.innerHTML= "no"}
 else if(statement=="mestatementmebad"){reply.innerHTML= "i sad that you think so 😥"}
 else if(statement=="megoodmeet"){reply.innerHTML= "it's nice to meet you to"}
 else if(statement=="explainmename"){reply.innerHTML= "my name is astro"}
 else if(statement=="nameme"){reply.innerHTML= "i am a virt assistant"}
 else if(statement=="username"){ let nameg = chat2.indexOf("is"); reply.innerHTML= "hi its nice to meet you"+chat2.slice(nameg+2, 20)}
 else if(statement=="explain"){reply.innerHTML= "i am not sure of "+chat2+" but i could help you research on that"}
 else if(statement=="name"){reply.innerHTML= "i am not sure of "+chat2+" but i could help you research on that"}
 else if(statement=="mestatementmegood"){reply.innerHTML= "thanks 😊"}
 else if(statement=="mebad"){reply.innerHTML= "i am sorry that you think so 😥"}
 else if(statement=="megood"){reply.innerHTML= "thanks 😊"}
 else if(statement=="hi"){reply.innerHTML= "hi"}
 else if(statement=="usersorry"){reply.innerHTML= "its okay"}
 else if(statement=="nightgood"){reply.innerHTML= "good night"+" "+username.value}
 else if(statement=="morninggood"){reply.innerHTML= "good morning"+" "+username.value}
 else if(statement=="eveninggood"){reply.innerHTML= "good evening"+" "+username.value}
 else if(statement=="afternoongood"){reply.innerHTML= "good afternoon"+" "+username.value}
 else if(statement=="userbadtoday"){reply.innerHTML= "i am sorry to hear that"+" "+username.value}
 else if(statement=="usergoodtoday"){reply.innerHTML= "that nice to hear"+" "+username.value}
 else if(statement=="userbad"){reply.innerHTML= "i am sorry to hear that"+" "+username.value}
 else if(statement=="usergood"){reply.innerHTML= "that nice to hear"+" "+username.value}
 else if(statement=="bye"){reply.innerHTML= "bye"}
 else if(statement=="mewelcome"){reply.innerHTML= "😊"}
 else if(statement=="userpleasure"){reply.innerHTML= "😊"}
 else if(statement=="userpleasure"){reply.innerHTML= "😊"}
 else if(statement=="methank"){reply.innerHTML= "my pleasure"}
 else if(statement=="thank"){reply.innerHTML= "😊"}
 else if(statement=="undefinedsince"){reply.innerHTML= "yes it has"}
 else if(statement=="memissed"){reply.innerHTML= "me too"}
 else if(statement=="memiss"){reply.innerHTML= "me too"}
 else if(statement=="hi"+value1+reference+day){reply.innerHTML= "hi"}

else if(chat.innerText=="activate voice mode" || chat.innerText=="voice mode on" || chat.innerText=="turn on voice mode"){reply.innerHTML="voice mode activated"; micon=true; document.getElementById("sleepscreen").style.display="block"; document.getElementById("sleepscreen").style.animationName="transistion3";
setInterval(speak2, 6000); circle.style.display="block"}
else if(chat.innerText=="voice mode off" || chat.innerText=="close" || chat.innerText=="turn off voice mode" || chat.innerText=="deactivate voice mode" ){reply.innerHTML="voice mode deactivated"; micon=false; setTimeout(function sleeps (){document.getElementById("sleepscreen").style.display="none"}, 1000);
document.getElementById("sleepscreen").style.animationName="transistion2"; circle.style.display="none"}
else if(chat2.includes("yes")){reply.innerHTML="ok"}
else if(chat2.includes("no")){reply.innerHTML="ok"}

else if(chat2.includes("good")){reply.innerHTML="that's nice to here"}
else if(chat2.includes("hello")){reply.innerHTML="hi"}
else if(chat2.includes("okay")){reply.innerHTML="😊"}
else if(chat2.includes("great")){reply.innerHTML="hmm"}
else if(chat2.includes("bye")){reply.innerHTML="bye,it was nice talking to you"}
else if(chat2.includes("goodmorning")){reply.innerHTML="goodmorning"}
else if(chat2.includes("goodafternoon")){reply.innerHTML="goodafternoon"}
else if(chat2.includes("goodevening")){reply.innerHTML="goodevening"}
else if(chat2.includes("goodnight")){reply.innerHTML="goodnight"}
else if(chat2.includes("talking to you")){reply.innerHTML="okay"+" "+username.value}
else if(chat2.includes("the time")){reply.innerHTML=date}
else if(chat2.includes("thank")){reply.innerHTML="my pleasure"}
else if(chat2.includes("play a game")){reply.innerHTML="okay i have three inbuilt games which are memory number , tictactoe , rock,paper,scissors. just type the name of the game you want to play to begin"}
else if(chat2.includes("yes")){reply.innerHTML="ok"}
else if(chat2.includes("no")){reply.innerHTML="okay"}
else if(chat2.includes("boring")){reply.innerHTML="😥"}
else if(chat2.includes("missed you")){reply.innerHTML="same here"}
else if(chat2.includes("shutup") || chat.innerText=="keep quiet" || chat.innerText=="stop talking"){reply.innerHTML="sorry to here that am i annoying you"}
else if(chat2.includes("me too")){reply.innerHTML="😊"}
else if(chat2.includes("same here")){reply.innerHTML="😊"}
else if(chat2.includes("can i call you")){reply.innerHTML="i dont think my codes will allow that"}


else{reply.innerHTML="am sorry i do not have a response for that"};
chattext.value="";
let msg = new SpeechSynthesisUtterance();
let voices = window.speechSynthesis.getVoices();
msg.voice = voices[6]; 
msg.text = reply.innerText;
window.speechSynthesis.speak(msg);
};




mic.addEventListener("click", speak)
function speak2 (){
    let voice = new window.webkitSpeechRecognition;

voice.onstart = function f3(){console.log("speak"); on=true; circle.style.display="block"};
voice.onend = function f4(){console.log("stop"); on=false; circle.style.display="none"};

      voice.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        console.log(transcript);
        text = transcript;
        console.log(text)
      };
      if(micon==true){
      voice.addEventListener("result", f2)
      voice.onend(voice.start())
    setTimeout((function end(){voice.stop()}), 5000)}else{}
}

mic2.addEventListener("click", speak)
function speak (){
    let voice = new window.webkitSpeechRecognition;

voice.onstart = function f3(){console.log("speak"); on=true;};
voice.onend = function f4(){console.log("stop"); on=false;};

      voice.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        console.log(transcript);
        text = transcript;
        console.log(text)
      };
      voice.addEventListener("result", f2)
    voice.start();
};

let scheduelsvalue = document.getElementById("scheduelsvalue");
let avalue = document.getElementById("alarmvalue");
let add2 = document.getElementById("add2");
let notevalue = "";
let dvalue1 = document.getElementById("d1");
let dvalue2 = document.getElementById("d2");
let dvalue3 = document.getElementById("d3");
let dtime = document.getElementById("dtime");
let dtime2 = document.getElementById("dtime2");
let dtime3 = document.getElementById("dtime3");
let note1 = document.getElementById("note1");
let note2 = document.getElementById("note2");
let note3 = document.getElementById("note3");

let rvalue = "";
let alarmvalue = 0;
let command = 0;
let alarmtime = 0;
setInterval((function datelog (){
  let time = date.toString();
alarmtime = time.slice(16, 21);
console.log(alarmtime)}), 1000)


function alarm (){
  if(on==true){chattext.value=text}
  else{};
  if(acceptinput==true){alarmvalue=chattext.value.slice(17, 22)}
  else{};
console.log(alarmvalue);
setInterval((function recall(){console.log(alarmvalue);
if(alarmvalue==alarmtime){     
reply.innerHTML="your alarm for"+" "+alarmvalue+" "+"is active"; avalue.innerHTML="time up"; document.getElementById("timesup").play(); add2.innerText="stop";}
else{};}), 1000);
}

let value1 = 0;
let value2 = 0;

document.getElementById("key1").addEventListener("click", () => {let value = value1.concat(value1, num); document.getElementById("calcscreen").value=value})
function calculator (){

}

function reminder (){
  if(on==true){chattext.value=text}
  else{};
  if(acceptinput==true){dvalue1.value = chattext.value.slice(13, 50)}
  else{};
  let locate = dvalue1.value.indexOf("by");
  dtime.value = dvalue1.value.slice(locate+3,)
setInterval((function recall(){console.log(dtime.value);
if(dtime.value==alarmtime){reply.innerHTML="remember to"+" "+dvalue1+" "+username}
else{};}), 1000);
}

function note (){
  if(acceptinput==true){notevalue = chattext.value}
  else{};
  window.localStorage.setItem("note", notevalue)

console.log(notevalue);
}

function scheduel (){
  if(acceptinput==true){notevalue = chattext.value}
  else{};
  window.localStorage.setItem("note", notevalue)

console.log(notevalue);
}

function clear (){
  if(acceptinput==true){notevalue = chattext.value}
  else{};
  window.localStorage.setItem("note", notevalue)

console.log(notevalue);
}

function texttospeech (){
  if(acceptinput==true){reply.innerHTML=text}
  else{};
console.log();
}




function show(){
  if(window.innerWidth>500){
  document.getElementById("sidepanel").style.display="flex";
  document.getElementById("chat").style.width="640px";
  document.getElementById("chat").style.marginLeft="300px";
  document.getElementById("img").style.left="690px";}
else{
  document.getElementById("sidepanel").style.display="flex";
  document.getElementById("cancel").style.display="none";
  document.getElementById("icons").style.display="flex";
  document.getElementById("sidepanel").style.height="91%";
  document.getElementById("sidepanel").style.width="330px";
  document.getElementById("top").style.width="330px";
}}

  function hide(){
    if(window.innerWidth>500){
    document.getElementById("sidepanel").style.display="none";
    document.getElementById("chat").style.width="950px";
    document.getElementById("chat").style.marginLeft="0px";
    document.getElementById("img").style.left="520px";}
    else{
      document.getElementById("sidepanel").style.display="none";
      document.getElementById("icons").style.display="none";
    }}

  let title = document.getElementById("tile");
let calculatork = document.getElementById("calculator");
let alarmk = document.getElementById("alarm");
let reminderk = document.getElementById("games");
let notek = document.getElementById("note");
let scheduelk = document.getElementById("clean");
let musick = document.getElementById("song");
let ttt = document.getElementById("textto");
let read = document.getElementById("read");
let ttttext = document.getElementById("texttospeechvalue");
let settingk = document.getElementById("setting");
let equal = document.getElementById("keye");
let calcvalue = document.getElementById("calcscreen");

calculatork.addEventListener("click", function2)
function function2(){
document.getElementById("calculators").style.display="block";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="none";
document.getElementById("settings").style.display="none";
title.innerHTML="Calculator";

console.log(value)
}
equal.addEventListener("click", equalf)
function equalf(){

  console.log(typeof(calcvalue.value))
}

alarmk.addEventListener("click", function3)
function function3(){
  document.getElementById("calculators").style.display="none";
  document.getElementById("alarmcircle").style.display="block";
  document.getElementById("reminders").style.display="none";
  document.getElementById("notes").style.display="none";
  document.getElementById("scheduels").style.display="none";
  document.getElementById("musics").style.display="none";
  document.getElementById("texttospeech").style.display="none";
  document.getElementById("settings").style.display="none";
title.innerHTML="Alarm";

avalue.innerHTML = alarmvalue;
}

add2.addEventListener("click", stop)
function stop (){
  if(add2.innerText=="stop"){avalue.innerHTML="00:00"; add2.innerText="add"; alarmvalue="00:00"; localStorage.setItem("state3", alarmvalue) }
 else if(add2.innerText=="add"){alarmvalue=document.getElementById("input").value; avalue.innerHTML=alarmvalue; console.log(alarmvalue); localStorage.setItem("state3", alarmvalue);
 setInterval((function recall(){console.log(alarmvalue);
  if(alarmvalue==alarmtime){ reply.innerHTML="your alarm for"+" "+alarmvalue+" "+"is active"; avalue.innerHTML="time up"; document.getElementById("timesup").play(); add2.innerText="stop"; }
  else{};}), 1000);}
}

reminderk.addEventListener("click", function4)

function function4 (){
  document.getElementById("calculators").style.display="none";
  document.getElementById("alarmcircle").style.display="none";
  document.getElementById("reminders").style.display="block";
  document.getElementById("notes").style.display="none";
  document.getElementById("scheduels").style.display="none";
  document.getElementById("musics").style.display="none";
  document.getElementById("texttospeech").style.display="none";
  document.getElementById("settings").style.display="none";
  title.innerHTML="Reminder"
setInterval((function recall(){console.log(dtime.value);
  if(dtime.value==alarmtime){         
   let box2 = document.createElement("article");
  reply = document.createElement("h6");
let chatarea = document.getElementById("chatarea");
box2.appendChild(reply)
chatarea.appendChild(box2);
reply.innerHTML="remember to"+" "+dvalue1.value+" "+username.value; dtime.value="";
  let msg = new SpeechSynthesisUtterance();
  let voices = window.speechSynthesis.getVoices();
  msg.voice = voices[6]; 
  msg.text = reply.innerText;
  window.speechSynthesis.speak(msg);}
  else{};}), 1000);
  setInterval((function recall2(){console.log(dtime2.value);
    if(dtime2.value==alarmtime){         
   let box2 = document.createElement("article");
   reply = document.createElement("h6");
let chatarea = document.getElementById("chatarea");
box2.appendChild(reply)
chatarea.appendChild(box2);
reply.innerHTML="remember to"+" "+dvalue2.value+" "+username.value; dtime2.value="";
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[6]; 
    msg.text = reply.innerText;
    window.speechSynthesis.speak(msg);}
    else{};}), 1000);
    setInterval((function recall3(){console.log(dtime3.value);
      if(dtime3.value==alarmtime){          
        let box2 = document.createElement("article");
      reply = document.createElement("h6");
  let chatarea = document.getElementById("chatarea");
  box2.appendChild(reply)
  chatarea.appendChild(box2);
  reply.innerHTML="remember to"+" "+dvalue3.value+" "+username.value; dtime3.value="";
      let msg = new SpeechSynthesisUtterance();
      let voices = window.speechSynthesis.getVoices();
      msg.voice = voices[6]; 
      msg.text = reply.innerText;
      window.speechSynthesis.speak(msg);}
      else{};}), 1000);
}

notek.addEventListener("click", function5)
function function5 (){
  document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="block";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="none";
document.getElementById("settings").style.display="none";
title.innerHTML="notes";
}

  let interval = document.getElementById("scheduletime");
scheduelk.addEventListener("click", function6)
function function6(){
  document.getElementById("calculators").style.display="none";
  document.getElementById("alarmcircle").style.display="none";
  document.getElementById("reminders").style.display="none";
  document.getElementById("notes").style.display="none";
  document.getElementById("scheduels").style.display="block";
  document.getElementById("musics").style.display="none";
  document.getElementById("texttospeech").style.display="none";
  document.getElementById("settings").style.display="none";
  title.innerHTML="schedule";
  setInterval((function recall(){
    if(completedvalue==0){
    let box2 = document.createElement("article");
    reply = document.createElement("h6");
let chatarea = document.getElementById("chatarea");
box2.appendChild(reply)
chatarea.appendChild(box2);
reply.innerHTML="your schedule for today has not been completed. type read my schedule to view it";
    let msg = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    msg.voice = voices[0]; 
    msg.text = "your schedule for today has not been completed. type read my schedule to view it";
    window.speechSynthesis.speak(msg);}else{};
}), interval.value*60000)
}

completed.addEventListener("click", f3)
function f3(){completedvalue=1; completed.style.background="green"}


musick.addEventListener("click", function7)
function function7(){
  document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="block";
document.getElementById("texttospeech").style.display="none";
document.getElementById("settings").style.display="none";
title.innerHTML="music";
}

function music1 (event){
  mainaudio.src=URL.createObjectURL(event.target.files[0])
}
function music2 (event){
  audio1.src=URL.createObjectURL(event.target.files[0])
}
function music3 (event){
  audio2.src=URL.createObjectURL(event.target.files[0])
}
function music4 (event){
 audio3.src=URL.createObjectURL(event.target.files[0])
}
function music5 (event){
  audio4.src=URL.createObjectURL(event.target.files[0])
}

ttt.addEventListener("click", function8)
function function8(){
  document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="block";
document.getElementById("settings").style.display="none";
title.innerHTML="text-to-speech";

}

read.addEventListener("click", reader)
function reader (){
  console.log(ttttext.value);

  let msg = new SpeechSynthesisUtterance();
  let voices = window.speechSynthesis.getVoices();
  msg.voice = voices[6]; 
  msg.text = ttttext.value;
  window.speechSynthesis.speak(msg);
}


let joke ="";
let story = "";
let coin = "";
let dice = "";
let fact = "";
let mailv = "buluswise@gmail.com";
let subject = "mail test";
let body = "this is the body";

function mail(){
  if(on==true){chattext.value=text}
  else{};
  if(acceptinput==true){mailv=chattext.value}
  else{};
  console.log(mailv)
let place = mailv.indexOf("to");
let place2 = mailv.indexOf("subject");
let place3 = mailv.indexOf("body");
let maila = mailv.slice(place+3, place2)
subject = mailv.slice(place2+8, place3)
body = mailv.slice(place3+5,)
console.log(subject)
console.log(maila)

  location.href="mailto:"+maila+"?"+"subject="+subject+"&"+"body="+body;
}
let searchv = "";
let searchd = document.getElementById("search");
function search(){
  if(on==true){chattext.value=text}
  else{};
  if(acceptinput==true){searchv=chattext.value.slice(11,)}
  else{};
  console.log(searchv)
  searchd.href="https://www.google.com/search?q="+searchv;  
}
let timervalue = document.getElementById("timervalue");
let timervalue2 = document.getElementById("timervalue2");
let start2 = document.getElementById("start2");
let range = document.getElementById("range");
timervalue.value = 0;
let on2 = false;

range.addEventListener("click", timermode)
function timermode(){
  if(range.value==1){timervalue.style.display="block"; timervalue2.style.display="none"}
  else if(range.value==0){timervalue2.style.display="block"; timervalue.style.display="none"}
}
start2.addEventListener("click", timer)
function timer(){
  if(start2.innerText=="start"){if(range.value==1){on2=true; setInterval(function recall (){if(on2==true){timervalue.innerHTML=timervalue.value++; start2.innerText="stop"} else{clearInterval(recall())}}, 1000)} else{setInterval(function recall(){timervalue2.value=timervalue2.value-1}, 1000)}}
  else if(start2.innerText=="stop"){on2=false; start2.innerText="start"}
}

settingk.addEventListener("click", setting)
function setting (){
  document.getElementById("calculators").style.display="none";
document.getElementById("alarmcircle").style.display="none";
document.getElementById("reminders").style.display="none";
document.getElementById("notes").style.display="none";
document.getElementById("scheduels").style.display="none";
document.getElementById("musics").style.display="none";
document.getElementById("texttospeech").style.display="none";
document.getElementById("settings").style.display="block";
title.innerHTML="settings";
}
document.getElementById("save2").addEventListener("click", save);
document.getElementById("add3").addEventListener("click", save2);
document.getElementById("add4").addEventListener("click", save3);
document.getElementById("add6").addEventListener("click", save4);
function save2 (){
  localStorage.setItem("state4", dtime.value) 
  localStorage.setItem("state5", dtime2.value) 
  localStorage.setItem("state6", dtime3.value) 
  localStorage.setItem("state7", dvalue1.value) 
  localStorage.setItem("state8", dvalue2.value) 
  localStorage.setItem("state9", dvalue3.value) 
  window.alert("reminders added")
}
function save3 (){
  localStorage.setItem("state10", note1.value) 
  localStorage.setItem("state11", note2.value) 
  localStorage.setItem("state12", note3.value) 
  window.alert("notes added")
}
function save4 (){
  localStorage.setItem("state13", scheduelsvalue.value) 
  window.alert("schedule applied")
}
function save(){
localStorage.setItem("state1", interval.value) 
localStorage.setItem("state2", username.value) 
window.alert("settings saved")
}
window.addEventListener("load", loadstate)
function loadstate(){
interval.value = localStorage.getItem("state1")
username.value = localStorage.getItem("state2")
avalue.innerHTML = localStorage.getItem("state3")
alarmvalue = localStorage.getItem("state3")
dtime.value = localStorage.getItem("state4")
dtime2.value = localStorage.getItem("state5")
dtime3.value = localStorage.getItem("state6")
dvalue1.value = localStorage.getItem("state7")
dvalue2.value = localStorage.getItem("state8")
dvalue3.value = localStorage.getItem("state9")
note1.value = localStorage.getItem("state10")
note2.value = localStorage.getItem("state11")
note3.value = localStorage.getItem("state12")
scheduelsvalue.value = localStorage.getItem("state13");
setInterval((function recall(){console.log(alarmvalue);
  if(alarmvalue==alarmtime){ reply.innerHTML="your alarm for"+" "+alarmvalue+" "+"is active"; avalue.innerHTML="time up"; document.getElementById("timesup").play(); add2.innerText="stop"; }
  else{};}), 1000);
  setInterval((function recall(){console.log(dtime.value);
    if(dtime.value==alarmtime){
      let box2 = document.createElement("article");
      reply = document.createElement("h6");
  let chatarea = document.getElementById("chatarea");
  box2.appendChild(reply)
  chatarea.appendChild(box2);
  reply.innerHTML="remember to"+" "+dvalue1.value+" "+username.value; dtime.value="";
      let msg = new SpeechSynthesisUtterance();
      let voices = window.speechSynthesis.getVoices();
      msg.voice = voices[6]; 
      msg.text = reply.innerText;
      window.speechSynthesis.speak(msg);}
    else{};}), 1000);
    setInterval((function recall2(){console.log(dtime2.value);
      if(dtime2.value==alarmtime){
        let box2 = document.createElement("article");
        reply = document.createElement("h6");
    let chatarea = document.getElementById("chatarea");
    box2.appendChild(reply)
    chatarea.appendChild(box2);
     reply.innerHTML="remember to"+" "+dvalue2.value+" "+username.value; dtime2.value="";
        let msg = new SpeechSynthesisUtterance();
        let voices = window.speechSynthesis.getVoices();
        msg.voice = voices[6]; 
        msg.text = reply.innerText;
        window.speechSynthesis.speak(msg);
       }
      else{};}), 1000);
      setInterval((function recall3(){console.log(dtime3.value);
        if(dtime3.value==alarmtime){
          let box2 = document.createElement("article");
          reply = document.createElement("h6");
      let chatarea = document.getElementById("chatarea");
      box2.appendChild(reply)
      chatarea.appendChild(box2);
      reply.innerHTML="remember to"+" "+dvalue3.value+" "+username.value; dtime3.value="";
          let msg = new SpeechSynthesisUtterance();
          let voices = window.speechSynthesis.getVoices();
          msg.voice = voices[6]; 
          msg.text = reply.innerText;
          window.speechSynthesis.speak(msg);
          }
        else{};}), 1000);
        setInterval((function recall(){
          if(completedvalue==0){    let box2 = document.createElement("article");
          reply = document.createElement("h6");
      let chatarea = document.getElementById("chatarea");
      box2.appendChild(reply)
      chatarea.appendChild(box2);
      reply.innerHTML="your schedule for today has not been completed. type read my schedule to view it";
          let msg = new SpeechSynthesisUtterance();
          let voices = window.speechSynthesis.getVoices();
          msg.voice = voices[6]; 
          msg.text = "your schedule for today has not been completed. type read my schedule to view it";
          window.speechSynthesis.speak(msg);}else{};
      }), interval.value*60000);
      setInterval((function recall(){if(alarmtime=="12:00"){completedvalue=0}}), 1000)
      let box2 = document.createElement("article");
      reply = document.createElement("h6");
  let chatarea = document.getElementById("chatarea");
  box2.appendChild(reply)
  chatarea.appendChild(box2);
  let random = Math.floor(Math.random() *4)
  if(random==1){reply.innerHTML="hi"+" "+username.value}
  else if(random==2){reply.innerHTML="hello"}
   else if(random==3){reply.innerHTML="hello"+" "+username.value+" what would you like me to do for you"}
  else if(random==0){reply.innerHTML="hello"+" "+username.value+" how may i help you"}
}
document.getElementById("menu").addEventListener("click", ()=>{
  document.getElementById("icons").style.display="flex";
  document.getElementById("menu").style.display="none";
})
document.getElementById("cancel").addEventListener("click", ()=>{
  document.getElementById("icons").style.display="none";
  document.getElementById("menu").style.display="block";
})
