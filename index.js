function shout(name) {
   return name.toUpperCase();
}

console.log(shout("ase"));

function whisper(name) {
   return name.toLowerCase();
}

console.log(whisper("AseJunioR"));

function logShout(name) {
   const shout = name.toUpperCase();
   console.log(shout);
}

logShout("logshout");

function logWhisper(string) {
   console.log(string.toLowerCase());
}

logWhisper("WHispeR");

function sayHiToHeadphonedRoommate(string) {
   if (string === string.toLowerCase()) {
      return "I can't hear you!";
   } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
   } else if (string === "Let's have dinner together!") {
      return "I would love to!";
   }
}

sayHiToHeadphonedRoommate("Headphone");
