
/*
for (let i = 1; i<8; i++){
    if (i==6){
        continue;
    }
   console.log(i);
}

let i=0;
while(i < 7){
    i++;
    if (i==6){
        continue;
    }
    console.log(i);
}

i=0;
do {
    i++;
    if (i==6){
        continue;
    }
    console.log(i);

} while(i<7);
*/
/*
let options = {
    width: 1024,
    height: 1024,
    color: 'red'
    //font: ['Time', 'bold'];
};

for (let key in options){
    console.log("options["+key+"] = "+options[key]);
}
console.log(options);

console.log(Object.keys(options));
*/

let arr=[1, 'findus', 'lala'];
arr.push('common');
arr.unshift('cococ');
let xci= arr.join(',');
console.log(xci);


const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => { 
    console.log(accumulator+" and " + currentValue); return accumulator + currentValue; 
};

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10
console.log('reduceRight(reducer)');
console.log(array1.reduceRight(reducer));
console.log('--------');

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
