const apiUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=20"; // 一度に20枚取得

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

