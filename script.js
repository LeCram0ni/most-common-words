let fruits = [
    "Apple", "Mango", "Mango", "Grape", "Strawberry", "Kiwi", "Kiwi", "Kiwi", "Banana", "Orange",
    "Orange", "Pineapple", "Pineapple", "Blueberry", "Blueberry", "Blueberry", "Grape", "Grape",
    "Apple", "Mango", "Strawberry", "Grape", "Pineapple", "Peach", "Watermelon", "Watermelon",
    "Apple", "Cherry", "Cherry", "Papaya", "Raspberry", "Lemon", "Lemon", "Lime", "Coconut",
    "Coconut", "Pomegranate", "Grapefruit", "Grapefruit", "Pear", "Plum", "Plum", "Apricot",
    "Apricot", "Peach", "Avocado", "Avocado", "Fig", "Passionfruit", "Guava", "Guava", "Blackberry",
    "Raspberry", "Raspberry", "Cranberry", "Cantaloupe", "Cantaloupe", "Dragonfruit", "Mango",
    "Jackfruit", "Jackfruit", "Lychee", "Persimmon", "Starfruit", "Tangerine", "Mulberry", "Orange",
    "Orange", "Nectarine", "Clementine", "Clementine", "Mango", "Mango", "Avocado", "Quince",
    "Quince", "Date", "Fig", "Date", "Date", "Papaya", "Papaya", "Fig", "Mango", "Passionfruit",
    "Kiwi", "Apple", "Guava", "Guava", "Orange", "Plum", "Plum", "Peach", "Grapefruit", "Peach",
    "Banana", "Orange", "Nectarine", "Nectarine", "Watermelon", "Apple", "Pineapple", "Blackberry",
    "Starfruit", "Starfruit", "Apple", "Coconut", "Coconut", "Blueberry", "Lemon", "Dragonfruit",
    "Kiwi", "Kiwi", "Pear", "Lychee", "Clementine", "Clementine", "Lime", "Pear", "Persimmon",
    "Persimmon", "Plum", "Strawberry", "Tangerine", "Watermelon", "Pomegranate", "Date", "Date",
    "Starfruit"
]

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
            map.set(fruit, number + 1)

        } else {
            lastFruit = fruit;
            map.set(fruit, 1)
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
    fruits.forEach(fruit => {
        if (map.has(fruit)) {
            map.set(fruit, map.get(fruit) + 1);
        } else {
            map.set(fruit, 1);
        }
    });

    // Sortieren der Map nach Häufigkeit
    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    let sortedMap = new Map();
    let top = 3;
    let lastFrequency = -1;

    // Einfügen der Top N Einträge in die neue Map
    for (let i = 0; i < sorted.length; i++) {
        let [word, frequency] = sorted[i];

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