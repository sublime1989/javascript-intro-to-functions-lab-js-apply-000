function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase());
}
function logWhisper(string) {
  console.log(string.toLowerCase());
}
function sayHiToGrandma('hello') {
  if ('hello'.toLowerCase())
    return "I can\'t hear you!";
}
function sayHiToGrandma('HELLO') {
  if ("HELLO".toUpperCase())
    return "YES INDEED!";
}