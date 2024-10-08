// カード識別用
var cardNo = 1;
let cards = [];
// 勝敗チェック用
let playValue = "";
let cpuValue = "";
// 連打対策boolean
let boolean = true;

const apiUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=20"; // 一度に20枚取得

//回数カウント
let win = 0;
let cnt = 0;

//お題
let result = "";

window.onload = async function() {
  document.getElementById("pop").style.visibility = 'hidden';
  document.getElementById("reset").style.visibility = 'hidden';
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
  // cpuCardId1.src = cards[10].image;
  // cpuCardId2.src = cards[11].image;
  // cpuCardId3.src = cards[12].image;
  // cpuCardId4.src = cards[13].image;
  // cpuCardId5.src = cards[14].image;
  // cpuCardId6.src = cards[15].image;
  // cpuCardId7.src = cards[16].image;
  // cpuCardId8.src = cards[17].image;
  // cpuCardId9.src = cards[18].image;
  // cpuCardId10.src = cards[19].image;


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

  random();
};

  // お題をランダムで表示
function random(){
      //1か2の乱数生成
      var num = Math.floor(Math.random() * 2 + 1); 

      if (num % 2 == 0) {
          result = "HIGH";
      } else {
          result = "LOW";
      }
  
      document.getElementById("result").innerHTML = result; 
      document.getElementById("ransuu").innerHTML = num; 
}


// // 手札
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
  // cpuCardId1.src = cards[10].image;
  // cpuCardId2.src = cards[11].image;
  // cpuCardId3.src = cards[12].image;
  // cpuCardId4.src = cards[13].image;
  // cpuCardId5.src = cards[14].image;
  // cpuCardId6.src = cards[15].image;
  // cpuCardId7.src = cards[16].image;
  // cpuCardId8.src = cards[17].image;
  // cpuCardId9.src = cards[18].image;
  // cpuCardId10.src = cards[19].image;


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

// カード選択1~10枚目
function cardSelect1() {
  const no = document.getElementById("card1");
  showCard(cards[0], 0);
  var playCardValue = convert(cards[0].value);
  // var cpuCardValue = convert(cards[cpuRandom].value);
  // checkResult(playCardValue, cpuCardValue);
  //compare(playCard);
}
function cardSelect2() {
  var no = document.getElementById("card2");
  showCard(cards[1], 1);
  var playCard = convert(cards[1].value);
}
function cardSelect3() {
  showCard(cards[2], 2);
  var playCard = convert(cards[2].value);
}
function cardSelect4() {
  showCard(cards[3], 3);
  var playCard = convert(cards[3].value);
}
function cardSelect5() {
  showCard(cards[4], 4);
  var playCard = convert(cards[4].value);
}
function cardSelect6() {
  showCard(cards[5], 5);
  var playCard = convert(cards[5].value);
}
function cardSelect7() {
  showCard(cards[6], 6);
  var playCard = convert(cards[6].value);
}
function cardSelect8() {
  showCard(cards[7], 7);
  var playCard = convert(cards[7].value);
}
function cardSelect9() {
  showCard(cards[8], 8);
  var playCard = convert(cards[8].value);
}
function cardSelect10() {
  showCard(cards[9], 9);
  var playCard = convert(cards[9].value);
}
/* 比較・使用済みカード削除
function compare(playCard) {
  var num = Math.floor(Math.random() * 10) + 11;
  var cpuCard = convert(cards[num].value);
  

  alert(playCard + "：" + cpuCard);
}*/

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

// カードを場に出す
function showCard(card, playNum) {
  playBattleCard = document.getElementById("playBattleCard");
  playBattleCard.src = card.image;
  // 連打対策
  // 場に出している間カードをクリック不可に
  barrage(boolean);

  // 勝敗チェック用
  playValue = cards[playNum].value;

  // プレイヤーの指定カードを削除
  cards[playNum] = 0;
  playCardId = document.getElementById("playCardId" + (playNum + 1));
  playCardId.style.display = "none";

  // CPUのカードをランダムで選ぶ
  let cpuRandom;
  do {
    cpuRandom = Math.floor(Math.random() * 10) + 10;
  } while (cards[cpuRandom] === 0);

  // CPUの選んだカードを場に出す
  cpuCardId = document.getElementById("cpuCardId" + (cpuRandom - 9));
  cpuBattleCard = document.getElementById("cpuBattleCard");
  // cpuBattleCard.src = cards[cpuRandom].image;

  // 1秒後に実行
  setTimeout(function() {
    cpuBattleCard = document.getElementById("cpuBattleCard");
    cpuCardId.style.display = "none";
    cpuBattleCard.src = cards[cpuRandom].image;
  }, 1000);
  
  // 2秒後に実行
  setTimeout(function() {
    // 勝敗チェック用
    cpuValue = cards[cpuRandom].value;

    // CPUの指定カードを削除
    cards[cpuRandom] = 0;
    // cpuCardId.style.display = "none";
    // alert("CPU：プレイヤー" + " | " + convert(cpuValue) + "：" + convert(playValue));
    // 勝敗チェック
    checkResult(convert(playValue), convert(cpuValue));
    // high
    // checkResult(1, 7);
  }, 2000);
}

