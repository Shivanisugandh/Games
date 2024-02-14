let gameNum=34;
let num=prompt("enter game number");
while(gameNum!=num){
    num=prompt("wrong guess enter again");
}
console.log("congrats.....");
function fun(){
    console.log("Hello Function");
}
fun();
let count=0;
function owvelCount(sentence){
    for(i of sentence.toUpperCase()){
        if(i==="A"||i==="E"||i==="I"||i==="o"||i==="U"){
            count++;
        }
    }
    return count;
}
let c=owvelCount("Hi shivani");
console.log(c);
let vow=(sen)=>{
    for(i of sen.toUpperCase()){
        if(i==="A"||i==="E"||i==="I"||i==="o"||i==="U"){
            count++;
        }
    }
    return count;
}
let c1=vow("Hi shivani");
console.log(c1);