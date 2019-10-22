// ALARM CLOCK 
const data = process.argv
let number = data.slice(2);

const timer = function(number) {
 for (const num of number) {
    setTimeout(() => {
    console.log('beep');  
    }, num * 1000);
};
};

timer(number);