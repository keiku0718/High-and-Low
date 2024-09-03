let cnt = 10;
let score = 0;

async function drawCard() {
    // ドロー
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=2');
    const data = await response.json();
  
    // 表示カード
    const card = data.cards[0];
    const cardImage = document.getElementById('cardImage');
    cardImage.src = card.image;
    cardImage.style.display = 'block';

    // 非表示カード
    const hideCard = data.cards[1];
    // const hideCardImage = document.getElementById('hideCardImage');
    // hideCardImage.src = hideCard.image;
    hideCardImage.style.display = 'block';
    
    // 取得カードの値表示
    const cardValue = document.getElementById('cardValue');
    const hideCardValue = document.getElementById('hideCardValue');
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

    // 手札残り
    const handCard = document.getElementById('handCard');
    
    
    if (card < hideCard) {
        cnt--;
        handCard.textContent = cnt + "枚";
        if(cnt == 0){
            var result = confirm("おめでとうございます。リトライしますか？");
            if (result) {
                resetBtn();
            }
        }
        drawCard();
    } else {
        
        alert("×");
    }
}

// Lowボタン
async function lowBtn() {
    // pタグの数値を取得
    let card = parseInt(document.getElementById("cardValue").textContent);
    let hideCard = parseInt(document.getElementById("hideCardValue").textContent);

    if (card > hideCard) {
        cnt--;
        handCard.textContent = cnt + "枚";
        if(cnt == 0){
            var result = confirm("おめでとうございます。リトライしますか？");
            if (result) {
                resetBtn();
            }
        }
        drawCard();
    } else {
        alert("×");
    }
}

// リセットボタン
async function resetBtn() {
    location.reload();
}