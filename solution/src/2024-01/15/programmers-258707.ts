/**
 * 258707. n + 1 카드게임
 * https://school.programmers.co.kr/learn/courses/30/lessons/258707
 */
export function cardGame(coin: number, cards: number[]): number {
  const n = cards.length;
  const target = n + 1;
  const origin = new Set(cards.slice(0, n / 3));

  const pairs: number[][] = [];
  const currentCards = new Set();

  const getCost = (...usedCards: number[]): number => {
    return usedCards.filter((card) => !origin.has(card)).length;
  };

  const addCard = (card: number): void => {
    currentCards.add(card);
    const targetCard = target - card;
    if (currentCards.has(targetCard)) {
      pairs.push([card, targetCard, getCost(card, targetCard)]);
      pairs.sort((a, b) => b[2] - a[2]);
    }
  };

  const removeCard = (card: number): void => {
    origin.delete(card);
    currentCards.delete(card);
  };

  let round = 1;
  let currentIndex = n / 3;
  let remainCoin = coin;
  for (const card of origin) {
    addCard(card);
  }
  while (currentIndex < n - 1) {
    addCard(cards[currentIndex]);
    addCard(cards[currentIndex + 1]);
    const pair = pairs.pop();
    if (!pair) {
      return round;
    }
    const [card1, card2, cost] = pair;
    remainCoin -= cost;
    removeCard(card1);
    removeCard(card2);
    if (remainCoin < 0) {
      return round;
    }
    round += 1;
    currentIndex += 2;
  }

  return round;
}
