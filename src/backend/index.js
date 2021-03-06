const { includes, map, propEq } = require("ramda");

const RED = "Red"; // observatory
const BLUE = "Blue"; // aquarium
const GREEN = "Green"; // garden
const BROWN = "Brown"; // library
const SUN = "Sun";
const MOON = "Moon";
const DOOR = "Door";
const NIGHTMARE = "Nightmare";
const LOCATION = "Location";
const KEY = "Key";
const DREAM = "Dream";

const library = [
    {
        name: SUN,
        color: RED,
        type: LOCATION
    },
    {
        name: SUN,
        color: RED,
        type: LOCATION
    },
    {
        name: SUN,
        color: RED,
        type: LOCATION
    },
    {
        name: SUN,
        color: RED,
        type: LOCATION
    },
    {
        name: SUN,
        color: RED,
        type: LOCATION
    },
    {
        name: SUN,
        color: RED,
        type: LOCATION
    },
    {
        name: SUN,
        color: RED,
        type: LOCATION
    },
    {
        name: SUN,
        color: RED,
        type: LOCATION
    },
    {
        name: SUN,
        color: RED,
        type: LOCATION
    },
    {
        name: MOON,
        color: RED,
        type: LOCATION
    },
    {
        name: MOON,
        color: RED,
        type: LOCATION
    },
    {
        name: MOON,
        color: RED,
        type: LOCATION
    },
    {
        name: MOON,
        color: RED,
        type: LOCATION
    },
    {
        name: SUN,
        color: BLUE,
        type: LOCATION
    },
    {
        name: SUN,
        color: BLUE,
        type: LOCATION
    },
    {
        name: SUN,
        color: BLUE,
        type: LOCATION
    },
    {
        name: SUN,
        color: BLUE,
        type: LOCATION
    },
    {
        name: SUN,
        color: BLUE,
        type: LOCATION
    },
    {
        name: SUN,
        color: BLUE,
        type: LOCATION
    },
    {
        name: SUN,
        color: BLUE,
        type: LOCATION
    },
    {
        name: SUN,
        color: BLUE,
        type: LOCATION
    },
    {
        name: MOON,
        color: BLUE,
        type: LOCATION
    },
    {
        name: MOON,
        color: BLUE,
        type: LOCATION
    },
    {
        name: MOON,
        color: BLUE,
        type: LOCATION
    },
    {
        name: MOON,
        color: BLUE,
        type: LOCATION
    },
    {
        name: SUN,
        color: GREEN,
        type: LOCATION
    },
    {
        name: SUN,
        color: GREEN,
        type: LOCATION
    },
    {
        name: SUN,
        color: GREEN,
        type: LOCATION
    },
    {
        name: SUN,
        color: GREEN,
        type: LOCATION
    },
    {
        name: SUN,
        color: GREEN,
        type: LOCATION
    },
    {
        name: SUN,
        color: GREEN,
        type: LOCATION
    },
    {
        name: SUN,
        color: GREEN,
        type: LOCATION
    },
    {
        name: MOON,
        color: GREEN,
        type: LOCATION
    },
    {
        name: MOON,
        color: GREEN,
        type: LOCATION
    },
    {
        name: MOON,
        color: GREEN,
        type: LOCATION
    },
    {
        name: MOON,
        color: GREEN,
        type: LOCATION
    },
    {
        name: SUN,
        color: BROWN,
        type: LOCATION
    },
    {
        name: SUN,
        color: BROWN,
        type: LOCATION
    },
    {
        name: SUN,
        color: BROWN,
        type: LOCATION
    },
    {
        name: SUN,
        color: BROWN,
        type: LOCATION
    },
    {
        name: SUN,
        color: BROWN,
        type: LOCATION
    },
    {
        name: SUN,
        color: BROWN,
        type: LOCATION
    },
    {
        name: MOON,
        color: BROWN,
        type: LOCATION
    },
    {
        name: MOON,
        color: BROWN,
        type: LOCATION
    },
    {
        name: MOON,
        color: BROWN,
        type: LOCATION
    },
    {
        name: MOON,
        color: BROWN,
        type: LOCATION
    },

    {
        name: KEY,
        color: RED,
        type: LOCATION
    },
    {
        name: KEY,
        color: RED,
        type: LOCATION
    },
    {
        name: KEY,
        color: RED,
        type: LOCATION
    },
    {
        name: KEY,
        color: BLUE,
        type: LOCATION
    },
    {
        name: KEY,
        color: BLUE,
        type: LOCATION
    },
    {
        name: KEY,
        color: BLUE,
        type: LOCATION
    },
    {
        name: KEY,
        color: GREEN,
        type: LOCATION
    },
    {
        name: KEY,
        color: GREEN,
        type: LOCATION
    },
    {
        name: KEY,
        color: GREEN,
        type: LOCATION
    },
    {
        name: KEY,
        color: BROWN,
        type: LOCATION
    },
    {
        name: KEY,
        color: BROWN,
        type: LOCATION
    },
    {
        name: KEY,
        color: BROWN,
        type: LOCATION
    },

    {
        name: DOOR,
        color: RED,
        type: DOOR
    },
    {
        name: DOOR,
        color: RED,
        type: DOOR
    },
    {
        name: DOOR,
        color: BLUE,
        type: DOOR
    },
    {
        name: DOOR,
        color: BLUE,
        type: DOOR
    },
    {
        name: DOOR,
        color: GREEN,
        type: DOOR
    },
    {
        name: DOOR,
        color: GREEN,
        type: DOOR
    },
    {
        name: DOOR,
        color: BROWN,
        type: DOOR
    },
    {
        name: DOOR,
        color: BROWN,
        type: DOOR
    },

    {
        name: NIGHTMARE,
        color: null,
        type: DREAM
    },
    {
        name: NIGHTMARE,
        color: null,
        type: DREAM
    },
    {
        name: NIGHTMARE,
        color: null,
        type: DREAM
    },
    {
        name: NIGHTMARE,
        color: null,
        type: DREAM
    },
    {
        name: NIGHTMARE,
        color: null,
        type: DREAM
    },
    {
        name: NIGHTMARE,
        color: null,
        type: DREAM
    },
    {
        name: NIGHTMARE,
        color: null,
        type: DREAM
    },
    {
        name: NIGHTMARE,
        color: null,
        type: DREAM
    },
    {
        name: NIGHTMARE,
        color: null,
        type: DREAM
    },
    {
        name: NIGHTMARE,
        color: null,
        type: DREAM
    }
];
const labyrinth = [];
const limbo = [];
const hand = [];
const discardPile = [];
const openedDoors = [];
let remainingNightmaresInLibrary = 10;

