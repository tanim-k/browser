function doAThing(){
    console.log('synchronize')
}
console.log('first: this one is first');
console.log('second: this one is second');
// doAThing();
// 1::: set time out 
setTimeout(doAThing, 6000);
// 2::: direct fn 
setTimeout(function(){
    console.log('hello How are you')
}, 3000)
setTimeout(() => {
    console.log('exploring mdn articles')
}, 4000);
console.log('third: this one is third');
console.log('fourth: this one is fourth');
console.log('fifth: this one is fifth');