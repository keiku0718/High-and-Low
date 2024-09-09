// カード識別用
var cardNo = 1;

const apiUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=20"; // 一度に20枚取得

// 手札
document.getElementById("get").addEventListener("click", async () => {
  const cardDiv = document.getElementById("card");
  cardDiv.innerHTML = ""; // 前回の結果をクリア

  const response = await fetch(apiUrl);
  const data = await response.json();

  // カード情報を取得
  const cards = data.cards;

  cards.forEach(card => {
    // カードの画像
    const image = document.createElement("img");
    image.src = card.image;
    // カードイベント識別
    image.setAttribute("id", "card" + cardNo);
    // カード選択
    image.setAttribute("onclick", "cardSelect" + cardNo + "()");
    cardNo++;

    // カードの値
    const value = document.createElement("p");
    value.textContent = `Card: ${card.value} of ${card.suit}`;

    // カードコンテナに追加
    const cardContainer = document.createElement("div");
    cardContainer.style.marginBottom = "20px";
    cardContainer.appendChild(image);
    cardContainer.appendChild(value);

    cardDiv.appendChild(cardContainer);
  });
});

// お題をランダムで表示
function random() {
    //1か2の乱数生成
    var num = Math.floor(Math.random() * 2 + 1); 

    let result = "";
    if (num % 2 == 0) {
        result = "HIGH";
    } else {
        result = "LOW";
    }

    document.getElementById("result").innerHTML = result; 
    document.getElementById("ransuu").innerHTML = num; 
}

// カード選択1~10枚目
function cardSelect1() {
  const no = document.getElementById("card1");
  no.style.width = '400px';
  alert("取得：1");
}
function cardSelect2() {
  var no = document.getElementById("card2");
  no.style.width = '400px';
  alert("取得：2");
}
function cardSelect3() {
  var no = document.getElementById("card3");
  alert("取得：3");
}
function cardSelect4() {
  var no = document.getElementById("card4");
  alert("取得：4");
}
function cardSelect5() {
  var no = document.getElementById("card5");
  alert("取得：5");
}
function cardSelect6() {
  var no = document.getElementById("card6");
  alert("取得：6");
}
function cardSelect7() {
  var no = document.getElementById("card7");
  alert("取得：7");
}
function cardSelect8() {
  var no = document.getElementById("card8");
  alert("取得：8");
}
function cardSelect9() {
  var no = document.getElementById("card9");
  alert("取得：9");
}
function cardSelect10() {
  var no = document.getElementById("card10");
  alert("取得：10");
}