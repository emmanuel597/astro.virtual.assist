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

  let num = Math.floor(Math.random() *10)
  console.log(num)
if(num==1){question="would you like me to read your scheduel"}
else if(num==3){question="would you like me to play you a song"}
else if(num==4){question="would you like me to tell you a joke"}
else if(num==6){question="how may i help you"}
else if(num==7){question2="how are you"}
else if(num==8){question2="how is your day"}
else if(num==9){question2="do you love dogs"}
else if(num==0){question2="would you like to play a game"}
console.log(question);

 if(chat.innerText=="hi"){reply.innerHTML="hello"+" "+username.value+" "+question}
else if(chat.innerText=="hi astro"){reply.innerHTML="hello"+" "+username.value}
else if(chat.innerText=="astro hi"){reply.innerHTML="hello"+" "+username.value}
else if(chat.innerText=="hey"){reply.innerHTML="hello"}
else if(chat.innerText=="hey astro"){reply.innerHTML="hello"}
else if(chat.innerText=="hey you"){reply.innerHTML="hello"}
else if(chat.innerText=="astro hey"){reply.innerHTML="hello"}
else if(chat2.includes("hello")){reply.innerHTML="hi"}
else if(chat.innerText=="how far"){reply.innerHTML="good"}
else if(chat.innerText=="what's up"){reply.innerHTML="the sky😂"}
else if(chat.innerText=="what's up with you"){reply.innerHTML="nothing much"}
else if(chat.innerText=="what's going on"){reply.innerHTML="nothing much"}
else if(chat2.includes("good")){reply.innerHTML="that's nice to here"}
else if(chat.innerText=="ok"){reply.innerHTML="hmm"}
else if(chat.innerText=="okay"){reply.innerHTML="😊"}
else if(chat2.includes("okay")){reply.innerHTML="😊"}
else if(chat2.includes("great")){reply.innerHTML="hmm"}
else if(chat2.includes("bye")){reply.innerHTML="bye,it was nice talking to you"}
else if(chat.innerText=="really"){reply.innerHTML="😊"}
else if(chat2.includes("goodmorning")){reply.innerHTML="goodmorning"}
else if(chat2.includes("goodafternoon")){reply.innerHTML="goodafternoon"}
else if(chat2.includes("goodevening")){reply.innerHTML="goodevening"}
else if(chat2.includes("goodnight")){reply.innerHTML="goodnight"}
else if(chat.innerText=="i am not talking to you" || chat.innerText=="i'm not talking to you"){reply.innerHTML="okay"+" "+username.value}
else if(chat.innerText=="" || chat.innerText==""){reply.innerHTML="i don't have a response for that"}
else if(chat.innerText=="how are you" || chat.innerText==""){reply.innerHTML="good thanks for asking"}
else if(chat.innerText=="how is your day" || chat.innerText=="how was your day"){reply.innerHTML="fine, how was your's"}
else if(chat.innerText=="how are you doing" || chat.innerText==""){reply.innerHTML="good,how about you"}
else if(chat.innerText=="tell me the time" || chat.innerText=="what's the time"){reply.innerHTML=date}
else if(chat2.includes("the time")){reply.innerHTML=date}
else if(chat.innerText=="what's todays date" || chat.innerText=="what's today date" || chat.innerText=="what is todays date" || chat.innerText=="what's the date" || chat.innerText=="what is the date" || chat.innerText=="what day is today"){reply.innerHTML=date}
else if(chat2.includes("thank")){reply.innerHTML="my pleasure"}
else if(chat.innerText=="do you accept to abbriveations" || chat.innerText=="can i use abbriveatiions"){reply.innerHTML="no"}
else if(chat.innerText=="fine" || chat.innerText=="it's fine" || chat.innerText=="that's fine" || chat.innerText=="i'm fine" || chat.innerText=="i am fine"  ){reply.innerHTML="okay good to here that"}
else if(chat.innerText=="sad" || chat.innerText=="that's sad" || chat.innerText=="i'm sad" || chat.innerText=="i am sad" ){reply.innerHTML="sorry to hear that"}
else if(chat.innerText=="nice" || chat.innerText=="that's nice"){reply.innerHTML="ok"}
else if(chat.innerText=="what do we talk about" || chat.innerText=="so what do we talk about" || chat.innerText=="what should we talk about" ){reply.innerHTML="i don't know"}
else if(chat2.includes("play a game")){reply.innerHTML="okay i have three inbuilt game which would you like to play"}
else if(chat.innerText=="do you have games" || chat.innerText=="do you have inbuilt games"){reply.innerHTML="yes i have three inbuilt game"}
else if(chat.innerText=="you pick" || chat.innerText=="pick"){reply.innerHTML="how about x and o"}
else if(chat.innerText=="yes" || chat.innerText=="yes astro"){reply.innerHTML="ok"}

