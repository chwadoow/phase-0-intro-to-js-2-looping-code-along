function writeCards(array,event){
    const myArray = [];
    for( let i = 0 ; i < array.length;i++){
        myArray[i]=`Thank you, ${array[i]}, for the wonderful ${event} gift!`;}
return myArray;
    }
console.log(writeCards(["moz","james"],"birthday"));

function countDown(n){
    while( n >=0) {
        console.log(n);
        n--;
    }
        
}

