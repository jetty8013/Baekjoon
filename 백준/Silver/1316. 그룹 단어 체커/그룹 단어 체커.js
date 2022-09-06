let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let str;
//console.log(str.indexOf("a")-str.lastIndexOf("a"))

let first;
let last;

let real = 0;
let X = 0;

for(y=1;y<=input[0];y++){
    str = input[y].toString().trim().split('');
for(i=0;i<str.length;i++){
    first = str.indexOf(str[i])
    last = str.lastIndexOf(str[i])

    for(x=first;x<=last;x++){
        if(str[x] !== str[i]){
           X+=1
            break
        } else if(str[x] == str[i]){
           // console.log(str[i]+"연속"+i)
        }
    }
    if(X>0){
        X = 0;
        real+=1;
        break
    }
}
}
console.log(input[0]-real)