else if(chat.innerText=="no astro" || chat.innerText=="no"){reply.innerHTML="okay"}
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
else if(chat2.includes("what your name")){reply.innerHTML="my name is astro"}
else if(chat.innerText=="can you give me a nickname" || chat.innerText=="give me a nickname" || chat.innerText=="i want a nickname"){reply.innerHTML="okay how about"+" "+username.slice(0,3)}
else if(chat.innerText=="are you a robot" || chat.innerText=="are you robot or human"){reply.innerHTML="no i am a chat bot designed to majorlly asist you"}
else if(chat.innerText=="you're boring" || chat.innerText=="you suck"){reply.innerHTML="i am sorry if you think so but i was not designed to have conversations i was designed to asist you"}
else if(chat.innerText=="how old are you" || chat.innerText=="what's your age"){reply.innerHTML="i am a 100 years old just kidding i don't have an age"}
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
else if(chat.innerText=="do you have jokes" || chat.innerText=="do you have fact"){reply.innerHTML="lets play a game"}
else if(chat.innerText=="the network is bad" || chat.innerText=="the network is slow"){reply.innerHTML="sorry to hear that"}
else if(chat.innerText=="what did you say" || chat.innerText=="what did you just say"){reply.innerHTML="am sorry did i say anything offensive"}
else if(chat.innerText=="why are you slow" || chat.innerText==""){reply.innerHTML="it must be network"}
else if(chat.innerText=="what's my name" || chat.innerText=="what is my name"){reply.innerHTML="that's simple your name is"+" "+username.value}
else if(chat.innerText=="open youtube" || chat.innerText=="open youTube"){reply.innerHTML="opening youtube"; utube.click()}
else if(chat.innerText=="open new tab" || chat.innerText=="open a new tab"){reply.innerHTML="opening a new tab"; tab.click()}
else if(chat.innerText=="how do i use you" || chat.innerText=="how do i talk to you"){reply.innerHTML="type command to see what i can assist you with"}
else if(chat.innerText=="how can you help me" || chat.innerText=="how will you asist me"){reply.innerHTML="by asisting you with functions like playing song or adding reminder"}
else if(chat.innerText=="what are your limitations" || chat.innerText=="what are your limits"){reply.innerHTML="i cant answer so basic questions"}
else if(chat.innerText=="how do i use you" || chat.innerText=="how do i talk to you"){reply.innerHTML="you could either type your command or press the voice button to talk. note when typing do not add expressions like question mark or eclamation mark."}
else if(chat2.includes("shutup") || chat.innerText=="keep quiet" || chat.innerText=="stop talking"){reply.innerHTML="sorry to here that am i annoying you"}
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
else if(chat2.includes("search for")){reply.innerHTML="okay"; acceptinput=true; search()}
else if(chat.innerText=="add alarm"){reply.innerHTML="okay"; show()}
else if(chat.innerText=="flip a coin" || chat.innerText==""){  let coinv = Math.floor(Math.random() *2);  if(coinv==1){ coin="head"} else{coin="tail"}; reply.innerText=coin}
else if(chat.innerText=="roll a dice" || chat.innerText==""){  let dicev = Math.floor(Math.random() *7);  dice = dicev;  console.log(dicev); reply.innerText=dice}
else if(chat2.includes("set an alarm for")){reply.innerHTML="okay"; acceptinput=true; alarm(); localStorage.setItem("state3", alarmvalue) }
else if(chat2.includes("view alarm") || chat2.includes("read alarm")){reply.innerHTML="okay you have an alarm for"+" "+alarmvalue}
else if(chat.innerText=="clear all alarm" || chat.innerText=="cancel all alarm" || chat.innerText=="delete all alarm"){reply.innerHTML="okay all alarms have been canceled"; alarmvalue=0; localStorage.setItem("state3", alarmvalue) }
else if(chat2.includes("remind me to")){reply.innerHTML="okay"; acceptinput=true; reminder()}
else if(chat.innerText=="read reminder 1" || chat.innerText=="view reminder 1" || chat.innerText=="read reminder one" || chat.innerText=="view reminder one"){reply.innerHTML=dvalue1.value}
else if(chat.innerText=="read reminder 2" || chat.innerText=="view reminder 2" || chat.innerText=="read reminder two" || chat.innerText=="view reminder two"){reply.innerHTML=dvalue2.value}
else if(chat.innerText=="read reminder 3" || chat.innerText=="view reminder 3" || chat.innerText=="read reminder three" || chat.innerText=="view reminder three"){reply.innerHTML=dvalue3.value}
else if(chat.innerText=="clear reminder 1" || chat.innerText=="delete reminder 1" || chat.innerText=="clear reminder one" || chat.innerText=="delete reminder one"){reply.innerHTML="reminder 1 has been cleared"; dvalue1.value=""; dtime.value=""}
else if(chat.innerText=="clear reminder 2" || chat.innerText=="delete reminder 2" || chat.innerText=="delete reminder two" || chat.innerText=="clear reminder two"){reply.innerHTML="reminder 2 has been cleared"; dvalue2.value=""; dtime2.value=""}
else if(chat.innerText=="clear reminder 3" || chat.innerText=="delete reminder 3" || chat.innerText=="clear reminder three" || chat.innerText=="delete reminder three"){reply.innerHTML="reminder 3 has been cleared"; dvalue3.value=""; dtime3.value=""}
else if(chat.innerText=="cancel all reminder"){reply.innerHTML="okay all reminders have been canceled"; rvalue=""; }
else if(chat.innerText=="add note"){reply.innerHTML="okay"; show()}
else if(chat.innerText=="read note 1" || chat.innerText=="view note 1" || chat.innerText=="read note one" || chat.innerText=="view note one"){reply.innerHTML=note1.value}
else if(chat.innerText=="read note 2" || chat.innerText=="view note 2" || chat.innerText=="read note two" || chat.innerText=="view note two"){reply.innerHTML=note2.value}
else if(chat.innerText=="read note 3" || chat.innerText=="view note 3" || chat.innerText=="read note three" || chat.innerText=="view note three"){reply.innerHTML=note3.value}
else if(chat.innerText=="clear note 1"){reply.innerHTML="note 1 has been cleared"; note1.value="";}
else if(chat.innerText=="clear note 2"){reply.innerHTML="note 2 has been cleared"; note2.value="";}
else if(chat.innerText=="clear note 3"){reply.innerHTML="note 3 has been cleared"; note3.value="";}
else if(chat.innerText=="add scheduel"){reply.innerHTML="okay"; show()}
else if(chat.innerText=="read my schedule" || chat.innerText=="view my schedule"){reply.innerHTML= scheduelsvalue.value; completed.style.display="block"; box2.appendChild(completed)}
else if(chat.innerText=="clear my scheduel" || chat.innerText=="delete my schedule"){reply.innerHTML="your scheduel has been cleared"; scheduelsvalue.value="";}
else if(chat.innerText=="play audio 1" || chat.innerText==""){reply.innerHTML="playing audio1"; mainaudio.play()}
else if(chat.innerText=="pause audio 1" || chat.innerText==""){reply.innerHTML="audio1 paused"; mainaudio.pause()}
else if(chat.innerText=="play audio 2" || chat.innerText==""){reply.innerHTML="playing audio2"; audio1.play()}
else if(chat.innerText=="pause audio 2" || chat.innerText==""){reply.innerHTML="audio2 paused"; audio1.pause()}
else if(chat.innerText=="play audio 3" || chat.innerText==""){reply.innerHTML="playing audio3"; audio2.play()}
else if(chat.innerText=="pause audio 3" || chat.innerText==""){reply.innerHTML="audio3 paused"; audio2.pause()}
else if(chat.innerText=="play audio 4" || chat.innerText==""){reply.innerHTML="playing audio4"; audio3.play()}
else if(chat.innerText=="pause audio 4" || chat.innerText==""){reply.innerHTML="audio4 paused"; audio3.pause()}
else if(chat.innerText=="play audio 5" || chat.innerText==""){reply.innerHTML="playing audio5"; audio4.play()}
else if(chat.innerText=="pause audio 5" || chat.innerText==""){reply.innerHTML="audio5 paused"; audio4.pause()}
else if(chat.innerText=="text to speech" || chat.innerText==""){reply.innerHTML="okay lets begin"; acceptinput=true; texttospeech()}
else if(chat.innerText=="show sidebar" || chat.innerText=="activate sidebar"){reply.innerHTML="side bar activated"; show()}
else if(chat.innerText=="hide sidebar" || chat.innerText=="deactivate sidebar"){reply.innerHTML="side bar deactivated"; hide()}
else if(chat2.includes("calculate")){reply.innerHTML="okay"; calculator()}