const shuffleLibrary = () => {};

const addToHand = card => {
    hand.push(card);
};

const drawCard = () => {
    const card = library.shift();
    checkIfLastCard();
    if (card.type === DOOR) {
        const wantedKey = {
            name: KEY,
            color: card.color,
            type: KEY
        };
        if (checkHandForMatchingKey(wantedKey)) openDoor();
        else addToLimbo(card);
    }
    if (card.type === NIGHTMARE) handleNightmare();
    else addToLimbo(card);
    addToHand(card);
    return card
};

const checkHandForMatchingKey = wantedKey => includes(wantedKey, hand);
const searchLibraryForSpecificDoor = wantedDoor => includes(wantedDoor, library);


const addToLimbo = card => {
    limbo.push(card);
};

const playCard = () => {
    const cardToPlay = {}; // TODO: select
    if (checkIfPlayable(cardToPlay)) {
        labyrinth.push(cardToPlay);
        checkIfDoorShouldOpen(cardToPlay.color);
    } else {
        console.log("❌ Illegal play ❌");
    }
};

const openDoor = door => {
    // check that not all doors are open
    searchLibraryForSpecificDoor(door, library);
    openedDoors.push(door);
};

const checkIfDoorShouldOpen = color => {
    if (
        labyrinth[0].color === color &&
        labyrinth[1].color === color &&
        labyrinth[2].color === color
    ) {
        const doorToOpen = {
            name: DOOR,
            color: color,
            type: DOOR
        };
        openDoor(doorToOpen);
        checkIfAllDoorAreOpen();
    }
};

const checkIfPlayable = card => {
    const lastCard = labyrinth[0];
    return lastCard.name !== card.name;
};

const discardCard = card => {
    discardPile.push(card);
    if (card.type === NIGHTMARE) remainingNightmaresInLibrary--;
    if (card.type === KEY) prophecy();
};

const prophecy = () => {
    // look at top 5 cards of library or as many as in library
    // discard one -> add to discardPile
    // select card to put on top of library until all is put back
};

drawFullHand()

const shuffleLimboIntoLibrary = ({ limbo, library }) => {
    library.push(limbo)
    shuffleLibrary()
    return library
}

const handleNightmare = hand => {
    checkForKeysInHand(hand)
    // trigger options: discardKey, discardHand, discardFiveFromLibrary
};

const checkForKeysInHand = hand => {
    // get all keys in hand
}

const discardHand = hand => {
    discardPile.push(hand)
    return discardPile
};

// pick key to discard to handle nightmare
const discardKey = key => {
    // add key to discard
    // handSize < 5 -> drawCard
};

const moveToDiscard = ({ card, discardPile }) => {
    discardPile.unshift(card);
    return discardPile
};

const discardFiveFromLibrary = ({ library, discardPile }) => {
    let n = 0;
    do {
        const card = library.shift;
        moveToDiscard(card, discardPile);
    } while (n < 5);
    return { library, discardPile }
};

const checkIfLastCard = library => {
    if (library.length < 1) console.log("😵 You lose! 😵");
};

const checkIfAllDoorAreOpen = () => {
    // check number of doors in library
    const isDoor = propEq('type', 'Door');
    const allClosedDoors = map(isDoor, library)


    if (openedDoors.length === 8) console.log("🥳 You win! 🥳");
};
