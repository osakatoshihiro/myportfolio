/*
function rp(word){
    word=word.replace("Hello","Helloooo");
    return word;
}

var a="Helloiiiiiiiiiiiiiiiiiiii"
var result=rp(a);

console.log(result);

*/


function zentohan(str){
    str=str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
    });
    return str;
}
 
a=zentohan('４');
console.log(a);




var num='９';
var arrayzen=["０","１","２","３","４","５","６","７","８","９"];
var arrayhan=["0","1","2","3","4","5","6","7","8","9"];

for(i=0; i<=9; i++){
    if(num==arrayzen[i]){
        result=i;
    }
}
console.log(result);