else if(chat.innerText=="activate voice mode" || chat.innerText=="voice mode on" || chat.innerText=="turn on voice mode"){reply.innerHTML="sleep screen activated"; micon=true; document.getElementById("sleepscreen").style.display="block"; document.getElementById("sleepscreen").style.animationName="transistion3";
setInterval(speak2, 6000); circle.style.display="block"}
else if(chat.innerText=="voice mode off" || chat.innerText=="close"){reply.innerHTML="sleep screen deactivated"; micon=false; setTimeout(function sleeps (){document.getElementById("sleepscreen").style.display="none"}, 1000);
document.getElementById("sleepscreen").style.animationName="transistion2"; circle.style.display="none"}
else if(chat2.includes("yes")){reply.innerHTML="ok"}
else if(chat2.includes("no")){reply.innerHTML="ok"}


else{reply.innerHTML="am sorry i do not have a response for that"};

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
  if(acceptinput==true){alarmvalue=chattext.value.slice(17, 22)}
  else{};
console.log(alarmvalue);
setInterval((function recall(){console.log(alarmvalue);
if(alarmvalue==alarmtime){     
reply.innerHTML="your alarm for"+" "+alarmvalue+" "+"is active"; avalue.innerHTML="time up"; document.getElementById("timesup").play(); add2.innerText="stop";}
else{};}), 1000);
}

