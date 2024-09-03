async function drawCard() {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
    const data = await response.json();
  
    if (data.success) {
      const card = data.cards[0];
      const cardImage = document.getElementById('cardImage');
      cardImage.src = card.image;
      cardImage.style.display = 'block';
        
        // 取得カードの値表示
        const cardValue = document.getElementById('cardValue');
        switch (card.value) {
            case "ACE" :
                cardValue.textContent = `カードの値: 1`;
                break;
            case "JACK" :
                cardValue.textContent = `カードの値: 11`;
                break;
            case "QUEEN" :
                cardValue.textContent = `カードの値: 12`;
                break;
            case "KING" :
                cardValue.textContent = `カードの値: 13`;
                break;
            default :
                cardValue.textContent = `カードの値: ${card.value}`;
                break;
        }
        
    } else {
      console.error('カードの取得に失敗しました');
    }
  }