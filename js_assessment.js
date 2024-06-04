//Qs1.WriteaJSprogramtodeletealloccurrencesofelement‘num’inagivenarray.Example:ifarr=[1,2,3,4,5,6,2,3]&num=2Resultshouldbearr=[1,3,4,5,6,3]
let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(n of arr){
    if(n==num){
        arr.splice(arr.indexOf(n),1);
    }
}
console.log(arr);