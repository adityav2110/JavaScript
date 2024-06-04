//Qs1.Write a JS program to delete all occurrences of element ‘num’ in a given array. Example:if arr=[1,2,3,4,5,6,2,3] & num=2 Result should be arr=[1,3,4,5,6,3]
let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(n of arr){
    if(n==num){
        arr.splice(arr.indexOf(n),1);
    }
}
console.log(arr);

//Qs2.Write a JS program to find the no of digits in anumber. Example:if number=287152, then count=6
let number=287152;
let count=0;
while(number>0){
    number=parseInt(number/10);
    count++;
}
console.log(count);

//or

let nmbr=287152;
let cnt=nmbr.toString().length;
console.log(cnt);

//Qs3.Write a JS program to find the sum of digits of a number. Example:if number=287152, then sum=25
let numbr=287152;
let cnt1=0;
while(numbr>0){
    cnt1+=numbr%10;
    numbr=parseInt(numbr/10);
}
console.log(cnt1);

//or

let numbr1=287152;
let cnt2=0;
for(n of numbr1.toString()){
    cnt2+=parseInt(n);
}
console.log(cnt2);

//Qs4.Write a JS program to find the reverse of a number. Example:if number=287152, then reverse=251782
let numbr2=287152;
let cnt3=0;
while(numbr2>0){
    cnt3=cnt3*10+numbr2%10;
    numbr2=parseInt(numbr2/10);
}
console.log(cnt3);

//or

let numbr3=287152;
let cnt4=numbr3.toString().split('').reverse().join(''); //split() method is used to split a string into an array of substrings, and returns the new array. join() method is used to join the elements of an array into a string.
console.log(cnt4);

//Qs5.Write a JS program to find the factorial of a number. Example:if number=5, then factorial=120
let numbr4=5;
let f=1;
for(let i=1;i<=numbr4;i++){
    f*=i;
}
console.log(f);

//Qs6.Write a JS program to find the sum of first n natural numbers. Example:if n=5, then sum=15
let nb=5;
let sum=0;
for(let i=1;i<=5;i++){
    sum+=i;
}
console.log(sum);

//or

let ns=5;
let s=0;
s=ns*(ns+1)/2;
console.log(s);

//Qs7.Write a JS program to find the sum of first n even natural numbers. Example:if n=5, then sum=30
let nm=5;
let sm=0;
for(let i=0;i<=nm;i=i+1){
    sm+=i*2;
}
console.log(sm);

//or

let nsm=5;
let sm1=0;
sm1=nsm*(nsm+1);
console.log(sm1);

//Qs8.Write a JS program to find the sum of first n odd natural numbers. Example:if n=5, then sum=25
let nmb=5;
let smb=0;
for(let i=0;i<nmb;i=i+1){
    smb+=i*2+1;
}
console.log(smb);

//or

let nmb1=5;
let smb1=0;
smb1=nmb1*nmb1;
console.log(smb1);

//Qs9.Write a JS program to find the sum of first n natural numbers which are divisible by 3 and 5. Example:if n=20, then sum=15
let nmb2=20;
let smb2=0;
for(let i=1;i<=nmb2;i++){
    if(i%3==0 && i%5==0){
        smb2+=i;
    }
}
console.log(smb2);

//Qs10.Write a JS program to find the sum of first n natural numbers which are not divisible by 3 and 5. Example:if n=20, then sum=112
let nmb3=20;
let smb3=0;
for(let i=1;i<=nmb3;i++){
    if(i%15!=0){
        smb3+=i;
    }
}
console.log(smb3);

//Qs11.Write a JS program to find the sum of first n natural numbers which are divisible by 3 or 5. Example:if n=20, then sum=98
let nmb4=20;
let smb4=0;
for(let i=1;i<=nmb4;i++){
    if(i%5==0 || i%3==0){
        smb4+=i;
    }
}
console.log(smb4);

//Qs12.Write a JS program to find the sum of first n natural numbers which are neither divisible by 3 nor by 5. Example:if n=20, then sum=104
let nmb5=20;
let smb5=0;
for(let i=1;i<=nmb5;i++){
    if(i%5!=0 && i%3!=0){
        smb5+=i;
    }
}
console.log(smb5);

//Qs13.Write a JS program to find the sum of first n natural numbers which are divisible by 3 and 5. Example:if n=20, then sum=15
let nmb6=20;
let smb6=0;
for(let i=1;i<=nmb6;i++){
    if(i%5==0 && i%3==0){
        smb6+=i;
    }
}
console.log(smb6);