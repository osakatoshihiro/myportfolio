var displaysmall=document.getElementById('outputsmall');
var displaybig=document.getElementById('outputbig');

calc();  //なぜか一番初めだけ「=」クリックすると計算されないため、あらかじめ「=」クリック


document.getElementById('number0').onclick = function() {
    if(displaybig.textContent=='0'){
        displaybig.textContent='0'
    }else{
        displaybig.textContent=displaybig.textContent+'0'
    }
};

document.getElementById('number1').onclick = function() {
    if(displaybig.textContent.length>=12){
        alert('この電卓への入力は最大12文字までです。')
    }else if(displaybig.textContent!='0'){
        displaybig.textContent=displaybig.textContent+'1'
    }else{
        displaybig.textContent='1'
    }
};

document.getElementById('number2').onclick = function() {
    if(displaybig.textContent.length>=12){
        alert('この電卓への入力は最大12文字までです。')
    }else if(displaybig.textContent!='0'){
        displaybig.textContent=displaybig.textContent+'2'
    }else{
        displaybig.textContent='2'
    }
};

document.getElementById('number3').onclick = function() {
    if(displaybig.textContent.length>=12){
        alert('この電卓への入力は最大12文字までです。')
    }else if(displaybig.textContent!='0'){
        displaybig.textContent=displaybig.textContent+'3'
    }else{
        displaybig.textContent='3'
    }
};

document.getElementById('number4').onclick = function() {
    if(displaybig.textContent.length>=12){
        alert('この電卓への入力は最大12文字までです。')
    }else if(displaybig.textContent!='0'){
        displaybig.textContent=displaybig.textContent+'4'
    }else{
        displaybig.textContent='4'
    }
};

document.getElementById('number5').onclick = function() {
    if(displaybig.textContent.length>=12){
        alert('この電卓への入力は最大12文字までです。')
    }else if(displaybig.textContent!='0'){
        displaybig.textContent=displaybig.textContent+'5'
    }else{
        displaybig.textContent='5'
    }
};

document.getElementById('number6').onclick = function() {
    if(displaybig.textContent.length>=12){
        alert('この電卓への入力は最大12文字までです。')
    }else if(displaybig.textContent!='0'){
        displaybig.textContent=displaybig.textContent+'6'
    }else{
        displaybig.textContent='6'
    }
};

document.getElementById('number7').onclick = function() {
    if(displaybig.textContent.length>=12){
        alert('この電卓への入力は最大12文字までです。')
    }else if(displaybig.textContent!='0'){
        displaybig.textContent=displaybig.textContent+'7'
    }else{
        displaybig.textContent='7'
    }
};

document.getElementById('number8').onclick = function() {
    if(displaybig.textContent.length>=12){
        alert('この電卓への入力は最大12文字までです。')
    }else if(displaybig.textContent!='0'){
        displaybig.textContent=displaybig.textContent+'8'
    }else{
        displaybig.textContent='8'
    }
};

document.getElementById('number9').onclick = function() {
    if(displaybig.textContent.length>=12){
        alert('この電卓への入力は最大12文字までです。')
    }else if(displaybig.textContent!='0'){
        displaybig.textContent=displaybig.textContent+'9'
    }else{
        displaybig.textContent='9'
    }
};

document.getElementById('point').onclick = function() {
    if(displaybig.textContent.length>=1){
        if(displaybig.textContent.slice(-1)=='.'){
            alert('小数点を続けて入力することはできません。');
        }else{
            displaybig.textContent=displaybig.textContent+'.';
        }
    }else{
        displaybig.textContent=displaybig.textContent+'.';
    }
};


document.getElementById('plus').onclick = function() {
    if(displaysmall.textContent.length>=1 && displaybig.textContent=='' && (displaysmall.textContent.slice(-1)=='+' || displaysmall.textContent.slice(-1)=='-' || displaysmall.textContent.slice(-1)=='*' || displaysmall.textContent.slice(-1)=='/')){
        displaysmall.textContent=displaysmall.textContent.slice(0,-1)+displaybig.textContent+'+';
        displaybig.textContent='';
    }else if(displaybig.textContent.length>=1){
        displaysmall.textContent=displaysmall.textContent+displaybig.textContent+'+';
        displaybig.textContent='';
    }
};

document.getElementById('minus').onclick = function() {
    if(displaysmall.textContent.length>=1 && displaybig.textContent=='' && (displaysmall.textContent.slice(-1)=='+' || displaysmall.textContent.slice(-1)=='-' || displaysmall.textContent.slice(-1)=='*' || displaysmall.textContent.slice(-1)=='/')){
        displaysmall.textContent=displaysmall.textContent.slice(0,-1)+displaybig.textContent+'-';
        displaybig.textContent='';
    }else if(displaybig.textContent.length>=1){
        displaysmall.textContent=displaysmall.textContent+displaybig.textContent+'-';
        displaybig.textContent='';
    }
};

