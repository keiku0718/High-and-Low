// カード識別用
var cardNo = 1;
let cards = [];

const apiUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=20"; // 一度に20枚取得

// 手札
document.getElementById("get").addEventListener("click", async () => {
  const cardDiv = document.getElementById("card");
  cardDiv.innerHTML = ""; // 前回の結果をクリア
  cardNo = 1;

  const response = await fetch(apiUrl);
  const data = await response.json();

  // カード情報を取得
  cards = data.cards;

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

  // CPU画像配置IDの取得
  cpuCardId1 = document.getElementById("cpuCardId1");
  cpuCardId2 = document.getElementById("cpuCardId2");
  cpuCardId3 = document.getElementById("cpuCardId3");
  cpuCardId4 = document.getElementById("cpuCardId4");
  cpuCardId5 = document.getElementById("cpuCardId5");
  cpuCardId6 = document.getElementById("cpuCardId6");
  cpuCardId7 = document.getElementById("cpuCardId7");
  cpuCardId8 = document.getElementById("cpuCardId8");
  cpuCardId9 = document.getElementById("cpuCardId9");
  cpuCardId10 = document.getElementById("cpuCardId10");
  // 取得IDにトランプ
  cpuCardId1.src = cards[10].image;
  cpuCardId2.src = cards[11].image;
  cpuCardId3.src = cards[12].image;
  cpuCardId4.src = cards[13].image;
  cpuCardId5.src = cards[14].image;
  cpuCardId6.src = cards[15].image;
  cpuCardId7.src = cards[16].image;
  cpuCardId8.src = cards[17].image;
  cpuCardId9.src = cards[18].image;
  cpuCardId10.src = cards[19].image;


  // プレイヤー画像配置IDの取得
  playCardId1 = document.getElementById("playCardId1");
  playCardId2 = document.getElementById("playCardId2");
  playCardId3 = document.getElementById("playCardId3");
  playCardId4 = document.getElementById("playCardId4");
  playCardId5 = document.getElementById("playCardId5");
  playCardId6 = document.getElementById("playCardId6");
  playCardId7 = document.getElementById("playCardId7");
  playCardId8 = document.getElementById("playCardId8");
  playCardId9 = document.getElementById("playCardId9");
  playCardId10 = document.getElementById("playCardId10");
  // 取得IDにトランプ
  playCardId1.src = cards[0].image;
  playCardId2.src = cards[1].image;
  playCardId3.src = cards[2].image;
  playCardId4.src = cards[3].image;
  playCardId5.src = cards[4].image;
  playCardId6.src = cards[5].image;
  playCardId7.src = cards[6].image;
  playCardId8.src = cards[7].image;
  playCardId9.src = cards[8].image;
  playCardId10.src = cards[9].image;


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
  var playCard = convert(cards[0].value);
  compare(playCard);
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
// 比較
function compare(playCard) {
  var num = Math.floor(Math.random() * 10) + 11;
  var cpuCard = convert(cards[num].value);
  

  alert(playCard + "：" + cpuCard);
}
// 変換
function convert(value) {
  var convertValue = 0;
  switch (value) {
    case "ACE" :
      convertValue = `1`;
      break;
    case "JACK" :
      convertValue = `11`;
      break;
    case "QUEEN" :
      convertValue = `12`;
      break;
    case "KING" :
      convertValue = `13`;
      break;
    default :
      convertValue = value;
      break;
  }
  return convertValue;
}