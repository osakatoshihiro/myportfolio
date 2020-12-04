//共通のヘッダー要素
function headerinclude() {
  let tag = `

  <div id="top">
    <a href="../top/top.html">
      <div id="topimg">
        <img src="../images/top.jpg" alt="" width="400">
      </div>
    </a>
    
    <div id="tel">
      <div class="number"><i class="fas fa-phone-alt"></i>&nbsp;XX-XXXX-XXXX</div>
      <div class="time">（受付時間：平日9時00分～17時00分）</div>
    </div>

    <a href="../top/top.html#inquiry">
      <div id="mail">
        <i class="fas fa-envelope"></i>&nbsp;お問い合わせ
      </div>
    </a>
  </div>

  <div class="naviwrapper">
    <div id="navi">
      <ul class="navibar">
        <a href="../top/top.html"><li>ＴＯＰ</li></a>
        <a href="../philosophy/philosophy.html"><li>理念と指針</li></a>
        <a href="../flow/flow.html"><li>業務の流れ</li></a>
        <a href="../land/land.html"><li>土地に関する登記</li></a>
        <a href="../house/house.html"><li>建物に関する登記</li></a>
        <a href="../office/office.html"><li class="lastli">事務所概要</li></a>
      </ul>
    </div>
  </div>

<!--ハンバーガーメニュー-->
<div id="menubutton">
  <div class="line1"></div>
  <div class="line2"></div>
  <div class="line3"></div>
</div>
<!-- メニューのモーダル画面 -->
<div class="menu-modal-wrapper"></div>
<!--モーダルの背景(薄い黒色部分)を作るために必要-->
<div class="menu-modal">
  <!--モーダルのメイン背景を作るために必要-->
  <div class="close-menu">
    <ul>
      <a href="../top/top.html"><li class="firstli">ＴＯＰ</li></a>
      <a href="../philosophy/philosophy.html"><li>理念と指針</li></a>
      <a href="../flow/flow.html"><li>業務の流れ</li></a>
      <a href="../land/land.html"><li>土地に関する登記</li></a>
      <a href="../house/house.html"><li>建物に関する登記</li></a>
      <a href="../office/office.html"><li>事務所概要</li></a>
    </ul>
  </div>
</div>

`;
  document.getElementById("header").innerHTML = tag;
}



//共通のフッター要素
function footerinclude() {
  let tag = `
  <div class="bottomimg"><a href="../top/top.html"><img src="../images/top.jpg" alt="" width="300"></a>
  <div class="bottomcontact">
      <p> 〒XXX-XXXX　●●県●●●市●●●町●丁目●番●号</p>
    </div>
    <div class="bottomtel">
      <div class="bottomnum"><i class="fas fa-phone-alt"></i>&nbsp;XX-XXXX-XXXX</div>
      <div class="bottomsen1"> お気軽にお問い合わせください。</div>
      <div class="bottomsen2">（受付時間：平日9時00分～17時00分）</div>
    </div>
  </div>

  <div id="copylight">© 2020 ●●登記測量事務所</div>
  `;
  document.getElementById("footer").innerHTML = tag;
}





//WEBページにheaderinclude関数とfooterinclude関数を実行
//共通のヘッダー・フッターに関連するアニメーションは、このonloadの中に一緒に書く必要がある。onloadの外で書くと効かない。
window.onload = function () {
  //共通のヘッダー読み込み
  headerinclude();

  //共通のフッター読み込み
  footerinclude();

  //お問い合わせ画面へゆっくりスクロール
  $("#mail").click(function () {
    var position = $("#inquiry").offset().top; // スクロールさせたい場所を定義
    $("html,body").animate({ scrollTop: position }, 1500);
  });

  // メニューボタンクリック毎→要素に open クラス付与と削除を交互に繰り返し。
  //トグルボタンクリックでメニューを開く
  document.getElementById('menubutton').onclick = function () {
    $("#menubutton").toggleClass('open');
    if ($("#menubutton").hasClass('open')) {
      // open クラスが body についていたらメニューをスライドインする
      $(".menu-modal-wrapper").fadeIn(0);     //まず薄い黒色を背景に設置
      $('body').css('overflow', 'hidden');    //スクロールバーを消す    
      $(".menu-modal").show(); //css中の「display:none;」を解除
      $(".menu-modal").animate({ 'margin-right': '600px' }, 500);   //メニュー項目をスライドイン
      //ハンバーガーメニューボタンを×ボタンに変形
      $(".line1").css({ 'top': '19px', transform: 'rotate(45deg)'});
      $(".line2").hide();
      $(".line3").css({ 'top': '19px', transform: 'rotate(-45deg)'});

    } else {
      // open クラスが body についていなかったらスライドアウトする
      $(".menu-modal").animate({ 'margin-right': '0px' }, 500);
      $('body').css('overflow', 'scroll'); //横スクロールバー復活
      $(".menu-modal-wrapper").fadeOut(0);
      $(".menu-modal").fadeOut(0);
      
      //ハンバーガーメニューボタンを元に戻す
      $(".line1").css({ 'top': '9px', transform: 'rotate(0deg)', 'transition': 'transform 0.5s' });
      $(".line2").show();
      $(".line3").css({ 'top': '33px', transform: 'rotate(0deg)', 'transition': 'transform 0.5s' });
    }
  }

}



//「確認画面へ」をクリック
document.getElementById('confirm-btn').onclick = function () {
  var tgt1 = document.getElementById('contactFormName').value;
  var tgt2 = document.getElementById('contactFormEmail').value;
  var tgt3 = document.getElementById('contactFormMessage').value;
  var errmsg = "";

  if (tgt1 == "") {
    errmsg = "お名前を入力してください。\n";
  }

  if (!tgt2.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
    errmsg = errmsg + 'メールアドレスを正しく入力してください。\n';
  }

  if (tgt3 == "") {
    errmsg = errmsg + "お問い合わせ内容を入力してください。";
  }

  if (errmsg != "") {
    alert(errmsg);
  } else {
    $("#login-modal").fadeIn();
    document.getElementById('boxName').textContent = tgt1;
    document.getElementById('boxEmail').textContent = tgt2;
    document.getElementById('boxMessage').textContent = tgt3;

    return false;
  }

}

//送信確認画面で、×ボタンをクリックで、モーダルを閉じる。（注）classnameの場合はインデックス番号必要
document.getElementsByClassName("close-modal")[0].onclick = function () {
  $("#login-modal").fadeOut(0);
  return false;
};

//「前の画面に戻る」をクリックで、モーダルを閉じる。
document.getElementById('modify-btn').onclick = function () {
  $("#login-modal").fadeOut(0);
  return false;
};