document.getElementById('times').onclick = function() {
    if(displaysmall.textContent.length>=1 && displaybig.textContent=='' && (displaysmall.textContent.slice(-1)=='+' || displaysmall.textContent.slice(-1)=='-' || displaysmall.textContent.slice(-1)=='*' || displaysmall.textContent.slice(-1)=='/')){
        displaysmall.textContent=displaysmall.textContent.slice(0,-1)+displaybig.textContent+'*';
        displaybig.textContent='';
    }else if(displaybig.textContent.length>=1){
        displaysmall.textContent=displaysmall.textContent+displaybig.textContent+'*';
        displaybig.textContent='';
    }
};

document.getElementById('devide').onclick = function() {
    if(displaysmall.textContent.length>=1 && displaybig.textContent=='' && (displaysmall.textContent.slice(-1)=='+' || displaysmall.textContent.slice(-1)=='-' || displaysmall.textContent.slice(-1)=='*' || displaysmall.textContent.slice(-1)=='/')){
        displaysmall.textContent=displaysmall.textContent.slice(0,-1)+displaybig.textContent+'/';
        displaybig.textContent='';
    }else if(displaybig.textContent.length>=1){
        displaysmall.textContent=displaysmall.textContent+displaybig.textContent+'/';
        displaybig.textContent='';
    }
};

document.getElementById('plumin').onclick = function() {
    displaybig.textContent=displaybig.textContent*(-1)
};

document.getElementById('back').onclick = function() {
    if(displaybig.textContent.length>=2){
        displaybig.textContent=displaybig.textContent.slice(0,-1)
    }else if(displaybig.textContent.length==1){
        displaybig.textContent='0'
    }
};

document.getElementById('ac_btn').onclick = function() {
    displaysmall.textContent=''
    displaybig.textContent='0'
};


//追加：bigが無しかつsmallの末尾が記号の場合、その記号を消して計算する
function calc(){
    if(displaybig.textContent=="" && (displaysmall.textContent.slice(-1)=='+' || displaysmall.textContent.slice(-1)=='-' || displaysmall.textContent.slice(-1)=='*' || displaysmall.textContent.slice(-1)=='/')){
        displaysmall.textContent=displaysmall.textContent.slice(0,-1)
    }
    displaybig.textContent= new Function("return "+displaysmall.textContent+displaybig.textContent)();
    displaysmall.textContent='';
    if(displaybig.textContent>999999999999 || displaybig.textContent<-999999999999){
        displaybig.textContent='ERROR'
    }
    if(displaybig.textContent>=0 && displaybig.textContent.length>=13){
        displaybig.textContent=displaybig.textContent.slice(0,12-displaybig.textContent.length)
    }else if(displaybig.textContent<0 && displaybig.textContent.length>=14){
        displaybig.textContent=displaybig.textContent.slice(0,13-displaybig.textContent.length)
    }
}


//不要になった
/*
document.getElementById('minus').onclick = function() {
    if(displaybig.textContent.length>=1){
        var idname=document.getElementById('minus').id
        doublecheck(idname);
    }else{
        displaybig.textContent=displaybig.textContent+'-';
    }
};

function doublecheck(idname){
    if(displaybig.textContent.slice(-1)=='+' || displaybig.textContent.slice(-1)=='-' || displaybig.textContent.slice(-1)=='*' || displaybig.textContent.slice(-1)=='/'){
        alert('記号を続けて入力することはできません。「BS」ボタンで修正するか、最初からやり直してください。')    
    }else{
        if(idname=="plus"){
            displaybig.textContent=displaybig.textContent+'+';
        }else if(idname=="minus"){
            displaybig.textContent=displaybig.textContent+'-';
        }else if(idname=="times"){
            displaybig.textContent=displaybig.textContent+'*';
        }else if(idname=="devide"){
            displaybig.textContent=displaybig.textContent+'/';
        }
    }
}
*/


/*
function thirteen(){
    if(display.textContent.length){

    }
}
*/




/*以下ぼつ
function zentohan(str){
    str=str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
    });
    return str;
}


function chi(num){
    var num=document.getElementsByClassName('numbers')[0];
    num=num.replace("９",9);
    return num;
}

function sese(num){
    var a=chi(num)
    display.textContent=display.textContent+a.textContent;

}


var arrayzen=["０","１","２","３","４","５","６","７","８","９"];
for(i=0; i<=9; i++){
    if(num===arrayzen[i]){
        result=i;
    }
}
i=8;
//numnew=num.replace("９", "9");
//display.textContent=display.textContent+result.textContent;
//$('#output').text('8');

*/

/*
document.getElementById('plus').onclick = function() {
    if(display.textContent.length>=1){
        doublecheck();
        if(display.textContent.slice(-1)!='+' && display.textContent.slice(-1)!='-' && display.textContent.slice(-1)!='*' && display.textContent.slice(-1)!='/'){
            display.textContent=display.textContent+'+';
        }
    }else{
        display.textContent=display.textContent+'+';
    }
};
*/
