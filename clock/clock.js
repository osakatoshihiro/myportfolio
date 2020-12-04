
const deg=6;
const short=document.querySelector("#hr");
const middle=document.querySelector("#mn");
const long=document.querySelector("#sc");

setInterval(() => {
    let day=new Date(); /*例→Fri Nov 13 2020 19:40:05 GMT+0900 (GMT+09:00)*/
    let hh=day.getHours()*30;
    let mm=day.getMinutes()*deg;
    let ss=day.getSeconds()*deg;

    short.style.transform=  `rotateZ(${hh+(mm/12)}deg)`;
    middle.style.transform=  `rotateZ(${mm}deg)`;
    long.style.transform=  `rotateZ(${ss}deg)`;
})

function getdoubleNumber(number){
    return ("0" + number).slice(-2);
};

setInterval(() => {
    let day=new Date(); /*例→Fri Nov 13 2020 19:40:05 GMT+0900 (GMT+09:00)*/
    let year=day.getFullYear();   //年
    let month=day.getMonth()+1;   //月
    let date=day.getDate();       //日
    let dayofweek=day.getDay();   //曜日
    let hh=day.getHours();        //時
    let mm=getdoubleNumber(day.getMinutes());      //分
    let ss=getdoubleNumber(day.getSeconds());      //秒
    const dayname = ['日','月','火','水','木','金','土'];

    $("#ymdhm").text(`${year}年${month}月${date}日(${dayname[dayofweek]}) ${hh}時${mm}分${ss}秒`);
},)


/*
//デジタル時計の表示／非表示
$('.dgtlclock').hover(function(){
    $('.dgtlclock').toggle();
}); 
*/
