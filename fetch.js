console.log(1111111)
console.log(2222222)
console.log(3333333)
setTimeout(() => {
    console.log('aaaaaaa') 
 }, 5000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));
console.log(7777777);
console.log(1111111);
for (let i = 0; i < 5; i++) {
    console.log(i);
    
}