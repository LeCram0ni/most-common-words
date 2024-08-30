let words = ["Apple", "Mango", "Mango", "Grape", "Strawberry", "Kiwi", "Kiwi", "Kiwi", "Banana", "Orange", "Orange", "Blueberry", "Blueberry", "Blueberry", "Grape", "Grape", "Apple", "Mango", "Strawberry", "Grape", "Peach", "Watermelon", "Watermelon", "Apple", "Cherry", "Cherry", "Papaya", "Raspberry", "Lemon", "Lime", "Grape", "Coconut", "Pomegranate", "Grapefruit"];

function mapFruits() {
  const map = new Map();
  let number = 1;

  for (key in fruits) {
    fruit = fruits[key];

    if (map.has(fruit)) {
      number = map.get(fruit);
      map.set(fruit, number + 1);
      /*console.log("does have " + fruit);
            console.log(number + 1);*/
    } else {
      /*console.log("doesnt have " + fruit);
            console.log("1");*/
      map.set(fruit, 1);
    }
  }

  console.log(map);
}

function arrayFruits() {
  fruits.sort();
  const map = new Map();
  let number = 0;
  let lastFruit = "";

  for (key in fruits) {
    let fruit = fruits[key];

    if (fruit == lastFruit) {
      number = map.get(fruit);
      map.set(fruit, number + 1);
    } else {
      lastFruit = fruit;
      map.set(fruit, 1);
    }
  }

  let last = 0;
  let top = 3;
  let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
  let sortedMap = new Map();

  for (key in sorted) {
    let [word, frequency] = sorted[key];
    console.log(word + " " + frequency);

    if (top > 0) {
      if (frequency >= last) {
        sortedMap.set(word, frequency);
        last = frequency;
      } else {
        top = top - 1;
        last = frequency;
        if (top > 0) {
          sortedMap.set(word, frequency);
        }
      }
    }
  }
  console.log(sortedMap);
}

function arrayFruits2() {
  const map = new Map();

  // Zählen der Häufigkeit jedes Elements
  words.forEach((word) => {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
    }
  });

  console.log("map "+[...map.entries()]);

  // Sortieren der Map nach Häufigkeit
  let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
  console.log("sorted "+sorted);

  let sortedMap = new Map();
  let top = 3;
  let lastFrequency = -1;

  // Einfügen der Top N Einträge in die neue Map
  for (let i = 0; i < sorted.length; i++) {

    let [word, frequency] = sorted[i];
    console.log("word " + word + " frequency: " + frequency);

    // Füge Einträge hinzu, solange `top > 0` oder die Frequenz gleich der letzten ist
    if (top > 0 || frequency === lastFrequency) {
      sortedMap.set(word, frequency);
      if (frequency !== lastFrequency) {
        top--; // Reduziere den Zähler nur bei unterschiedlicher Frequenz
      }
      lastFrequency = frequency;
    } else {
      break; // Beende die Schleife, wenn `top` erreicht ist und die nächste Frequenz kleiner ist
    }

  }

  console.log(sortedMap);
}

/*mapFruits();*/

arrayFruits2();
