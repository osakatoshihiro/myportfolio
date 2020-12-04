// メニューボタンクリック毎→要素に open クラス付与と削除を交互に繰り返し。
//トグルボタンクリックでメニューを開く

document.getElementById('menubutton1').onclick=function(){
    $("#menubutton1").toggleClass('open');
    if($("#menubutton1").hasClass('open')){
        // open クラスが body についていたらメニューをスライドインする
        $(".menu-modal-wrapper").fadeIn(0);     //まず薄い黒色を背景に設置
        $('body').css('overflow-x','hidden'); //横スクロールバーを消す    
        $(".menu-modal").show(); //css中の「display:none;」を解除
        $(".menu-modal").animate({'right' : 0 }, 300);   //メニュー項目をスライドイン
        //ハンバーガーメニューボタンを×ボタンに変形
        $(".line1").css({'top':'16px', transform:'rotate(45deg)'});   
        $(".line2").hide();   
        $(".line3").css({'bottom':'16px', transform:'rotate(-45deg)'});   
        
    } else {
        // open クラスが body についていなかったらスライドアウトする
        $(".menu-modal").animate({'right' : -1000 }, 300);   
        $('body').css('overflow-x','scroll'); //横スクロールバー復活
        $(".menu-modal-wrapper").fadeOut(0);
        //ハンバーガーメニューボタンを元に戻す
        $(".line1").css({'top':'6px', transform:'rotate(0deg)', 'transition': 'transform 0.5s'});   
        $(".line2").show();
        $(".line3").css({'bottom':'6px', transform:'rotate(0deg)', 'transition': 'transform 0.5s'});   
    }             
}


//トグルボタン内のメニュー項目のどれかをクリックしたら、モーダルを閉じる
for(i=0; i<4; i++){
    document.getElementsByClassName("lista")[i].onclick=function(){
        //openクラスが付いていたら削除する
        if($("#menubutton1").hasClass('open')){
            $("#menubutton1").removeClass('open');
        }
        //モーダル画面を取っ払う
        $(".menu-modal").animate({'right' : -1000 }, 300);   
        $('body').css('overflow-x','scroll'); //横スクロールバー復活
        $(".menu-modal-wrapper").fadeOut(0);
        //ハンバーガーメニューボタンを元に戻す
        $(".line1").css({'top':'6px', transform:'rotate(0deg)', 'transition': 'transform 0.5s'});   
        $(".line2").show();
        $(".line3").css({'bottom':'6px', transform:'rotate(0deg)', 'transition': 'transform 0.5s'});   
    }    
}

//スライド画面(下の４つ四角ボタン)
$('.numberbtn').click(function() {
    var clickIndex=$('.numberbtn').index($(this));

    //選択中の画像に応じて丸の色を変える
    for (i=0; i<4; i++){
        if(i==clickIndex){
            $('.numberbtn').eq(i).addClass('isActive');
        }else{
            $('.numberbtn').eq(i).removeClass('isActive');
        }
    }

    //上部に題名を表示
    if(clickIndex==0){
        var msg="アイコンの強調";
    }else if(clickIndex==1){
        var msg="モーダル画面";
    }else if(clickIndex==2){
        var msg="レスポンシブデザイン";
    }else{
        var msg="スライドショー";
    }

    $('.topic').text(msg);

    //左ボタンを一旦表示する（非表示するかどうかはこの後に判断）
    $('.fasleft').css('visibility','visible');

    //右左ボタンの表示を作るlrbtn関数を呼び出す
    lrbtn(idx=clickIndex);

    // 「.active」要素からactiveクラスを取り除く
    $('.active').removeClass('active');
    
    // クリックしたボタンのインデックス番号を代入
    $('.slide').eq(clickIndex).addClass('active');

    $('.marginzero').hide().fadeIn(500); //一旦要素を隠さなければfadeInできない

});


//スライド画面(左右のボタン activeクラスを指定)
$('.change').click(function() {
    $('.fasleft').css('visibility','visible')

    //現activeクラスがli何番目かを取得する
    //var num=$('li.active').index('ul.marginzero li');
    var num=$('.slide').index($('.active'));

    // ifを用いて、現activeクラスの前もしくは次の要素にactiveクラスをつけて、現activeクラスを消す
    if($(this).hasClass('next')){
        $('.slide').eq(num+1).addClass('active');
        $('.slide').eq(num).removeClass('active');
    }
    if($(this).hasClass('prev')){
        $('.slide').eq(num-1).addClass('active');
        $('.slide').eq(num).removeClass('active');
    }

    $('.marginzero').hide().fadeIn(500); //一旦要素を隠さなければfadeInできない

});

