// Array of words related to the ocean
var randomWords = ["seashell", "coral", "fish", "ocean", "plankton", "starfish"];

// Generate a random whole number between 0 and 5
var randomIndex = Math.floor(Math.random() * 6);

// Log a random word from the array using the random index
console.log("random word:", randomWords[randomIndex]);

// Print a blank line and a header for the insult generator
console.log('\n', "-------------Random Insult Generator------------------");

// Array containing body parts to be used in the insult
var randomBodyParts = ["head", "teeth", "legs"];

// Array containing many adjectives to describe the insult
var randomAdjectives = ["twigbrain", "Weird", "Crazy", "Lazy", "Ugly", "Dumb", "Brainless", "Clumsy", "Dim",
    "Fat", "Insecure", "Ridiculous", "Silly", "Goofy", "Nerdy", "Obnoxious", "Pathetic", "Repulsive", "Vapid", "Wimpy", "Worthless",
    "Zany", "Absurd", "Bizarre", "Foolish", "Ludicrous", "Preposterous", "Senseless", "Twisted", "Wacky", "Daft", "Gullible",
    "Hopeless", "Idiotic", "Laughable", "Moronic", "Nonsensical", "Outrageous", "Ridiculous", "Screwball", "Tacky", "Unbelievable",
    "Wimpy", "Zany", "Air-headed", "Bone-headed", "Dim-witted", "Feather-brained", "Half-baked", "Light-headed", "Mindless",
    "Numbskull", "Scatterbrained", "Thick-headed", "Two-bit", "Weak-minded", "Bird-brained", "Blockheaded", "Dingbat",
    "Dull-witted", "Empty-headed", "Feeble-minded", "Ignorant", "Lame-brained", "Muddle-headed", "Nitwitted", "Pudding-headed",
    "Simple-minded", "Soft-headed", "Wooden-headed", "Zonked", "Asinine", "Brainless", "Cretinous", "Dim", "Doltish", "Fatuous",
    "Imbecilic", "Lunatic", "Mindless", "Obtuse", "Senseless", "Unintelligent", "Vacuous", "Weak-brained", "Zany", "Clod-headed",
    "Ding-dong", "Dullard", "Featherbrain", "Halfwit", "Jackass", "Lamebrain", "Nincompoop", "Numskull", "Pinhead", "Simpleton",
    "Twit", "Blockhead", "Bonehead", "Dullwit", "Egghead", "Goon", "Idiot", "Knucklehead", "Lunkhead", "Moron", "Noodle", "Prat",
    "Scatterbrain", "Thinbrain", "Wool-brain", "Zanybrain", "Bozo", "Cabbagehead", "Ding-a-ling", "Dullsville", "Flake",
    "Half-brained", "Lamebrain", "Ninny", "Nutcase", "Pinhead", "Simpleminded", "Twaddle", "Woollyhead", "Zanyhead", "Airhead",
    "Birdbrain", "Dingbat", "Dullbrain", "Half-brain", "Numbbrain", "Scatterbrain", "Twitbrain"
];

// Array of animals/creatures used at the end of the insult
var randomWords = ["Rat", "dog", "Cat", "Donkey", "Chicken", "Buffalo", "Lizard", "Toad", "Bug", "Worm",
    "Sloth", "Maggot", "Roach", "Bat", "Beetle", "Flea", "Ant", "Clam", "Slug", "Snail", "Vulture", "Crocodile",
    "Alligator",
];

// Pick a random body part from the randomBodyParts array
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 5)];

// Pick a random adjective from the randomAdjectives array
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 2)];

// Pick a random word from the randomWords array using its length
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// Combine all the random parts into a single insult sentence
var randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";

// Output the final insult to the console
console.log(randomInsult);
