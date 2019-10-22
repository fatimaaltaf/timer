//The user can press 'b' and it should beep right away
//The user can input any number from 1 to 9 and it should
//--immediately output "setting timer for x seconds...", and
//--beep after that number of seconds has passed
//The user can use 'ctrl+c' to exit the program...
//...at which point the program should say... 
//"Thanks for using me, ciao!" before terminating
// ALARM CLOCK VAMPED UP 
const readline = require('readline');
const ask = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//ask.question('Press ctrl^c to quit', (response) => {
  process.on('exit', (code) => {
      console.log('Thanks for using me, ciao!');
  }); 
ask.question('Press b to Beep:', (response) => {
    if (response === 'b') {
      console.log('beep')
    } ask.question('Input any number from 1-9 to set timer:', (response) => {
      if (response >= 1 || response <= 9) {
        console.log(`Setting timer for ${response} seconds...`);
        const timer = function(response) {
          for (const num of response) {
             setTimeout(() => {
             console.log('beep');  
             }, num * 1000);
         };
         };
         timer(response);
    }
    });
}); 