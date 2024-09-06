// 手札
let cnt = 10;
// 連勝
let score = 0;
// カードをめくる
let showHideCard = "";
// 山札 カード総数 - 手札数
let deck = 40;
// 山札被り
let coverCards = ["tester"];

const deckId = document.getElementById('deck');
deckId.textContent = deck + "枚";

async function drawCard() {
    // ドロー
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=2');
    const data = await response.json();

    // 表示カード
    const card = data.cards[0];
    const cardImage = document.getElementById('cardImage');
    cardImage.src = card.image;
    cardImage.style.display = 'block';
    hideCardImage.src = "img/back.png";

    coverCards.push(card.code);

    // 非表示カード
    const hideCard = data.cards[1];
    hideCardImage = document.getElementById('hideCardImage');
    showHideCard = hideCard.image;
    // hideCardImage.src = hideCard.image;
    // hideCardImage.src = showHideCard;
    hideCardImage.style.display = 'block';

    coverCards.push(hideCard.code);

    // 山札
    deck = deck - 1;
    deckId.textContent = deck + "枚";
    if(deck < 0) {
        alert("山札が0枚になりました");
        resetBtn();
    }
    
    // 取得カードの値表示
    const cardValue = document.getElementById('cardValue');
    // const hideCardValue = document.getElementById('hideCardValue');
    // 値変換
    switch (card.value) {
        case "ACE" :
            cardValue.textContent = `1`;
            break;
        case "JACK" :
            cardValue.textContent = `11`;
            break;
        case "QUEEN" :
            cardValue.textContent = `12`;
            break;
        case "KING" :
            cardValue.textContent = `13`;
            break;
        default :
            cardValue.textContent = `${card.value}`;
            break;
    }
    switch (hideCard.value) {
        case "ACE" :
            hideCardValue.textContent = `1`;
            break;
        case "JACK" :
            hideCardValue.textContent = `11`;
            break;
        case "QUEEN" :
            hideCardValue.textContent = `12`;
            break;
        case "KING" :
            hideCardValue.textContent = `13`;
            break;
        default :
            hideCardValue.textContent = `${hideCard.value}`;
            break;
    }
}

// Highボタン
async function highBtn() {
    // pタグの数値を取得
    let card = parseInt(document.getElementById("cardValue").textContent);
    let hideCard = parseInt(document.getElementById("hideCardValue").textContent);
    // 非表示カードの画像取得
    const hideCardImage = document.getElementById('hideCardImage');

    // 手札残り
    const handCard = document.getElementById('handCard');

    // スコア計算
    const scoremath = document.getElementById('scoremath');

    // 非表示カードを表示
    hideCardImage.src = showHideCard;
    
    // 1.5秒後に実行
    setTimeout(function() {
        if (card == hideCard) {
            // ドロー
            alert("ドロー");
            drawCard();
        } else if(card < hideCard) {
            // 勝ち
            cnt--;
            handCard.textContent = cnt + "枚";
            if(cnt == 0){
                var result = confirm("おめでとうございます。リトライしますか？");
                if (result) {
                    resetBtn();
                }
            }
            score++;
            scoremath.textContent = score + "連勝中";
            drawCard();
        } else {
            // 負け
            var result = confirm("あなたのスコアは" + score + "でした。リトライしますか？");
            hideCardImage.src = "img/back.png";
                if (result) {
                    resetBtn();
            }
        }
    }, 1500);
}

// Lowボタン
async function lowBtn() {
    // pタグの数値を取得
    let card = parseInt(document.getElementById("cardValue").textContent);
    let hideCard = parseInt(document.getElementById("hideCardValue").textContent);
    // 非表示カードの画像取得
    const hideCardImage = document.getElementById('hideCardImage');

    // 手札残り
    const handCard = document.getElementById('handCard');

    // スコア計算
    const scoremath = document.getElementById('scoremath');

    // 非表示カードを表示
    hideCardImage.src = showHideCard;
    
    // 1.5秒後に実行
    setTimeout(function() {
        if (card == hideCard) {
            // ドロー
            alert("ドロー");
            drawCard();
        } else if(card > hideCard) {
            // 勝ち
            cnt--;
            handCard.textContent = cnt + "枚";
            if(cnt == 0){
                var result = confirm("おめでとうございます。リトライしますか？");
                if (result) {
                    resetBtn();
                }
            }
            score++;
            scoremath.textContent = score + "連勝中";
            drawCard();
        } else {
            // 負け
            var result = confirm("あなたのスコアは" + score + "でした。リトライしますか？");
            hideCardImage.src = "img/back.png";
                if (result) {
                    resetBtn();
            }
        }
    }, 1500);
}

// リセットボタン
async function resetBtn() {
    location.reload();
}