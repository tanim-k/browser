console.log('first');
// setInterval(() => {
//     console.log('third')
// }, 12000);
// new thing:111
let seconds = 0;
const timeId = setInterval(() => {
    // seconds++;
    // console.log(seconds++)
    console.log(++seconds)
    if(seconds>5){
        clearInterval(timeId);
    }
}, 1000);
console.log('second');