//勝敗結果
function checkResult(playValue, cpuValue) {
  // alert("check" + "プレイヤー：" + playValue + ",CPU：" + cpuValue + "  *" + result + "*");
  console.log(`プレイヤー${playValue}`);
  console.log(`CPU${cpuValue}`);
  console.log(`プレイモード${result}`);
  switch(result){
    case "HIGH":
      if((playValue - 0) > (cpuValue - 0)){
        // alert("勝利！");
        outCome("勝利");
        win++;
      }else{
        if(playValue === cpuValue){
          // alert("ドロー");
          outCome("引き分け");
        }else{
          // alert("敗北");
          outCome("敗北");
        }
      }
      break;
    case "LOW":
      if((playValue - 0) < (cpuValue - 0)){
        // alert("勝利！");
        outCome("勝利");
        win++;
      }else{
        if(playValue === cpuValue){
          // alert("ドロー");
          outCome("引き分け");
        }else{
          // alert("敗北");
          outCome("敗北");
        }
      }
      break;
  }

  random();
  cnt++;
  console.log(cnt);
  if((cnt - 0) == 10) {
    popup();
  }
}
function popup(){
  if ((cnt - 0) == 10) {
    const reset = document.getElementById("pop");
    reset.style.visibility = "visible";
    document.getElementById("win").textContent = win;
  }
}

// リセットボタン
function resetBtn() {
  location.reload();
}

// リセットボタン - いいえ
function resetNo() {
  document.getElementById("pop").style.visibility = 'hidden';
  document.getElementById("reset").style.visibility = 'visible';
}

// 勝敗・引き分けポップアップ
function outCome(msg) {
  switch (msg) {
    case "勝利":
      winPop = document.getElementById("winPop"); 
      winPop.style.display = 'flex';

      // 1秒後に実行
      setTimeout(function() {
        winPop.style.display = 'none';
        playBattleCard = document.getElementById("playBattleCard");
        playBattleCard.src = "img/back.png";
        cpuBattleCard = document.getElementById("cpuBattleCard");
        cpuBattleCard.src = "img/back.png";
        // 連打対策
        barrage(boolean);
      }, 1000);
      break;
    case "敗北":
      losePop = document.getElementById("losePop");
      losePop.style.display = 'flex';
      
      // 1秒後に実行
      setTimeout(function() {
        losePop.style.display = 'none';
        playBattleCard = document.getElementById("playBattleCard");
        playBattleCard.src = "img/back.png";
        cpuBattleCard = document.getElementById("cpuBattleCard");
        cpuBattleCard.src = "img/back.png";
        // 連打対策
        barrage(boolean);
      }, 1000);
      break;
    case "引き分け":
      drawPop = document.getElementById("drawPop");
      drawPop.style.display = 'flex';
      
      // 1秒後に実行
      setTimeout(function() {
        drawPop.style.display = 'none';
        playBattleCard = document.getElementById("playBattleCard");
        playBattleCard.src = "img/back.png";
        cpuBattleCard = document.getElementById("cpuBattleCard");
        cpuBattleCard.src = "img/back.png";
        // 連打対策
        barrage(boolean);
      }, 1000);
      break;
    default :
      alert("エラー");
      break;
  }
  
}

// 連打対策
function barrage() {
  // プレイヤーカードID取得
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

  if(boolean) {
    // クリック可能から不可に
    let change = "none";
    playCardId1.style.pointerEvents = change;
    playCardId2.style.pointerEvents = change;
    playCardId3.style.pointerEvents = change;
    playCardId4.style.pointerEvents = change;
    playCardId5.style.pointerEvents = change;
    playCardId6.style.pointerEvents = change;
    playCardId7.style.pointerEvents = change;
    playCardId8.style.pointerEvents = change;
    playCardId9.style.pointerEvents = change;
    playCardId10.style.pointerEvents = change;
    boolean = false;
  } else {
    // クリック不可から可能に
    let change = "auto";
    playCardId1.style.pointerEvents = change;
    playCardId2.style.pointerEvents = change;
    playCardId3.style.pointerEvents = change;
    playCardId4.style.pointerEvents = change;
    playCardId5.style.pointerEvents = change;
    playCardId6.style.pointerEvents = change;
    playCardId7.style.pointerEvents = change;
    playCardId8.style.pointerEvents = change;
    playCardId9.style.pointerEvents = change;
    playCardId10.style.pointerEvents = change;
    boolean = true;
  }
}