//スライド画面(左右のボタン 最初は左ボタン、最後は右ボタンを隠す)
$('.change').click(function() {
    $('.fasleft').css('visibility','visible')
    
    //現activeクラスがli何番目かを取得する
    var num=$('.slide').index($('.active'));

    //右左ボタンの表示を作るlrbtn関数を呼び出す
    lrbtn(idx=num);

    //上部に題名を表示
    if(num==0){
        var msg="アイコンの強調";
    }else if(num==1){
        var msg="モーダル画面";
    }else if(num==2){
        var msg="レスポンシブデザイン";
    }else{
        var msg="スライドショー";
    }

    //選択中の画像に応じて丸の色と題名を変える
    for (i=0; i<4; i++){
        if(i==num){
            $('.numberbtn').eq(i).addClass('isActive');
            $('.topic').text(msg);
        }else{
            $('.numberbtn').eq(i).removeClass('isActive');
        }
    }
    
});   



function lrbtn(idx){
    //一旦右ボタンも左ボタンも隠す
    $('.prev').hide();
    $('.next').hide();

    //インデックス番号に応じて右/左ボタンを表示
    if(idx==0){
        $('.next').show();
    }else if(idx==3){
        $('.prev').show();
    }else{
        $('.prev').show();
        $('.next').show();
    }
}




//「確認画面へ」をクリック
document.getElementById('confirm-btn').onclick=function(){
    var tgt1 = document.getElementById('contactFormName').value;
    var tgt2 = document.getElementById('contactFormEmail').value;
    var tgt3 = document.getElementById('contactFormMessage').value;
    var errmsg = "";

    if(tgt1==""){
        errmsg="お名前を入力してください。\n";
    }
    
    if (!tgt2.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
        errmsg=errmsg+'メールアドレスを正しく入力してください。\n';
    }
    
    if(tgt3==""){
        errmsg=errmsg+"お問い合わせ内容を入力してください。";
    }

    if(errmsg!=""){
        alert(errmsg);
    }else{
        $("#login-modal").fadeIn();
        document.getElementById('boxName').textContent=tgt1;    
        document.getElementById('boxEmail').textContent=tgt2;    
        document.getElementById('boxMessage').textContent=tgt3;    
        
        return false;
    }
     
}

//送信確認画面で、×ボタンをクリックで、モーダルを閉じる。（注）classnameの場合はインデックス番号必要
document.getElementsByClassName("close-modal")[0].onclick=function(){
    $("#login-modal").fadeOut(0);
    return false;
};

//「前の画面に戻る」をクリックで、モーダルを閉じる。
document.getElementById('modify-btn').onclick=function(){
    $("#login-modal").fadeOut(0);
    return false;
};

//「送信」ボタンをクリックで、GASでメール送信
document.getElementById('submit-btn').onclick=function(){
    //document.contactform.action = "https://script.google.com/macros/s/AKfycbz-IoIrq20DjaI2VGw5eI46-xEACx9BCCOKU_9GyDUVKBIkkso/exec";
    document.contactform.action = "https://script.google.com/macros/s/AKfycbwtl9jnBDVtYOthHn0fd8CxK6b10hWCsrfX3hkB0SIySy2pGTCi/exec";
    document.contactform.submit(); //何かしらのボタンをクリックしてinputの内容を送信したことと同義
    return false;
};

$(function(){
    // #で始まるアンカーをクリックした場合に処理
    $('a[href^="#"]').on('click', function(e) {
      // イベントを終了
      e.preventDefault;
      // スクロールの速度
      var speed = 400;
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top - 50;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
  });

//coming soonを太字にする
$(function() {
    $('.work2').hover(function(){
        $(this).find('.coming').css('display','none');
    }, function() {
        $(this).find('.coming').css('display','block');
        $(this).find('.coming').css('font-weight','normal');
    }); 
});


//時計
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

    $("#ymdhms").text(`${year}/${month}/${date}(${dayname[dayofweek]}) ${hh}:${mm}:${ss}`);
},)



//display:none;とすると要素自体がHTML上からなくなるのでマウスホバーは反応しない。→親要素でごまかす
//アナログ時計にマウスオーバーしたら、デジタル時計が表示される
$('.clock').hover(function(){
    $('.ymdhms').css('opacity',1);
}, function(){
    $('.ymdhms').css('opacity',0);
});