let value = 0;
function calculator (){
value=chattext.value.slice(10, 22);
let value2 = value.split("+")
let value3 = value2.replace(",", "+")
let answer = (3+4).valueOf();
console.log(value2);
console.log(value3)
console.log(answer)
}

function reminder (){
  if(acceptinput==true){rvalue = chattext.value.slice(13, 50)}
  else{};
  let locate = rvalue.indexOf("by");
  let rtime = rvalue.slice(locate+3,)
console.log(rvalue);
console.log(rtime)
setInterval((function recall(){console.log(rtime);
if(rtime==alarmtime){reply.innerHTML="remember to"+" "+rvalue+" "+username}
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
  document.getElementById("sidepanel").style.display="flex";
  document.getElementById("chat").style.width="640px";
  document.getElementById("chat").style.marginLeft="300px";
  document.getElementById("img").style.left="690px";}

  function hide(){
    document.getElementById("sidepanel").style.display="none";
    document.getElementById("chat").style.width="950px";
    document.getElementById("chat").style.marginLeft="0px";
    document.getElementById("img").style.left="520px";}

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
  if(dtime.value==alarmtime){reply.innerHTML="remember to"+" "+dvalue1.value+" "+username; console.log("yes"); dtime.value="";}
  else{};}), 1000);
  setInterval((function recall2(){console.log(dtime2.value);
    if(dtime2.value==alarmtime){reply.innerHTML="remember to"+" "+dvalue2.value+" "+username; dtime2.value=""; }
    else{};}), 1000);
    setInterval((function recall3(){console.log(dtime3.value);
      if(dtime3.value==alarmtime){reply.innerHTML="remember to"+" "+dvalue3.value+" "+username; dtime3.value="";}
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
  title.innerHTML="scheduel";
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
}), interval.value)
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
  msg.voice = voices[0]; 
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
function search(){
  if(acceptinput==true){searchv=chattext.value.slice(11,)}
  else{};
  console.log(searchv)
  location.href="https://www.google.com/search?q="+searchv;
  
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
}
function save3 (){
  localStorage.setItem("state10", note1.value) 
  localStorage.setItem("state11", note2.value) 
  localStorage.setItem("state12", note3.value) 

}
function save4 (){
  localStorage.setItem("state13", scheduelsvalue.value) 
}
function save(){
localStorage.setItem("state1", interval.value) 
localStorage.setItem("state2", username.value) 
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
      msg.voice = voices[0]; 
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
        msg.voice = voices[0]; 
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
          msg.voice = voices[0]; 
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
          msg.voice = voices[0]; 
          msg.text = "your schedule for today has not been completed. type read my schedule to view it";
          window.speechSynthesis.speak(msg);}else{};
      }), interval.value);
      setInterval((function recall(){if(alarmtime=="12:00"){completedvalue=0}}), 1000)
}
