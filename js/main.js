/* House cards are data-driven so every GOT/HOTD house uses the same card markup and existing CSS. */
const HOUSE_CARD_DATA={
  "got": [
    {
      "id": "stark",
      "category": "north",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-stark.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Stark\" decoding=\"async\" height=\"335\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"597\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<path d=\"M50 10 L70 40 L60 45 L75 65 L60 65 L60 90 L40 90 L40 65 L25 65 L40 45 L30 40 Z\" fill=\"currentColor\">\n</path>\n</svg>\n<h3>\n       House Stark\n      </h3>\n<p class=\"motto\">\n       \"Winter is Coming\"\n      </p>\n<p class=\"region\">\n       The North\n      </p>\n<p class=\"lore\">\n       Rulers of the North for thousands of years, the Starks measure loyalty in blood and cold in centuries. Their sigil, a running direwolf, marks a family that keeps its word even when keeping it costs everything — and it usually does.\n      </p>\n<span class=\"seat\">\n       Seat: Winterfell\n      </span>\n</div>\n"
    },
    {
      "id": "lannister",
      "category": "westerlands",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-lannister.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Lannister\" decoding=\"async\" height=\"414\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"738\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<circle cx=\"50\" cy=\"45\" fill=\"none\" r=\"22\" stroke=\"currentColor\" stroke-width=\"4\">\n</circle>\n<path d=\"M50 20 L54 35 L50 30 L46 35 Z\" fill=\"currentColor\">\n</path>\n<path d=\"M35 45 L20 45 M65 45 L80 45 M50 67 L50 82\" stroke=\"currentColor\" stroke-width=\"4\">\n</path>\n</svg>\n<h3>\n       House Lannister\n      </h3>\n<p class=\"motto\">\n       \"Hear Me Roar\"\n      </p>\n<p class=\"region\">\n       The Westerlands\n      </p>\n<p class=\"lore\">\n       The richest family in the Seven Kingdoms, and rarely shy about reminding you. Gold from Casterly Rock bought them armies, marriages, and the throne itself — though never quite the loyalty that gold can't purchase.\n      </p>\n<span class=\"seat\">\n       Seat: Casterly Rock\n      </span>\n</div>\n"
    },
    {
      "id": "targaryen",
      "category": "crownlands",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-targaryen.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Targaryen\" decoding=\"async\" height=\"336\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"595\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<path d=\"M50 15 C30 25, 20 45, 25 65 C35 55, 45 55, 50 65 C55 55, 65 55, 75 65 C80 45, 70 25, 50 15 Z\" fill=\"currentColor\">\n</path>\n</svg>\n<h3>\n       House Targaryen\n      </h3>\n<p class=\"motto\">\n       \"Fire and Blood\"\n      </p>\n<p class=\"region\">\n       Dragonstone (originally)\n      </p>\n<p class=\"lore\">\n       The only family that ever tamed a dragon and rode it into history. They united a continent by burning parts of it first, then ruled for three hundred years before losing the one thing dragons can't fix: everyone's patience.\n      </p>\n<span class=\"seat\">\n       Seat: Dragonstone / King's Landing\n      </span>\n</div>\n"
    },
    {
      "id": "baratheon",
      "category": "stormlands",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-baratheon.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Baratheon\" decoding=\"async\" height=\"414\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"738\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<path d=\"M50 20 L60 40 L80 42 L64 55 L70 75 L50 63 L30 75 L36 55 L20 42 L40 40 Z\" fill=\"currentColor\">\n</path>\n</svg>\n<h3>\n       House Baratheon\n      </h3>\n<p class=\"motto\">\n       \"Ours is the Fury\"\n      </p>\n<p class=\"region\">\n       The Stormlands\n      </p>\n<p class=\"lore\">\n       Forged in rebellion, the Baratheons took the throne with a war hammer and kept it with a great deal of wine. A house of storm lords who were never quite as comfortable sitting still as they were charging forward.\n      </p>\n<span class=\"seat\">\n       Seat: Storm's End\n      </span>\n</div>\n"
    },
    {
      "id": "greyjoy",
      "category": "iron-islands",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-greyjoy.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Greyjoy\" decoding=\"async\" height=\"413\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"736\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<path d=\"M30 30 Q50 15 70 30 L65 60 Q50 75 35 60 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\">\n</path>\n<path d=\"M50 40 L50 65 M40 50 L60 50\" stroke=\"currentColor\" stroke-width=\"4\">\n</path>\n</svg>\n<h3>\n       House Greyjoy\n      </h3>\n<p class=\"motto\">\n       \"We Do Not Sow\"\n      </p>\n<p class=\"region\">\n       The Iron Islands\n      </p>\n<p class=\"lore\">\n       Iron Islanders who never trusted the mainland's idea of ownership — why grow something when you can take it by longship? Salt, drowned gods, and old grudges keep this house afloat, sometimes barely.\n      </p>\n<span class=\"seat\">\n       Seat: Pyke\n      </span>\n</div>\n"
    },
    {
      "id": "tyrell",
      "category": "reach",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-tyrell.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Tyrell\" decoding=\"async\" height=\"336\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"595\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<circle cx=\"50\" cy=\"55\" fill=\"currentColor\" r=\"10\">\n</circle>\n<path d=\"M50 55 L50 30 M50 55 L30 65 M50 55 L70 65 M50 55 L35 40 M50 55 L65 40\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\">\n</path>\n</svg>\n<h3>\n       House Tyrell\n      </h3>\n<p class=\"motto\">\n       \"Growing Strong\"\n      </p>\n<p class=\"region\">\n       The Reach\n      </p>\n<p class=\"lore\">\n       Highgarden's rulers understood something the sword-houses often forgot: you can win a lot of wars with grain, gold, and a well-placed marriage. Their patience outlasted several kings, right up until it didn't.\n      </p>\n<span class=\"seat\">\n       Seat: Highgarden\n      </span>\n</div>\n"
    },
    {
      "id": "martell",
      "category": "dorne",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-martell.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Martell\" decoding=\"async\" height=\"336\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"595\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<circle cx=\"50\" cy=\"50\" fill=\"none\" r=\"28\" stroke=\"currentColor\" stroke-width=\"4\">\n</circle>\n<path d=\"M32 50 L68 50 M50 32 L50 68\" stroke=\"currentColor\" stroke-width=\"4\">\n</path>\n</svg>\n<h3>\n       House Martell\n      </h3>\n<p class=\"motto\">\n       \"Unbowed, Unbent, Unbroken\"\n      </p>\n<p class=\"region\">\n       Dorne\n      </p>\n<p class=\"lore\">\n       The one kingdom that was never conquered by fire or by force — Dorne married its way out of a Targaryen invasion instead. Sun, spears, and a very long memory for old wrongs.\n      </p>\n<span class=\"seat\">\n       Seat: Sunspear\n      </span>\n</div>\n"
    },
    {
      "id": "arryn",
      "category": "vale",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-arryn.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Arryn\" decoding=\"async\" height=\"414\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"738\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<path d=\"M25 60 L50 20 L75 60 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\">\n</path>\n<circle cx=\"50\" cy=\"45\" fill=\"currentColor\" r=\"6\">\n</circle>\n</svg>\n<h3>\n       House Arryn\n      </h3>\n<p class=\"motto\">\n       \"As High as Honor\"\n      </p>\n<p class=\"region\">\n       The Vale\n      </p>\n<p class=\"lore\">\n       Tucked behind a mountain range so brutal that armies simply stopped trying, the Vale sat out most of the realm's wars by the simple trick of being extremely hard to reach.\n      </p>\n<span class=\"seat\">\n       Seat: The Eyrie\n      </span>\n</div>\n"
    },
    {
      "id": "tully",
      "category": "riverlands",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-tully.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Tully\" decoding=\"async\" height=\"335\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"597\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<path d=\"M20 45 Q50 25 80 45 Q50 40 20 45 Z\" fill=\"currentColor\">\n</path>\n<path d=\"M20 55 Q50 35 80 55 Q50 50 20 55 Z\" fill=\"currentColor\" opacity=\"0.6\">\n</path>\n</svg>\n<h3>\n       House Tully\n      </h3>\n<p class=\"motto\">\n       \"Family, Duty, Honor\"\n      </p>\n<p class=\"region\">\n       The Riverlands\n      </p>\n<p class=\"lore\">\n       Riverlords sitting at the crossroads of every war that ever passed through Westeros — which meant they bled for practically everyone else's ambitions, over and over again.\n      </p>\n<span class=\"seat\">\n       Seat: Riverrun\n      </span>\n</div>\n"
    },
    {
      "id": "bolton",
      "category": "north",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-bolton.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Bolton\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Bolton</h3><p class=\"motto\">\"Our Blades Are Sharp\"</p><p class=\"region\">The North</p><p class=\"lore\">An ancient northern house whose history is marked by rivalry with the Starks. The Boltons are feared for their ruthless reputation and their pursuit of power in the North.</p><span class=\"seat\">Seat: The Dreadfort</span></div>"
    },
    {
      "id": "mormont",
      "category": "north",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-mormont.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Mormont\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Mormont</h3><p class=\"motto\">\"Here We Stand\"</p><p class=\"region\">The North</p><p class=\"lore\">The Mormonts of Bear Island are a small but fiercely independent northern house. Their strength comes from loyalty, resilience and a willingness to defend their home against overwhelming odds.</p><span class=\"seat\">Seat: Bear Island</span></div>"
    },
    {
      "id": "karstark",
      "category": "north",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-karstark.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Karstark\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Karstark</h3><p class=\"motto\">\"The Sun of Winter\"</p><p class=\"region\">The North</p><p class=\"lore\">A powerful northern branch descended from the Starks. The Karstarks become important during Robb Stark’s campaign and are drawn into the difficult choices that divide the northern cause.</p><span class=\"seat\">Seat: Karhold</span></div>"
    },
    {
      "id": "frey",
      "category": "riverlands",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-frey.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Frey\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Frey</h3><p class=\"motto\">\"We Stand Together\"</p><p class=\"region\">The Riverlands</p><p class=\"lore\">House Frey controls the strategic crossing at the Twins and uses marriages and alliances to expand its influence. Their position makes them a crucial political player during the wars of the Five Kings.</p><span class=\"seat\">Seat: The Twins</span></div>"
    },
    {
      "id": "blackwood",
      "category": "riverlands",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-blackwood.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Blackwood\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Blackwood</h3><p class=\"motto\">\"A Rising Tide\"</p><p class=\"region\">The Riverlands</p><p class=\"lore\">One of the oldest houses of the Riverlands, the Blackwoods are known for their long feud with House Bracken and their enduring loyalty to their chosen allies.</p><span class=\"seat\">Seat: Raventree Hall</span></div>"
    },
    {
      "id": "bracken",
      "category": "riverlands",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-bracken.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Bracken\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Bracken</h3><p class=\"motto\">\"No Foe May Pass\"</p><p class=\"region\">The Riverlands</p><p class=\"lore\">An ancient Riverlands house and traditional rival of the Blackwoods. The Brackens have survived centuries of conflict by defending their lands and pursuing their own interests.</p><span class=\"seat\">Seat: Stone Hedge</span></div>"
    },
    {
      "id": "royce",
      "category": "vale",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-royce.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Royce\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Royce</h3><p class=\"motto\">\"We Remember\"</p><p class=\"region\">The Vale</p><p class=\"lore\">A prominent house of the Vale with a long history of service and independence. The Royces remain influential through their lands, warriors and close ties to the politics of the Vale.</p><span class=\"seat\">Seat: Runestone</span></div>"
    },
    {
      "id": "dayne",
      "category": "dorne",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-dayne.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Dayne\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Dayne</h3><p class=\"motto\">\"None\"</p><p class=\"region\">Dorne</p><p class=\"lore\">A famous Dornish house whose ancestral sword Dawn and legendary warriors give it a distinctive place in Westerosi history. Starfall stands on the Torrentine in western Dorne.</p><span class=\"seat\">Seat: Starfall</span></div>"
    },
    {
      "id": "tarly",
      "category": "reach",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-tarly.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Tarly\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Tarly</h3><p class=\"motto\">\"First in Battle\"</p><p class=\"region\">The Reach</p><p class=\"lore\">A powerful Reach house known for its military tradition. The Tarlys value discipline and martial skill and hold lands around Horn Hill in the Reach.</p><span class=\"seat\">Seat: Horn Hill</span></div>"
    },
    {
      "id": "hightower",
      "category": "reach",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-hightower.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Hightower\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Hightower</h3><p class=\"motto\">\"We Light the Way\"</p><p class=\"region\">The Reach</p><p class=\"lore\">One of the richest and most influential houses of the Reach, the Hightowers rule from Oldtown and wield influence through trade, learning, wealth and royal connections.</p><span class=\"seat\">Seat: Oldtown</span></div>"
    },
    {
      "id": "florent",
      "category": "reach",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-florent.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Florent\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Florent</h3><p class=\"motto\">\"Ever Vigilant\"</p><p class=\"region\">The Reach</p><p class=\"lore\">A noble Reach house with extensive family connections. The Florents become involved in the struggle for the Iron Throne through their alliances and marriages.</p><span class=\"seat\">Seat: Brightwater Keep</span></div>"
    },
    {
      "id": "reed",
      "category": "north",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-reed.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Reed\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Reed</h3><p class=\"motto\">\"We Remember\"</p><p class=\"region\">The North</p><p class=\"lore\">The crannogmen of the Neck are led by House Reed, a small but strategically important family whose knowledge of the marshes makes them valuable allies to the Starks.</p><span class=\"seat\">Seat: Greywater Watch</span></div>"
    }
  ],
  "hotd": [
    {
      "id": "targaryen",
      "category": "",
      "faction": "split",
      "image": "../assets/images/houses/hotd/hotd-house-targaryen.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Targaryen\" decoding=\"async\" height=\"335\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"597\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<path d=\"M50 15 C30 25, 20 45, 25 65 C35 55, 45 55, 50 65 C55 55, 65 55, 75 65 C80 45, 70 25, 50 15 Z\" fill=\"currentColor\">\n</path>\n</svg>\n<h3>\n       House Targaryen\n      </h3>\n<p class=\"motto\">\n       \"Fire and Blood\" — on both sides now\n      </p>\n<p class=\"region\">\n       Dragonstone / King's Landing\n      </p>\n<p class=\"lore\">\n       The only house in this war, technically fighting itself. Rhaenyra's line rides for the black; Aegon, Aemond, and Alicent's children ride for the green. Same name, same dragonblood, same coat of arms — pointed at each other.\n      </p>\n<span class=\"seat\">\n       Seat: Dragonstone (Black) / King's Landing (Green)\n      </span>\n</div>\n"
    },
    {
      "id": "hightower",
      "category": "",
      "faction": "green",
      "image": "../assets/images/houses/hotd/hotd-house-hightower.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Hightower\" decoding=\"async\" height=\"324\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"617\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<rect fill=\"currentColor\" height=\"55\" width=\"16\" x=\"42\" y=\"15\">\n</rect>\n<path d=\"M30 70 L70 70 L60 90 L40 90 Z\" fill=\"currentColor\">\n</path>\n</svg>\n<h3>\n       House Hightower\n      </h3>\n<p class=\"motto\">\n       \"We Light the Way\"\n      </p>\n<p class=\"region\">\n       The Reach\n      </p>\n<p class=\"lore\">\n       Guardians of Oldtown and its great lighthouse, the Hightowers back their own — Alicent and, by extension, Aegon — from the very first council meeting after Viserys's death, before most of the realm even knows there's a war coming.\n      </p>\n<span class=\"seat\">\n       Seat: The Hightower, Oldtown\n      </span>\n</div>\n"
    },
    {
      "id": "velaryon",
      "category": "",
      "faction": "black",
      "image": "../assets/images/houses/hotd/hotd-house-velaryon.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Velaryon\" decoding=\"async\" height=\"280\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"500\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<path d=\"M20 45 Q50 20 80 45 Q50 38 20 45 Z\" fill=\"currentColor\">\n</path>\n<path d=\"M20 58 Q50 33 80 58 Q50 51 20 58 Z\" fill=\"currentColor\" opacity=\"0.6\">\n</path>\n</svg>\n<h3>\n       House Velaryon\n      </h3>\n<p class=\"motto\">\n       \"The Old, the True, the Brave\"\n      </p>\n<p class=\"region\">\n       Driftmark\n      </p>\n<p class=\"lore\">\n       The realm's greatest naval power, married into the Targaryen line and firmly loyal to Rhaenyra. Their fleet — and their fortune — become one of Team Black's biggest advantages, and one of its costliest losses.\n      </p>\n<span class=\"seat\">\n       Seat: High Tide, Driftmark\n      </span>\n</div>\n"
    },
    {
      "id": "strong",
      "category": "",
      "faction": "black",
      "image": "../assets/images/houses/hotd/hotd-house-strong.jpg",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Strong\" decoding=\"async\" height=\"432\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"708\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<path d=\"M50 15 L60 45 L90 45 L65 62 L75 90 L50 72 L25 90 L35 62 L10 45 L40 45 Z\" fill=\"currentColor\">\n</path>\n</svg>\n<h3>\n       House Strong\n      </h3>\n<p class=\"motto\">\n       Loyal to the crown they served\n      </p>\n<p class=\"region\">\n       The Riverlands\n      </p>\n<p class=\"lore\">\n       A smaller house whose fate becomes tangled directly in the royal succession — their name follows Rhaenyra's own children through a controversy that Team Green never lets anyone forget.\n      </p>\n<span class=\"seat\">\n       Seat: Harrenhal\n      </span>\n</div>\n"
    },
    {
      "id": "stark",
      "category": "black",
      "faction": "black",
      "image": "../assets/images/houses/hotd/hotd-house-stark.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Stark\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Stark</h3><p class=\"motto\">\"Winter is Coming\"</p><p class=\"region\">The North</p><p class=\"lore\">House Stark is an ancient northern dynasty. During the Dance, the Starks eventually commit northern strength to the cause of Rhaenyra Targaryen.</p><span class=\"seat\">Seat: Winterfell</span></div>"
    },
    {
      "id": "arryn",
      "category": "black",
      "faction": "black",
      "image": "../assets/images/houses/hotd/hotd-house-arryn.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Arryn\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Arryn</h3><p class=\"motto\">\"As High as Honor\"</p><p class=\"region\">The Vale</p><p class=\"lore\">House Arryn rules the Vale and is connected to the Targaryen succession through family ties. The Vale becomes an important source of support for Rhaenyra.</p><span class=\"seat\">Seat: The Eyrie</span></div>"
    },
    {
      "id": "baratheon",
      "category": "green",
      "faction": "green",
      "image": "../assets/images/houses/hotd/hotd-house-baratheon.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Baratheon\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Baratheon</h3><p class=\"motto\">\"Ours is the Fury\"</p><p class=\"region\">The Stormlands</p><p class=\"lore\">House Baratheon controls the Stormlands. Its support becomes strategically important during the succession crisis because the great houses of the realm are forced to choose between competing claims.</p><span class=\"seat\">Seat: Storm’s End</span></div>"
    },
    {
      "id": "blackwood",
      "category": "black",
      "faction": "black",
      "image": "../assets/images/houses/hotd/hotd-house-blackwood.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Blackwood\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Blackwood</h3><p class=\"motto\">\"A Rising Tide\"</p><p class=\"region\">The Riverlands</p><p class=\"lore\">House Blackwood is one of the ancient Riverlands families and supports Rhaenyra. Its longstanding feud with House Bracken adds another layer to the regional conflict.</p><span class=\"seat\">Seat: Raventree Hall</span></div>"
    },
    {
      "id": "bracken",
      "category": "green",
      "faction": "green",
      "image": "../assets/images/houses/hotd/hotd-house-bracken.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Bracken\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Bracken</h3><p class=\"motto\">\"No Foe May Pass\"</p><p class=\"region\">The Riverlands</p><p class=\"lore\">House Bracken is the traditional rival of the Blackwoods. During the Dance, the Brackens support the Green cause while their old enemies support Rhaenyra.</p><span class=\"seat\">Seat: Stone Hedge</span></div>"
    },
    {
      "id": "celtigar",
      "category": "black",
      "faction": "black",
      "image": "../assets/images/houses/hotd/hotd-house-celtigar.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Celtigar\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Celtigar</h3><p class=\"motto\">\"None\"</p><p class=\"region\">The Crownlands</p><p class=\"lore\">House Celtigar is an old Valyrian house of the Crownlands. Its location and heritage connect it to the wider network of families surrounding Dragonstone and the Targaryen royal line.</p><span class=\"seat\">Seat: Claw Isle</span></div>"
    },
    {
      "id": "beesbury",
      "category": "green",
      "faction": "green",
      "image": "../assets/images/houses/hotd/hotd-house-beesbury.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Beesbury\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Beesbury</h3><p class=\"motto\">\"Beware Our Sting\"</p><p class=\"region\">The Reach</p><p class=\"lore\">A Reach house whose lord serves on the royal council. House Beesbury becomes involved in the succession crisis at the very moment the realm is deciding who should inherit the throne.</p><span class=\"seat\">Seat: Honeyholt</span></div>"
    },
    {
      "id": "mooton",
      "category": "black",
      "faction": "black",
      "image": "../assets/images/houses/hotd/hotd-house-mooton.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Mooton\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Mooton</h3><p class=\"motto\">\"Wisdom and Courage\"</p><p class=\"region\">The Riverlands</p><p class=\"lore\">House Mooton is a prominent Riverlands family based at Maidenpool. Its position makes it relevant to the shifting military and political alliances during the Dance.</p><span class=\"seat\">Seat: Maidenpool</span></div>"
    },
    {
      "id": "cole",
      "category": "green",
      "faction": "green",
      "image": "../assets/images/houses/hotd/hotd-house-cole.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Cole\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Cole</h3><p class=\"motto\">\"First in Battle\"</p><p class=\"region\">The Crownlands</p><p class=\"lore\">House Cole is a lesser Crownlands house whose most famous member, Criston Cole, rises to become a major military and political figure during the succession crisis.</p><span class=\"seat\">Seat: Stone Hedge</span></div>"
    },
    {
      "id": "westerling",
      "category": "black",
      "faction": "black",
      "image": "../assets/images/houses/hotd/hotd-house-westerling.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Westerling\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Westerling</h3><p class=\"motto\">\"Honor, Not Honours\"</p><p class=\"region\">The Westerlands</p><p class=\"lore\">House Westerling is an old Westerlands house. Its members serve the crown and become connected to the broader network of noble families surrounding the Targaryen succession.</p><span class=\"seat\">Seat: The Crag</span></div>"
    },
    {
      "id": "massey",
      "category": "black",
      "faction": "black",
      "image": "../assets/images/houses/hotd/hotd-house-massey.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Massey\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Massey</h3><p class=\"motto\">\"None\"</p><p class=\"region\">The Crownlands</p><p class=\"lore\">House Massey is a Crownlands house with lands close to Dragonstone. Its position makes its loyalty valuable to the Black faction during the Dance.</p><span class=\"seat\">Seat: Stonedance</span></div>"
    },
    {
      "id": "darklyn",
      "category": "black",
      "faction": "black",
      "image": "../assets/images/houses/hotd/hotd-house-darklyn.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Darklyn\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Darklyn</h3><p class=\"motto\">\"None\"</p><p class=\"region\">The Crownlands</p><p class=\"lore\">House Darklyn is an ancient Crownlands family based at Duskendale. Its history is tied closely to the crown and the politics of the lands around King’s Landing.</p><span class=\"seat\">Seat: Duskendale</span></div>"
    },
    {
      "id": "royce",
      "category": "black",
      "faction": "black",
      "image": "../assets/images/houses/hotd/hotd-house-royce.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Royce\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Royce</h3><p class=\"motto\">\"We Remember\"</p><p class=\"region\">The Vale</p><p class=\"lore\">House Royce is one of the Vale’s most prominent families. Its military strength and ancient lineage make it an important component of the Vale’s support for Rhaenyra.</p><span class=\"seat\">Seat: Runestone</span></div>"
    },
    {
      "id": "swann",
      "category": "green",
      "faction": "green",
      "image": "../assets/images/houses/hotd/hotd-house-swann.svg",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Swann\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Swann</h3><p class=\"motto\">\"None\"</p><p class=\"region\">The Stormlands</p><p class=\"lore\">House Swann is a notable Stormlands house. Its position in the southern realm places it within the network of noble families whose loyalties matter during the civil war.</p><span class=\"seat\">Seat: Stonehelm</span></div>"
    }
  ]
};
function renderHouseCards(){
 const grid=document.querySelector('.page-houses .house-grid');
 if(!grid)return;
 const era=document.body.classList.contains('hotd-theme')?'hotd':'got';
 const cards=HOUSE_CARD_DATA[era]||[];
 grid.innerHTML=cards.map(card=>{
   const attrs=[`data-house="${card.id}"`];
   if(card.category)attrs.push(`data-category="${card.category}"`);
   if(card.faction)attrs.push(`data-faction="${card.faction}"`);
   attrs.push('data-search-item=""',`id="house-house-${card.id}"`);
   const inner=card.innerHTML.replace('__HOUSE_IMAGE__',card.image);
   return `<article class="house-card tilt-card" ${attrs.join(' ')}>${inner}</article>`;
 }).join('');
}
renderHouseCards();
const CHARACTER_CARD_DATA = {
  "got": [
    {
      "id": "character-jon-snow",
      "category": "stark",
      "faction": null,
      "name": "Jon Snow",
      "role": "The King in the North",
      "backRole": "The King in the North",
      "description": "A reluctant leader whose identity reshapes the struggle for the Iron Throne and the war against the dead.",
      "image": "../assets/images/characters/got/jon-snow.webp",
      "alt": "Jon Snow",
      "width": "376",
      "height": "531",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-daenerys-targaryen",
      "category": "targaryen",
      "faction": null,
      "name": "Daenerys Targaryen",
      "role": "Mother of Dragons",
      "backRole": "Mother of Dragons",
      "description": "The last Targaryen claimant rises across the Narrow Sea with three dragons and an army of followers.",
      "image": "../assets/images/characters/got/daenerys-targaryen.webp",
      "alt": "Daenerys Targaryen",
      "width": "367",
      "height": "544",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-tyrion-lannister",
      "category": "lannister",
      "faction": null,
      "name": "Tyrion Lannister",
      "role": "The Hand of the Queen",
      "backRole": "The Hand of the Queen",
      "description": "A sharp-minded Lannister who survives court politics through wit, strategy and an inconvenient honesty.",
      "image": "../assets/images/characters/got/tyrion-lannister.webp",
      "alt": "Tyrion Lannister",
      "width": "375",
      "height": "533",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-arya-stark",
      "category": "stark",
      "faction": null,
      "name": "Arya Stark",
      "role": "No One",
      "backRole": "No One",
      "description": "A Stark daughter who turns survival into a craft and returns to Westeros with a very long list.",
      "image": "../assets/images/characters/got/arya-stark.webp",
      "alt": "Arya Stark",
      "width": "738",
      "height": "414",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-sansa-stark",
      "category": "stark",
      "faction": null,
      "name": "Sansa Stark",
      "role": "Lady of Winterfell",
      "backRole": "Lady of Winterfell",
      "description": "A survivor of the capital who learns to read power, protect the North and rule on her own terms.",
      "image": "../assets/images/characters/got/sansa-stark.webp",
      "alt": "Sansa Stark",
      "width": "423",
      "height": "472",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-cersei-lannister",
      "category": "lannister",
      "faction": null,
      "name": "Cersei Lannister",
      "role": "Queen of the Seven Kingdoms",
      "backRole": "Queen of the Seven Kingdoms",
      "description": "A queen who treats the throne as both shield and weapon, defending her family at almost any cost.",
      "image": "../assets/images/characters/got/cersei-lannister.webp",
      "alt": "Cersei Lannister",
      "width": "300",
      "height": "450",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-jaime-lannister",
      "category": "lannister",
      "faction": null,
      "name": "Jaime Lannister",
      "role": "The Kingslayer",
      "backRole": "The Kingslayer",
      "description": "A legendary swordsman whose reputation hides a long struggle between duty, love and honor.",
      "image": "../assets/images/characters/got/jaime-lannister.webp",
      "alt": "Jaime Lannister",
      "width": "625",
      "height": "414",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-bran-stark",
      "category": "stark",
      "faction": null,
      "name": "Bran Stark",
      "role": "The Three-Eyed Raven",
      "backRole": "The Three-Eyed Raven",
      "description": "A Stark who loses the life he knew and gains a strange view of history, memory and what comes next.",
      "image": "../assets/images/characters/got/bran-stark.webp",
      "alt": "Bran Stark",
      "width": "378",
      "height": "529",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-ned-stark",
      "category": "stark",
      "faction": null,
      "name": "Ned Stark",
      "role": "Lord of Winterfell",
      "backRole": "Lord of Winterfell",
      "description": "The honorable lord of Winterfell and father of the Stark children. Ned becomes Hand of the King and discovers that the politics of the capital are far more dangerous than the battles he knows in the North.",
      "image": "../assets/images/characters/got/ned-stark.webp",
      "alt": "Ned Stark",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-catelyn-stark",
      "category": "stark",
      "faction": null,
      "name": "Catelyn Stark",
      "role": "Lady of Winterfell",
      "backRole": "Lady of Winterfell",
      "description": "A Tully of Riverrun who becomes Lady of Winterfell and a determined protector of her children. Catelyn moves between the North and Riverlands as war tears apart the alliances holding her family together.",
      "image": "../assets/images/characters/got/catelyn-stark.webp",
      "alt": "Catelyn Stark",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-robb-stark",
      "category": "stark",
      "faction": null,
      "name": "Robb Stark",
      "role": "King in the North",
      "backRole": "King in the North",
      "description": "Ned’s eldest son, Robb is proclaimed King in the North after his father’s death. His early military victories establish him as a serious force, while his political decisions strain the alliances needed to sustain his war.",
      "image": "../assets/images/characters/got/robb-stark.webp",
      "alt": "Robb Stark",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-theon-greyjoy",
      "category": "other",
      "faction": null,
      "name": "Theon Greyjoy",
      "role": "Prince of Winterfell",
      "backRole": "Prince of Winterfell",
      "description": "The heir of House Greyjoy is raised alongside the Stark children but struggles with his divided identity. His attempt to prove himself to his birth family leads to choices that permanently damage his relationship with the Starks.",
      "image": "../assets/images/characters/got/theon-greyjoy.webp",
      "alt": "Theon Greyjoy",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-brienne-of-tarth",
      "category": "other",
      "faction": null,
      "name": "Brienne of Tarth",
      "role": "Knight of the Seven Kingdoms",
      "backRole": "Knight of the Seven Kingdoms",
      "description": "A warrior from Tarth who dedicates herself to the oaths she makes. Brienne challenges expectations about who can be a knight while forming important bonds with Jaime Lannister and the Stark family.",
      "image": "../assets/images/characters/got/brienne-of-tarth.webp",
      "alt": "Brienne of Tarth",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-sandor-clegane",
      "category": "other",
      "faction": null,
      "name": "Sandor Clegane",
      "role": "The Hound",
      "backRole": "The Hound",
      "description": "A feared warrior who serves the royal court before abandoning the life of a sworn fighter. His journeys with Arya and later other companions reveal a more complicated man beneath his reputation.",
      "image": "../assets/images/characters/got/sandor-clegane.webp",
      "alt": "Sandor Clegane",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-jorah-mormont",
      "category": "other",
      "faction": null,
      "name": "Jorah Mormont",
      "role": "Exiled Knight",
      "backRole": "Exiled Knight",
      "description": "A disgraced knight who becomes one of Daenerys Targaryen’s most persistent advisers and protectors. Jorah’s loyalty is complicated by his past actions and his feelings for Daenerys.",
      "image": "../assets/images/characters/got/jorah-mormont.webp",
      "alt": "Jorah Mormont",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-varys",
      "category": "other",
      "faction": null,
      "name": "Varys",
      "role": "Master of Whisperers",
      "backRole": "Master of Whisperers",
      "description": "A master of intelligence who builds networks of informants across the Seven Kingdoms. Varys presents himself as a servant of the realm while carefully navigating competing claims to power.",
      "image": "../assets/images/characters/got/varys.webp",
      "alt": "Varys",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-petyr-baelish",
      "category": "other",
      "faction": null,
      "name": "Petyr Baelish",
      "role": "Lord of Harrenhal",
      "backRole": "Lord of Harrenhal",
      "description": "Known as Littlefinger, Petyr rises from a minor position through financial skill, manipulation and carefully chosen alliances. He repeatedly turns political uncertainty into opportunities for himself.",
      "image": "../assets/images/characters/got/petyr-baelish.webp",
      "alt": "Petyr Baelish",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-samwell-tarly",
      "category": "other",
      "faction": null,
      "name": "Samwell Tarly",
      "role": "Brother of the Night’s Watch",
      "backRole": "Brother of the Night’s Watch",
      "description": "A bookish young man who joins the Night’s Watch and gradually finds courage in ways he never expected. Sam’s knowledge becomes especially important as the threat beyond the Wall grows.",
      "image": "../assets/images/characters/got/samwell-tarly.webp",
      "alt": "Samwell Tarly",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-davos-seaworth",
      "category": "other",
      "faction": null,
      "name": "Davos Seaworth",
      "role": "The Onion Knight",
      "backRole": "The Onion Knight",
      "description": "A former smuggler who becomes a trusted adviser and skilled negotiator. Davos serves several leaders while maintaining a strong personal sense of loyalty and practical judgment.",
      "image": "../assets/images/characters/got/davos-seaworth.webp",
      "alt": "Davos Seaworth",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-melisandre",
      "category": "other",
      "faction": null,
      "name": "Melisandre",
      "role": "Red Priestess",
      "backRole": "Red Priestess",
      "description": "A priestess devoted to the Lord of Light whose visions and interpretation of prophecy influence major political and military decisions. Her certainty about destiny often brings her into conflict with others.",
      "image": "../assets/images/characters/got/melisandre.webp",
      "alt": "Melisandre",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-gendry",
      "category": "other",
      "faction": null,
      "name": "Gendry",
      "role": "Baratheon Heir",
      "backRole": "Baratheon Heir",
      "description": "A blacksmith who discovers his royal parentage and becomes important to several competing factions. His life changes when his connection to Robert Baratheon becomes politically useful.",
      "image": "../assets/images/characters/got/gendry.webp",
      "alt": "Gendry",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-grey-worm",
      "category": "other",
      "faction": null,
      "name": "Grey Worm",
      "role": "Commander of the Unsullied",
      "backRole": "Commander of the Unsullied",
      "description": "A disciplined soldier who rises to command Daenerys’s Unsullied forces. Grey Worm balances military duty with a growing personal life and loyalty to Daenerys.",
      "image": "../assets/images/characters/got/grey-worm.webp",
      "alt": "Grey Worm",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-missandei",
      "category": "other",
      "faction": null,
      "name": "Missandei",
      "role": "Queen’s Adviser",
      "backRole": "Queen’s Adviser",
      "description": "A multilingual interpreter who becomes one of Daenerys’s closest advisers and friends. Missandei moves from slavery to a position of influence beside the Targaryen queen.",
      "image": "../assets/images/characters/got/missandei.webp",
      "alt": "Missandei",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-tormund-giantsbane",
      "category": "other",
      "faction": null,
      "name": "Tormund Giantsbane",
      "role": "Free Folk Warrior",
      "backRole": "Free Folk Warrior",
      "description": "A charismatic Free Folk leader who becomes an ally of Jon Snow after years of hostility between the peoples north and south of the Wall.",
      "image": "../assets/images/characters/got/tormund-giantsbane.webp",
      "alt": "Tormund Giantsbane",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-stannis-baratheon",
      "category": "other",
      "faction": null,
      "name": "Stannis Baratheon",
      "role": "Claimant to the Iron Throne",
      "backRole": "Claimant to the Iron Throne",
      "description": "A stern and uncompromising Baratheon who believes the law of succession gives him the strongest claim to the Iron Throne.",
      "image": "../assets/images/characters/got/stannis-baratheon.svg",
      "alt": "Stannis Baratheon",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-renly-baratheon",
      "category": "other",
      "faction": null,
      "name": "Renly Baratheon",
      "role": "King claimant",
      "backRole": "King claimant",
      "description": "The youngest Baratheon brother, charismatic and politically popular, who builds a powerful coalition around his claim to the throne.",
      "image": "../assets/images/characters/got/renly-baratheon.svg",
      "alt": "Renly Baratheon",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-margaery-tyrell",
      "category": "other",
      "faction": null,
      "name": "Margaery Tyrell",
      "role": "Queen of the Seven Kingdoms",
      "backRole": "Queen of the Seven Kingdoms",
      "description": "A politically astute Tyrell who understands court life, public image and the value of alliances in King’s Landing.",
      "image": "../assets/images/characters/got/margaery-tyrell.svg",
      "alt": "Margaery Tyrell",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-olenna-tyrell",
      "category": "other",
      "faction": null,
      "name": "Olenna Tyrell",
      "role": "Queen of Thorns",
      "backRole": "Queen of Thorns",
      "description": "The sharp-tongued matriarch of House Tyrell who uses experience, wit and family strategy to navigate royal politics.",
      "image": "../assets/images/characters/got/olenna-tyrell.svg",
      "alt": "Olenna Tyrell",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-bronn",
      "category": "other",
      "faction": null,
      "name": "Bronn",
      "role": "Sellsword / Knight",
      "backRole": "Sellsword / Knight",
      "description": "A practical fighter who turns skill with a sword into wealth and influence by choosing opportunities that reward his loyalty.",
      "image": "../assets/images/characters/got/bronn.svg",
      "alt": "Bronn",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-ramsay-bolton",
      "category": "other",
      "faction": null,
      "name": "Ramsay Bolton",
      "role": "Warden of the North",
      "backRole": "Warden of the North",
      "description": "A ruthless Bolton who uses fear and cruelty to seize control in the North during the struggle for Winterfell.",
      "image": "../assets/images/characters/got/ramsay-bolton.svg",
      "alt": "Ramsay Bolton",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-ygritte",
      "category": "other",
      "faction": null,
      "name": "Ygritte",
      "role": "Free Folk warrior",
      "backRole": "Free Folk warrior",
      "description": "A fierce Free Folk archer whose relationship with Jon Snow gives him a personal connection to the people beyond the Wall.",
      "image": "../assets/images/characters/got/ygritte.svg",
      "alt": "Ygritte",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-gilly",
      "category": "other",
      "faction": null,
      "name": "Gilly",
      "role": "Craster’s daughter / Survivor",
      "backRole": "Craster’s daughter / Survivor",
      "description": "A young woman who escapes Craster’s abusive household and becomes an important companion to Samwell Tarly.",
      "image": "../assets/images/characters/got/gilly.svg",
      "alt": "Gilly",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-beric-dondarrion",
      "category": "other",
      "faction": null,
      "name": "Beric Dondarrion",
      "role": "Lord / Brotherhood leader",
      "backRole": "Lord / Brotherhood leader",
      "description": "A knight repeatedly returned to life who leads the Brotherhood Without Banners and becomes part of the fight against the dead.",
      "image": "../assets/images/characters/got/beric-dondarrion.svg",
      "alt": "Beric Dondarrion",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-thoros-of-myr",
      "category": "other",
      "faction": null,
      "name": "Thoros of Myr",
      "role": "Red Priest",
      "backRole": "Red Priest",
      "description": "A former warrior-priest whose faith and ability to revive the dead make him an important member of the Brotherhood.",
      "image": "../assets/images/characters/got/thoros-of-myr.svg",
      "alt": "Thoros of Myr",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-daario-naharis",
      "category": "other",
      "faction": null,
      "name": "Daario Naharis",
      "role": "Mercenary captain",
      "backRole": "Mercenary captain",
      "description": "A charismatic sellsword who joins Daenerys in Slaver’s Bay and becomes one of her trusted military commanders.",
      "image": "../assets/images/characters/got/daario-naharis.svg",
      "alt": "Daario Naharis",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-khal-drogo",
      "category": "targaryen",
      "faction": null,
      "name": "Khal Drogo",
      "role": "Dothraki khal",
      "backRole": "Dothraki khal",
      "description": "A powerful Dothraki warlord whose marriage to Daenerys changes her position and begins a chain of events leading to the birth of her dragons.",
      "image": "../assets/images/characters/got/khal-drogo.svg",
      "alt": "Khal Drogo",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-tywin-lannister",
      "category": "other",
      "faction": null,
      "name": "Tywin Lannister",
      "role": "Hand of the King / Lord of Casterly Rock",
      "backRole": "Hand of the King / Lord of Casterly Rock",
      "description": "A formidable Lannister patriarch who combines political calculation, military authority and family ambition to shape the wars around the Iron Throne.",
      "image": "../assets/images/characters/got/tywin-lannister.svg",
      "alt": "Tywin Lannister",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-loras-tyrell",
      "category": "other",
      "faction": null,
      "name": "Loras Tyrell",
      "role": "Knight of the Kingsguard",
      "backRole": "Knight of the Kingsguard",
      "description": "A renowned Tyrell knight whose skill in tournaments and battle makes him an important member of his family’s political network.",
      "image": "../assets/images/characters/got/loras-tyrell.svg",
      "alt": "Loras Tyrell",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-garlan-tyrell",
      "category": "other",
      "faction": null,
      "name": "Garlan Tyrell",
      "role": "Lord of Brightwater Keep",
      "backRole": "Lord of Brightwater Keep",
      "description": "A capable Tyrell warrior and older brother of Loras and Margaery who contributes military strength to House Tyrell.",
      "image": "../assets/images/characters/got/garlan-tyrell.svg",
      "alt": "Garlan Tyrell",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-hodor",
      "category": "other",
      "faction": null,
      "name": "Hodor",
      "role": "Stablehand of Winterfell",
      "backRole": "Stablehand of Winterfell",
      "description": "A gentle giant from Winterfell whose loyalty to Bran makes him an important companion during the journey beyond the Wall.",
      "image": "../assets/images/characters/got/hodor.svg",
      "alt": "Hodor",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-jaqen-h-ghar",
      "category": "other",
      "faction": null,
      "name": "Jaqen H’ghar",
      "role": "Faceless Man",
      "backRole": "Faceless Man",
      "description": "A mysterious assassin who introduces Arya to the Faceless Men and their demanding philosophy of identity and death.",
      "image": "../assets/images/characters/got/jaqen-h-ghar.svg",
      "alt": "Jaqen H’ghar",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-syrio-forel",
      "category": "other",
      "faction": null,
      "name": "Syrio Forel",
      "role": "First Sword of Braavos",
      "backRole": "First Sword of Braavos",
      "description": "Arya’s fencing instructor in King’s Landing who teaches her to see combat as a discipline of movement, awareness and patience.",
      "image": "../assets/images/characters/got/syrio-forel.svg",
      "alt": "Syrio Forel",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-roose-bolton",
      "category": "other",
      "faction": null,
      "name": "Roose Bolton",
      "role": "Lord of the Dreadfort",
      "backRole": "Lord of the Dreadfort",
      "description": "A calculating northern lord whose quiet manner hides a willingness to change allegiance when it benefits House Bolton.",
      "image": "../assets/images/characters/got/roose-bolton.svg",
      "alt": "Roose Bolton",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-walder-frey",
      "category": "other",
      "faction": null,
      "name": "Walder Frey",
      "role": "Lord of the Crossing",
      "backRole": "Lord of the Crossing",
      "description": "The elderly lord of the Twins whose control of the crossings gives House Frey significant leverage during the War of the Five Kings.",
      "image": "../assets/images/characters/got/walder-frey.svg",
      "alt": "Walder Frey",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-qyburn",
      "category": "other",
      "faction": null,
      "name": "Qyburn",
      "role": "Former Maester / Royal adviser",
      "backRole": "Former Maester / Royal adviser",
      "description": "A disgraced former maester who uses unconventional experiments and political service to regain influence in King’s Landing.",
      "image": "../assets/images/characters/got/qyburn.svg",
      "alt": "Qyburn",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-mace-tyrell",
      "category": "other",
      "faction": null,
      "name": "Mace Tyrell",
      "role": "Lord of Highgarden",
      "backRole": "Lord of Highgarden",
      "description": "The head of House Tyrell during the later wars, balancing family interests, royal alliances and the military power of the Reach.",
      "image": "../assets/images/characters/got/mace-tyrell.svg",
      "alt": "Mace Tyrell",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-podrick-payne",
      "category": "other",
      "faction": null,
      "name": "Podrick Payne",
      "role": "Squire to Tyrion / Knight",
      "backRole": "Squire to Tyrion / Knight",
      "description": "A loyal young squire who grows from an uncertain servant into a capable and dependable fighter.",
      "image": "../assets/images/characters/got/podrick-payne.svg",
      "alt": "Podrick Payne",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-shae",
      "category": "other",
      "faction": null,
      "name": "Shae",
      "role": "Companion of Tyrion Lannister",
      "backRole": "Companion of Tyrion Lannister",
      "description": "A woman whose relationship with Tyrion becomes entangled with court politics, secrecy, jealousy and survival.",
      "image": "../assets/images/characters/got/shae.svg",
      "alt": "Shae",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-jeor-mormont",
      "category": "other",
      "faction": null,
      "name": "Jeor Mormont",
      "role": "Lord Commander of the Night’s Watch",
      "backRole": "Lord Commander of the Night’s Watch",
      "description": "The veteran Lord Commander who recognizes the growing danger beyond the Wall and prepares the Watch for a threat few in the south understand.",
      "image": "../assets/images/characters/got/jeor-mormont.svg",
      "alt": "Jeor Mormont",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-alliser-thorne",
      "category": "other",
      "faction": null,
      "name": "Alliser Thorne",
      "role": "Master-at-Arms of the Night’s Watch",
      "backRole": "Master-at-Arms of the Night’s Watch",
      "description": "A stern and antagonistic officer at Castle Black whose distrust of Jon creates repeated conflict inside the Night’s Watch.",
      "image": "../assets/images/characters/got/alliser-thorne.svg",
      "alt": "Alliser Thorne",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-balon-greyjoy",
      "category": "other",
      "faction": null,
      "name": "Balon Greyjoy",
      "role": "Lord of the Iron Islands",
      "backRole": "Lord of the Iron Islands",
      "description": "The stubborn ruler of the Iron Islands who seeks independence for the Greyjoys and launches his own campaign during the War of the Five Kings.",
      "image": "../assets/images/characters/got/balon-greyjoy.svg",
      "alt": "Balon Greyjoy",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-euron-greyjoy",
      "category": "other",
      "faction": null,
      "name": "Euron Greyjoy",
      "role": "King of the Iron Islands",
      "backRole": "King of the Iron Islands",
      "description": "A ruthless Greyjoy who returns from exile and uses ambition, violence and political manipulation to seize control of the Iron Islands.",
      "image": "../assets/images/characters/got/euron-greyjoy.svg",
      "alt": "Euron Greyjoy",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-yara-greyjoy",
      "category": "other",
      "faction": null,
      "name": "Yara Greyjoy",
      "role": "Captain / Heir of the Iron Islands",
      "backRole": "Captain / Heir of the Iron Islands",
      "description": "A skilled sailor and warrior who challenges the traditional expectations placed on the Greyjoy heir and fights for her family’s future.",
      "image": "../assets/images/characters/got/yara-greyjoy.svg",
      "alt": "Yara Greyjoy",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-tommen-baratheon",
      "category": "other",
      "faction": null,
      "name": "Tommen Baratheon",
      "role": "King of the Seven Kingdoms",
      "backRole": "King of the Seven Kingdoms",
      "description": "A young king placed on the throne while stronger political figures around him compete for influence over the realm.",
      "image": "../assets/images/characters/got/tommen-baratheon.svg",
      "alt": "Tommen Baratheon",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-myrcella-baratheon",
      "category": "other",
      "faction": null,
      "name": "Myrcella Baratheon",
      "role": "Princess of the Seven Kingdoms",
      "backRole": "Princess of the Seven Kingdoms",
      "description": "A princess caught between the politics of King’s Landing and the Martell court after being sent to Dorne as part of a political arrangement.",
      "image": "../assets/images/characters/got/myrcella-baratheon.svg",
      "alt": "Myrcella Baratheon",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-the-night-king",
      "category": "other",
      "faction": null,
      "name": "The Night King",
      "role": "Leader of the White Walkers",
      "backRole": "Leader of the White Walkers",
      "description": "The supernatural leader of the army of the dead, whose advance turns the long-dismissed threat beyond the Wall into an existential war.",
      "image": "../assets/images/characters/got/the-night-king.svg",
      "alt": "The Night King",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    }
  ],
  "hotd": [
    {
      "id": "character-rhaenyra-targaryen",
      "category": null,
      "faction": "black",
      "name": "Rhaenyra Targaryen",
      "role": "The Heir Presumptive",
      "backRole": "Team Black",
      "description": "Named her father's heir years before his death, Rhaenyra spends decades watching that promise get quietly undermined by her father's second wife and that wife's sons. When Viserys finally dies, the court crowns someone else before Rhaenyra even hears the news.",
      "image": "../assets/images/characters/hotd/rhaenyra-targaryen.webp",
      "alt": "Rhaenyra Targaryen",
      "width": "374",
      "height": "534",
      "emblem": "♕",
      "unified": false
    },
    {
      "id": "character-daemon-targaryen",
      "category": null,
      "faction": "black",
      "name": "Daemon Targaryen",
      "role": "The King's Brother",
      "backRole": "Team Black",
      "description": "Viserys's younger brother, brilliant and dangerous in roughly equal measure. Exiled more than once for overreaching, he eventually marries Rhaenyra and becomes her fiercest — and most unpredictable — defender.",
      "image": "../assets/images/characters/hotd/daemon-targaryen.webp",
      "alt": "Daemon Targaryen",
      "width": "738",
      "height": "384",
      "emblem": "♕",
      "unified": false
    },
    {
      "id": "character-king-viserys-i",
      "category": null,
      "faction": "green",
      "name": "King Viserys I",
      "role": "The Peacemaker King",
      "backRole": "Before the split",
      "description": "A king who ruled through diplomacy rather than dragonfire, Viserys spends his reign trying to hold two families — and two claims to his throne — together by sheer force of denial. It works right up until it doesn't, and only after he's gone.",
      "image": "../assets/images/characters/hotd/king-viserys-i.webp",
      "alt": "King Viserys I",
      "width": "479",
      "height": "640",
      "emblem": "♕",
      "unified": false
    },
    {
      "id": "character-alicent-hightower",
      "category": null,
      "faction": "green",
      "name": "Alicent Hightower",
      "role": "The Queen Consort",
      "backRole": "Team Green",
      "description": "Once Rhaenyra's closest friend, Alicent becomes Viserys's second queen and spends the rest of her life convinced — rightly or not — that her children need protecting from her former friend's claim. That conviction starts a war.",
      "image": "../assets/images/characters/hotd/alicent-hightower.webp",
      "alt": "Alicent Hightower",
      "width": "554",
      "height": "554",
      "emblem": "♕",
      "unified": false
    },
    {
      "id": "character-aegon-ii-targaryen",
      "category": null,
      "faction": "green",
      "name": "Aegon II Targaryen",
      "role": "The Usurper King",
      "backRole": "Team Green",
      "description": "Crowned in a rushed ceremony the moment his father dies, Aegon spends his short reign trying to look like a king everyone already decided he wasn't fit to be — and paying for the crown in dragonfire and family blood.",
      "image": "../assets/images/characters/hotd/aegon-ii-targaryen.webp",
      "alt": "Aegon II Targaryen",
      "width": "250",
      "height": "350",
      "emblem": "♕",
      "unified": false
    },
    {
      "id": "character-aemond-targaryen",
      "category": null,
      "faction": "green",
      "name": "Aemond Targaryen",
      "role": "Rider of Vhagar",
      "backRole": "Team Green",
      "description": "The most dangerous of Alicent's sons, and the one who claims the largest living dragon for himself. Cold, precise, and quietly furious about a childhood insult he never lets go of — with a dragon big enough to make that grudge everyone else's problem.",
      "image": "../assets/images/characters/hotd/aemond-targaryen.webp",
      "alt": "Aemond Targaryen",
      "width": "368",
      "height": "543",
      "emblem": "♕",
      "unified": false
    },
    {
      "id": "character-otto-hightower",
      "category": null,
      "faction": "green",
      "name": "Otto Hightower",
      "role": "The Hand of the King",
      "backRole": "Team Green",
      "description": "Alicent's father and the architect behind most of Team Green's early moves. Patient, political, and willing to act the moment a king's final wishes become just ambiguous enough to reinterpret.",
      "image": "../assets/images/characters/hotd/otto-hightower.webp",
      "alt": "Otto Hightower",
      "width": "379",
      "height": "527",
      "emblem": "♕",
      "unified": false
    },
    {
      "id": "character-corlys-velaryon",
      "category": null,
      "faction": "black",
      "name": "Corlys Velaryon",
      "role": "The Sea Snake",
      "backRole": "Team Black",
      "description": "Lord of House Velaryon and the wealthiest sailor in Westerosi history, Corlys ties his family's fleet and fortune to Rhaenyra's cause — a bet that costs him almost everyone he loves before it's over.",
      "image": "../assets/images/characters/hotd/corlys-velaryon.webp",
      "alt": "Corlys Velaryon",
      "width": "374",
      "height": "534",
      "emblem": "♕",
      "unified": false
    },
    {
      "id": "character-rhaenys-targaryen",
      "category": null,
      "faction": "black",
      "name": "Rhaenys Targaryen",
      "role": "The Queen Who Never Was",
      "backRole": "Team Black",
      "description": "Passed over for the throne decades earlier for the simple crime of being a woman, Rhaenys watches history nearly repeat itself with Rhaenyra — and this time, she's got a dragon and no intention of watching quietly.",
      "image": "../assets/images/characters/hotd/rhaenys-targaryen.webp",
      "alt": "Rhaenys Targaryen",
      "width": "396",
      "height": "505",
      "emblem": "♕",
      "unified": false
    },
    {
      "id": "character-criston-cole",
      "category": null,
      "faction": "green",
      "name": "Criston Cole",
      "role": "Lord Commander, Kingsguard",
      "backRole": "Team Green",
      "description": "Once close to Rhaenyra, a rejection early in the story curdles into lifelong resentment. As the Kingsguard's commander, he becomes one of Team Green's most zealous — and most reckless — enforcers.",
      "image": "../assets/images/characters/hotd/criston-cole.webp",
      "alt": "Criston Cole",
      "width": "349",
      "height": "350",
      "emblem": "♕",
      "unified": false
    },
    {
      "id": "character-helaena-targaryen",
      "category": null,
      "faction": "green",
      "name": "Helaena Targaryen",
      "role": "Princess of the Realm",
      "backRole": "Princess of the Realm",
      "description": "Aegon II’s sister and wife whose quiet manner and strange prophetic observations make her one of the most distinctive members of the royal family.",
      "image": "../assets/images/characters/hotd/helaena-targaryen.webp",
      "alt": "Helaena Targaryen",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-jacaerys-velaryon",
      "category": null,
      "faction": "black",
      "name": "Jacaerys Velaryon",
      "role": "Prince of Dragonstone",
      "backRole": "Prince of Dragonstone",
      "description": "Rhaenyra’s eldest son and heir. Jacaerys is sent across Westeros to secure support for his mother’s claim and proves himself capable of diplomacy and dragonriding.",
      "image": "../assets/images/characters/hotd/jacaerys-velaryon.webp",
      "alt": "Jacaerys Velaryon",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-lucerys-velaryon",
      "category": null,
      "faction": "black",
      "name": "Lucerys Velaryon",
      "role": "Prince of Driftmark",
      "backRole": "Prince of Driftmark",
      "description": "Rhaenyra’s second son and a dragonrider who is sent to Storm’s End to seek support. His encounter with Aemond becomes one of the events that escalates the conflict.",
      "image": "../assets/images/characters/hotd/lucerys-velaryon.webp",
      "alt": "Lucerys Velaryon",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-baela-targaryen",
      "category": null,
      "faction": "black",
      "name": "Baela Targaryen",
      "role": "Dragonrider of House Targaryen",
      "backRole": "Dragonrider of House Targaryen",
      "description": "Daemon Targaryen’s daughter and a dragonrider raised within the Targaryen family’s increasingly dangerous succession struggle.",
      "image": "../assets/images/characters/hotd/baela-targaryen.webp",
      "alt": "Baela Targaryen",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-rhaena-targaryen",
      "category": null,
      "faction": "black",
      "name": "Rhaena Targaryen",
      "role": "Lady of House Targaryen",
      "backRole": "Lady of House Targaryen",
      "description": "Daemon’s daughter and Baela’s twin, Rhaena grows up surrounded by dragons and the expectations placed on the Targaryen family.",
      "image": "../assets/images/characters/hotd/rhaena-targaryen.webp",
      "alt": "Rhaena Targaryen",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-laena-velaryon",
      "category": null,
      "faction": "black",
      "name": "Laena Velaryon",
      "role": "Lady of Driftmark",
      "backRole": "Lady of Driftmark",
      "description": "The daughter of Corlys and Rhaenys Velaryon and a dragonrider who marries Daemon Targaryen. Her life links the Velaryon family to the Targaryen succession struggle.",
      "image": "../assets/images/characters/hotd/laena-velaryon.webp",
      "alt": "Laena Velaryon",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-harwin-strong",
      "category": null,
      "faction": "black",
      "name": "Harwin Strong",
      "role": "Commander of the City Watch",
      "backRole": "Commander of the City Watch",
      "description": "A powerful warrior and commander of the City Watch whose close relationship with Rhaenyra has major consequences for the royal family.",
      "image": "../assets/images/characters/hotd/harwin-strong.webp",
      "alt": "Harwin Strong",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-larys-strong",
      "category": null,
      "faction": "green",
      "name": "Larys Strong",
      "role": "Lord of Harrenhal",
      "backRole": "Lord of Harrenhal",
      "description": "The younger son of Lyonel Strong who builds influence through secrets, informants and carefully chosen acts of political violence.",
      "image": "../assets/images/characters/hotd/larys-strong.webp",
      "alt": "Larys Strong",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-mysaria",
      "category": null,
      "faction": "other",
      "name": "Mysaria",
      "role": "The White Worm",
      "backRole": "The White Worm",
      "description": "A former slave who builds an extensive network of informants in King’s Landing. Mysaria operates outside the great houses while becoming deeply connected to the politics of the capital.",
      "image": "../assets/images/characters/hotd/mysaria.webp",
      "alt": "Mysaria",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-vaemond-velaryon",
      "category": null,
      "faction": "green",
      "name": "Vaemond Velaryon",
      "role": "Velaryon Claimant",
      "backRole": "Velaryon Claimant",
      "description": "A senior member of House Velaryon who challenges the succession of Rhaenyra’s sons to Driftmark. His dispute brings questions of inheritance and legitimacy directly before the royal court.",
      "image": "../assets/images/characters/hotd/vaemond-velaryon.webp",
      "alt": "Vaemond Velaryon",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-ser-erryk-cargyll",
      "category": null,
      "faction": "black",
      "name": "Ser Erryk Cargyll",
      "role": "Kingsguard Knight",
      "backRole": "Kingsguard Knight",
      "description": "One of the twin Cargyll brothers of the Kingsguard. Erryk ultimately sides with Rhaenyra after becoming disillusioned with the Green succession.",
      "image": "../assets/images/characters/hotd/ser-erryk-cargyll.webp",
      "alt": "Ser Erryk Cargyll",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-ser-arryk-cargyll",
      "category": null,
      "faction": "green",
      "name": "Ser Arryk Cargyll",
      "role": "Kingsguard Knight",
      "backRole": "Kingsguard Knight",
      "description": "Erryk’s twin brother, who remains aligned with Aegon II. The brothers’ opposing loyalties embody the personal cost of the Targaryen civil war.",
      "image": "../assets/images/characters/hotd/ser-arryk-cargyll.webp",
      "alt": "Ser Arryk Cargyll",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-hugh-hammer",
      "category": null,
      "faction": "black",
      "name": "Hugh Hammer",
      "role": "Dragonseed",
      "backRole": "Dragonseed",
      "description": "A common-born man of uncertain parentage who claims Targaryen blood and becomes a dragonrider during the Dance.",
      "image": "../assets/images/characters/hotd/hugh-hammer.webp",
      "alt": "Hugh Hammer",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-ulf-the-white",
      "category": null,
      "faction": "black",
      "name": "Ulf the White",
      "role": "Dragonseed",
      "backRole": "Dragonseed",
      "description": "A common-born man who claims Targaryen ancestry and becomes a dragonrider after the call for dragonseeds.",
      "image": "../assets/images/characters/hotd/ulf-the-white.webp",
      "alt": "Ulf the White",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-addam-of-hull",
      "category": null,
      "faction": "black",
      "name": "Addam of Hull",
      "role": "Dragonseed / Sailor",
      "backRole": "Dragonseed / Sailor",
      "description": "A skilled sailor from Hull who becomes a dragonrider and earns the trust of Rhaenyra’s faction. His rise is closely connected to the Velaryon family.",
      "image": "../assets/images/characters/hotd/addam-of-hull.webp",
      "alt": "Addam of Hull",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-alyn-of-hull",
      "category": null,
      "faction": "black",
      "name": "Alyn of Hull",
      "role": "Velaryon Sailor",
      "backRole": "Velaryon Sailor",
      "description": "A talented sailor from Hull and brother of Addam whose service connects him to the powerful Velaryon naval tradition.",
      "image": "../assets/images/characters/hotd/alyn-of-hull.webp",
      "alt": "Alyn of Hull",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-alys-rivers",
      "category": "other",
      "faction": null,
      "name": "Alys Rivers",
      "role": "Healer / Mystic of Harrenhal",
      "backRole": "Healer / Mystic of Harrenhal",
      "description": "A mysterious woman at Harrenhal who becomes closely connected to Daemon Targaryen and the supernatural atmosphere surrounding the castle.",
      "image": "../assets/images/characters/hotd/alys-rivers.svg",
      "alt": "Alys Rivers",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-simon-strong",
      "category": "other",
      "faction": null,
      "name": "Simon Strong",
      "role": "Castellan of Harrenhal",
      "backRole": "Castellan of Harrenhal",
      "description": "The aging castellan of Harrenhal who must survive the shifting loyalties and dangers brought to the castle during the Dance.",
      "image": "../assets/images/characters/hotd/simon-strong.svg",
      "alt": "Simon Strong",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-oscar-tully",
      "category": "other",
      "faction": null,
      "name": "Oscar Tully",
      "role": "Lord of Riverrun",
      "backRole": "Lord of Riverrun",
      "description": "A young Tully who inherits leadership during the Dance and is forced to make difficult decisions as the Riverlands become a major battlefield.",
      "image": "../assets/images/characters/hotd/oscar-tully.svg",
      "alt": "Oscar Tully",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-cregan-stark",
      "category": "stark",
      "faction": null,
      "name": "Cregan Stark",
      "role": "Lord of Winterfell",
      "backRole": "Lord of Winterfell",
      "description": "The powerful Lord of Winterfell whose arrival near the end of the Dance brings northern strength and a strong sense of duty to the conflict.",
      "image": "../assets/images/characters/hotd/cregan-stark.svg",
      "alt": "Cregan Stark",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-dalton-greyjoy",
      "category": "other",
      "faction": null,
      "name": "Dalton Greyjoy",
      "role": "Lord Reaper of Pyke",
      "backRole": "Lord Reaper of Pyke",
      "description": "A young and aggressive Greyjoy lord whose naval raids add another dimension to the wider turmoil of the Dance.",
      "image": "../assets/images/characters/hotd/dalton-greyjoy.svg",
      "alt": "Dalton Greyjoy",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-jason-lannister",
      "category": "lannister",
      "faction": null,
      "name": "Jason Lannister",
      "role": "Lord of Casterly Rock",
      "backRole": "Lord of Casterly Rock",
      "description": "A proud Lannister lord who supports the Green cause and seeks military influence during the succession crisis.",
      "image": "../assets/images/characters/hotd/jason-lannister.svg",
      "alt": "Jason Lannister",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-tyland-lannister",
      "category": "lannister",
      "faction": null,
      "name": "Tyland Lannister",
      "role": "Master of Ships / Master of Coin",
      "backRole": "Master of Ships / Master of Coin",
      "description": "A Lannister statesman who serves the royal government and becomes involved in the Greens’ wartime administration.",
      "image": "../assets/images/characters/hotd/tyland-lannister.svg",
      "alt": "Tyland Lannister",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-jasper-wylde",
      "category": "other",
      "faction": null,
      "name": "Jasper Wylde",
      "role": "Master of Laws",
      "backRole": "Master of Laws",
      "description": "A member of Viserys’s Small Council who becomes a prominent supporter of the Green government after the succession crisis.",
      "image": "../assets/images/characters/hotd/jasper-wylde.svg",
      "alt": "Jasper Wylde",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-lyman-beesbury",
      "category": "other",
      "faction": null,
      "name": "Lyman Beesbury",
      "role": "Master of Coin",
      "backRole": "Master of Coin",
      "description": "An elderly councillor who supports Rhaenyra’s succession and openly challenges the decision to crown Aegon.",
      "image": "../assets/images/characters/hotd/lyman-beesbury.svg",
      "alt": "Lyman Beesbury",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-mellos",
      "category": "other",
      "faction": null,
      "name": "Mellos",
      "role": "Grand Maester",
      "backRole": "Grand Maester",
      "description": "A senior maester of the royal court whose medical and political advice reflects the difficult role of the Citadel during the Targaryen civil war.",
      "image": "../assets/images/characters/hotd/mellos.svg",
      "alt": "Mellos",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-forrest-frey",
      "category": "other",
      "faction": null,
      "name": "Forrest Frey",
      "role": "Lord of the Crossing",
      "backRole": "Lord of the Crossing",
      "description": "A member of House Frey whose family controls the strategically important crossings of the Trident during the Dance.",
      "image": "../assets/images/characters/hotd/forrest-frey.svg",
      "alt": "Forrest Frey",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-benjicot-blackwood",
      "category": "other",
      "faction": null,
      "name": "Benjicot-Blackwood",
      "role": "Lord of Raventree Hall",
      "backRole": "Lord of Raventree Hall",
      "description": "A young Blackwood commander who becomes an important Riverlands supporter of Rhaenyra and a rival of House Bracken.",
      "image": "../assets/images/characters/hotd/benjicot-blackwood.svg",
      "alt": "Benjicot-Blackwood",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-lyonel-strong",
      "category": "other",
      "faction": null,
      "name": "Lyonel Strong",
      "role": "Master of Laws / Hand of the King",
      "backRole": "Master of Laws / Hand of the King",
      "description": "A respected lord and Hand of the King whose service is closely tied to Viserys’s court and the fortunes of House Strong.",
      "image": "../assets/images/characters/hotd/lyonel-strong.svg",
      "alt": "Lyonel Strong",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-harrold-westerling",
      "category": "other",
      "faction": null,
      "name": "Harrold Westerling",
      "role": "Lord Commander of the Kingsguard",
      "backRole": "Lord Commander of the Kingsguard",
      "description": "A veteran Kingsguard knight who serves the royal family during the early succession crisis and represents the old guard of the crown.",
      "image": "../assets/images/characters/hotd/harrold-westerling.svg",
      "alt": "Harrold Westerling",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-joffrey-lonmouth",
      "category": "other",
      "faction": null,
      "name": "Joffrey Lonmouth",
      "role": "Knight / Companion of Laenor Velaryon",
      "backRole": "Knight / Companion of Laenor Velaryon",
      "description": "A knight closely associated with Laenor Velaryon whose presence becomes part of the complicated relationships surrounding the Velaryon marriage.",
      "image": "../assets/images/characters/hotd/joffrey-lonmouth.svg",
      "alt": "Joffrey Lonmouth",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-borros-baratheon",
      "category": "other",
      "faction": null,
      "name": "Borros Baratheon",
      "role": "Lord of Storm’s End",
      "backRole": "Lord of Storm’s End",
      "description": "The Baratheon lord whose decision over Rhaenyra and Aegon’s competing claims becomes important to the wider war.",
      "image": "../assets/images/characters/hotd/borros-baratheon.svg",
      "alt": "Borros Baratheon",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-orwyle",
      "category": "other",
      "faction": null,
      "name": "Orwyle",
      "role": "Grand Maester",
      "backRole": "Grand Maester",
      "description": "A senior maester who serves the royal court and becomes involved in the Greens’ government during the Dance.",
      "image": "../assets/images/characters/hotd/orwyle.svg",
      "alt": "Orwyle",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-rickard-thorne",
      "category": "other",
      "faction": null,
      "name": "Rickard Thorne",
      "role": "Kingsguard knight",
      "backRole": "Kingsguard knight",
      "description": "A Kingsguard officer whose duties place him directly inside the dangerous royal succession struggle.",
      "image": "../assets/images/characters/hotd/rickard-thorne.svg",
      "alt": "Rickard Thorne",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-lorent-marbrand",
      "category": "other",
      "faction": null,
      "name": "Lorent Marbrand",
      "role": "Kingsguard knight",
      "backRole": "Kingsguard knight",
      "description": "A sworn sword of the Kingsguard whose service reflects the military and political pressures surrounding the royal family.",
      "image": "../assets/images/characters/hotd/lorent-marbrand.svg",
      "alt": "Lorent Marbrand",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-steffon-darklyn",
      "category": "other",
      "faction": null,
      "name": "Steffon Darklyn",
      "role": "Kingsguard knight",
      "backRole": "Kingsguard knight",
      "description": "A knight whose allegiance shifts toward Rhaenyra and whose service connects the Kingsguard to the Black cause.",
      "image": "../assets/images/characters/hotd/steffon-darklyn.svg",
      "alt": "Steffon Darklyn",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-erryk-cargyll",
      "category": "other",
      "faction": null,
      "name": "Erryk Cargyll",
      "role": "Kingsguard knight",
      "backRole": "Kingsguard knight",
      "description": "A Kingsguard twin whose loyalty places him on Rhaenyra’s side after the succession crisis divides the royal household.",
      "image": "../assets/images/characters/hotd/erryk-cargyll.svg",
      "alt": "Erryk Cargyll",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-arryk-cargyll",
      "category": "other",
      "faction": null,
      "name": "Arryk Cargyll",
      "role": "Kingsguard knight",
      "backRole": "Kingsguard knight",
      "description": "Erryk’s twin brother, whose service to Aegon places the brothers on opposite sides of the Dance.",
      "image": "../assets/images/characters/hotd/arryk-cargyll.svg",
      "alt": "Arryk Cargyll",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-aegon-the-younger",
      "category": "other",
      "faction": null,
      "name": "Aegon the Younger",
      "role": "Prince / Son of Rhaenyra",
      "backRole": "Prince / Son of Rhaenyra",
      "description": "A young Targaryen prince whose family becomes central to the succession struggle and the survival of Rhaenyra’s line.",
      "image": "../assets/images/characters/hotd/aegon-the-younger.svg",
      "alt": "Aegon the Younger",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-viserys-targaryen",
      "category": "other",
      "faction": null,
      "name": "Viserys Targaryen",
      "role": "Prince / Son of Rhaenyra",
      "backRole": "Prince / Son of Rhaenyra",
      "description": "Rhaenyra’s younger son whose separation from his family during the war becomes part of the uncertainty surrounding the Targaryen succession.",
      "image": "../assets/images/characters/hotd/viserys-targaryen.svg",
      "alt": "Viserys Targaryen",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-jeyne-arryn",
      "category": "other",
      "faction": null,
      "name": "Jeyne Arryn",
      "role": "Lady of the Eyrie",
      "backRole": "Lady of the Eyrie",
      "description": "The powerful ruler of the Vale who must decide how the Arryns will respond to the competing Targaryen claims.",
      "image": "../assets/images/characters/hotd/jeyne-arryn.svg",
      "alt": "Jeyne Arryn",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-rhaena-targaryen",
      "category": "other",
      "faction": null,
      "name": "Rhaena Targaryen",
      "role": "Princess / Dragonkeeper",
      "backRole": "Princess / Dragonkeeper",
      "description": "A young Targaryen princess whose life is shaped by her family’s losses and the struggle to preserve the dynasty.",
      "image": "../assets/images/characters/hotd/rhaena-targaryen.svg",
      "alt": "Rhaena Targaryen",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    }
  ]
};




const DRAGON_CARD_DATA = {
  "got": {
    "dragons": [
      {
        "id": "dragon-drogon",
        "color": "black",
        "name": "Drogon",
        "rider": "Daenerys Targaryen",
        "description": "The largest and wildest of the three, black as a moonless sky with scales that catch fire-light like scorched glass. He answered to almost no one — and eventually decided that included empty chairs. Named for Daenerys's late husband, he outlived every other dragon in the story and flew off into the east, never confirmed dead.",
        "image": "../assets/images/dragons/got/drogon.webp"
      },
      {
        "id": "dragon-rhaegal",
        "color": "green",
        "name": "Rhaegal",
        "rider": "none, formerly Jon Snow",
        "description": "Green and bronze, named for a prince who never got to see him hatch. Quick in the air and quicker to trust the wrong airspace — a mistake at sea, ambushed by scorpion bolts, that cost him everything mid-flight.",
        "image": "../assets/images/dragons/got/rhaegal.webp"
      },
      {
        "id": "dragon-viserion",
        "color": "cream",
        "name": "Viserion",
        "rider": "none, formerly Daenerys",
        "description": "Cream and gold, the gentlest-looking of the three — right up until the night he came back wrong, killed north of the Wall and raised again with ice-blue eyes. What the dead do with a dragon is somehow worse than what the living do.",
        "image": "../assets/images/dragons/got/viserion.webp"
      }
    ]
  },
  "hotd": {
    "dragons": [
      {
        "id": "dragon-syrax",
        "faction": "black",
        "name": "Syrax",
        "rider": "Rhaenyra Targaryen",
        "description": "Rhaenyra Targaryen’s golden dragon and a symbol of her royal identity. Syrax is not known primarily as a battlefield predator, but her bond with Rhaenyra becomes increasingly important as the succession crisis turns into war.",
        "image": "../assets/images/dragons/hotd/syrax.webp"
      },
      {
        "id": "dragon-caraxes",
        "faction": "black",
        "name": "Caraxes",
        "rider": "Daemon Targaryen",
        "description": "Known as the Blood Wyrm, Caraxes is a long, red and battle-hardened dragon. His aggressive nature and bond with Daemon make the pair one of the most dangerous forces on the Black side.",
        "image": "../assets/images/dragons/hotd/caraxes.webp"
      },
      {
        "id": "dragon-vhagar",
        "faction": "green",
        "name": "Vhagar",
        "rider": "Aemond Targaryen",
        "description": "The oldest and largest living dragon during the Dance. A survivor from the age of Aegon the Conqueror, Vhagar gives Aemond an enormous military advantage and becomes one of the war’s most feared weapons.",
        "image": "../assets/images/dragons/hotd/vhagar.webp"
      },
      {
        "id": "dragon-meleys",
        "faction": "black",
        "name": "Meleys",
        "rider": "Rhaenys Targaryen",
        "description": "The Red Queen is an experienced and exceptionally fast dragon ridden by Rhaenys Targaryen. Meleys represents one of the strongest weapons available to Rhaenyra before the civil war begins taking its heaviest toll.",
        "image": "../assets/images/dragons/hotd/meleys.webp"
      },
      {
        "id": "dragon-sunfyre",
        "faction": "green",
        "name": "Sunfyre",
        "rider": "Aegon II Targaryen",
        "description": "Aegon II’s famous golden dragon, celebrated for his striking appearance and close bond with the king. Sunfyre is drawn into the brutal fighting of the Dance and suffers serious injuries during the conflict.",
        "image": "../assets/images/dragons/hotd/sunfyre.webp"
      },
      {
        "id": "dragon-dreamfyre",
        "faction": "green",
        "name": "Dreamfyre",
        "rider": "Helaena Targaryen",
        "description": "An ancient pale-blue dragon associated with Helaena Targaryen. Dreamfyre reflects the deep dragonriding heritage of the royal family even though Helaena is reluctant to become an active participant in the war.",
        "image": "../assets/images/dragons/hotd/dreamfyre.webp"
      },
      {
        "id": "dragon-seasmoke",
        "faction": "black",
        "name": "Seasmoke",
        "rider": "Addam of Hull",
        "description": "A pale-grey dragon formerly ridden by Laenor Velaryon. During the Dance, Seasmoke eventually accepts Addam of Hull as a rider, making the dragon an important part of Rhaenyra’s attempt to strengthen her forces.",
        "image": "../assets/images/dragons/hotd/dragon-generic.svg"
      },
      {
        "id": "dragon-vermax",
        "faction": "black",
        "name": "Vermax",
        "rider": "Jacaerys Velaryon",
        "description": "Jacaerys Velaryon’s young dragon. Vermax grows alongside his rider and becomes part of Jacaerys’s efforts to carry messages, seek alliances and support Rhaenyra’s claim during the early stages of the war.",
        "image": "../assets/images/dragons/hotd/dragon-generic.svg"
      },
      {
        "id": "dragon-arrax",
        "faction": "black",
        "name": "Arrax",
        "rider": "Lucerys Velaryon",
        "description": "Lucerys Velaryon’s young dragon. Arrax is much smaller than Vhagar, and the enormous difference in size becomes crucial when Lucerys encounters Aemond and Vhagar at Storm’s End.",
        "image": "../assets/images/dragons/hotd/dragon-generic.svg"
      },
      {
        "id": "dragon-moondancer",
        "faction": "black",
        "name": "Moondancer",
        "rider": "Baela Targaryen",
        "description": "Baela Targaryen’s swift young dragon. Moondancer is smaller than the great war dragons but fast enough to become an important part of Baela’s role in the later stages of the Dance.",
        "image": "../assets/images/dragons/hotd/dragon-generic.svg"
      },
      {
        "id": "dragon-tyraxes",
        "faction": "black",
        "name": "Tyraxes",
        "rider": "Joffrey Velaryon",
        "description": "The young dragon associated with Joffrey Velaryon. Tyraxes is still developing during the Dance, reflecting how the Targaryen family’s younger generation is expected to inherit the dangerous tradition of dragonriding.",
        "image": "../assets/images/dragons/hotd/dragon-generic.svg"
      },
      {
        "id": "dragon-stormcloud",
        "faction": "black",
        "name": "Stormcloud",
        "rider": "Aegon the Younger",
        "description": "A young dragon belonging to Aegon the Younger. Stormcloud becomes significant because even a small dragon can provide a means of escape and survival when the royal family is caught in the chaos of war.",
        "image": "../assets/images/dragons/hotd/dragon-generic.svg"
      },
      {
        "id": "dragon-vermithor",
        "faction": "black",
        "name": "Vermithor",
        "rider": "Hugh Hammer",
        "description": "Known as the Bronze Fury, Vermithor is one of the oldest and largest unclaimed dragons. His size makes him one of the most valuable targets in Rhaenyra’s search for new dragonriders and dragon power.",
        "image": "../assets/images/dragons/hotd/dragon-generic.svg"
      },
      {
        "id": "dragon-silverwing",
        "faction": "black",
        "name": "Silverwing",
        "rider": "Ulf the White",
        "description": "An old silver dragon that becomes available to a new rider during the Dance. Silverwing’s long history and ability to carry a dragonseed make her one of the important dragons awakened by the search for additional riders.",
        "image": "../assets/images/dragons/hotd/dragon-generic.svg"
      },
      {
        "id": "dragon-tessarion",
        "faction": "green",
        "name": "Tessarion",
        "rider": "Daeron Targaryen",
        "description": "Known as the Blue Queen, Tessarion is Daeron Targaryen’s blue dragon. She becomes an important Green military asset as Daeron campaigns in the Reach and the war expands beyond King’s Landing.",
        "image": "../assets/images/dragons/hotd/dragon-generic.svg"
      },
      {
        "id": "dragon-sheepstealer",
        "faction": "other",
        "name": "Sheepstealer",
        "rider": "Nettles",
        "description": "A wild dragon known for hunting sheep instead of accepting human riders. Nettles eventually earns Sheepstealer’s trust, demonstrating that a rider does not necessarily need to come from the royal family to form a bond with a dragon.",
        "image": "../assets/images/dragons/hotd/dragon-generic.svg"
      },
      {
        "id": "dragon-cannibal",
        "faction": "other",
        "name": "Cannibal",
        "rider": "None known",
        "description": "The largest and most dangerous of the wild dragons on Dragonstone. Cannibal is feared because he eats other dragons and their eggs, and unlike many Targaryen dragons he never accepts a known rider.",
        "image": "../assets/images/dragons/hotd/dragon-generic.svg"
      },
      {
        "id": "dragon-grey-ghost",
        "faction": "other",
        "name": "Grey Ghost",
        "rider": "None known",
        "description": "A shy wild dragon that lives around Dragonstone and avoids human contact. His name comes from his pale colouring and elusive behaviour, making him one of the island’s mysterious untamed dragons.",
        "image": "../assets/images/dragons/hotd/dragon-generic.svg"
      },
      {
        "id": "dragon-shrykos",
        "faction": "green",
        "name": "Shrykos",
        "rider": "Jaehaerys Targaryen",
        "description": "A young dragon belonging to Prince Jaehaerys Targaryen, the firstborn son of Aegon II and Helaena. Shrykos is one of the very young dragons caught up in the violence of the Dance.",
        "image": "../assets/images/dragons/hotd/dragon-generic.svg"
      },
      {
        "id": "dragon-morghul",
        "faction": "green",
        "name": "Morghul",
        "rider": "Jaehaera Targaryen",
        "description": "A young dragon associated with Princess Jaehaera Targaryen. Morghul is still too young to have been ridden when the Dance begins and is caught up in the tragedy surrounding the royal children.",
        "image": "../assets/images/dragons/hotd/dragon-generic.svg"
      },
      {
        "id": "dragon-balerion",
        "faction": "historical",
        "name": "Balerion",
        "rider": "Aegon I Targaryen / Viserys I Targaryen",
        "description": "Balerion the Black Dread was the greatest dragon of the Targaryen conquest. Although long dead by the Dance, his skull and legacy remain part of the history and imagery of House of the Dragon.",
        "image": "../assets/images/dragons/hotd/dragon-generic.svg"
      },
      {
        "id": "dragon-meraxes",
        "faction": "historical",
        "name": "Meraxes",
        "rider": "Rhaenys Targaryen",
        "description": "Meraxes was one of the three dragons used by Aegon the Conqueror and his sisters during the conquest of Westeros. The dragon died generations before the Dance, but remains part of the Targaryen dragon history referenced in the era.",
        "image": "../assets/images/dragons/hotd/dragon-generic.svg"
      },
      {
        "id": "dragon-quicksilver",
        "faction": "historical",
        "name": "Quicksilver",
        "rider": "Aegon the Uncrowned",
        "description": "Quicksilver was the young dragon of Aegon the Uncrowned. The dragon fought during the Targaryen succession conflict generations before the Dance and is part of the dynasty's earlier dragonriding history.",
        "image": "../assets/images/dragons/hotd/dragon-generic.svg"
      },
      {
        "id": "dragon-morning",
        "faction": "post-dance",
        "name": "Morning",
        "rider": "Rhaena Targaryen",
        "description": "Morning is the pink dragon that eventually bonds with Rhaena Targaryen after the Dance. Her survival represents the continuation of the Targaryen dragon line after the civil war.",
        "image": "../assets/images/dragons/hotd/dragon-generic.svg"
      }
    ]
  }
};


function renderGotDragonsPage() {
  if (!document.body.classList.contains("page-dragons") || !document.body.classList.contains("got-theme")) return;
  const row = document.querySelector(".dragons-page .dragon-row");
  if (!row || !Array.isArray(DRAGON_CARD_DATA.got.dragons)) return;

  row.innerHTML = DRAGON_CARD_DATA.got.dragons.map(dragon => `
    <article class="dragon-card" data-color="${dragon.color}" data-search-item="" id="${dragon.id}">
      <div class="dragon-photo">
        <img alt="${dragon.name}" decoding="async" height="520" loading="lazy" src="${dragon.image}" width="780" />
      </div>
      <div class="dragon-flame"></div>
      <h3>${dragon.name}</h3>
      <span class="rider">Rider: ${dragon.rider}</span>
      <p class="desc">${dragon.description}</p>
      <span class="card-detail-hint">VIEW DETAILS <span>↗</span></span>
    </article>
  `).join("");
}

function renderHotdDragonCards() {
  if (!document.body.classList.contains("hotd-theme")) return;
  const characterGrid = document.querySelector(".character-grid");
  if (!characterGrid || document.getElementById("hotd-character-dragons")) return;

  const section = document.createElement("section");
  section.id = "hotd-character-dragons";
  section.className = "character-dragons-section";
  section.innerHTML = `
    <div class="section-head">
      <h2>Dragons of the Dance</h2>
      <p>Explore the dragons connected to the Targaryen civil war. Dragon cards appear here only on the House of the Dragon character page.</p>
    </div>
    <div class="dragon-row character-dragon-row">
      ${DRAGON_CARD_DATA.hotd.dragons.map(dragon => `
        <article class="dragon-card" data-faction="${dragon.faction}" data-search-item="" id="${dragon.id}">
          <div class="dragon-photo">
            <img alt="${dragon.name}" decoding="async" height="520" loading="lazy" src="${dragon.image}" width="780" />
          </div>
          <div class="dragon-flame"></div>
          <h3>${dragon.name}</h3>
          <span class="rider">Rider: ${dragon.rider}</span>
          <p class="desc">${dragon.description}</p>
          <span class="card-detail-hint">VIEW DETAILS <span>↗</span></span>
        </article>
      `).join("")}
    </div>
  `;
  characterGrid.closest("section")?.after(section);
}

function renderHotdDragonsPage() {
  if (!document.body.classList.contains("hotd-theme") || !document.body.classList.contains("page-dragons")) return;
  const grid = document.getElementById("hotd-dragon-grid");
  if (!grid || !Array.isArray(DRAGON_CARD_DATA.hotd.dragons)) return;

  grid.innerHTML = DRAGON_CARD_DATA.hotd.dragons.map(dragon => `
    <article class="dragon-card" data-faction="${dragon.faction}" data-search-item="" id="${dragon.id}">
      <div class="dragon-photo">
        <img alt="${dragon.name}" decoding="async" height="520" loading="lazy" src="${dragon.image}" width="780" />
      </div>
      <div class="dragon-flame"></div>
      <h3>${dragon.name}</h3>
      <span class="rider">Rider: ${dragon.rider}</span>
      <p class="desc">${dragon.description}</p>
      <span class="card-detail-hint">VIEW DETAILS <span>↗</span></span>
    </article>
  `).join("");
}

function renderCharacterCards() {
  const grid = document.querySelector(".character-grid");
  if (!grid) return;

  const era = document.body.classList.contains("hotd-theme") ? "hotd" : "got";
  const cards = CHARACTER_CARD_DATA[era] || [];

  grid.innerHTML = cards.map(card => {
    const attrs = [
      `data-search-item=""`,
      `id="${card.id}"`
    ];

    if (card.category) attrs.push(`data-category="${card.category}"`);
    if (card.faction) attrs.push(`data-faction="${card.faction}"`);

    const classes = card.unified
      ? "character-card flip-card unified-card"
      : "character-card flip-card";

    return `
      <article class="${classes}" ${attrs.join(" ")}>
        <div class="flip-card-inner">
          <div class="flip-face front">
            <div class="character-photo">
              <img
                alt="${card.alt}"
                decoding="async"
                height="${card.height}"
                loading="lazy"
                src="${card.image}"
                width="${card.width}"
              />
            </div>
            <span class="char-emblem">${card.emblem}</span>
            <h3>${card.name}</h3>
            <p class="char-title">${card.role}</p>
            <span class="flip-hint">tap / hover to flip</span>
          </div>

          <div class="flip-face back">
            <h3>${card.name}</h3>
            <span class="char-title">${card.backRole}</span>
            <p>${card.description}</p>
          </div>
        </div>

        <span class="card-detail-hint">
          VIEW DETAILS
          <span>↗</span>
        </span>
      </article>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded",()=>{
 renderCharacterCards();
 renderGotDragonsPage();
 renderHotdDragonCards();
 renderHotdDragonsPage();
 const nav=document.querySelector(".site-nav"), toggle=document.querySelector(".nav-toggle");
 if(toggle) toggle.addEventListener("click",()=>{nav.classList.toggle("open");toggle.setAttribute("aria-expanded",nav.classList.contains("open"));});
 document.querySelectorAll(".site-nav a").forEach(a=>a.addEventListener("click",()=>nav?.classList.remove("open")));
 attachTilt(".tilt-card",".tilt-card-inner",8);
 attachFlip(".flip-card");
 attachReveal(".reveal");
 const theme=document.body.classList.contains("hotd-theme")?"rgba(138, 31, 31, ":"rgba(217, 98, 43, "; startEmbers(theme);
 initSearch(); initFilters(); initProfiles(); initFavorites(); initDetailCards(); initWesterosMap();
 // Final URL-driven card opener. It runs after initDetailCards has attached click handlers.
 setTimeout(()=>{
   const params=new URLSearchParams(location.search);
   const requested=(params.get("open")||location.hash.replace(/^#/,"")).trim().toLowerCase();
   if(!requested)return;
   const target=document.getElementById(requested) || [...document.querySelectorAll("[data-search-item]")].find(card=>{
     const id=(card.id||"").toLowerCase();
     const title=(card.querySelector("h1,h2,h3,h4,.title,.name,.city-name,.dragon-name")?.textContent||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
     const short=requested.replace(/^[^-]+-/,'');
     return id===requested || title===requested || title===short;
   });
   if(target){
     target.scrollIntoView({block:"center",behavior:"auto"});
     target.click();
     if(params.has("open")){
       const clean=new URL(location.href); clean.searchParams.delete("open");
       history.replaceState(null,"",clean.pathname+clean.hash);
     }
   }
 },250);
});
function attachTilt(selector,innerSelector,maxTilt){document.querySelectorAll(selector).forEach(card=>{const inner=card.querySelector(innerSelector)||card;card.addEventListener("mousemove",e=>{if(window.matchMedia("(hover: none)").matches)return;const r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;inner.style.transform=`rotateX(${-(y-r.height/2)/(r.height/2)*maxTilt}deg) rotateY(${(x-r.width/2)/(r.width/2)*maxTilt}deg) scale(1.02)`});card.addEventListener("mouseleave",()=>inner.style.transform="rotateX(0deg) rotateY(0deg) scale(1)")})}
function attachFlip(selector){document.querySelectorAll(selector).forEach(card=>card.addEventListener("click",()=>{if(window.matchMedia("(hover: none)").matches)card.classList.toggle("flipped")}))}
function attachReveal(selector){const items=document.querySelectorAll(selector);if(!items.length)return;const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in-view");obs.unobserve(e.target)}}),{threshold:.15});items.forEach(i=>obs.observe(i))}
function startEmbers(color){const canvas=document.getElementById("embers");if(!canvas||matchMedia("(prefers-reduced-motion: reduce)").matches)return;const ctx=canvas.getContext("2d");let w,h,particles=[];const resize=()=>{w=canvas.width=innerWidth;h=canvas.height=innerHeight};addEventListener("resize",resize);resize();const count=matchMedia("(max-width:720px)").matches?18:42;for(let i=0;i<count;i++)particles.push({x:Math.random()*w,y:Math.random()*h,r:Math.random()*2+.5,speed:Math.random()*.6+.2,drift:(Math.random()-.5)*.4,a:Math.random()*.5+.2});function loop(){ctx.clearRect(0,0,w,h);particles.forEach(p=>{p.y-=p.speed;p.x+=p.drift;if(p.y<-10){p.y=h+20;p.x=Math.random()*w}ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`${color}${p.a})`;ctx.fill()});requestAnimationFrame(loop)}loop()}
function initArchiveFiltering(){
 const inputs=[...document.querySelectorAll("[data-search]")];
 const groups=[...document.querySelectorAll("[data-filter-group]")];
 const items=[...document.querySelectorAll("[data-search-item]")];
 if(!items.length)return;
 const empty=document.querySelector(".filter-empty");
 const state={query:"",filters:{}};
 const categoryFor=(item,target)=>{
   const direct=item.dataset.category||item.dataset[target]||item.dataset.faction||item.dataset.color;
   if(direct)return direct.toLowerCase();
   if(target==="house")return (item.querySelector(".region")?.textContent||"").trim().toLowerCase().replace(/\s+/g,"-");
   return "";
 };
 const apply=()=>{
   const q=state.query.toLowerCase(); let shown=0;
   items.forEach(item=>{
     let ok=!q||item.innerText.toLowerCase().includes(q);
     for(const [target,val] of Object.entries(state.filters)){if(val!=="all"&&categoryFor(item,target)!==val){ok=false;break;}}
     item.style.display=ok?"":"none"; if(ok)shown++;
   });
   if(empty)empty.style.display=shown?"none":"block";
   groups.forEach(g=>{const c=g.querySelector("[data-filter-count]");if(c)c.textContent=`${shown} ${shown===1?"result":"results"}`;});
 };
 inputs.forEach(input=>input.addEventListener("input",()=>{state.query=input.value.trim();apply();}));
 groups.forEach(group=>{
   const target=group.dataset.filterGroup; state.filters[target]="all";
   group.querySelectorAll("[data-filter]").forEach(button=>button.addEventListener("click",()=>{
     group.querySelectorAll("[data-filter]").forEach(x=>x.classList.remove("active")); button.classList.add("active");
     state.filters[target]=button.dataset.filter.toLowerCase(); apply();
   }));
 });
 apply();
}
function initSearch(){initArchiveFiltering()}
function initFilters(){}
function initProfiles(){
 const modal=document.querySelector('.profile-modal');
 if(!modal)return;
 const title=modal.querySelector('[data-profile-title]'), role=modal.querySelector('[data-profile-role]'), text=modal.querySelector('[data-profile-text]');
 let lastTrigger=null;
 const close=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');lastTrigger?.focus();lastTrigger=null;};
 const trapFocus=e=>{if(e.key!=='Tab'||!modal.classList.contains('open'))return;const focusables=[...modal.querySelectorAll('button,a,input,select,textarea,[tabindex]:not([tabindex="-1"])')].filter(x=>!x.disabled);if(!focusables.length)return;const first=focusables[0],last=focusables[focusables.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}};
 document.querySelectorAll('.profile-trigger').forEach(btn=>btn.addEventListener('click',e=>{
   e.stopPropagation(); const card=btn.closest('.character-card');
   if(!card)return; lastTrigger=btn; title.textContent=card.querySelector('.flip-face.back h3')?.textContent||''; role.textContent=card.querySelector('.flip-face.back .char-title')?.textContent||''; text.textContent=card.querySelector('.flip-face.back p')?.textContent||''; modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); requestAnimationFrame(()=>modal.querySelector('.profile-close')?.focus());
 }));
 modal.querySelector('.profile-close')?.addEventListener('click',close); modal.addEventListener('click',e=>{if(e.target===modal)close()}); document.addEventListener('keydown',e=>{if(e.key==='Escape')close();trapFocus(e)});
}

// Responsive universal navigation.
// Desktop/tablet: keep the normal navigation visible.
// Phones (<=500px): replace it with a hamburger menu.
function initResponsiveMobileNavigation(){
 const headers=[...document.querySelectorAll('.home-header')];
 headers.forEach(header=>{
   const nav=header.querySelector('.home-nav');
   const tools=header.querySelector('.home-tools');
   if(!nav||!tools)return;

   let menu=header.querySelector('.home-menu-btn');
   if(!menu){
     menu=document.createElement('button');
     menu.type='button';
     menu.className='home-menu-btn';
     menu.setAttribute('aria-label','Open navigation menu');
     menu.setAttribute('aria-expanded','false');
     menu.innerHTML='<span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>';
     tools.appendChild(menu);
   }

   let mobile=header.querySelector('.mobile-home-nav');
   if(!mobile){
     mobile=document.createElement('div');
     mobile.className='mobile-home-nav';
     mobile.setAttribute('aria-label','Mobile navigation');
     mobile.hidden=true;
     nav.querySelectorAll('a').forEach(link=>{
       const clone=link.cloneNode(true);
       mobile.appendChild(clone);
     });
     header.appendChild(mobile);
   }

   const close=()=>{
     mobile.classList.remove('open');
     mobile.hidden=true;
     menu.setAttribute('aria-expanded','false');
     menu.setAttribute('aria-label','Open navigation menu');
   };
   const open=()=>{
     mobile.hidden=false;
     mobile.classList.add('open');
     menu.setAttribute('aria-expanded','true');
     menu.setAttribute('aria-label','Close navigation menu');
   };

   if(!menu.dataset.bound){
     menu.dataset.bound='true';
     menu.addEventListener('click',()=>mobile.classList.contains('open')?close():open());
     mobile.addEventListener('click',e=>{
       if(e.target.closest('a'))close();
     });
     document.addEventListener('click',e=>{
       if(window.matchMedia('(max-width: 500px)').matches &&
          mobile.classList.contains('open') &&
          !header.contains(e.target)) close();
     });
     window.addEventListener('resize',()=>{
       if(!window.matchMedia('(max-width: 500px)').matches) close();
     });
   }
 });
}
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded',initResponsiveMobileNavigation); else initResponsiveMobileNavigation();

// Unified Westeros navigation, era-aware search and mobile menu
(function(){
 // Mobile navigation is initialized by initResponsiveMobileNavigation().
 // Keep this legacy block free of a second click handler so the hamburger
 // cannot toggle twice.
 const searchBtn=document.querySelector('.home-search-btn');
 let panel=document.querySelector('.home-search-panel');
 if(!searchBtn)return;

 if(!panel){
   panel=document.createElement('div'); panel.className='home-search-panel'; panel.hidden=true;
   panel.innerHTML='<div class="search-box"><button type="button" class="search-close" aria-label="Close search">×</button><label for="homeSearch">SEARCH WESTEROS</label><input id="homeSearch" type="search" placeholder="Search houses, characters, dragons, cities..." autocomplete="off"><div id="homeSearchResults"></div></div>';
   document.body.appendChild(panel);
 }
 const close=panel.querySelector('.search-close'), input=panel.querySelector('#homeSearch'), results=panel.querySelector('#homeSearchResults');
 const isMainHome=document.body.classList.contains('westeros-home') || document.body.classList.contains('main-home');
 const era=document.body.classList.contains('hotd-theme')?'hotd':document.body.classList.contains('got-theme')?'got':null;

 // Search index. The main Westeros homepage gets both eras; an era page gets only its own era.
 const searchData={
   got:[
    ['House Stark','House','got/houses.html'],['House Reed','House','got/houses.html'],['House Florent','House','got/houses.html'],['House Hightower','House','got/houses.html'],['House Tarly','House','got/houses.html'],['House Dayne','House','got/houses.html'],['House Royce','House','got/houses.html'],['House Bracken','House','got/houses.html'],['House Blackwood','House','got/houses.html'],['House Frey','House','got/houses.html'],['House Karstark','House','got/houses.html'],['House Mormont','House','got/houses.html'],['House Bolton','House','got/houses.html'],['House Lannister','House','got/houses.html'],['House Targaryen','House','got/houses.html'],['House Baratheon','House','got/houses.html'],['House Greyjoy','House','got/houses.html'],['House Tyrell','House','got/houses.html'],['House Martell','House','got/houses.html'],['House Arryn','House','got/houses.html'],['House Tully','House','got/houses.html'],
    ['Jon Snow','Character','got/characters.html'],['Daenerys Targaryen','Character','got/characters.html'],['Tyrion Lannister','Character','got/characters.html'],['Arya Stark','Character','got/characters.html'],['Sansa Stark','Character','got/characters.html'],['Cersei Lannister','Character','got/characters.html'],['Jaime Lannister','Character','got/characters.html'],['Bran Stark','Character','got/characters.html'],['Ned Stark','Character','got/characters.html'],['Catelyn Stark','Character','got/characters.html'],['Robb Stark','Character','got/characters.html'],['Theon Greyjoy','Character','got/characters.html'],['Brienne of Tarth','Character','got/characters.html'],['Sandor Clegane','Character','got/characters.html'],['Jorah Mormont','Character','got/characters.html'],['Varys','Character','got/characters.html'],['Petyr Baelish','Character','got/characters.html'],['Samwell Tarly','Character','got/characters.html'],['Davos Seaworth','Character','got/characters.html'],['Melisandre','Character','got/characters.html'],['Gendry','Character','got/characters.html'],['Grey Worm','Character','got/characters.html'],['Missandei','Character','got/characters.html'],['Tormund Giantsbane','Character','got/characters.html'],['Ned Stark','Character','got/characters.html'],['Catelyn Stark','Character','got/characters.html'],['Robb Stark','Character','got/characters.html'],['Theon Greyjoy','Character','got/characters.html'],['Brienne of Tarth','Character','got/characters.html'],['Sandor Clegane','Character','got/characters.html'],['Jorah Mormont','Character','got/characters.html'],['Varys','Character','got/characters.html'],['Petyr Baelish','Character','got/characters.html'],['Samwell Tarly','Character','got/characters.html'],['Davos Seaworth','Character','got/characters.html'],['Melisandre','Character','got/characters.html'],['Gendry','Character','got/characters.html'],['Grey Worm','Character','got/characters.html'],['Missandei','Character','got/characters.html'],['Tormund Giantsbane','Character','got/characters.html'],
    ['Drogon','Dragon','got/dragons.html'],['Rhaegal','Dragon','got/dragons.html'],['Viserion','Dragon','got/dragons.html'],
    ["King's Landing",'City','got/cities.html'],['Winterfell','City','got/cities.html'],['Braavos','City','got/cities.html'],['Dragonstone','City','got/cities.html'],['Highgarden','City','got/cities.html'],['Castle Black','City','got/cities.html'],['Meereen','City','got/cities.html'],['Sunspear','City','got/cities.html'],
    ['The Chronicle','Chronicle','got/chronicle.html'],['The Storyline','Storyline','got/storyline.html']
   ],
   hotd:[
    ['House Targaryen','House','hotd/houses.html'],['House Swann','House','hotd/houses.html'],['House Royce','House','hotd/houses.html'],['House Darklyn','House','hotd/houses.html'],['House Massey','House','hotd/houses.html'],['House Westerling','House','hotd/houses.html'],['House Cole','House','hotd/houses.html'],['House Mooton','House','hotd/houses.html'],['House Beesbury','House','hotd/houses.html'],['House Celtigar','House','hotd/houses.html'],['House Bracken','House','hotd/houses.html'],['House Blackwood','House','hotd/houses.html'],['House Baratheon','House','hotd/houses.html'],['House Arryn','House','hotd/houses.html'],['House Stark','House','hotd/houses.html'],['House Hightower','House','hotd/houses.html'],['House Velaryon','House','hotd/houses.html'],['House Strong','House','hotd/houses.html'],
    ['Rhaenyra Targaryen','Character','hotd/characters.html'],['Daemon Targaryen','Character','hotd/characters.html'],['King Viserys I','Character','hotd/characters.html'],['Alicent Hightower','Character','hotd/characters.html'],['Aegon II Targaryen','Character','hotd/characters.html'],['Aemond Targaryen','Character','hotd/characters.html'],['Otto Hightower','Character','hotd/characters.html'],['Corlys Velaryon','Character','hotd/characters.html'],['Rhaenys Targaryen','Character','hotd/characters.html'],['Criston Cole','Character','hotd/characters.html'],['Helaena Targaryen','Character','hotd/characters.html'],['Jacaerys Velaryon','Character','hotd/characters.html'],['Lucerys Velaryon','Character','hotd/characters.html'],['Baela Targaryen','Character','hotd/characters.html'],['Rhaena Targaryen','Character','hotd/characters.html'],['Laena Velaryon','Character','hotd/characters.html'],['Harwin Strong','Character','hotd/characters.html'],['Larys Strong','Character','hotd/characters.html'],['Mysaria','Character','hotd/characters.html'],['Vaemond Velaryon','Character','hotd/characters.html'],['Ser Erryk Cargyll','Character','hotd/characters.html'],['Ser Arryk Cargyll','Character','hotd/characters.html'],['Hugh Hammer','Character','hotd/characters.html'],['Ulf the White','Character','hotd/characters.html'],['Addam of Hull','Character','hotd/characters.html'],['Alyn of Hull','Character','hotd/characters.html'],
    ['Syrax','Dragon','hotd/dragons.html'],['Caraxes','Dragon','hotd/dragons.html'],['Vhagar','Dragon','hotd/dragons.html'],['Meleys','Dragon','hotd/dragons.html'],['Sunfyre','Dragon','hotd/dragons.html'],['Dreamfyre','Dragon','hotd/dragons.html'],
    ["King’s Landing",'City','hotd/cities.html'],['Dragonstone','City','hotd/cities.html'],['Driftmark','City','hotd/cities.html'],['Oldtown','City','hotd/cities.html'],['Harrenhal','City','hotd/cities.html'],["Storm’s End",'City','hotd/cities.html'],
    ['The Chronicle','Chronicle','hotd/chronicle.html'],['The Storyline','Storyline','hotd/storyline.html']
   ]
 };
 const data=isMainHome ? [...searchData.got.map(x=>[...x,'GAME OF THRONES']),...searchData.hotd.map(x=>[...x,'HOUSE OF THE DRAGON'])] : (era?searchData[era]:[]);
 const open=()=>{panel.hidden=false;setTimeout(()=>input?.focus(),40)};
 const shut=()=>{panel.hidden=true;if(input)input.value='';if(results)results.innerHTML='';};
 searchBtn.addEventListener('click',open); close?.addEventListener('click',shut); panel.addEventListener('click',e=>{if(e.target===panel)shut()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){shut();mobile?.classList.remove('open');}});
 input?.addEventListener('input',()=>{
   const q=input.value.toLowerCase().trim(); if(!results)return;
   if(!q){results.innerHTML='';return;}
   const matches=data.filter(item=>item[0].toLowerCase().includes(q) || item[1].toLowerCase().includes(q));
   results.innerHTML=matches.length?matches.map(item=>{
     const badge=item[3]?`<small>${item[3]}</small>`:'';
     const slug=item[0].toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
     let target=item[2];
     if(!isMainHome) target=target.replace(/^got\//,'').replace(/^hotd\//,'');
     const hashable=!['chronicle','storyline'].includes(item[1].toLowerCase()); const href=hashable?`${target}#${item[1].toLowerCase()}-${slug}`:target; return `<a class="home-search-result" href="${href}"><span><strong>${item[0]}</strong>${badge}</span><em>${item[1]}</em></a>`;
   }).join(''):'<div class="home-search-result no-result">No matching result found.</div>';
 });
})();


/* Random Discovery — choose a real archive entry and open it. */
function initRandomDiscovery(){
 const tools=document.querySelector('.home-tools');
 if(!tools || tools.querySelector('[data-random-discovery]'))return;
 const button=document.createElement('button');
 button.type='button';
 button.className='random-discovery-btn';
 button.dataset.randomDiscovery='';
 button.setAttribute('aria-label','Discover something random');
 button.title='Discover something random';
 button.innerHTML='<span aria-hidden="true">⚔</span><b>RANDOM</b>';
 const slug=s=>String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
 const targetId=(name,type)=>{
   if(type==='House') return 'house-house-'+slug(String(name).replace(/^house\s+/i,''));
   const prefix={Character:'character-',Dragon:'dragon-',City:'city-'}[type];
   return prefix ? prefix+slug(name) : '';
 };
 const archiveIndex={
   got:[
    ['House Stark','House','got/houses.html'],['House Lannister','House','got/houses.html'],['House Targaryen','House','got/houses.html'],['House Baratheon','House','got/houses.html'],['House Greyjoy','House','got/houses.html'],['House Tyrell','House','got/houses.html'],['House Martell','House','got/houses.html'],['House Arryn','House','got/houses.html'],['House Tully','House','got/houses.html'],
    ['Jon Snow','Character','got/characters.html'],['Daenerys Targaryen','Character','got/characters.html'],['Tyrion Lannister','Character','got/characters.html'],['Arya Stark','Character','got/characters.html'],['Sansa Stark','Character','got/characters.html'],['Cersei Lannister','Character','got/characters.html'],['Jaime Lannister','Character','got/characters.html'],['Bran Stark','Character','got/characters.html'],['Ned Stark','Character','got/characters.html'],['Catelyn Stark','Character','got/characters.html'],['Robb Stark','Character','got/characters.html'],['Theon Greyjoy','Character','got/characters.html'],['Brienne of Tarth','Character','got/characters.html'],['Sandor Clegane','Character','got/characters.html'],['Jorah Mormont','Character','got/characters.html'],['Varys','Character','got/characters.html'],['Petyr Baelish','Character','got/characters.html'],['Samwell Tarly','Character','got/characters.html'],['Davos Seaworth','Character','got/characters.html'],['Melisandre','Character','got/characters.html'],['Gendry','Character','got/characters.html'],['Grey Worm','Character','got/characters.html'],['Missandei','Character','got/characters.html'],['Tormund Giantsbane','Character','got/characters.html'],
    ['Drogon','Dragon','got/dragons.html'],['Rhaegal','Dragon','got/dragons.html'],['Viserion','Dragon','got/dragons.html'],
    ["King's Landing",'City','got/cities.html'],['Winterfell','City','got/cities.html'],['Braavos','City','got/cities.html'],['Dragonstone','City','got/cities.html'],['Highgarden','City','got/cities.html'],['Castle Black','City','got/cities.html'],['Meereen','City','got/cities.html'],['Sunspear','City','got/cities.html']
   ],
   hotd:[
    ['House Targaryen','House','hotd/houses.html'],['House Hightower','House','hotd/houses.html'],['House Velaryon','House','hotd/houses.html'],['House Strong','House','hotd/houses.html'],
    ['Rhaenyra Targaryen','Character','hotd/characters.html'],['Daemon Targaryen','Character','hotd/characters.html'],['King Viserys I','Character','hotd/characters.html'],['Alicent Hightower','Character','hotd/characters.html'],['Aegon II Targaryen','Character','hotd/characters.html'],['Aemond Targaryen','Character','hotd/characters.html'],['Otto Hightower','Character','hotd/characters.html'],['Corlys Velaryon','Character','hotd/characters.html'],['Rhaenys Targaryen','Character','hotd/characters.html'],['Criston Cole','Character','hotd/characters.html'],['Helaena Targaryen','Character','hotd/characters.html'],['Jacaerys Velaryon','Character','hotd/characters.html'],['Lucerys Velaryon','Character','hotd/characters.html'],['Baela Targaryen','Character','hotd/characters.html'],['Rhaena Targaryen','Character','hotd/characters.html'],['Laena Velaryon','Character','hotd/characters.html'],['Harwin Strong','Character','hotd/characters.html'],['Larys Strong','Character','hotd/characters.html'],['Mysaria','Character','hotd/characters.html'],['Vaemond Velaryon','Character','hotd/characters.html'],['Ser Erryk Cargyll','Character','hotd/characters.html'],['Ser Arryk Cargyll','Character','hotd/characters.html'],['Hugh Hammer','Character','hotd/characters.html'],['Ulf the White','Character','hotd/characters.html'],['Addam of Hull','Character','hotd/characters.html'],['Alyn of Hull','Character','hotd/characters.html'],
    ['Syrax','Dragon','hotd/dragons.html'],['Caraxes','Dragon','hotd/dragons.html'],['Vhagar','Dragon','hotd/dragons.html'],['Meleys','Dragon','hotd/dragons.html'],['Sunfyre','Dragon','hotd/dragons.html'],['Dreamfyre','Dragon','hotd/dragons.html'],
    ["King's Landing",'City','hotd/cities.html'],['Dragonstone','City','hotd/cities.html'],['Driftmark','City','hotd/cities.html'],['Oldtown','City','hotd/cities.html'],['Harrenhal','City','hotd/cities.html'],["Storm's End",'City','hotd/cities.html']
   ]
 };
 const currentEra=document.body.classList.contains('hotd-theme')?'hotd':document.body.classList.contains('got-theme')?'got':null;
 const currentPage=(location.pathname.split('/').pop()||'index.html').toLowerCase();
 button.addEventListener('click',()=>{
   const pool=currentEra ? archiveIndex[currentEra] : [...archiveIndex.got,...archiveIndex.hotd];
   if(!pool.length)return;
   const [name,type,path]=pool[Math.floor(Math.random()*pool.length)];
   const id=targetId(name,type);
   // Same-page result: open the card directly on the first click.
   if(id && currentEra && path.startsWith(currentEra+'/') && path.slice(currentEra.length+1).toLowerCase()===currentPage){
     const target=document.getElementById(id);
     if(target){ target.scrollIntoView({block:'center',behavior:'auto'}); target.click(); return; }
   }
   // Cross-page result: construct the destination from the site root.
   const root=new URL(currentEra ? '../' : './',location.href);
   const destination=new URL(path,root);
   if(id) destination.searchParams.set('open',id);
   window.location.assign(destination.href);
 });
 tools.insertBefore(button,tools.firstChild);
}
document.addEventListener('DOMContentLoaded',initRandomDiscovery);

/* Universal card detail viewer + richer archive details. */
function initFavorites(){
 const items=[...document.querySelectorAll('[data-search-item]')];
 if(!items.length)return;
 const KEY='westeros-favorites-v1';
 let saved={};
 try{saved=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){saved={}};
 const pageKey=()=>{
   const path=location.pathname.replace(/\\/g,'/');
   const parts=path.split('/').filter(Boolean);
   const era=parts.includes('hotd')?'hotd':'got';
   return era+'|'+(parts[parts.length-1]||'index.html');
 };
 const keyFor=item=>pageKey()+'|'+(item.id||item.dataset.searchItemId||item.querySelector('h1,h2,h3,h4,.title,.name')?.textContent||'item').trim().toLowerCase().replace(/[^a-z0-9]+/g,'-');
 const isFav=item=>!!saved[keyFor(item)];
 const write=()=>{try{localStorage.setItem(KEY,JSON.stringify(saved))}catch(e){}};
 const updateButtons=()=>items.forEach(item=>{const b=item.querySelector('[data-favorite-button]');if(!b)return;const on=isFav(item);b.classList.toggle('is-favorite',on);b.setAttribute('aria-pressed',String(on));b.setAttribute('aria-label',on?'Remove from favorites':'Add to favorites');b.title=on?'Remove from favorites':'Add to favorites';b.textContent=on?'★':'☆';});
 items.forEach(item=>{
   if(item.querySelector('[data-favorite-button]'))return;
   const b=document.createElement('button'); b.type='button'; b.className='favorite-button'; b.dataset.favoriteButton=''; b.textContent='☆'; b.title='Add to favorites'; b.setAttribute('aria-pressed','false');
   b.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();const k=keyFor(item);if(saved[k])delete saved[k];else saved[k]=true;write();updateButtons();item.classList.toggle('is-favorite-card',!!saved[k]);});
   item.appendChild(b);
 });
 const filterHost=document.querySelector('.archive-filters');
 if(filterHost && !filterHost.querySelector('[data-favorites-filter]')){
   const b=document.createElement('button');b.type='button';b.className='filter-btn favorites-filter';b.dataset.favoritesFilter='';b.setAttribute('aria-pressed','false');b.textContent='☆ FAVORITES';
   filterHost.appendChild(b);
   let active=false;
   b.addEventListener('click',()=>{active=!active;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));items.forEach(item=>{item.style.display=active&&!isFav(item)?'none':''});const empty=document.querySelector('.filter-empty');if(empty){const visible=items.some(i=>i.style.display!=='none');empty.style.display=visible?'none':'';}});
 }
 updateButtons();
}
function initDetailCards(){
 const cards=[...document.querySelectorAll('.westeros-page [data-search-item], [data-search-item]')];
 if(!cards.length)return;
 const DETAILS={
  "got/houses/house-stark": {
    "section": "House",
    "description": "The Starks are the old northern house of Winterfell, known for duty, endurance and a deep connection to the North. Their words, “Winter Is Coming,” are less a slogan than a warning: survival requires preparation, loyalty and the ability to endure hardship."
  },
  "got/houses/house-lannister": {
    "section": "House",
    "description": "The Lannisters are one of Westeros’s richest and most politically powerful families, ruling from Casterly Rock and using wealth as carefully as armies. Their red-and-gold lion represents pride, ambition and the belief that power must be protected at almost any cost."
  },
  "got/houses/house-targaryen": {
    "section": "House",
    "description": "House Targaryen ruled Westeros for generations after Aegon the Conqueror united the kingdoms with dragons. Their history is filled with spectacular victories, family rivalries and the dangerous idea that royal blood gives a person the right to rule."
  },
  "got/houses/house-baratheon": {
    "section": "House",
    "description": "The Baratheons rose to the Iron Throne after Robert’s Rebellion and became closely tied to the politics of the crown. Their reputation for physical strength and fierce tempers made them formidable, but internal divisions repeatedly weakened the family."
  },
  "got/houses/house-greyjoy": {
    "section": "House",
    "description": "The Greyjoys rule the Iron Islands, where life is shaped by harsh seas, raiding traditions and a culture built around independence. Their ambition is summed up by the phrase “We Do Not Sow”: they prefer taking what they need to depending on the mainland."
  },
  "got/houses/house-tyrell": {
    "section": "House",
    "description": "The Tyrells of Highgarden combine wealth, fertile lands and careful political maneuvering. Unlike houses that rely mainly on military force, they often build influence through alliances and marriage, making them one of the most important players in the struggle for the crown."
  },
  "got/houses/house-martell": {
    "section": "House",
    "description": "House Martell rules Dorne from Sunspear and follows customs that differ from much of the rest of Westeros. The family is famous for patience, pride and a long memory, especially when seeking justice for wrongs committed against the Dornish."
  },
  "got/houses/house-arryn": {
    "section": "House",
    "description": "The Arryns are the ancient rulers of the Vale, protected by mountains and the formidable Eyrie. Their lands are difficult to invade, giving the family a strategic advantage, while their connections to other great houses make them important during succession crises."
  },
  "got/houses/house-tully": {
    "section": "House",
    "description": "House Tully rules the Riverlands from Riverrun, a region positioned between several competing powers. Because the Riverlands sit at the center of so many conflicts, the Tullys are repeatedly forced to choose alliances while trying to protect their people from armies passing through."
  },
  "got/houses/house-bolton": {"section": "House", "description": "House Bolton of the Dreadfort is one of the North's oldest houses and the Starks' historic rivals. The Boltons are remembered for their harsh rule, the flayed-man sigil and their willingness to exploit northern divisions during the War of the Five Kings. Their temporary rise under Roose and Ramsay Bolton ultimately ends with the house's defeat at the Battle of the Bastards."},
  "got/houses/house-mormont": {"section": "House", "description": "House Mormont rules Bear Island in the far North. Though smaller than the great northern houses, the Mormonts are known for fierce independence and loyalty to House Stark. Jeor Mormont serves as Lord Commander of the Night's Watch, while Maege and her daughters defend Bear Island during the wars that consume the North."},
  "got/houses/house-karstark": {"section": "House", "description": "House Karstark descends from House Stark and holds Karhold in the eastern North. Its loyalty to Robb Stark becomes strained after the death of Rickard Karstark's sons, leading to a crisis when Rickard acts against Robb's orders. The episode demonstrates how quickly family loyalty and military necessity can collide during wartime."},
  "got/houses/house-frey": {"section": "House", "description": "House Frey controls the Twins, a strategically vital crossing of the Green Fork. Walder Frey builds the family's influence through marriages and careful alliances, making the house an important player in the Riverlands. Its decision to betray Robb Stark at the Red Wedding becomes one of the most consequential acts of the War of the Five Kings."},
  "got/houses/house-blackwood": {"section": "House", "description": "House Blackwood of Raventree Hall is an ancient Riverlands family locked in a centuries-old feud with House Bracken. The Blackwoods preserve their identity and traditions while repeatedly becoming involved in the wider struggles for the Riverlands. Their long rivalry with the Brackens continues into the Targaryen civil-war era."},
  "got/houses/house-bracken": {"section": "House", "description": "House Bracken of Stone Hedge is the traditional rival of House Blackwood. The feud between the two Riverlands families stretches back generations and repeatedly turns local disputes into bloodshed. During the wars surrounding the Iron Throne, the Brackens use their military position and alliances to protect their interests."},
  "got/houses/house-royce": {"section": "House", "description": "House Royce is one of the oldest and most prominent noble families of the Vale, ruling from Runestone. The family has strong military traditions and longstanding ties to House Arryn. Yohn Royce becomes a prominent supporter of the Stark cause, while the house's ancient bronze armor and runic heritage distinguish it among the Vale's nobles."},
  "got/houses/house-dayne": {"section": "House", "description": "House Dayne is an ancient Dornish house based at Starfall. Its history is closely associated with the legendary sword Dawn and the title Sword of the Morning. Ser Arthur Dayne's reputation as one of the finest knights of his generation gives the family a lasting place in the history of Westeros."},
  "got/houses/house-tarly": {"section": "House", "description": "House Tarly of Horn Hill is one of the Reach's strongest military families. Randyll Tarly is renowned for strict discipline and battlefield skill, while his son Samwell is sent to the Night's Watch after failing to meet his father's expectations. The family's martial reputation makes it an important source of soldiers for competing powers."},
  "got/houses/house-hightower": {"section": "House", "description": "House Hightower rules from Oldtown and is one of the wealthiest families in the Reach. Its power comes from trade, the harbor, the great lighthouse and close relationships with the Citadel and the crown. During the later Targaryen period, the family becomes deeply involved in royal politics through Otto and Alicent Hightower."},
  "got/houses/house-florent": {"section": "House", "description": "House Florent is a noble Reach family with extensive marriage connections to other powerful houses. During the struggle for the Iron Throne, the Florents become associated with Stannis Baratheon's claim through Selyse Florent. Their story illustrates how marriage alliances can draw lesser houses into conflicts over the crown."},
  "got/houses/house-reed": {"section": "House", "description": "House Reed rules the marshes of the Neck from Greywater Watch. The Reeds are small in numbers but possess unmatched knowledge of the bogs and hidden waterways of the region. Howland Reed's loyalty to the Starks and his role in the events surrounding the Tower of Joy make the family important to the deeper history of the North."},
  "got/characters/jon-snow": {
    "section": "Character",
    "description": "Jon Snow begins his story as an outsider at Winterfell and later joins the Night’s Watch, believing that service beyond the Wall will give his life a clear purpose. His experience there changes him, forcing him to understand the threat posed by the White Walkers and the importance of the people he once knew only as enemies."
  },
  "got/characters/daenerys-targaryen": {
    "section": "Character",
    "description": "Daenerys grows from an exiled young woman into a powerful queen with three dragons and a huge following. Her journey is built around liberation, reclaiming her family’s throne and proving that she can rule differently from the kings who came before her. As her power grows, so does the difficult question of what she is willing to do to achieve her vision."
  },
  "got/characters/tyrion-lannister": {
    "section": "Character",
    "description": "Tyrion survives in a world that constantly underestimates him because of his appearance and his family position. His greatest weapons are intelligence, wit and an understanding of political motives. From King’s Landing to exile and war, he repeatedly proves that knowing how people think can be as valuable as knowing how to fight."
  },
  "got/characters/arya-stark": {
    "section": "Character",
    "description": "Arya’s journey is one of survival and transformation. After losing her family’s protection, she learns to travel alone, fight, disguise herself and eventually use the training of the Faceless Men. Beneath all that training, however, remains a strong connection to her identity and her determination to survive on her own terms."
  },
  "got/characters/sansa-stark": {
    "section": "Character",
    "description": "Sansa begins with an idealized view of royal life but is forced to grow quickly after becoming trapped in the politics of King’s Landing. Her experiences teach her patience, observation and political awareness. By the end of her journey, she is no longer simply surviving the game of power; she understands how to play it."
  },
  "got/characters/cersei-lannister": {
    "section": "Character",
    "description": "Cersei is fiercely protective of her children and determined to preserve her family’s position. She uses marriage, fear, alliances and ruthless political calculation to hold power. Her greatest strength is her refusal to surrender, but that same determination repeatedly pushes her toward decisions that isolate her."
  },
  "got/characters/jaime-lannister": {
    "section": "Character",
    "description": "Jaime is introduced as a celebrated knight whose reputation is complicated by the choices he has made for his family. His journey gradually exposes the conflict between honor, loyalty and love. Away from the safety of his family’s influence, he is forced to question the identity he built for himself."
  },
  "got/characters/bran-stark": {
    "section": "Character",
    "description": "Bran’s fall from Winterfell changes his life completely and eventually leads him toward the mystical history of Westeros. As the Three-Eyed Raven, he becomes a keeper of memories and knowledge rather than a conventional warrior. His role becomes especially important because understanding the past is essential to confronting the future."
  },
  "got/dragons/drogon": {
    "section": "Dragon",
    "description": "Drogon is Daenerys Targaryen’s largest and most aggressive dragon, named after Khal Drogo. He becomes a symbol of her return to power and is frequently the most visible expression of her military strength. His size and destructive ability make him terrifying on a battlefield, but his bond with Daenerys is also deeply personal."
  },
  "got/dragons/rhaegal": {
    "section": "Dragon",
    "description": "Rhaegal is one of Daenerys’s three dragons, named after her brother Rhaegar Targaryen. His green-and-bronze appearance distinguishes him from his siblings, while his presence represents the continuation of Targaryen blood and the return of dragons to the world."
  },
  "got/dragons/viserion": {
    "section": "Dragon",
    "description": "Viserion is named after Daenerys’s brother Viserys and is one of the three dragons born from the petrified eggs given to Daenerys. His story becomes especially tragic because he is separated from his siblings and later transformed into a weapon against the living."
  },
  "got/cities/king-s-landing": {
    "section": "City",
    "description": "King’s Landing is the political heart of the Seven Kingdoms and the seat of the Iron Throne. Its crowded streets, royal palace and harbor make it both powerful and vulnerable. Almost every major political struggle eventually reaches the city because controlling King’s Landing means controlling the machinery of government."
  },
  "got/cities/winterfell": {
    "section": "City",
    "description": "Winterfell is the ancestral seat of House Stark and one of the most important strongholds in the North. Its ancient walls, hot springs and position along northern routes make it both a home and a defensive center. For the Stark family, Winterfell represents identity, memory and belonging."
  },
  "got/cities/braavos": {
    "section": "City",
    "description": "Braavos is a wealthy Free City built around canals and islands, famous for trade, ships and the mysterious House of Black and White. It stands outside the politics of the Seven Kingdoms while still influencing events through money, information and highly trained assassins."
  },
  "got/cities/dragonstone": {
    "section": "City",
    "description": "Dragonstone is the ancestral island fortress of House Targaryen, built around volcanic stone and surrounded by the sea. Its association with dragons and Targaryen rule gives it enormous symbolic importance. For claimants to the throne, holding Dragonstone can be a declaration that their royal heritage still matters."
  },
  "got/cities/highgarden": {
    "section": "City",
    "description": "Highgarden is the beautiful and wealthy seat of House Tyrell, surrounded by the fertile lands of the Reach. Its agricultural wealth gives the Tyrells enormous influence because food is one of the most important sources of power during wartime."
  },
  "got/cities/castle-black": {
    "section": "City",
    "description": "Castle Black is the principal headquarters of the Night’s Watch on the Wall. It is less a comfortable castle than a military outpost, responsible for defending the realm from threats beyond the Wall. Its importance becomes clear when the supernatural danger in the North begins to grow."
  },
  "got/cities/meereen": {
    "section": "City",
    "description": "Meereen is one of the great slave cities of Slaver’s Bay and becomes a major test of Daenerys’s ability to govern. Conquering the city is easier than maintaining peace inside it, forcing her to confront the difficult difference between destroying an old system and building a stable new one."
  },
  "got/cities/sunspear": {
    "section": "City",
    "description": "Sunspear is the capital of Dorne and the seat of House Martell. Its desert setting, distinctive architecture and independent culture reflect Dorne’s separation from the traditions of the other kingdoms. It becomes an important center of resistance and political calculation."
  },
  "got/chronicle/a-king-dies-hunting": {
    "section": "Chronicle",
    "description": "King Robert Baratheon’s hunting accident becomes the spark that exposes the instability beneath the royal court. With Robert dying and no secure succession, competing families immediately begin positioning themselves for control. The event matters because the Seven Kingdoms are about to enter a war that had been building quietly for years."
  },
  "got/chronicle/the-king-s-hand-loses-his-head": {
    "section": "Chronicle",
    "description": "Ned Stark’s execution destroys the possibility of a peaceful political settlement and turns the conflict into open war. His death shocks the North and gives Robb Stark the motivation to raise an army. It also demonstrates how quickly the rules of honor can collapse when power is placed above justice."
  },
  "got/chronicle/wildfire-on-the-blackwater": {
    "section": "Chronicle",
    "description": "The Battle of the Blackwater becomes one of the defining battles for control of King’s Landing. Tyrion’s use of wildfire helps destroy much of the attacking fleet, while the defenders struggle to keep the city from falling. The battle proves that strategy, preparation and political alliances can matter as much as raw numbers."
  },
  "got/chronicle/the-north-remembers": {
    "section": "Chronicle",
    "description": "The North continues to resist Lannister control even after Robb Stark’s campaign is broken. The phrase captures the idea that political defeat does not automatically erase loyalty or memory. Northern resistance later becomes part of the larger effort to restore the Stark family and reclaim Winterfell."
  },
  "got/chronicle/a-queen-crosses-the-sea": {
    "section": "Chronicle",
    "description": "Daenerys’s arrival in Westeros marks the moment her long exile finally turns into a direct struggle for the throne. She brings dragons, armies and a claim based on Targaryen blood, but she also discovers that Westeros is more complicated than the political world she left behind."
  },
  "got/chronicle/the-dead-walk-south": {
    "section": "Chronicle",
    "description": "The Army of the Dead finally breaks through the Wall and brings the supernatural threat directly into the Seven Kingdoms. Former enemies must reconsider old rivalries because the danger is no longer a distant legend. The event changes the war from a contest for political power into a fight for survival."
  },
  "got/chronicle/two-battles-one-bastard": {
    "section": "Chronicle",
    "description": "Jon Snow’s battles against the forces surrounding Winterfell and the larger armies of the realm highlight his transformation from an uncertain outsider into a central military leader. His victories carry a cost, but they also help restore Stark influence in the North."
  },
  "got/chronicle/the-city-burns": {
    "section": "Chronicle",
    "description": "The destruction of King’s Landing becomes one of the darkest turning points of the war. Victory is achieved through overwhelming force, but the civilian cost changes how allies and enemies view the person who ordered it. The event shows how the pursuit of absolute victory can destroy the legitimacy a ruler hopes to gain."
  },
  "got/chronicle/the-throne-melts": {
    "section": "Chronicle",
    "description": "The Iron Throne is destroyed after the final struggle for power, ending the physical symbol around which generations of rulers fought. Instead of immediately crowning another hereditary monarch, the surviving leaders choose a new political arrangement. The moment closes the cycle of conquest, rebellion and succession that defined the story."
  },
  "hotd/houses/house-targaryen": {
    "section": "House",
    "description": "House Targaryen is the ruling dynasty at the center of the Dance of the Dragons. Its greatest strength is also its greatest danger: dragons give the family unmatched military power, but the question of succession turns that power inward. The civil war shows how quickly a royal family can become its own worst enemy."
  },
  "hotd/houses/house-hightower": {
    "section": "House",
    "description": "House Hightower is one of the richest and most influential families in Westeros, based in Oldtown. The family builds power through wealth, learning, political relationships and proximity to the royal court. During the succession crisis, the Hightowers become central players in deciding who controls the throne."
  },
  "hotd/houses/house-velaryon": {
    "section": "House",
    "description": "House Velaryon is a powerful seafaring family whose wealth comes from ships, trade and control of Driftmark. Corlys Velaryon’s ambition brings the family close to the Targaryen succession, while its navy gives whichever side it supports a major strategic advantage."
  },
  "hotd/houses/house-strong": {
    "section": "House",
    "description": "House Strong of Harrenhal becomes deeply connected to the royal succession through Lyonel Strong and his sons. Their story shows how dangerous proximity to the throne can be: political success can bring influence, but it can also make a family the target of suspicion, rivalry and revenge."
  },
  "hotd/houses/house-stark": {"section": "House", "description": "House Stark is the ancient ruling dynasty of the North. During the Dance of the Dragons, Lord Cregan Stark eventually commits northern forces to Rhaenyra's cause, fulfilling the North's political obligations while demonstrating how difficult it is for distant houses to remain outside a succession war."},
  "hotd/houses/house-arryn": {"section": "House", "description": "House Arryn rules the Vale from the Eyrie and is connected to the Targaryen succession through Rhaenyra's family ties. The Vale's mountains make it a formidable region to invade, while its troops and resources become important to Rhaenyra as the civil war spreads across Westeros."},
  "hotd/houses/house-baratheon": {"section": "House", "description": "House Baratheon rules the Stormlands from Storm's End. Its position between the Crownlands and the southern kingdoms makes the house strategically important during the Dance. The Baratheons become involved in the succession struggle as competing sides seek the support of the great houses."},
  "hotd/houses/house-blackwood": {"section": "House", "description": "House Blackwood of Raventree Hall supports Rhaenyra during the Dance. Its ancient feud with House Bracken turns the Riverlands into a place where the larger Targaryen conflict and a much older local rivalry become intertwined, producing repeated clashes between the two houses."},
  "hotd/houses/house-bracken": {"section": "House", "description": "House Bracken of Stone Hedge supports Aegon II's Green faction during the Dance. Its rivalry with House Blackwood is centuries old, and the civil war gives that feud a new political dimension as both families fight on opposite sides of the Targaryen succession."},
  "hotd/houses/house-celtigar": {"section": "House", "description": "House Celtigar is an ancient Valyrian family based on Claw Isle in the Crownlands. Its Valyrian heritage connects it to the Targaryens, while its location near Dragonstone gives it strategic importance during the civil war. The house is associated with Rhaenyra's Black faction."},
  "hotd/houses/house-beesbury": {"section": "House", "description": "House Beesbury is a Reach house whose lord, Lyman Beesbury, serves on King Viserys I's small council. His opposition to the secret plan to crown Aegon places the family directly in the succession crisis. The house's involvement shows how even council decisions can become matters of life and death during the Dance."},
  "hotd/houses/house-mooton": {"section": "House", "description": "House Mooton rules Maidenpool in the Riverlands. Its position on the coast and along important routes gives it strategic value during the Dance, when armies and fleets compete for control of the region. The Mootons become involved in the shifting alliances surrounding Rhaenyra's claim."},
  "hotd/houses/house-cole": {"section": "House", "description": "House Cole is a lesser Crownlands family whose most famous member is Ser Criston Cole. Criston's rise from an ordinary knight to Lord Commander of the Kingsguard and a leading Green commander gives the house an outsized place in the history of the Dance. His personal conflict with Rhaenyra becomes intertwined with the wider succession struggle."},
  "hotd/houses/house-westerling": {"section": "House", "description": "House Westerling is an old Westerlands family whose members serve the Targaryen crown. Ser Harrold Westerling serves as Lord Commander of the Kingsguard during the succession crisis and remains closely connected to the royal household. The family's story reflects the role of sworn service in the politics of the Dance."},
  "hotd/houses/house-massey": {"section": "House", "description": "House Massey is a Crownlands family whose lands lie close to Dragonstone. Its geographic position makes its allegiance valuable to the Black faction, especially as Rhaenyra seeks to secure the lands surrounding her stronghold and maintain access to the capital."},
  "hotd/houses/house-darklyn": {"section": "House", "description": "House Darklyn is an ancient Crownlands family based at Duskendale. Its lands sit close to King's Landing, placing the house near the center of royal politics. The Darklyns' history demonstrates how the Crownlands' smaller houses can become strategically important when the Targaryen succession breaks down."},
  "hotd/houses/house-royce": {"section": "House", "description": "House Royce is one of the Vale's leading families and a powerful regional force during the Dance. Its ancient lineage and military strength reinforce House Arryn's position, while the Royce family's support helps connect the Vale to Rhaenyra's wider coalition."},
  "hotd/houses/house-swann": {"section": "House", "description": "House Swann of Stonehelm is a notable Stormlands family. The house's lands and military position place it within the network of Stormlands nobles whose allegiance matters to the competing Targaryen factions. Its story illustrates how the Dance draws even established regional houses into the succession crisis."},
  "hotd/characters/rhaenyra-targaryen": {
    "section": "Character",
    "description": "Rhaenyra is named heir by her father Viserys and spends much of her life defending that decision. She grows from a rebellious young princess into a determined claimant who understands that inheritance alone may not be enough to secure power. The civil war forces her to balance family loyalty, motherhood and the brutal demands of kingship."
  },
  "hotd/characters/daemon-targaryen": {
    "section": "Character",
    "description": "Daemon is Viserys’s younger brother, a skilled warrior and one of the most unpredictable members of the Targaryen family. He is ambitious, impulsive and fiercely loyal to the people he considers his own. His relationship with Rhaenyra becomes central to the succession struggle and brings both strength and volatility to her claim."
  },
  "hotd/characters/king-viserys-i": {
    "section": "Character",
    "description": "Viserys I wants peace and stability after becoming king, and he tries to preserve his family by refusing to let old disagreements become open war. His decision to name Rhaenyra heir is historically important, but his failure to secure a universally accepted succession plan leaves the realm dangerously divided after his death."
  },
  "hotd/characters/alicent-hightower": {
    "section": "Character",
    "description": "Alicent begins as a close companion to Rhaenyra but becomes queen after marrying Viserys. As her children grow, her fears about their safety and inheritance intensify. She becomes one of the key figures behind the Green faction, believing that placing her son on the throne is necessary to protect her family."
  },
  "hotd/characters/aegon-ii-targaryen": {
    "section": "Character",
    "description": "Aegon II becomes king when the Greens crown him after Viserys’s death, despite Rhaenyra being the named heir. He is not naturally suited to the enormous responsibility placed upon him, and the war gradually transforms him into a hardened and damaged ruler. His claim becomes one of the central causes of the civil war."
  },
  "hotd/characters/aemond-targaryen": {
    "section": "Character",
    "description": "Aemond is one of the most formidable warriors of the Targaryen civil war and rides Vhagar, the largest living dragon. His desire to prove himself and his long-running rivalry with Rhaenyra’s family make him a dangerous force. His actions repeatedly turn political tension into irreversible bloodshed."
  },
  "hotd/characters/otto-hightower": {
    "section": "Character",
    "description": "Otto Hightower is a highly experienced political operator who serves as Hand of the King. He views royal succession through the lens of stability and his family’s security, and he works carefully to place Aegon on the throne. His ability to plan several moves ahead makes him one of the Greens’ most important strategists."
  },
  "hotd/characters/corlys-velaryon": {
    "section": "Character",
    "description": "Corlys Velaryon, known as the Sea Snake, builds House Velaryon into an extraordinary maritime power. His ambition leads him to seek a stronger place for his family within the royal succession. Even when his personal plans fail, his ships, wealth and experience make him one of the most valuable allies in the war."
  },
  "hotd/characters/rhaenys-targaryen": {
    "section": "Character",
    "description": "Rhaenys is a Targaryen princess who once had a serious claim to the throne but was passed over in favor of Viserys. That history gives her a unique understanding of the injustice and uncertainty surrounding succession. She becomes a powerful supporter of Rhaenyra while carrying the memory of what her own family lost."
  },
  "hotd/characters/criston-cole": {
    "section": "Character",
    "description": "Criston Cole rises from a relatively modest background to become a respected knight and eventually Lord Commander of the Kingsguard. His personal history with Rhaenyra becomes tangled with resentment, pride and politics. He ultimately becomes one of the Green faction’s most aggressive military leaders."
  },
  "hotd/dragons/syrax": {
    "section": "Dragon",
    "description": "Syrax is Rhaenyra Targaryen’s dragon and one of the clearest symbols of her royal identity. She is not known primarily as a battlefield predator like Vhagar, but her bond with Rhaenyra represents the ancient connection between Targaryen rulers and dragons. Syrax is especially important as Rhaenyra’s claim moves from ceremony into war."
  },
  "hotd/dragons/caraxes": {
    "section": "Dragon",
    "description": "Caraxes, the Blood Wyrm, is Daemon Targaryen’s fearsome red dragon. His unusual shape and aggressive nature make him an intimidating presence in battle. Caraxes is closely associated with Daemon’s reckless courage, and together they become one of the most dangerous combinations on Rhaenyra’s side."
  },
  "hotd/dragons/vhagar": {
    "section": "Dragon",
    "description": "Vhagar is the largest and oldest of the major dragons active during the Dance of the Dragons. Having survived for generations, she represents the overwhelming destructive power available to the Targaryens. Under Aemond’s control, Vhagar becomes a decisive weapon whose presence can change the balance of an entire battle."
  },
  "hotd/dragons/meleys": {
    "section": "Dragon",
    "description": "Meleys, the Red Queen, is ridden by Rhaenys Targaryen and is among the fastest and most experienced dragons of the era. Her reputation gives Rhaenys significant military power, while her fate demonstrates how costly the civil war becomes when dragons are turned against members of the same family."
  },
  "hotd/dragons/sunfyre": {
    "section": "Dragon",
    "description": "Sunfyre is Aegon II’s golden dragon, famous for his striking appearance and close association with the king. Although admired for his beauty, Sunfyre becomes involved in the brutal reality of the civil war. His injuries and survival mirror the physical and political damage suffered by Aegon himself."
  },
  "hotd/dragons/dreamfyre": {
    "section": "Dragon",
    "description": "Dreamfyre is an older dragon associated with the Targaryen royal family and ridden by Helaena. She is less prominent as a battlefield weapon than Vhagar or Caraxes, but her existence reflects the deep connection between the royal family and the dwindling population of living dragons."
  },
  "hotd/dragons/seasmoke": {"section":"Dragon","description":"Seasmoke is a pale-grey dragon formerly bonded to Laenor Velaryon. During the Dance, the dragon accepts Addam of Hull, making Seasmoke an important part of Rhaenyra’s search for experienced dragonriders."},
  "hotd/dragons/vermax": {"section":"Dragon","description":"Vermax is Jacaerys Velaryon’s dragon. Still young compared with the great war dragons, Vermax is closely associated with Jace’s diplomatic missions and his role as Rhaenyra’s heir."},
  "hotd/dragons/arrax": {"section":"Dragon","description":"Arrax is Lucerys Velaryon’s young dragon. His encounter with Vhagar at Storm’s End becomes one of the defining tragedies that turns the succession dispute into open vengeance."},
  "hotd/dragons/moondancer": {"section":"Dragon","description":"Moondancer is Baela Targaryen’s swift young dragon. Though much smaller than Vhagar, her speed gives Baela an important advantage when the war reaches its later stages."},
  "hotd/dragons/tyraxes": {"section":"Dragon","description":"Tyraxes is the young dragon associated with Joffrey Velaryon. His story reflects the younger generation of Targaryens growing up with dragonriding as part of their inheritance."},
  "hotd/dragons/stormcloud": {"section":"Dragon","description":"Stormcloud is the young dragon of Aegon the Younger. His ability to carry his rider becomes especially important as members of Rhaenyra’s family struggle to survive the war."},
  "hotd/dragons/vermithor": {"section":"Dragon","description":"Vermithor, the Bronze Fury, is one of the largest and oldest dragons available during the Dance. His size makes finding a compatible rider a major opportunity for the Blacks."},
  "hotd/dragons/silverwing": {"section":"Dragon","description":"Silverwing is an ancient silver dragon who becomes one of the dragons claimed during the search for dragonseeds. Her history stretches back to an earlier generation of Targaryen riders."},
  "hotd/dragons/tessarion": {"section":"Dragon","description":"Tessarion, the Blue Queen, is Daeron Targaryen’s dragon. She becomes an important Green weapon as Daeron campaigns in the Reach and the civil war spreads across Westeros."},
  "hotd/dragons/sheepstealer": {"section":"Dragon","description":"Sheepstealer is a wild dragon that avoids ordinary Targaryen control and feeds on livestock. Nettles eventually earns the dragon’s trust, creating one of the most unusual rider-and-dragon bonds of the Dance."},
  "hotd/dragons/cannibal": {"section":"Dragon","description":"Cannibal is the most feared of Dragonstone’s wild dragons. He is known for eating other dragons, their eggs and their remains, and no confirmed rider ever controls him."},
  "hotd/dragons/grey-ghost": {"section":"Dragon","description":"Grey Ghost is a shy wild dragon that lives around Dragonstone. His pale colouring and avoidance of people give him the name by which the island’s inhabitants remember him."},
  "hotd/dragons/shrykos": {"section":"Dragon","description":"Shrykos is a young dragon belonging to Prince Jaehaerys Targaryen. Still too young for the role of a mature war dragon, Shrykos represents the vulnerable younger generation caught in the Dance."},
  "hotd/dragons/morghul": {"section":"Dragon","description":"Morghul is a young dragon associated with Princess Jaehaera Targaryen. Morghul is part of the royal family’s younger generation and is caught up in the violence surrounding the Targaryen succession crisis."},
  "hotd/dragons/balerion": {"section":"Dragon","description":"Balerion the Black Dread was the enormous dragon ridden by Aegon the Conqueror and later by other Targaryens. Although Balerion died long before the Dance, his legacy remains central to the history of Targaryen power."},
  "hotd/dragons/meraxes": {"section":"Dragon","description":"Meraxes was one of Aegon the Conqueror’s three great dragons and was ridden by Queen Rhaenys Targaryen. Her death occurred generations before the Dance, but she remains an important part of the dynasty’s earlier dragon history."},
  "hotd/dragons/quicksilver": {"section":"Dragon","description":"Quicksilver was the young dragon of Aegon the Uncrowned during an earlier Targaryen succession conflict. The dragon’s history shows that disputes over the throne and dragon power existed long before the Dance."},
  "hotd/dragons/morning": {"section":"Dragon","description":"Morning is a pink dragon that bonds with Rhaena Targaryen after the Dance. Her appearance represents the survival and continuation of the Targaryen dragon line after the civil war."},
  "hotd/cities/king-s-landing": {
    "section": "City",
    "description": "King’s Landing is the center of royal government and the place where the succession crisis becomes a struggle for immediate control. The Red Keep, council chambers and surrounding city all become part of the political battlefield. Whoever controls the capital can claim the appearance of legitimacy, even when the succession itself is disputed."
  },
  "hotd/cities/dragonstone": {
    "section": "City",
    "description": "Dragonstone is the traditional seat of the Targaryen heir and the base from which Rhaenyra organizes her claim. Its volcanic landscape and ancient Targaryen symbolism make it more than a fortress; it is a physical statement that the old royal succession still has a living claimant."
  },
  "hotd/cities/driftmark": {
    "section": "City",
    "description": "Driftmark is the island seat of House Velaryon and a center of naval power. Its importance comes from both its location and its wealthy seafaring family. During the civil war, control of Driftmark and its fleet can influence supply routes and determine how quickly armies and messages can move."
  },
  "hotd/cities/oldtown": {
    "section": "City",
    "description": "Oldtown is one of the oldest and most important cities in Westeros, home to the Hightowers and the Citadel. Its scholars, wealth and religious institutions give it influence far beyond its walls. Because House Hightower is deeply involved in the succession crisis, Oldtown becomes an important source of political and logistical power."
  },
  "hotd/cities/harrenhal": {
    "section": "City",
    "description": "Harrenhal is a colossal but cursed-looking fortress in the Riverlands, famous for its enormous size and dark history. Its strategic position makes it valuable during war, while its association with House Strong ties it directly to the political struggle. Controlling Harrenhal means gaining a powerful base in the center of the realm."
  },
  "hotd/cities/storm-s-end": {
    "section": "City",
    "description": "Storm’s End is the ancient Baratheon stronghold and one of the most important castles in the stormlands. Its loyalty matters because the Baratheons can provide soldiers and political legitimacy to a claimant. The castle becomes especially significant when rival envoys attempt to secure support during the succession crisis."
  },
  "hotd/chronicle/an-heir-is-named": {
    "section": "Chronicle",
    "description": "Viserys I publicly names Rhaenyra as his heir after the death of his son. The decision is meant to provide certainty, but it creates a precedent that becomes increasingly difficult to defend once Viserys later has sons. Rhaenyra’s appointment is the foundation of her claim and the source of the Greens’ eventual challenge."
  },
  "hotd/chronicle/a-second-marriage-a-second-family": {
    "section": "Chronicle",
    "description": "Viserys marries Alicent Hightower and begins a second family of royal children. The marriage changes the balance of power at court because Alicent’s sons now have a direct connection to the throne. What begins as a family decision eventually becomes the central succession conflict of the realm."
  },
  "hotd/chronicle/the-king-dies": {
    "section": "Chronicle",
    "description": "Viserys’s death removes the one person capable of keeping the competing branches of his family together. The Greens move quickly to crown Aegon, while Rhaenyra’s supporters prepare to defend her inheritance. His death transforms years of tension into an open contest for the Iron Throne."
  },
  "hotd/chronicle/aegon-is-crowned": {
    "section": "Chronicle",
    "description": "Aegon II is crowned in King’s Landing by the Green faction, creating a rival monarchy while Rhaenyra is still the named heir. The speed of the coronation is politically important because it gives the Greens control of the capital and allows them to present Aegon as the lawful king."
  },
  "hotd/chronicle/a-prince-falls-from-the-sky": {
    "section": "Chronicle",
    "description": "The death of Lucerys Velaryon after his encounter with Aemond and Vhagar turns political rivalry into personal vengeance. The loss convinces many characters that reconciliation is no longer possible. From this point, the war becomes increasingly brutal as both sides seek retaliation."
  },
  "hotd/chronicle/dragonseeds-and-desperation": {
    "section": "Chronicle",
    "description": "As the war intensifies, both sides need more dragons and riders to survive. The search for people with Targaryen blood who might bond with unclaimed dragons becomes a desperate gamble. The effort shows how the Greens and Blacks are forced to use every advantage available as their traditional royal dragons are lost."
  },
  "hotd/chronicle/the-battle-above-the-god-s-eye": {
    "section": "Chronicle",
    "description": "Daemon Targaryen and Aemond Targaryen finally meet in one of the most dramatic dragon confrontations of the war. Riding Caraxes and Vhagar, they carry a personal rivalry into the sky above the God’s Eye. The encounter is devastating for both sides and becomes a defining moment in the history of the Dance."
  },
  "hotd/chronicle/king-s-landing-falls": {
    "section": "Chronicle",
    "description": "Rhaenyra’s forces eventually take King’s Landing, giving the Blacks control of the capital and the Iron Throne. Yet capturing the city does not end the war. Political resistance, economic pressure and the continued existence of rival forces show that occupying the capital is very different from securing lasting rule."
  },
  "hotd/chronicle/the-war-turns-again": {
    "section": "Chronicle",
    "description": "The fortunes of the Greens and Blacks repeatedly reverse as dragons, armies and alliances disappear. Victories become temporary and even successful commanders struggle to maintain control. The shifting balance demonstrates how the Dance destroys the stability that both factions originally claimed they were fighting to protect."
  },
  "hotd/chronicle/a-council-ends-what-dragons-couldn-t": {
    "section": "Chronicle",
    "description": "After the greatest violence of the Dance, a political council helps bring the conflict toward an end. The settlement demonstrates an important truth of the civil war: dragons can win battles, but they cannot create lasting legitimacy or peace. Westeros must eventually return to negotiation and political compromise."
  }
};
 const STORYLINE_DETAILS={
  "got/storyline/a-king-dies-hunting": {
    "section": "Storyline",
    "description": "Robert Baratheon’s death removes the fragile protection that had kept rival ambitions under control. Ned Stark’s investigation, Cersei’s fear of exposure and the question of succession all collide in this moment. What looks like an accident becomes the opening move of the political chain that eventually tears the realm apart."
  },
  "got/storyline/the-king-s-hand-loses-his-head": {
    "section": "Storyline",
    "description": "Ned Stark’s execution changes the story from a court investigation into a continent-wide struggle. Robb’s decision to march south, Arya’s escape and Sansa’s captivity all grow out of the same shock. The event proves that even a respected lord can be sacrificed when competing claims to power become more important than law."
  },
  "got/storyline/wildfire-on-the-blackwater": {
    "section": "Storyline",
    "description": "The Blackwater is where King’s Landing nearly falls before Tyrion’s preparations help save it. The battle strengthens the Lannister position, damages Stannis’s campaign and establishes Tyrion as a serious political and military thinker. It also shows how one carefully prepared weapon can alter the outcome of a much larger attack."
  },
  "got/storyline/the-north-remembers": {
    "section": "Storyline",
    "description": "After the Stark cause suffers devastating losses, the North does not simply disappear from the story. Hidden loyalties, surviving members of House Stark and resistance movements keep the idea of independence alive. The storyline gradually turns survival into restoration, showing that political power can be lost without loyalty being forgotten."
  },
  "got/storyline/a-queen-crosses-the-sea": {
    "section": "Storyline",
    "description": "Daenerys finally brings the Targaryen struggle back to Westeros after building power across the Narrow Sea. Her dragons and armies give her a realistic path to the throne, but her arrival also creates a clash between inherited claim and the support of the people and leaders already living in Westeros."
  },
  "got/storyline/the-dead-walk-south": {
    "section": "Storyline",
    "description": "The Wall’s fall changes the scale of the entire story. The political struggle becomes secondary to humanity’s survival as the Army of the Dead moves south. Characters who spent years fighting each other are forced to cooperate, while Jon and Daenerys must convince skeptical leaders that an ancient threat is now real."
  },
  "got/storyline/two-battles-one-bastard": {
    "section": "Storyline",
    "description": "Jon Snow’s rise is tied to battles that make him increasingly important to the future of the North. His leadership earns respect, but his victories also attract attention from people who question his identity and authority. The storyline builds toward the revelation that Jon’s place in the world is far more complicated than he believed."
  },
  "got/storyline/the-city-burns": {
    "section": "Storyline",
    "description": "The fall of King’s Landing should have been the final step toward victory, but the destruction of the city changes the meaning of that victory. The surviving leaders realize that defeating an enemy is not enough if the methods used make peaceful rule impossible. Former allies begin to reconsider who should hold power."
  },
  "got/storyline/the-throne-melts": {
    "section": "Storyline",
    "description": "The destruction of the Iron Throne ends the object that motivated generations of conquest. With the symbol of absolute monarchy gone, the surviving leaders experiment with a different way of choosing a ruler. After so much violence, the future depends less on possessing a chair and more on reaching an agreement."
  },
  "hotd/storyline/an-heir-is-named": {
    "section": "Storyline",
    "description": "Rhaenyra’s appointment as heir gives Viserys’s reign a clear direction, but it also creates a promise that must survive future changes at court. The storyline follows how that declaration shapes Rhaenyra’s identity, her supporters and the expectations of the realm. Years later, everyone must decide whether the king’s word still controls the succession."
  },
  "hotd/storyline/a-second-marriage-a-second-family": {
    "section": "Storyline",
    "description": "Viserys’s marriage to Alicent creates a second branch of the royal family, and the political consequences grow with every child born from it. A king can love his family without being able to give every member a place in the line of succession. That tension eventually becomes impossible to contain."
  },
  "hotd/storyline/the-king-dies": {
    "section": "Storyline",
    "description": "Viserys’s death removes the barrier between the Green and Black factions. The speed with which the Greens act shows that the succession has been planned for years, while Rhaenyra’s absence from the capital gives them an immediate advantage. The story now shifts from family disagreement to a war in which every decision carries irreversible consequences."
  },
  "hotd/storyline/aegon-is-crowned": {
    "section": "Storyline",
    "description": "Aegon’s coronation creates a direct challenge to Rhaenyra’s inheritance and gives the Greens control of the symbols of royal authority. Once the crown is placed on his head, compromise becomes much harder because both factions can point to a crowned monarch as proof of legitimacy. The ceremony becomes a political weapon as much as a celebration."
  },
  "hotd/storyline/a-prince-falls-from-the-sky": {
    "section": "Storyline",
    "description": "Lucerys’s death is the emotional point where the conflict between the young members of the two families becomes a blood feud. Aemond’s pursuit and Vhagar’s power produce a death that neither side can easily undo. From here, grief and revenge begin driving the war as strongly as questions of inheritance."
  },
  "hotd/storyline/dragonseeds-and-desperation": {
    "section": "Storyline",
    "description": "The Blacks’ search for new dragonriders shows how quickly the war consumes the advantages that once made the Targaryens powerful. Recruiting dragonseeds expands the number of people who can influence the conflict, but it also introduces uncertainty because dragons cannot simply be treated like ordinary military equipment. The gamble becomes necessary because the old generation is disappearing."
  },
  "hotd/storyline/the-battle-above-the-god-s-eye": {
    "section": "Storyline",
    "description": "Daemon and Aemond carry years of resentment into a confrontation that represents the personal side of the Dance. Their dragons turn a family rivalry into one of the most destructive duels of the war. The tragedy is symmetrical: two powerful Targaryens destroy each other while fighting for a throne neither can truly keep."
  },
  "hotd/storyline/king-s-landing-falls": {
    "section": "Storyline",
    "description": "When Rhaenyra takes King’s Landing, the Blacks finally possess the capital they have fought to control. Yet the victory reveals a central weakness of the war: holding the throne does not guarantee obedience. Financial pressure, political opposition and continuing military threats mean that Rhaenyra inherits not a peaceful kingdom but a capital surrounded by enemies."
  },
  "hotd/storyline/the-war-turns-again": {
    "section": "Storyline",
    "description": "The Dance repeatedly changes direction as dragons die, armies switch sides and political decisions create unexpected consequences. No victory is permanent. This part of the story emphasizes exhaustion: the factions keep fighting even as the original reasons for the conflict become buried beneath grief, revenge and the need to survive."
  },
  "hotd/storyline/a-council-ends-what-dragons-couldn-t": {
    "section": "Storyline",
    "description": "The final political settlement demonstrates the limits of military power. After the deaths of so many dragons and members of the royal family, the remaining leaders need a solution that can outlast the battlefield. The council represents a return to negotiation and succession politics, proving that even a dynasty built on dragons ultimately depends on people agreeing to recognize its ruler."
  }
};
 let modal=document.querySelector('.detail-modal');
 if(!modal){
   modal=document.createElement('div'); modal.className='detail-modal'; modal.hidden=true;
   modal.innerHTML='<div class="detail-backdrop"></div><div class="detail-dialog" role="dialog" aria-modal="true" aria-labelledby="detailModalTitle"><button class="detail-close" type="button" aria-label="Close">×</button><div class="detail-content"></div></div>'; modal.setAttribute('aria-hidden','true');
   document.body.appendChild(modal);
 }
 const content=modal.querySelector('.detail-content');
 let detailTrigger=null;
 const close=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('detail-open');detailTrigger?.focus();detailTrigger=null;setTimeout(()=>modal.hidden=true,180);};
 const trapDetailFocus=e=>{if(e.key!=='Tab'||!modal.classList.contains('open'))return;const f=[...modal.querySelectorAll('button,a,input,select,textarea,[tabindex]:not([tabindex="-1"])')].filter(x=>!x.disabled);if(!f.length)return;const first=f[0],last=f[f.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}};
 const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
 const cardTitle=card=>card.querySelector('h1,h2,h3,h4,.title,.name,.city-name,.dragon-name')?.textContent?.trim() || card.innerText.trim().split('\n')[0] || '';
 const pageInfo=()=>{
   const path=location.pathname.toLowerCase();
   const era=path.includes('/hotd/')?'hotd':path.includes('/got/')?'got':null;
   const page=(path.split('/').pop()||'index.html').replace(/\.html$/,'')||'index';
   return {era,page};
 };
 const escapeHTML=s=>String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
 const CHARACTER_PROFILES={
  "got/characters/jon-snow":{house:"Stark",role:"King in the North",known:"Jon Snow",profile:"A reluctant leader whose identity, loyalty and sense of duty place him at the center of the struggle for the North and the war against the dead.",traits:"Duty • Loyalty • Leadership • Resilience",importance:"Jon connects the political conflict of Westeros with the existential threat beyond the Wall. His choices repeatedly force him to choose between personal loyalty and the survival of the realm."},
  "got/characters/daenerys-targaryen":{house:"Targaryen",role:"Mother of Dragons",known:"Daenerys Stormborn",profile:"An exiled princess who grows into a powerful queen, building an army and returning to Westeros with three dragons and a claim to the Iron Throne.",traits:"Ambition • Compassion • Power • Determination",importance:"Daenerys represents the return of Targaryen power and dragons. Her journey also explores how the desire to liberate others can become complicated when absolute power is within reach."},
  "got/characters/tyrion-lannister":{house:"Lannister",role:"Hand of the Queen",known:"The Imp",profile:"A politically gifted survivor who relies on intelligence, wit and an understanding of people rather than physical strength.",traits:"Intelligence • Wit • Strategy • Adaptability",importance:"Tyrion repeatedly influences major events through counsel and political strategy, proving that power in Westeros is not always won with a sword."},
  "got/characters/arya-stark":{house:"Stark",role:"No One",known:"Arya Stark",profile:"A Stark daughter whose journey through war, disguise and the Faceless Men transforms her into a highly capable survivor while preserving her fierce sense of identity.",traits:"Courage • Independence • Stealth • Determination",importance:"Arya shows the personal cost of the Stark family’s destruction and the lengths one survivor can go to reclaim agency and justice."},
  "got/characters/sansa-stark":{house:"Stark",role:"Lady of Winterfell",known:"Sansa of Winterfell",profile:"A survivor of court politics who learns patience, observation and diplomacy before becoming a confident political leader.",traits:"Patience • Diplomacy • Intelligence • Resolve",importance:"Sansa’s story turns vulnerability into political strength and demonstrates that understanding power can be as important as wielding it."},
  "got/characters/cersei-lannister":{house:"Lannister",role:"Queen of the Seven Kingdoms",known:"Cersei Lannister",profile:"A fiercely protective queen who uses political calculation, alliances and fear to defend her family and maintain her grip on power.",traits:"Ambition • Ruthlessness • Loyalty • Political Skill",importance:"Cersei embodies the dangerous relationship between family loyalty and political power, repeatedly choosing control even when the cost is isolation."},
  "got/characters/jaime-lannister":{house:"Lannister",role:"The Kingslayer",known:"The Kingslayer",profile:"A celebrated knight whose reputation hides a difficult struggle between love, loyalty, duty and the kind of man he wants to become.",traits:"Swordsmanship • Loyalty • Honor • Conflict",importance:"Jaime’s journey challenges the difference between reputation and character, gradually revealing the person beneath the Kingslayer title."},
  "got/characters/bran-stark":{house:"Stark",role:"The Three-Eyed Raven",known:"Bran the Broken",profile:"A Stark who loses the life he knew and becomes a keeper of memory and ancient knowledge with an unusual view of Westeros’s past and future.",traits:"Memory • Vision • Knowledge • Mystery",importance:"Bran represents the connection between history and destiny. His transformation makes knowledge itself a form of power."},
  "hotd/characters/rhaenyra-targaryen":{house:"Targaryen",role:"Princess / Queen claimant",known:"The Realm’s Delight",faction:"BLACK",profile:"Named heir by Viserys I, Rhaenyra spends her life defending her right to succeed her father as the realm fractures around her claim.",traits:"Determination • Defiance • Family • Authority",importance:"Rhaenyra is the central figure of the succession crisis. Her claim turns a family disagreement into a civil war that reshapes the Targaryen dynasty."},
  "hotd/characters/daemon-targaryen":{house:"Targaryen",role:"Prince / Warrior",known:"The Rogue Prince",faction:"BLACK",profile:"Viserys’s younger brother, a formidable warrior whose ambition, impulsiveness and loyalty make him one of the most unpredictable figures in the Dance.",traits:"Ambition • Combat • Impulsiveness • Loyalty",importance:"Daemon brings military strength and volatility to Rhaenyra’s side, making his personal choices closely connected to the wider succession struggle."},
  "hotd/characters/king-viserys-i":{house:"Targaryen",role:"King of the Seven Kingdoms",known:"Viserys I Targaryen",faction:"ROYAL",profile:"A king who values peace and family unity, but whose unresolved succession leaves the realm vulnerable to division after his death.",traits:"Peace • Family • Tradition • Diplomacy",importance:"Viserys’s decision to name Rhaenyra heir becomes the foundation of the conflict. His failure to secure that succession is one of the war’s defining causes."},
  "hotd/characters/alicent-hightower":{house:"Hightower",role:"Queen / Green leader",known:"Queen Alicent",faction:"GREEN",profile:"Once Rhaenyra’s close companion, Alicent becomes queen and gradually turns into one of the strongest defenders of her children’s claim to the throne.",traits:"Devotion • Fear • Politics • Resolve",importance:"Alicent transforms a personal relationship into a political divide, becoming one of the principal forces behind the Green faction."},
  "hotd/characters/aegon-ii-targaryen":{house:"Targaryen",role:"King of the Seven Kingdoms",known:"Aegon II Targaryen",faction:"GREEN",profile:"Crowned by the Greens after Viserys’s death, Aegon becomes the rival claimant whose coronation makes peaceful compromise far more difficult.",traits:"Privilege • Conflict • Survival • Power",importance:"Aegon’s coronation creates the direct rival claim at the heart of the Dance and gives the Greens a crowned monarch around whom they can rally."},
  "hotd/characters/aemond-targaryen":{house:"Targaryen",role:"Prince / Dragonrider",known:"Aemond One-Eye",faction:"GREEN",profile:"A formidable Targaryen warrior who rides Vhagar and carries a long-running rivalry with Rhaenyra’s family into the civil war.",traits:"Discipline • Pride • Combat • Vengeance",importance:"Aemond’s actions repeatedly turn political tension into personal bloodshed, making him one of the war’s most consequential military figures."},
  "hotd/characters/otto-hightower":{house:"Hightower",role:"Hand of the King",known:"Ser Otto Hightower",faction:"GREEN",profile:"An experienced political strategist who views succession through the lens of royal stability and his family’s security.",traits:"Strategy • Influence • Patience • Ambition",importance:"Otto demonstrates how decisions made inside the royal court can shape events far beyond the throne room."},
  "hotd/characters/corlys-velaryon":{house:"Velaryon",role:"Lord of the Tides",known:"The Sea Snake",faction:"BLACK",profile:"A legendary seafarer who builds House Velaryon into a major maritime power and seeks a stronger place for his family within the royal succession.",traits:"Ambition • Seamanship • Wealth • Leadership",importance:"Corlys brings ships, wealth and military reach to the Black cause, giving the succession struggle a powerful naval dimension."},
  "hotd/characters/rhaenys-targaryen":{house:"Targaryen",role:"Princess / Dragonrider",known:"The Queen Who Never Was",faction:"BLACK",profile:"A Targaryen princess who was once passed over for the throne and carries a personal understanding of the uncertainty surrounding succession.",traits:"Pride • Wisdom • Restraint • Courage",importance:"Rhaenys represents the memory of an earlier succession decision and brings experience, caution and immense symbolic weight to Rhaenyra’s cause."},
  "hotd/characters/criston-cole":{house:"Cole",role:"Lord Commander of the Kingsguard",known:"Ser Criston Cole",faction:"GREEN",profile:"A skilled knight whose personal history with Rhaenyra becomes tangled with resentment, pride and political allegiance.",traits:"Swordsmanship • Pride • Loyalty • Resentment",importance:"Criston shows how personal conflict can become political fuel, eventually turning a private grievance into a major military commitment."},
  "got/characters/ned-stark":{house:"Stark",role:"Lord of Winterfell",known:"Ned Stark",profile:"The honorable lord of Winterfell and father of the Stark children. Ned becomes Hand of the King and discovers that the politics of the capital are far more dangerous than the battles he knows in the North.",traits:"Duty • Honor • Family • Justice",importance:"Ned’s investigation into the royal succession exposes the danger surrounding the Stark family and sets the opening political crisis of the series in motion."},
  "got/characters/catelyn-stark":{house:"Stark",role:"Lady of Winterfell",known:"Catelyn Stark",profile:"A Tully of Riverrun who becomes Lady of Winterfell and a determined protector of her children. Catelyn moves between the North and Riverlands as war tears apart the alliances holding her family together.",traits:"Family • Loyalty • Resolve • Diplomacy",importance:"Catelyn is one of the central political and personal figures of the Stark story, repeatedly making difficult choices to protect her children."},
  "got/characters/robb-stark":{house:"Stark",role:"King in the North",known:"Robb Stark",profile:"Ned’s eldest son, Robb is proclaimed King in the North after his father’s death. His early military victories establish him as a serious force, while his political decisions strain the alliances needed to sustain his war.",traits:"Leadership • Honor • Strategy • Loyalty",importance:"Robb’s campaign demonstrates how battlefield success can be undermined by marriage alliances, oaths and the competing interests of powerful houses."},
  "got/characters/theon-greyjoy":{house:"Greyjoy",role:"Prince of Winterfell",known:"Theon Greyjoy",profile:"The heir of House Greyjoy is raised alongside the Stark children but struggles with his divided identity. His attempt to prove himself to his birth family leads to choices that permanently damage his relationship with the Starks.",traits:"Identity • Pride • Guilt • Redemption",importance:"Theon’s story explores divided loyalty and the long process of rebuilding trust after betrayal."},
  "got/characters/brienne-of-tarth":{house:"Tarth",role:"Knight of the Seven Kingdoms",known:"Brienne of Tarth",profile:"A warrior from Tarth who dedicates herself to the oaths she makes. Brienne challenges expectations about who can be a knight while forming important bonds with Jaime Lannister and the Stark family.",traits:"Honor • Courage • Loyalty • Perseverance",importance:"Brienne represents the ideal of service and knighthood while showing how difficult it can be to live by a strict code in a cynical political world."},
  "got/characters/sandor-clegane":{house:"Clegane",role:"The Hound",known:"Sandor Clegane",profile:"A feared warrior who serves the royal court before abandoning the life of a sworn fighter. His journeys with Arya and later other companions reveal a more complicated man beneath his reputation.",traits:"Combat • Cynicism • Protection • Survival",importance:"The Hound provides a perspective on the brutality of Westeros while repeatedly showing unexpected compassion toward vulnerable people."},
  "got/characters/jorah-mormont":{house:"Mormont",role:"Exiled Knight",known:"Jorah Mormont",profile:"A disgraced knight who becomes one of Daenerys Targaryen’s most persistent advisers and protectors. Jorah’s loyalty is complicated by his past actions and his feelings for Daenerys.",traits:"Loyalty • Experience • Regret • Protection",importance:"Jorah connects Daenerys’s exile to the wider politics of Westeros and remains an important source of military and political advice."},
  "got/characters/varys":{house:"None",role:"Master of Whisperers",known:"Varys",profile:"A master of intelligence who builds networks of informants across the Seven Kingdoms. Varys presents himself as a servant of the realm while carefully navigating competing claims to power.",traits:"Information • Patience • Secrecy • Politics",importance:"Varys demonstrates that information can be as valuable as armies in the struggle for the Iron Throne."},
  "got/characters/petyr-baelish":{house:"Baelish",role:"Lord of Harrenhal",known:"Petyr Baelish",profile:"Known as Littlefinger, Petyr rises from a minor position through financial skill, manipulation and carefully chosen alliances. He repeatedly turns political uncertainty into opportunities for himself.",traits:"Ambition • Finance • Manipulation • Strategy",importance:"Petyr’s rise illustrates how a person without a great ancestral army can still influence the political order through information and alliances."},
  "got/characters/samwell-tarly":{house:"Tarly",role:"Brother of the Night’s Watch",known:"Samwell Tarly",profile:"A bookish young man who joins the Night’s Watch and gradually finds courage in ways he never expected. Sam’s knowledge becomes especially important as the threat beyond the Wall grows.",traits:"Knowledge • Compassion • Courage • Learning",importance:"Sam shows that scholarship and historical knowledge can be crucial weapons when ordinary military strength is not enough."},
  "got/characters/davos-seaworth":{house:"Seaworth",role:"The Onion Knight",known:"Davos Seaworth",profile:"A former smuggler who becomes a trusted adviser and skilled negotiator. Davos serves several leaders while maintaining a strong personal sense of loyalty and practical judgment.",traits:"Loyalty • Diplomacy • Practicality • Honesty",importance:"Davos acts as a grounded political voice, often connecting rulers to the human consequences of their decisions."},
  "got/characters/melisandre":{house:"None",role:"Red Priestess",known:"Melisandre",profile:"A priestess devoted to the Lord of Light whose visions and interpretation of prophecy influence major political and military decisions. Her certainty about destiny often brings her into conflict with others.",traits:"Faith • Prophecy • Influence • Conviction",importance:"Melisandre represents the role of religion and prophecy in the political conflicts of Westeros."},
  "got/characters/gendry":{house:"Baratheon",role:"Baratheon Heir",known:"Gendry",profile:"A blacksmith who discovers his royal parentage and becomes important to several competing factions. His life changes when his connection to Robert Baratheon becomes politically useful.",traits:"Craftsmanship • Survival • Loyalty • Lineage",importance:"Gendry’s identity shows how hidden ancestry can become politically significant in a kingdom obsessed with bloodlines."},
  "got/characters/grey-worm":{house:"None",role:"Commander of the Unsullied",known:"Grey Worm",profile:"A disciplined soldier who rises to command Daenerys’s Unsullied forces. Grey Worm balances military duty with a growing personal life and loyalty to Daenerys.",traits:"Discipline • Loyalty • Leadership • Duty",importance:"Grey Worm is central to Daenerys’s military strength and represents the transformation of the Unsullied from an enslaved force into a loyal army."},
  "got/characters/missandei":{house:"None",role:"Queen’s Adviser",known:"Missandei",profile:"A multilingual interpreter who becomes one of Daenerys’s closest advisers and friends. Missandei moves from slavery to a position of influence beside the Targaryen queen.",traits:"Empathy • Language • Loyalty • Diplomacy",importance:"Missandei provides counsel grounded in communication and compassion while sharing Daenerys’s transformation from exile to ruler."},
  "got/characters/tormund-giantsbane":{house:"Free Folk",role:"Free Folk Warrior",known:"Tormund Giantsbane",profile:"A charismatic Free Folk leader who becomes an ally of Jon Snow after years of hostility between the peoples north and south of the Wall.",traits:"Courage • Humor • Loyalty • Warrior Spirit",importance:"Tormund helps bridge the divide between the Free Folk and the Night’s Watch and becomes an important ally in the war against the dead."},
  "hotd/characters/helaena-targaryen":{house:"Targaryen",role:"Princess of the Realm",known:"Helaena Targaryen",faction:"GREEN",profile:"Aegon II’s sister and wife whose quiet manner and strange prophetic observations make her one of the most distinctive members of the royal family.",traits:"Prophecy • Family • Gentleness • Insight",importance:"Helaena becomes a tragic figure caught between the political ambitions of her family and the personal cost of the succession war."},
  "hotd/characters/jacaerys-velaryon":{house:"Velaryon",role:"Prince of Dragonstone",known:"Jacaerys Velaryon",faction:"BLACK",profile:"Rhaenyra’s eldest son and heir. Jacaerys is sent across Westeros to secure support for his mother’s claim and proves himself capable of diplomacy and dragonriding.",traits:"Duty • Diplomacy • Courage • Responsibility",importance:"Jacaerys becomes one of the most important young representatives of Rhaenyra’s faction during the opening stages of the Dance."},
  "hotd/characters/lucerys-velaryon":{house:"Velaryon",role:"Prince of Driftmark",known:"Lucerys Velaryon",faction:"BLACK",profile:"Rhaenyra’s second son and a dragonrider who is sent to Storm’s End to seek support. His encounter with Aemond becomes one of the events that escalates the conflict.",traits:"Family • Courage • Youth • Duty",importance:"Lucerys’s fate turns the succession dispute into a much more personal and violent war between the two branches of the family."},
  "hotd/characters/baela-targaryen":{house:"Targaryen",role:"Dragonrider of House Targaryen",known:"Baela Targaryen",faction:"BLACK",profile:"Daemon Targaryen’s daughter and a dragonrider raised within the Targaryen family’s increasingly dangerous succession struggle.",traits:"Independence • Courage • Family • Dragonriding",importance:"Baela represents the next generation of Targaryen dragonriders and becomes involved in the defense of her family’s claim."},
  "hotd/characters/rhaena-targaryen":{house:"Targaryen",role:"Lady of House Targaryen",known:"Rhaena Targaryen",faction:"BLACK",profile:"Daemon’s daughter and Baela’s twin, Rhaena grows up surrounded by dragons and the expectations placed on the Targaryen family.",traits:"Patience • Family • Determination • Heritage",importance:"Rhaena’s story shows the pressure placed on Targaryen children to live up to a family identity built around dragons and succession."},
  "hotd/characters/laena-velaryon":{house:"Velaryon",role:"Lady of Driftmark",known:"Laena Velaryon",faction:"BLACK",profile:"The daughter of Corlys and Rhaenys Velaryon and a dragonrider who marries Daemon Targaryen. Her life links the Velaryon family to the Targaryen succession struggle.",traits:"Family • Dragonriding • Ambition • Heritage",importance:"Laena strengthens the connection between the Velaryons and Targaryens and becomes part of Daemon’s family before the Dance fully erupts."},
  "hotd/characters/harwin-strong":{house:"Strong",role:"Commander of the City Watch",known:"Harwin Strong",faction:"BLACK",profile:"A powerful warrior and commander of the City Watch whose close relationship with Rhaenyra has major consequences for the royal family.",traits:"Strength • Loyalty • Secrecy • Protection",importance:"Harwin’s connection to Rhaenyra becomes one of the most sensitive personal issues surrounding the legitimacy of her children."},
  "hotd/characters/larys-strong":{house:"Strong",role:"Lord of Harrenhal",known:"Larys Strong",faction:"GREEN",profile:"The younger son of Lyonel Strong who builds influence through secrets, informants and carefully chosen acts of political violence.",traits:"Secrets • Ambition • Manipulation • Patience",importance:"Larys demonstrates how information and covert action can shape the succession crisis even without commanding a great army."},
  "hotd/characters/mysaria":{house:"None",role:"The White Worm",known:"Mysaria",faction:"OTHER",profile:"A former slave who builds an extensive network of informants in King’s Landing. Mysaria operates outside the great houses while becoming deeply connected to the politics of the capital.",traits:"Information • Survival • Independence • Strategy",importance:"Mysaria shows how people outside the noble families can still influence events through information and political networks."},
  "hotd/characters/vaemond-velaryon":{house:"Velaryon",role:"Velaryon Claimant",known:"Vaemond Velaryon",faction:"GREEN",profile:"A senior member of House Velaryon who challenges the succession of Rhaenyra’s sons to Driftmark. His dispute brings questions of inheritance and legitimacy directly before the royal court.",traits:"Pride • Lineage • Law • Ambition",importance:"Vaemond’s challenge exposes the tension between bloodline, political loyalty and the legal claims surrounding Driftmark."},
  "hotd/characters/ser-erryk-cargyll":{house:"Cargyll",role:"Kingsguard Knight",known:"Ser Erryk Cargyll",faction:"BLACK",profile:"One of the twin Cargyll brothers of the Kingsguard. Erryk ultimately sides with Rhaenyra after becoming disillusioned with the Green succession.",traits:"Honor • Loyalty • Duty • Conscience",importance:"Erryk illustrates how the civil war divides institutions that were expected to serve the crown rather than a faction."},
  "hotd/characters/ser-arryk-cargyll":{house:"Cargyll",role:"Kingsguard Knight",known:"Ser Arryk Cargyll",faction:"GREEN",profile:"Erryk’s twin brother, who remains aligned with Aegon II. The brothers’ opposing loyalties embody the personal cost of the Targaryen civil war.",traits:"Duty • Loyalty • Conflict • Brotherhood",importance:"Arryk’s story highlights how the Dance divides even families and sworn brothers who once served side by side."},
  "hotd/characters/hugh-hammer":{house:"None",role:"Dragonseed",known:"Hugh Hammer",faction:"BLACK",profile:"A common-born man of uncertain parentage who claims Targaryen blood and becomes a dragonrider during the Dance.",traits:"Ambition • Courage • Power • Uncertainty",importance:"Hugh demonstrates how the war expands the traditional boundaries of Targaryen power by allowing people of uncertain birth to become dragonriders."},
  "hotd/characters/ulf-the-white":{house:"None",role:"Dragonseed",known:"Ulf the White",faction:"BLACK",profile:"A common-born man who claims Targaryen ancestry and becomes a dragonrider after the call for dragonseeds.",traits:"Ambition • Opportunism • Heritage • Power",importance:"Ulf’s rise shows the political and military consequences of finding new riders for the many riderless dragons of the Targaryen dynasty."},
  "hotd/characters/addam-of-hull":{house:"Velaryon",role:"Dragonseed / Sailor",known:"Addam of Hull",faction:"BLACK",profile:"A skilled sailor from Hull who becomes a dragonrider and earns the trust of Rhaenyra’s faction. His rise is closely connected to the Velaryon family.",traits:"Loyalty • Skill • Courage • Humility",importance:"Addam becomes an example of a common-born dragonrider whose loyalty and ability earn him a place among the most important figures of the war."},
  "hotd/characters/alyn-of-hull":{house:"Velaryon",role:"Velaryon Sailor",known:"Alyn of Hull",faction:"BLACK",profile:"A talented sailor from Hull and brother of Addam whose service connects him to the powerful Velaryon naval tradition.",traits:"Seamanship • Loyalty • Family • Ambition",importance:"Alyn’s career demonstrates the continuing importance of House Velaryon’s fleet and the role of talented common-born sailors in its history."},

  "got/characters/stannis-baratheon":{house:"Baratheon",role:"Claimant to the Iron Throne",known:"Stannis Baratheon",profile:"A stern and uncompromising Baratheon who believes the law of succession gives him the strongest claim to the Iron Throne.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A stern and uncompromising Baratheon who believes the law of succession gives him the strongest claim to the Iron Throne. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/renly-baratheon":{house:"Baratheon",role:"King claimant",known:"Renly Baratheon",profile:"The youngest Baratheon brother, charismatic and politically popular, who builds a powerful coalition around his claim to the throne.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"The youngest Baratheon brother, charismatic and politically popular, who builds a powerful coalition around his claim to the throne. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/margaery-tyrell":{house:"None",role:"Queen of the Seven Kingdoms",known:"Margaery Tyrell",profile:"A politically astute Tyrell who understands court life, public image and the value of alliances in King’s Landing.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A politically astute Tyrell who understands court life, public image and the value of alliances in King’s Landing. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/olenna-tyrell":{house:"None",role:"Queen of Thorns",known:"Olenna Tyrell",profile:"The sharp-tongued matriarch of House Tyrell who uses experience, wit and family strategy to navigate royal politics.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"The sharp-tongued matriarch of House Tyrell who uses experience, wit and family strategy to navigate royal politics. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/bronn":{house:"None",role:"Sellsword / Knight",known:"Bronn",profile:"A practical fighter who turns skill with a sword into wealth and influence by choosing opportunities that reward his loyalty.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A practical fighter who turns skill with a sword into wealth and influence by choosing opportunities that reward his loyalty. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/ramsay-bolton":{house:"None",role:"Warden of the North",known:"Ramsay Bolton",profile:"A ruthless Bolton who uses fear and cruelty to seize control in the North during the struggle for Winterfell.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A ruthless Bolton who uses fear and cruelty to seize control in the North during the struggle for Winterfell. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/ygritte":{house:"None",role:"Free Folk warrior",known:"Ygritte",profile:"A fierce Free Folk archer whose relationship with Jon Snow gives him a personal connection to the people beyond the Wall.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A fierce Free Folk archer whose relationship with Jon Snow gives him a personal connection to the people beyond the Wall. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/gilly":{house:"None",role:"Craster’s daughter / Survivor",known:"Gilly",profile:"A young woman who escapes Craster’s abusive household and becomes an important companion to Samwell Tarly.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A young woman who escapes Craster’s abusive household and becomes an important companion to Samwell Tarly. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/beric-dondarrion":{house:"None",role:"Lord / Brotherhood leader",known:"Beric Dondarrion",profile:"A knight repeatedly returned to life who leads the Brotherhood Without Banners and becomes part of the fight against the dead.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A knight repeatedly returned to life who leads the Brotherhood Without Banners and becomes part of the fight against the dead. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/thoros-of-myr":{house:"None",role:"Red Priest",known:"Thoros of Myr",profile:"A former warrior-priest whose faith and ability to revive the dead make him an important member of the Brotherhood.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A former warrior-priest whose faith and ability to revive the dead make him an important member of the Brotherhood. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/daario-naharis":{house:"None",role:"Mercenary captain",known:"Daario Naharis",profile:"A charismatic sellsword who joins Daenerys in Slaver’s Bay and becomes one of her trusted military commanders.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A charismatic sellsword who joins Daenerys in Slaver’s Bay and becomes one of her trusted military commanders. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/khal-drogo":{house:"Targaryen",role:"Dothraki khal",known:"Khal Drogo",profile:"A powerful Dothraki warlord whose marriage to Daenerys changes her position and begins a chain of events leading to the birth of her dragons.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A powerful Dothraki warlord whose marriage to Daenerys changes her position and begins a chain of events leading to the birth of her dragons. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/alys-rivers":{house:"None",role:"Healer / Mystic of Harrenhal",known:"Alys Rivers",profile:"A mysterious woman at Harrenhal who becomes closely connected to Daemon Targaryen and the supernatural atmosphere surrounding the castle.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A mysterious woman at Harrenhal who becomes closely connected to Daemon Targaryen and the supernatural atmosphere surrounding the castle. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/simon-strong":{house:"None",role:"Castellan of Harrenhal",known:"Simon Strong",profile:"The aging castellan of Harrenhal who must survive the shifting loyalties and dangers brought to the castle during the Dance.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"The aging castellan of Harrenhal who must survive the shifting loyalties and dangers brought to the castle during the Dance. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/oscar-tully":{house:"None",role:"Lord of Riverrun",known:"Oscar Tully",faction:"BLACK",profile:"A young Tully who inherits leadership during the Dance and is forced to make difficult decisions as the Riverlands become a major battlefield.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A young Tully who inherits leadership during the Dance and is forced to make difficult decisions as the Riverlands become a major battlefield. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/cregan-stark":{house:"Stark",role:"Lord of Winterfell",known:"Cregan Stark",faction:"BLACK",profile:"The powerful Lord of Winterfell whose arrival near the end of the Dance brings northern strength and a strong sense of duty to the conflict.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"The powerful Lord of Winterfell whose arrival near the end of the Dance brings northern strength and a strong sense of duty to the conflict. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/dalton-greyjoy":{house:"None",role:"Lord Reaper of Pyke",known:"Dalton Greyjoy",profile:"A young and aggressive Greyjoy lord whose naval raids add another dimension to the wider turmoil of the Dance.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A young and aggressive Greyjoy lord whose naval raids add another dimension to the wider turmoil of the Dance. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/jason-lannister":{house:"Lannister",role:"Lord of Casterly Rock",known:"Jason Lannister",faction:"GREEN",profile:"A proud Lannister lord who supports the Green cause and seeks military influence during the succession crisis.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A proud Lannister lord who supports the Green cause and seeks military influence during the succession crisis. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/tyland-lannister":{house:"Lannister",role:"Master of Ships / Master of Coin",known:"Tyland Lannister",faction:"GREEN",profile:"A Lannister statesman who serves the royal government and becomes involved in the Greens’ wartime administration.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A Lannister statesman who serves the royal government and becomes involved in the Greens’ wartime administration. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/jasper-wylde":{house:"None",role:"Master of Laws",known:"Jasper Wylde",faction:"GREEN",profile:"A member of Viserys’s Small Council who becomes a prominent supporter of the Green government after the succession crisis.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A member of Viserys’s Small Council who becomes a prominent supporter of the Green government after the succession crisis. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/lyman-beesbury":{house:"None",role:"Master of Coin",known:"Lyman Beesbury",faction:"BLACK",profile:"An elderly councillor who supports Rhaenyra’s succession and openly challenges the decision to crown Aegon.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"An elderly councillor who supports Rhaenyra’s succession and openly challenges the decision to crown Aegon. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/mellos":{house:"None",role:"Grand Maester",known:"Mellos",faction:"GREEN",profile:"A senior maester of the royal court whose medical and political advice reflects the difficult role of the Citadel during the Targaryen civil war.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A senior maester of the royal court whose medical and political advice reflects the difficult role of the Citadel during the Targaryen civil war. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/forrest-frey":{house:"None",role:"Lord of the Crossing",known:"Forrest Frey",profile:"A member of House Frey whose family controls the strategically important crossings of the Trident during the Dance.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A member of House Frey whose family controls the strategically important crossings of the Trident during the Dance. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/benjicot-blackwood":{house:"None",role:"Lord of Raventree Hall",known:"Benjicot-Blackwood",faction:"BLACK",profile:"A young Blackwood commander who becomes an important Riverlands supporter of Rhaenyra and a rival of House Bracken.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A young Blackwood commander who becomes an important Riverlands supporter of Rhaenyra and a rival of House Bracken. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/tywin-lannister":{house:"Lannister",role:"Hand of the King / Lord of Casterly Rock",known:"Tywin Lannister",profile:"A formidable Lannister patriarch who combines political calculation, military authority and family ambition to shape the wars around the Iron Throne.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A formidable Lannister patriarch who combines political calculation, military authority and family ambition to shape the wars around the Iron Throne. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/loras-tyrell":{house:"Lannister",role:"Knight of the Kingsguard",known:"Loras Tyrell",profile:"A renowned Tyrell knight whose skill in tournaments and battle makes him an important member of his family\u2019s political network.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A renowned Tyrell knight whose skill in tournaments and battle makes him an important member of his family\u2019s political network. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/garlan-tyrell":{house:"Lannister",role:"Lord of Brightwater Keep",known:"Garlan Tyrell",profile:"A capable Tyrell warrior and older brother of Loras and Margaery who contributes military strength to House Tyrell.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A capable Tyrell warrior and older brother of Loras and Margaery who contributes military strength to House Tyrell. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/hodor":{house:"Lannister",role:"Stablehand of Winterfell",known:"Hodor",profile:"A gentle giant from Winterfell whose loyalty to Bran makes him an important companion during the journey beyond the Wall.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A gentle giant from Winterfell whose loyalty to Bran makes him an important companion during the journey beyond the Wall. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/jaqen-h-ghar":{house:"Lannister",role:"Faceless Man",known:"Jaqen H\u2019ghar",profile:"A mysterious assassin who introduces Arya to the Faceless Men and their demanding philosophy of identity and death.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A mysterious assassin who introduces Arya to the Faceless Men and their demanding philosophy of identity and death. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/syrio-forel":{house:"Lannister",role:"First Sword of Braavos",known:"Syrio Forel",profile:"Arya\u2019s fencing instructor in King\u2019s Landing who teaches her to see combat as a discipline of movement, awareness and patience.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Arya\u2019s fencing instructor in King\u2019s Landing who teaches her to see combat as a discipline of movement, awareness and patience. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/roose-bolton":{house:"Lannister",role:"Lord of the Dreadfort",known:"Roose Bolton",profile:"A calculating northern lord whose quiet manner hides a willingness to change allegiance when it benefits House Bolton.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A calculating northern lord whose quiet manner hides a willingness to change allegiance when it benefits House Bolton. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/walder-frey":{house:"Lannister",role:"Lord of the Crossing",known:"Walder Frey",profile:"The elderly lord of the Twins whose control of the crossings gives House Frey significant leverage during the War of the Five Kings.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"The elderly lord of the Twins whose control of the crossings gives House Frey significant leverage during the War of the Five Kings. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/qyburn":{house:"Lannister",role:"Former Maester / Royal adviser",known:"Qyburn",profile:"A disgraced former maester who uses unconventional experiments and political service to regain influence in King\u2019s Landing.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A disgraced former maester who uses unconventional experiments and political service to regain influence in King\u2019s Landing. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/mace-tyrell":{house:"Lannister",role:"Lord of Highgarden",known:"Mace Tyrell",profile:"The head of House Tyrell during the later wars, balancing family interests, royal alliances and the military power of the Reach.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"The head of House Tyrell during the later wars, balancing family interests, royal alliances and the military power of the Reach. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/lyonel-strong":{house:"Various",role:"Master of Laws / Hand of the King",known:"Lyonel Strong",profile:"A respected lord and Hand of the King whose service is closely tied to Viserys\u2019s court and the fortunes of House Strong.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A respected lord and Hand of the King whose service is closely tied to Viserys\u2019s court and the fortunes of House Strong. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/harrold-westerling":{house:"Various",role:"Lord Commander of the Kingsguard",known:"Harrold Westerling",profile:"A veteran Kingsguard knight who serves the royal family during the early succession crisis and represents the old guard of the crown.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A veteran Kingsguard knight who serves the royal family during the early succession crisis and represents the old guard of the crown. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/joffrey-lonmouth":{house:"Various",role:"Knight / Companion of Laenor Velaryon",known:"Joffrey Lonmouth",profile:"A knight closely associated with Laenor Velaryon whose presence becomes part of the complicated relationships surrounding the Velaryon marriage.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A knight closely associated with Laenor Velaryon whose presence becomes part of the complicated relationships surrounding the Velaryon marriage. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/borros-baratheon":{house:"Various",role:"Lord of Storm\u2019s End",known:"Borros Baratheon",profile:"The Baratheon lord whose decision over Rhaenyra and Aegon\u2019s competing claims becomes important to the wider war.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"The Baratheon lord whose decision over Rhaenyra and Aegon\u2019s competing claims becomes important to the wider war. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/orwyle":{house:"Various",role:"Grand Maester",known:"Orwyle",profile:"A senior maester who serves the royal court and becomes involved in the Greens\u2019 government during the Dance.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A senior maester who serves the royal court and becomes involved in the Greens\u2019 government during the Dance. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/rickard-thorne":{house:"Various",role:"Kingsguard knight",known:"Rickard Thorne",profile:"A Kingsguard officer whose duties place him directly inside the dangerous royal succession struggle.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A Kingsguard officer whose duties place him directly inside the dangerous royal succession struggle. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/lorent-marbrand":{house:"Various",role:"Kingsguard knight",known:"Lorent Marbrand",profile:"A sworn sword of the Kingsguard whose service reflects the military and political pressures surrounding the royal family.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A sworn sword of the Kingsguard whose service reflects the military and political pressures surrounding the royal family. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/steffon-darklyn":{house:"Various",role:"Kingsguard knight",known:"Steffon Darklyn",profile:"A knight whose allegiance shifts toward Rhaenyra and whose service connects the Kingsguard to the Black cause.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A knight whose allegiance shifts toward Rhaenyra and whose service connects the Kingsguard to the Black cause. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/erryk-cargyll":{house:"Various",role:"Kingsguard knight",known:"Erryk Cargyll",profile:"A Kingsguard twin whose loyalty places him on Rhaenyra\u2019s side after the succession crisis divides the royal household.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A Kingsguard twin whose loyalty places him on Rhaenyra\u2019s side after the succession crisis divides the royal household. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/arryk-cargyll":{house:"Various",role:"Kingsguard knight",known:"Arryk Cargyll",profile:"Erryk\u2019s twin brother, whose service to Aegon places the brothers on opposite sides of the Dance.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Erryk\u2019s twin brother, whose service to Aegon places the brothers on opposite sides of the Dance. This character adds another perspective to the political, military, or personal history of the era."},

  "got/characters/podrick-payne":{house:"Various",role:"Squire to Tyrion / Knight",known:"Podrick Payne",profile:"A loyal young squire who grows from an uncertain servant into a capable and dependable fighter.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Podrick’s quiet loyalty and growth show how ordinary people can become important companions in the wars of Westeros."},
  "got/characters/shae":{house:"Various",role:"Companion of Tyrion Lannister",known:"Shae",profile:"A woman whose relationship with Tyrion becomes entangled with court politics, secrecy, jealousy and survival.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Shae’s story shows the personal risks created when private relationships become exposed to the ruthless politics of King’s Landing."},
  "got/characters/jeor-mormont":{house:"Various",role:"Lord Commander of the Night’s Watch",known:"Jeor Mormont",profile:"The veteran Lord Commander who recognizes the growing danger beyond the Wall and prepares the Watch for a threat few in the south understand.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Jeor gives Jon a model of duty and leadership while pushing the Night’s Watch toward confronting the rising supernatural threat."},
  "got/characters/alliser-thorne":{house:"Various",role:"Master-at-Arms of the Night’s Watch",known:"Alliser Thorne",profile:"A stern and antagonistic officer at Castle Black whose distrust of Jon creates repeated conflict inside the Night’s Watch.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Thorne represents the internal divisions of the Watch at a time when unity is increasingly necessary."},
  "got/characters/balon-greyjoy":{house:"Various",role:"Lord of the Iron Islands",known:"Balon Greyjoy",profile:"The stubborn ruler of the Iron Islands who seeks independence for the Greyjoys and launches his own campaign during the War of the Five Kings.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Balon opens another front in the wider war and establishes the political ambitions of the Greyjoy family."},
  "got/characters/euron-greyjoy":{house:"Various",role:"King of the Iron Islands",known:"Euron Greyjoy",profile:"A ruthless Greyjoy who returns from exile and uses ambition, violence and political manipulation to seize control of the Iron Islands.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Euron becomes a major naval and political force late in the conflict, changing the balance around the Iron Throne."},
  "got/characters/yara-greyjoy":{house:"Various",role:"Captain / Heir of the Iron Islands",known:"Yara Greyjoy",profile:"A skilled sailor and warrior who challenges the traditional expectations placed on the Greyjoy heir and fights for her family’s future.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Yara provides the Greyjoy story with a determined leader whose loyalty survives repeated political upheaval."},
  "got/characters/tommen-baratheon":{house:"Various",role:"King of the Seven Kingdoms",known:"Tommen Baratheon",profile:"A young king placed on the throne while stronger political figures around him compete for influence over the realm.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Tommen illustrates how the crown can belong to a child while the real struggle for power happens around him."},
  "got/characters/myrcella-baratheon":{house:"Various",role:"Princess of the Seven Kingdoms",known:"Myrcella Baratheon",profile:"A princess caught between the politics of King’s Landing and the Martell court after being sent to Dorne as part of a political arrangement.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Myrcella’s story connects the royal family to Dorne and demonstrates the personal cost of political alliances."},
  "got/characters/the-night-king":{house:"White Walkers",role:"Leader of the White Walkers",known:"The Night King",profile:"The supernatural leader of the army of the dead, whose advance turns the long-dismissed threat beyond the Wall into an existential war.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"The Night King transforms the story from a struggle for political power into a fight for the survival of the living."},
  "hotd/characters/aegon-the-younger":{house:"Various",role:"Prince / Son of Rhaenyra",known:"Aegon the Younger",profile:"A young Targaryen prince whose family becomes central to the succession struggle and the survival of Rhaenyra’s line.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Aegon’s place in the Targaryen succession connects the Dance to the dynasty that follows the civil war."},
  "hotd/characters/viserys-targaryen":{house:"Various",role:"Prince / Son of Rhaenyra",known:"Viserys Targaryen",faction:"BLACK",profile:"Rhaenyra’s younger son whose separation from his family during the war becomes part of the uncertainty surrounding the Targaryen succession.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Viserys represents the vulnerability of the royal children whose futures are shaped by the civil war."},
  "hotd/characters/jeyne-arryn":{house:"Various",role:"Lady of the Eyrie",known:"Jeyne Arryn",faction:"BLACK",profile:"The powerful ruler of the Vale who must decide how the Arryns will respond to the competing Targaryen claims.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Jeyne demonstrates the importance of regional rulers whose support can determine the strength of either faction."},
  "hotd/characters/rhaena-targaryen":{house:"Various",role:"Princess / Dragonkeeper",known:"Rhaena Targaryen",faction:"BLACK",profile:"A young Targaryen princess whose life is shaped by her family’s losses and the struggle to preserve the dynasty.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Rhaena provides a personal view of the cost of the Dance for the younger generation of Targaryens."},
};
const CHARACTER_RELATIONS={
 "got/characters/jon-snow":[['Arya Stark','Character','got/characters.html#arya-stark'],['Sansa Stark','Character','got/characters.html#sansa-stark'],['Bran Stark','Character','got/characters.html#bran-stark'],['Daenerys Targaryen','Character','got/characters.html#daenerys-targaryen'],['Rhaegal','Dragon','got/dragons.html#rhaegal'],['House Stark','House','got/houses.html#stark'],['Winterfell','Location','got/cities.html#winterfell']],
 "got/characters/daenerys-targaryen":[['Jon Snow','Character','got/characters.html#jon-snow'],['Tyrion Lannister','Character','got/characters.html#tyrion-lannister'],['Cersei Lannister','Character','got/characters.html#cersei-lannister'],['Drogon','Dragon','got/dragons.html#drogon'],['Rhaegal','Dragon','got/dragons.html#rhaegal'],['Viserion','Dragon','got/dragons.html#viserion'],['House Targaryen','House','got/houses.html#targaryen'],['King’s Landing','Location','got/cities.html#kings-landing']],
 "got/characters/tyrion-lannister":[['Cersei Lannister','Character','got/characters.html#cersei-lannister'],['Jaime Lannister','Character','got/characters.html#jaime-lannister'],['Daenerys Targaryen','Character','got/characters.html#daenerys-targaryen'],['Jon Snow','Character','got/characters.html#jon-snow'],['House Lannister','House','got/houses.html#lannister'],['King’s Landing','Location','got/cities.html#kings-landing']],
 "got/characters/arya-stark":[['Jon Snow','Character','got/characters.html#jon-snow'],['Sansa Stark','Character','got/characters.html#sansa-stark'],['Bran Stark','Character','got/characters.html#bran-stark'],['Cersei Lannister','Character','got/characters.html#cersei-lannister'],['House Stark','House','got/houses.html#stark'],['Winterfell','Location','got/cities.html#winterfell']],
 "got/characters/sansa-stark":[['Jon Snow','Character','got/characters.html#jon-snow'],['Arya Stark','Character','got/characters.html#arya-stark'],['Bran Stark','Character','got/characters.html#bran-stark'],['Petyr Baelish','Character','got/characters.html#petyr-baelish'],['House Stark','House','got/houses.html#stark'],['Winterfell','Location','got/cities.html#winterfell']],
 "got/characters/cersei-lannister":[['Jaime Lannister','Character','got/characters.html#jaime-lannister'],['Tyrion Lannister','Character','got/characters.html#tyrion-lannister'],['Sansa Stark','Character','got/characters.html#sansa-stark'],['Daenerys Targaryen','Character','got/characters.html#daenerys-targaryen'],['House Lannister','House','got/houses.html#lannister'],['King’s Landing','Location','got/cities.html#kings-landing']],
 "got/characters/jaime-lannister":[['Cersei Lannister','Character','got/characters.html#cersei-lannister'],['Tyrion Lannister','Character','got/characters.html#tyrion-lannister'],['Brienne of Tarth','Character','got/characters.html#brienne-of-tarth'],['Jon Snow','Character','got/characters.html#jon-snow'],['House Lannister','House','got/houses.html#lannister'],['King’s Landing','Location','got/cities.html#kings-landing']],
 "got/characters/bran-stark":[['Jon Snow','Character','got/characters.html#jon-snow'],['Arya Stark','Character','got/characters.html#arya-stark'],['Sansa Stark','Character','got/characters.html#sansa-stark'],['Theon Greyjoy','Character','got/characters.html#theon-greyjoy'],['House Stark','House','got/houses.html#stark'],['Winterfell','Location','got/cities.html#winterfell']],
 "hotd/characters/rhaenyra-targaryen":[['Daemon Targaryen','Character','characters.html#daemon-targaryen'],['King Viserys I','Character','characters.html#king-viserys-i'],['Alicent Hightower','Character','characters.html#alicent-hightower'],['Jacaerys Velaryon','Character','characters.html#jacaerys-velaryon'],['Rhaenys Targaryen','Character','characters.html#rhaenys-targaryen'],['Syrax','Dragon','dragons.html#syrax'],['House Targaryen','House','houses.html#targaryen']],
 "hotd/characters/daemon-targaryen":[['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['King Viserys I','Character','characters.html#king-viserys-i'],['Alicent Hightower','Character','characters.html#alicent-hightower'],['Corlys Velaryon','Character','characters.html#corlys-velaryon'],['Aemond Targaryen','Character','characters.html#aemond-targaryen'],['Caraxes','Dragon','dragons.html#caraxes'],['House Targaryen','House','houses.html#targaryen']],
 "hotd/characters/king-viserys-i":[['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['Daemon Targaryen','Character','characters.html#daemon-targaryen'],['Alicent Hightower','Character','characters.html#alicent-hightower'],['Aegon II Targaryen','Character','characters.html#aegon-ii-targaryen'],['Otto Hightower','Character','characters.html#otto-hightower'],['House Targaryen','House','houses.html#targaryen'],['King’s Landing','Location','cities.html#kings-landing']],
 "hotd/characters/alicent-hightower":[['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['Otto Hightower','Character','characters.html#otto-hightower'],['Aegon II Targaryen','Character','characters.html#aegon-ii-targaryen'],['Aemond Targaryen','Character','characters.html#aemond-targaryen'],['Helaena Targaryen','Character','characters.html#helaena-targaryen'],['House Hightower','House','houses.html#hightower'],['Oldtown','Location','cities.html#oldtown']],
 "hotd/characters/aegon-ii-targaryen":[['Alicent Hightower','Character','characters.html#alicent-hightower'],['Aemond Targaryen','Character','characters.html#aemond-targaryen'],['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['King Viserys I','Character','characters.html#king-viserys-i'],['Helaena Targaryen','Character','characters.html#helaena-targaryen'],['Sunfyre','Dragon','dragons.html#sunfyre'],['House Targaryen','House','houses.html#targaryen']],
 "hotd/characters/aemond-targaryen":[['Aegon II Targaryen','Character','characters.html#aegon-ii-targaryen'],['Alicent Hightower','Character','characters.html#alicent-hightower'],['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['Daemon Targaryen','Character','characters.html#daemon-targaryen'],['Lucerys Velaryon','Character','characters.html#lucerys-velaryon'],['Vhagar','Dragon','dragons.html#vhagar'],['House Targaryen','House','houses.html#targaryen']],
 "hotd/characters/otto-hightower":[['Alicent Hightower','Character','characters.html#alicent-hightower'],['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['King Viserys I','Character','characters.html#king-viserys-i'],['Aegon II Targaryen','Character','characters.html#aegon-ii-targaryen'],['Daemon Targaryen','Character','characters.html#daemon-targaryen'],['House Hightower','House','houses.html#hightower'],['Oldtown','Location','cities.html#oldtown']],
 "hotd/characters/corlys-velaryon":[['Rhaenys Targaryen','Character','characters.html#rhaenys-targaryen'],['Laena Velaryon','Character','characters.html#laena-velaryon'],['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['Daemon Targaryen','Character','characters.html#daemon-targaryen'],['Jacaerys Velaryon','Character','characters.html#jacaerys-velaryon'],['House Velaryon','House','houses.html#velaryon'],['Driftmark','Location','cities.html#driftmark']],
 "hotd/characters/rhaenys-targaryen":[['Corlys Velaryon','Character','characters.html#corlys-velaryon'],['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['Daemon Targaryen','Character','characters.html#daemon-targaryen'],['Laena Velaryon','Character','characters.html#laena-velaryon'],['House Velaryon','House','houses.html#velaryon'],['Meleys','Dragon','dragons.html#meleys'],['Driftmark','Location','cities.html#driftmark']],
 "hotd/characters/criston-cole":[['Alicent Hightower','Character','characters.html#alicent-hightower'],['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['Daemon Targaryen','Character','characters.html#daemon-targaryen'],['Aegon II Targaryen','Character','characters.html#aegon-ii-targaryen'],['Otto Hightower','Character','characters.html#otto-hightower'],['House Hightower','House','houses.html#hightower'],['King’s Landing','Location','cities.html#kings-landing']]
};
const CHARACTER_RELATIONSHIP_TYPES={
 'jon snow|arya stark':'SIBLINGS','jon snow|sansa stark':'SIBLINGS','jon snow|bran stark':'SIBLINGS','jon snow|daenerys targaryen':'ALLIES • ROMANCE',
 'daenerys targaryen|jon snow':'ALLIES • ROMANCE','daenerys targaryen|tyrion lannister':'ADVISOR • ALLY','daenerys targaryen|cersei lannister':'RIVALS',
 'tyrion lannister|cersei lannister':'SIBLINGS • RIVALS','tyrion lannister|jaime lannister':'SIBLINGS','tyrion lannister|daenerys targaryen':'ADVISOR • ALLY','tyrion lannister|jon snow':'ALLIES',
 'arya stark|sansa stark':'SIBLINGS','arya stark|bran stark':'SIBLINGS','sansa stark|bran stark':'SIBLINGS','sansa stark|jon snow':'SIBLINGS',
 'cersei lannister|jaime lannister':'TWINS • LOVERS','jaime lannister|cersei lannister':'TWINS • LOVERS','jaime lannister|tyrion lannister':'SIBLINGS',
 'bran stark|jon snow':'SIBLINGS','bran stark|arya stark':'SIBLINGS',
 'rhaenyra targaryen|daemon targaryen':'SPOUSES • ALLIES','rhaenyra targaryen|king viserys i':'FATHER • DAUGHTER','rhaenyra targaryen|alicent hightower':'FORMER FRIENDS • RIVALS','rhaenyra targaryen|aegon ii targaryen':'RIVAL CLAIMANTS','rhaenyra targaryen|aemond targaryen':'FAMILY • RIVALS',
 'daemon targaryen|king viserys i':'BROTHERS','daemon targaryen|rhaenyra targaryen':'SPOUSES • ALLIES','daemon targaryen|aemond targaryen':'FAMILY • ALLIES',
 'king viserys i|rhaenyra targaryen':'FATHER • DAUGHTER','king viserys i|daemon targaryen':'BROTHERS','king viserys i|alicent hightower':'SPOUSES',
 'alicent hightower|rhaenyra targaryen':'FORMER FRIENDS • RIVALS','alicent hightower|aegon ii targaryen':'MOTHER • SON','alicent hightower|otto hightower':'FATHER • DAUGHTER',
 'aegon ii targaryen|aemond targaryen':'BROTHERS','aegon ii targaryen|otto hightower':'GRANDFATHER • GRANDSON','aemond targaryen|rhaenyra targaryen':'FAMILY • RIVALS',
 'otto hightower|aegon ii targaryen':'GRANDFATHER • GRANDSON','otto hightower|rhaenyra targaryen':'POLITICAL RIVALS','otto hightower|alicent hightower':'FATHER • DAUGHTER',
 'corlys velaryon|rhaenys targaryen':'SPOUSES','corlys velaryon|rhaenyra targaryen':'ALLIES','rhaenys targaryen|rhaenyra targaryen':'FAMILY • ALLIES',
 'criston cole|alicent hightower':'ALLIES','criston cole|rhaenyra targaryen':'FORMER LOVERS • RIVALS','criston cole|daemon targaryen':'RIVALS','criston cole|aegon ii targaryen':'ALLIES'
};
const relationshipType=(from,to)=>{
 const a=normalize(from),b=normalize(to);
 return CHARACTER_RELATIONSHIP_TYPES[`${a}|${b}`] || CHARACTER_RELATIONSHIP_TYPES[`${b}|${a}`] || 'CONNECTED';
};
const characterRelationshipsHTML=(key,currentEra)=>{
 const eraPrefix=currentEra==='hotd'?'hotd':'got';
 const items=(CHARACTER_RELATIONS[key]||[]).filter(([name,type])=>type==='Character' && !!CHARACTER_PROFILES[`${eraPrefix}/characters/${normalize(name)}`]);
 if(!items.length)return '';
 const slug=s=>normalize(s);
 const file='characters.html';
 return `<section class="detail-section character-relationships-section"><div class="character-relationships-head"><div><span class="detail-section-label">Character Network</span><h3>Character Relationships</h3></div><span class="character-relationships-count">${items.length} CONNECTION${items.length===1?'':'S'}</span></div><p class="character-relationships-intro">Key personal, family, political, and rival connections for ${escapeHTML(key.split('/').pop().replace(/-/g,' '))}.</p><div class="character-relationships-grid">${items.map(([name])=>{const target=`character-${slug(name)}`;const href=`${file}?open=${encodeURIComponent(target)}`;return `<a class="character-relationship-card" href="${escapeHTML(href)}"><span class="character-relationship-type">${escapeHTML(relationshipType(key.split('/').pop(),name))}</span><b>${escapeHTML(name)}</b><em>VIEW CHARACTER →</em></a>`;}).join('')}</div></section>`;
};
const relatedHTML=(key,currentEra)=>{
 const allItems=CHARACTER_RELATIONS[key]||[];
 if(!allItems.length)return '';
 const slug=s=>normalize(s);
 const relationshipNames=new Set(allItems.filter(([,type])=>type==='Character').map(([name])=>slug(name)));
 const items=allItems.filter(([name,type])=>type!=='Character' || !relationshipNames.has(slug(name)));
 if(!items.length)return '';
 const localUrl=(name,type)=>{
   const era=currentEra==='hotd'?'hotd':'got';
   const file=type==='Character'?'characters.html':type==='House'?'houses.html':type==='Dragon'?'dragons.html':type==='Location'?'cities.html':'';
   if(!file)return '#';
   const targetId=type==='House'
     ? `house-house-${slug(String(name).replace(/^house\s+/i,''))}`
     : `${type==='Character'?'character-':type==='Dragon'?'dragon-':'city-'}${slug(name)}`;
   return `${file}?open=${encodeURIComponent(targetId)}`;
 };
 const validItems=items.filter(([name,type])=>{
   if(type!=='Character') return true;
   return !!CHARACTER_PROFILES[`${currentEra==='hotd'?'hotd':'got'}/characters/${slug(name)}`];
 });
 if(!validItems.length)return '';
 return `<section class="detail-section related-content-section"><h3>Related Content</h3><p class="related-content-intro">Explore houses, dragons, places, and other archive connections to ${escapeHTML(key.split('/').pop().replace(/-/g,' '))}. Character-to-character connections are shown separately above.</p><div class="related-content-grid">${validItems.map(([name,type])=>`<a class="related-content-card" href="${escapeHTML(localUrl(name,type))}"><span>${escapeHTML(type)}</span><b>${escapeHTML(name)}</b><em>EXPLORE →</em></a>`).join('')}</div></section>`;
};
const makeCharacterModal=(profile,detail,title,clone,img,section,era)=>{
  const role=profile?.role || clone.querySelector('.char-title')?.textContent?.trim() || 'Character';
  const house=profile?.house || 'Westeros';
  const faction=profile?.faction || '';
  const description=profile?.profile || detail?.description || '';
  const traits=profile?.traits || 'Leadership • Loyalty • Strategy • Survival';
  const importance=profile?.importance || description;
  const imageHTML=img ? `<div class="detail-image-wrap"><img src="${escapeHTML(img.getAttribute('src'))}" alt="${escapeHTML(img.getAttribute('alt')||title)}" loading="lazy" decoding="async"></div>` : '';
  return `<div class="detail-layout character-detail-layout"><div class="detail-media-column character-detail-media">${imageHTML}<div class="detail-media-caption"><span>${escapeHTML(house)}</span><b>CHARACTER ARCHIVE</b></div></div><div class="detail-info character-detail-info"><div class="character-detail-scroll"><div class="character-profile-head"><span class="detail-kicker">${escapeHTML(section)}${faction?` · ${escapeHTML(faction)}`:''}</span><h2>${escapeHTML(title)}</h2><p class="character-role">${escapeHTML(role)}</p><div class="detail-divider"></div><div class="character-meta"><div><b>HOUSE</b><span>${escapeHTML(house)}</span></div><div><b>KNOWN AS</b><span>${escapeHTML(profile?.known||title)}</span></div><div><b>ROLE</b><span>${escapeHTML(role)}</span></div>${faction?`<div><b>FACTION</b><span>${escapeHTML(faction)}</span></div>`:''}</div></div><div class="character-detail-sections"><section class="detail-section"><h3>Biography</h3><p>${escapeHTML(description)}</p></section><section class="detail-section"><h3>Key Characteristics</h3><p>${escapeHTML(traits)}</p></section><section class="detail-section"><h3>Story Importance</h3><p>${escapeHTML(importance)}</p></section>${characterRelationshipsHTML(`${era}/characters/${normalize(title)}`,era)}${relatedHTML(`${era}/characters/${normalize(title)}`,era)}</div></div></div></div>`;
};
const makeSections=(detail,page,title,clone)=>{
   const raw=detail?.description || clone.querySelector('p,.lore,.city-card-content')?.innerText?.trim() || clone.innerText.trim();
   const parts=raw.split(/(?<=[.!?])\s+/).filter(Boolean);
   let story=parts.slice(0, Math.max(2, Math.ceil(parts.length*.55))).join(' ');
   let impact=parts.slice(Math.max(2, Math.ceil(parts.length*.55))).join(' ') || raw;
   let labels=['The Story','Why It Matters'];
   if(page==='chronicle'){labels=['What Happened','Historical Impact'];}
   if(page==='storyline'){labels=['Story Arc','Turning Point'];}
   if(detail?.why){impact=detail.why;}
   const extra=detail?.takeaway || '';
   return `<section class="detail-section"><h3>${labels[0]}</h3><p>${escapeHTML(story)}</p></section><section class="detail-section"><h3>${labels[1]}</h3><p>${escapeHTML(impact)}</p></section>${extra?`<section class="detail-section detail-takeaway"><h3>Remember This</h3><p>${escapeHTML(extra)}</p></section>`:''}`;
 };
 const openCard=card=>{
   detailTrigger=card;
   const {era,page}=pageInfo();
   const title=cardTitle(card);
   const detail=DETAILS[`${era}/${page}/${normalize(title)}`] || STORYLINE_DETAILS[`${era}/${page}/${normalize(title)}`];
   const clone=card.cloneNode(true);
   clone.removeAttribute('data-search-item');
   clone.classList.remove('tilt-card','flip-card','flipped','unified-card');
   clone.querySelectorAll('[data-profile],.profile-trigger,.flip-hint,.card-detail-hint').forEach(x=>x.remove());
   clone.querySelectorAll('.tilt-card-inner').forEach(x=>x.style.transform='none');
   const img=clone.querySelector('img');
   const finalTitle=detail ? title : (clone.querySelector('h1,h2,h3,h4')?.textContent?.trim() || title);
   const section=detail?.section || (page==='chronicle'?'Chronicle':page==='storyline'?'Storyline':'Westeros Archive');
   const image=img ? `<div class="detail-image-wrap"><img src="${escapeHTML(img.getAttribute('src'))}" alt="${escapeHTML(img.getAttribute('alt')||finalTitle)}" loading="lazy" decoding="async"></div>` : '';
   const characterProfile=page==='characters' ? CHARACTER_PROFILES[`${era}/${page}/${normalize(title)}`] : null;
   content.innerHTML=characterProfile ? makeCharacterModal(characterProfile,detail,finalTitle,clone,img,section,era) : `<div class="detail-layout"><div class="detail-media-column">${image}<div class="detail-media-caption"><span>${escapeHTML(section)}</span><b>ARCHIVE ENTRY</b></div></div><div class="detail-info"><span class="detail-kicker">${escapeHTML(section)}</span><h2 id="detailModalTitle">${escapeHTML(finalTitle)}</h2><div class="detail-divider"></div><div class="detail-copy">${makeSections(detail,page,finalTitle,clone)}</div></div></div>`;
   const heading=content.querySelector('h2,h1,h3'); if(heading){heading.id='detailModalTitle';modal.querySelector('.detail-dialog')?.setAttribute('aria-labelledby','detailModalTitle');}
   // Reset every relevant scroll container so each archive entry opens from the top.
   content.scrollTop=0;
   modal.scrollTop=0;
   const dialog=modal.querySelector('.detail-dialog');
   if(dialog) dialog.scrollTop=0;
   modal.hidden=false; modal.setAttribute('aria-hidden','false');
   document.body.classList.add('detail-open');
   requestAnimationFrame(()=>{ content.scrollTop=0; modal.scrollTop=0; if(dialog) dialog.scrollTop=0; modal.classList.add('open'); modal.querySelector('.detail-close')?.focus(); });
 };
 window.__westerosOpenCityCard=openCard;
 cards.forEach(card=>{
   if(!card.hasAttribute('tabindex'))card.setAttribute('tabindex','0');
   if(!card.hasAttribute('role'))card.setAttribute('role','button');
   if(!card.getAttribute('aria-label'))card.setAttribute('aria-label',`Open ${cardTitle(card)}`);
   card.addEventListener('click',e=>{
     if(e.target.closest('a,button'))return;
     e.preventDefault(); e.stopPropagation(); openCard(card);
   });
   card.addEventListener('keydown',e=>{
     if(e.target.closest('a,button'))return;
     if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopPropagation();openCard(card);}
   });
 });
 modal.querySelector('.detail-close')?.addEventListener('click',close);
 modal.querySelector('.detail-backdrop')?.addEventListener('click',close);
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))close();trapDetailFocus(e);});
 const openTargetById=id=>{
   if(!id)return false;
   const clean=decodeURIComponent(String(id).replace(/^#/,'')).toLowerCase();
   const target=document.getElementById(clean);
   if(target && cards.includes(target)){openCard(target);return true;}
   const wanted=clean.replace(/^[^-]+-/,'');
   const fallback=cards.find(c=>normalize(c.id||'')===clean || normalize(cardTitle(c))===wanted);
   if(fallback){openCard(fallback);return true;}
   return false;
 };
 const hash=decodeURIComponent(location.hash.replace(/^#/,'')).toLowerCase();
 const openHashTarget=()=>{
   const raw=decodeURIComponent(location.hash.replace(/^#/,'')).toLowerCase();
   if(!raw)return false;
   const targetId=raw;
   const byId=document.getElementById(targetId);
   if(byId && cards.includes(byId)){
     openCard(byId);
     return true;
   }
   const wanted=raw.replace(/^[^-]+-/,'');
   const target=cards.find(c=>normalize(cardTitle(c))===wanted || normalize(c.innerText).includes(wanted));
   if(target){openCard(target);return true;}
   return false;
 };
 if(location.hash)setTimeout(openHashTarget,120);
 window.addEventListener('hashchange',()=>setTimeout(openHashTarget,40));
 document.addEventListener('click',e=>{
   const link=e.target.closest('.related-content-card');
   if(!link)return;
   const href=link.getAttribute('href');
   if(!href || href==='#')return;
   const url=new URL(href,location.href);
   const id=decodeURIComponent(url.hash.replace(/^#/,'')).toLowerCase();
   if(!id)return;
   e.preventDefault();
   e.stopPropagation();
   if(url.pathname===location.pathname){
     const target=document.getElementById(id);
     if(target && cards.includes(target)){
       history.pushState(null,'',url.hash);
       openCard(target);
     }
     return;
   }
   url.searchParams.set('open',id);
   window.location.assign(url.href);
 });

 // Restore a cross-page Related Content click after navigation. Works for
 // Character, House, Dragon and Location cards.
 const openPendingRelatedTarget=()=>{
   let pending=null;
   try{pending=JSON.parse(sessionStorage.getItem('westerosRelatedTarget')||'null');}catch(err){}
   if(!pending || !pending.path || !pending.hash)return;
   const samePath=pending.path===location.pathname || pending.path.replace(/\/$/,'')===location.pathname.replace(/\/$/,'');
   if(!samePath)return;
   try{sessionStorage.removeItem('westerosRelatedTarget');}catch(err){}
   const id=decodeURIComponent(pending.hash.replace(/^#/,'')).toLowerCase();
   const target=document.getElementById(id);
   if(target && cards.includes(target)){
     setTimeout(()=>openCard(target),60);
     return;
   }
   // Fallback for file:// paths or minor ID differences.
   const wanted=id.replace(/^[^-]+-/,'');
   const fallback=cards.find(c=>normalize(c.id||'')===id || normalize(cardTitle(c))===wanted);
   if(fallback)setTimeout(()=>openCard(fallback),60);
 };
 setTimeout(()=>{
   const openParam=new URLSearchParams(location.search).get('open');
   if(openParam && openTargetById(openParam)){
     const clean=new URL(location.href); clean.searchParams.delete('open');
     history.replaceState(null,'',clean.pathname+clean.hash);
   }
   openPendingRelatedTarget();
 },120);
}


/* Main-home section chooser: every section first asks which era to open. */
document.addEventListener('DOMContentLoaded', function(){
  const chooser=document.getElementById('eraChooser');
  if(!chooser) return;
  const got=document.getElementById('chooseGot');
  const hotd=document.getElementById('chooseHotd');
  const close=()=>{chooser.hidden=true;chooser.setAttribute('aria-hidden','true');document.body.classList.remove('chooser-open');};
  document.querySelectorAll('[data-era-section]').forEach(link=>{
    link.addEventListener('click',function(e){
      e.preventDefault();
      const section=this.dataset.eraSection;
      got.href='got/'+section+'.html';
      hotd.href='hotd/'+section+'.html';
      chooser.hidden=false;chooser.setAttribute('aria-hidden','false');document.body.classList.add('chooser-open');
    });
  });
  chooser.querySelectorAll('[data-close-era-chooser]').forEach(el=>el.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!chooser.hidden) close();});
});


/* Interactive Westeros & Essos Map */
function initWesterosMap(){
 const root=document.querySelector('[data-westeros-map]');
 if(!root)return;
 const mapArt=root.querySelector('[data-map-art]');
 const info=root.querySelector('[data-map-info]');
 const nameEl=root.querySelector('[data-map-name]');
 const regionEl=root.querySelector('[data-map-region]');
 const descEl=root.querySelector('[data-map-description]');
 const realmLabel=root.querySelector('[data-map-realm-label]');
 const regionLabel=root.querySelector('[data-map-region-label]');
 const link=root.querySelector('[data-map-link]');
 const imageWrap=root.querySelector('[data-map-image-wrap]');
 const imageEl=root.querySelector('[data-map-image]');
 const archiveStatus=root.querySelector('[data-map-archive-status]');
 const buttons=[...root.querySelectorAll('[data-map-realm]')];
 let activeRealm='westeros';
 let selected=null;
 const locations={
  westeros:[
   {id:'castle-black',name:'Castle Black',region:'The Wall',x:48,y:10,dx:5,dy:-3,description:'A principal fortress of the Night’s Watch beneath the Wall, guarding the northern frontier.'},
   {id:'last-hearth',name:'Last Hearth',region:'The North',x:57,y:14,dx:5,dy:-3,description:'The northern seat of House Umber, near the edge of the lands beneath the Wall.'},
   {id:'karhold',name:'Karhold',region:'The North',x:58,y:20,dx:5,dy:5,description:'The ancient castle of House Karstark in the northern interior.'},
   {id:'winterfell',name:'Winterfell',region:'The North',x:44,y:24,dx:6,dy:-3,description:'The ancient Stark seat and political heart of the North.',card:'#city-winterfell'},
   {id:'bear-island',name:'Bear Island',region:'The North',x:28,y:25,dx:5,dy:-3,description:'The rugged island home of House Mormont in the Sunset Sea.'},
   {id:'the-dreadfort',name:'The Dreadfort',region:'The North',x:64,y:26,dx:5,dy:-3,description:'The grim Bolton stronghold in the northern interior.'},
   {id:'deepwood-motte',name:'Deepwood Motte',region:'The North',x:32,y:29,dx:5,dy:5,description:'A wooded stronghold on the western coast of the North.'},
   {id:'barrowton',name:'Barrowton',region:'The North',x:48,y:31,dx:5,dy:5,description:'One of the North’s largest settlements, surrounded by the ancient barrows.'},
   {id:'torrhens-square',name:"Torrhen's Square",region:'The North',x:39,y:33,dx:5,dy:-3,description:'A fortified northern settlement on the shores of a great lake.'},
   {id:'white-harbor',name:'White Harbor',region:'The North',x:59,y:39,dx:5,dy:5,description:'The North’s great port and seat of House Manderly.'},
   {id:'moat-cailin',name:'Moat Cailin',region:'The Neck',x:49,y:37,dx:-8,dy:-3,description:'A ruined fortress controlling the key causeway between the North and the south.'},
   {id:'pyke',name:'Pyke',region:'The Iron Islands',x:16,y:51,dx:4,dy:-3,description:'The Greyjoy seat on the storm-lashed Iron Islands.'},
   {id:'lordsport',name:'Lordsport',region:'The Iron Islands',x:18,y:48,dx:5,dy:5,description:'The principal harbor settlement of Pyke and the Greyjoy domain.'},
   {id:'old-wyk',name:'Old Wyk',region:'The Iron Islands',x:11,y:46,dx:5,dy:-3,description:'The sacred heart of the ironborn and site of ancient kingsmoots.'},
   {id:'harlaw',name:'Harlaw',region:'The Iron Islands',x:21,y:46,dx:5,dy:-3,description:'A major island of the Iron Islands and seat of powerful House Harlaw.'},
   {id:'seagard',name:'Seagard',region:'The Riverlands',x:37,y:45,dx:5,dy:-3,description:'A fortified port on the western coast of the Riverlands.'},
   {id:'riverrun',name:'Riverrun',region:'The Riverlands',x:49,y:49,dx:5,dy:-3,description:'The Tully seat at the meeting of the Tumblestone and Red Fork.',card:'#city-riverrun'},
   {id:'harrenhal',name:'Harrenhal',region:'The Riverlands',x:56,y:51,dx:5,dy:6,description:'A vast ruined castle whose position makes it one of the Riverlands’ great prizes.',card:'#city-harrenhal'},
   {id:'darry',name:'Darry',region:'The Riverlands',x:59,y:57,dx:5,dy:-3,description:'The ancient seat of House Darry on the kingsroad.'},
   {id:'saltpans',name:'Saltpans',region:'The Riverlands',x:64,y:46,dx:5,dy:-3,description:'A small but strategically placed river port on the coast.'},
   {id:'maidenpool',name:'Maidenpool',region:'The Crownlands',x:67,y:51,dx:5,dy:-3,description:'A fortified harbor on the Bay of Crabs and an important Crownlands port.'},
   {id:'stoney-sept',name:'Stoney Sept',region:'The Riverlands',x:48,y:62,dx:5,dy:5,description:'A market town and sept at an important crossroads in the Riverlands.'},
   {id:'the-eyrie',name:'The Eyrie',region:'The Vale',x:73,y:49,dx:6,dy:-3,description:'The Arryn seat high in the Mountains of the Moon.',card:'#city-the-eyrie'},
   {id:'gulltown',name:'Gulltown',region:'The Vale',x:81,y:43,dx:6,dy:-3,description:'The Vale’s great harbor and a major eastern trading port.'},
   {id:'runestone',name:'Runestone',region:'The Vale',x:83,y:52,dx:5,dy:5,description:'The ancient Royce stronghold on the eastern coast of the Vale.'},
   {id:'casterly-rock',name:'Casterly Rock',region:'The Westerlands',x:20,y:66,dx:4,dy:-3,description:'The colossal Lannister stronghold overlooking the Sunset Sea.'},
   {id:'lannisport',name:'Lannisport',region:'The Westerlands',x:23,y:70,dx:5,dy:5,description:'A wealthy western port city at the foot of Casterly Rock.'},
   {id:'golden-tooth',name:'The Golden Tooth',region:'The Westerlands',x:31,y:61,dx:5,dy:-3,description:'A heavily fortified mountain pass controlling the eastern approach to the Westerlands.'},
   {id:'kayce',name:'Kayce',region:'The Westerlands',x:11,y:73,dx:5,dy:-3,description:'A western coastal stronghold in the Westerlands.'},
   {id:'crakehall',name:'Crakehall',region:'The Westerlands',x:25,y:78,dx:5,dy:5,description:'The ancestral seat of House Crakehall in the western Reachlands.'},
   {id:'kings-landing',name:"King's Landing",region:'The Crownlands',x:65,y:69,dx:6,dy:5,description:'The capital of the Seven Kingdoms and seat of the Iron Throne.',card:'#city-king-s-landing'},
   {id:'rosby',name:'Rosby',region:'The Crownlands',x:67,y:60,dx:5,dy:-3,description:'A Crownlands castle and settlement close to the capital.'},
   {id:'stokeworth',name:'Stokeworth',region:'The Crownlands',x:70,y:64,dx:5,dy:5,description:'The seat of House Stokeworth on the roads north of King’s Landing.'},
   {id:'duskendale',name:'Duskendale',region:'The Crownlands',x:72,y:59,dx:5,dy:-3,description:'An old walled port city on the eastern coast of the Crownlands.'},
   {id:'dragonstone',name:'Dragonstone',region:'Blackwater Bay',x:79,y:70,dx:6,dy:5,description:'The volcanic Targaryen stronghold at the mouth of Blackwater Bay.',card:'#city-dragonstone'},
   {id:'driftmark',name:'Driftmark',region:'Blackwater Bay',x:84,y:73,dx:6,dy:5,description:'The island seat of House Velaryon and center of its maritime power.',card:'#city-driftmark'},
   {id:'highgarden',name:'Highgarden',region:'The Reach',x:34,y:77,dx:5,dy:5,description:'The fertile Tyrell seat at the heart of the Reach.',card:'#city-highgarden'},
   {id:'bitterbridge',name:'Bitterbridge',region:'The Reach',x:45,y:72,dx:5,dy:-3,description:'A strategically important crossing over the Mander.'},
   {id:'ashford',name:'Ashford',region:'The Reach',x:41,y:80,dx:5,dy:5,description:'A market town and castle on the roads of the southern Reach.'},
   {id:'horn-hill',name:'Horn Hill',region:'The Reach',x:39,y:85,dx:5,dy:-3,description:'The seat of House Tarly in the southern Reach.'},
   {id:'tumbleton',name:'Tumbleton',region:'The Reach',x:56,y:75,dx:5,dy:5,description:'A river town on the Mander and a key crossing between the Reach and Crownlands.'},
   {id:'oldtown',name:'Oldtown',region:'The Reach',x:30,y:88,dx:5,dy:5,description:'One of Westeros’s oldest cities, home to the Citadel and Hightower.',card:'#city-oldtown'},
   {id:'the-arbor',name:'The Arbor',region:'The Reach',x:22,y:94,dx:5,dy:-3,description:'The wealthy island domain of House Redwyne, famed for its vineyards and fleet.'},
   {id:'storm-s-end',name:"Storm's End",region:'The Stormlands',x:61,y:82,dx:6,dy:5,description:'The ancient Baratheon fortress on the stormy eastern coast.',card:'#city-storm-s-end'},
   {id:'rain-house',name:'Rain House',region:'The Stormlands',x:69,y:87,dx:5,dy:5,description:'The coastal seat of House Wylde on Shipbreaker Bay.'},
   {id:'nightsong',name:'Nightsong',region:'The Stormlands',x:49,y:85,dx:5,dy:-3,description:'A fortified marcher castle guarding the roads toward Dorne.'},
   {id:'tarth',name:'Tarth',region:'The Stormlands',x:79,y:85,dx:5,dy:5,description:'The Sapphire Isle, home of House Tarth.'},
   {id:'sunspear',name:'Sunspear',region:'Dorne',x:69,y:94,dx:6,dy:-3,description:'The Martell seat and capital of Dorne.',card:'#city-sunspear'},
   {id:'plankytown',name:'Planky Town',region:'Dorne',x:76,y:96,dx:-10,dy:-3,description:'A floating river port at the mouth of the Greenblood.'},
   {id:'yronwood',name:'Yronwood',region:'Dorne',x:53,y:93,dx:-5,dy:-3,description:'A powerful Dornish stronghold guarding the Boneway.'},
   {id:'starfall',name:'Starfall',region:'Dorne',x:39,y:94,dx:5,dy:5,description:'The ancestral seat of House Dayne in western Dorne.'},
   {id:'hellholt',name:'Hellholt',region:'Dorne',x:58,y:96,dx:5,dy:5,description:'A desert stronghold in eastern Dorne.'}
  ],



  essos:[
   {id:'braavos',name:'Braavos',region:'Free Cities',x:10,y:13,dx:5,dy:-3,description:'The great lagoon city of canals, merchants, the Iron Bank and the Titan.',card:'#city-braavos'},
   {id:'pentos',name:'Pentos',region:'Free Cities',x:8,y:25,dx:5,dy:-3,description:'A wealthy Free City on the western coast of Essos.'},
   {id:'lorath',name:'Lorath',region:'Free Cities',x:13,y:33,dx:5,dy:5,description:'An island-bound Free City east of Braavos.'},
   {id:'norvos',name:'Norvos',region:'Free Cities',x:25,y:22,dx:5,dy:-3,description:'A powerful Free City known for its bells and priesthood.'},
   {id:'qohor',name:'Qohor',region:'Free Cities',x:28,y:29,dx:5,dy:5,description:'The forest city famous for its blacksmiths and Unsullied defense.'},
   {id:'myr',name:'Myr',region:'Free Cities',x:16,y:49,dx:5,dy:-3,description:'A major Free City renowned for lace, lenses and craftsmanship.'},
   {id:'tyrosh',name:'Tyrosh',region:'Free Cities',x:8,y:55,dx:5,dy:5,description:'An island Free City famous for dyed hair, trade and sellswords.'},
   {id:'lys',name:'Lys',region:'Free Cities',x:15,y:68,dx:5,dy:-3,description:'A wealthy island city famed for pleasure houses and perfumes.'},
   {id:'volantis',name:'Volantis',region:'Free Cities',x:28,y:69,dx:5,dy:5,description:'The ancient Rhoynar-influenced city at the mouth of the Rhoyne.'},
   {id:'vaes-dothrak',name:'Vaes Dothrak',region:'Dothraki Sea',x:38,y:31,dx:5,dy:-3,description:'The sacred city of the Dothraki, set beside the Mother of Mountains.'},
   {id:'mantarys',name:'Mantarys',region:'Slaver’s Bay',x:43,y:60,dx:5,dy:-3,description:'A ruined and feared city west of the ruins of Old Ghis.'},
   {id:'old-ghis',name:'Old Ghis',region:'Slaver’s Bay',x:48,y:62,dx:5,dy:5,description:'The ancient Ghiscari heartland, remembered through ruins and imperial history.'},
   {id:'meereen',name:'Meereen',region:'Slaver’s Bay',x:56,y:61,dx:5,dy:-3,description:'The largest of the great slave cities, built around the Great Pyramid.',card:'#city-meereen'},
   {id:'yunkai',name:'Yunkai',region:'Slaver’s Bay',x:62,y:64,dx:5,dy:-3,description:'The Yellow City of Slaver’s Bay, famed for its wealth and slave markets.'},
   {id:'astapor',name:'Astapor',region:'Slaver’s Bay',x:69,y:66,dx:5,dy:5,description:'The Red City, known for its Unsullied and brick-built pyramids.'},
   {id:'qarth',name:'Qarth',region:'Jade Sea',x:78,y:72,dx:5,dy:5,description:'A wealthy gateway city between the Red Waste and the Jade Sea.'},
   {id:'vaes-tolorro',name:'Vaes Tolorro',region:'Red Waste',x:64,y:54,dx:5,dy:-3,description:'A ruined city encountered on the long road through the Red Waste.'},
   {id:'valyria',name:'Valyria',region:'Smoking Sea',x:66,y:82,dx:5,dy:5,description:'The shattered heart of the old Valyrian Freehold, surrounded by the Smoking Sea.'},
   {id:'hesh',name:'Hesh',region:'Yi Ti',x:72,y:17,dx:5,dy:-3,description:'A major city in the distant lands east of the Bone Mountains.'},
   {id:'yi-ti',name:'Yi Ti',region:'Far East',x:84,y:12,dx:5,dy:-3,description:'The vast and ancient civilization of the far eastern world.'},
   {id:'leng',name:'Leng',region:'Jade Sea',x:90,y:20,dx:5,dy:5,description:'A large island kingdom in the eastern Jade Sea.'},
   {id:'ibben',name:'Ibben',region:'Shivering Sea',x:49,y:7,dx:5,dy:-3,description:'A cold northern island realm known for its seafarers and whalers.'}
  ]
 };
 function imageFor(realm){const base=(document.body.classList.contains('westeros-home')?'assets/':'../assets/');return realm==='essos'?base+'essos-map-realistic.webp':base+'westeros-map-realistic.webp';}
 function labelFor(realm){return realm==='essos'?'ESSOS':'WESTEROS';}
 function markerMarkup(data,realm){
   const aria=realm==='essos'?'Interactive location markers on a realistic map of Essos':'Interactive location markers on a realistic map of Westeros';
   return `<svg class="map-marker-layer" viewBox="0 0 100 100" aria-label="${aria}"><defs><filter id="markerGlow"><feGaussianBlur stdDeviation=".7" result="b"></feGaussianBlur><feMerge><feMergeNode in="b"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs>${data.map(loc=>`<g class="map-marker ${loc.kind||'location'}" data-map-id="${escapeHTML(loc.id)}" tabindex="0" role="button" aria-label="${escapeHTML(loc.name)}, ${escapeHTML(loc.region)}" transform="translate(${loc.x} ${loc.y})"><circle class="map-marker-pulse" r="1.8"></circle><circle class="map-marker-ring" r="2.3"></circle><path class="map-marker-crown" d="M-1.4-.9L-.7-.1 0-1.2.7-.1 1.4-.9 1.05 1.15H-1.05Z"></path><circle class="map-marker-core" r=".72"></circle><text class="map-marker-label" x="${loc.dx}" y="${loc.dy}">${escapeHTML(loc.name)}</text></g>`).join('')}</svg>`;
 }
 function render(realm){
   activeRealm=realm;
   buttons.forEach(b=>b.classList.toggle('active',b.dataset.mapRealm===realm));
   const data=locations[realm];
   const src=imageFor(realm);
   const existingBase=mapArt.querySelector('.map-realistic-base');
   const existingImg=existingBase?.querySelector('img');
   const swapImage=()=>{
     const oldImg=mapArt.querySelector('.map-realistic-base img');
     if(oldImg){oldImg.classList.add('is-switching');}
     const img=new Image();
     img.decoding='async';
     img.onload=()=>{
       const base=mapArt.querySelector('.map-realistic-base') || (()=>{const el=document.createElement('div');el.className='map-realistic-base';mapArt.prepend(el);return el;})();
       const next=document.createElement('img');
       next.src=src;
       next.alt=`Detailed realistic terrain map of ${labelFor(realm)}`;
       next.draggable=false;
       next.decoding='async';
       base.replaceChildren(next);
     };
     img.onerror=()=>{
       if(existingImg) existingImg.classList.remove('is-switching');
     };
     img.src=src;
   };
   if(existingBase && existingImg && existingImg.getAttribute('src')===src){
     existingImg.alt=`Detailed realistic terrain map of ${labelFor(realm)}`;
   }else{
     swapImage();
   }
   mapArt.querySelector('.map-marker-layer')?.remove();
   mapArt.querySelector('[data-map-tooltip]')?.remove();
   mapArt.insertAdjacentHTML('beforeend',`${markerMarkup(data,realm)}<div class="map-tooltip" data-map-tooltip></div>`);
   mapArt.dataset.realm=realm;
   mapArt.querySelectorAll('.map-marker').forEach(marker=>{
     const loc=data.find(x=>x.id===marker.dataset.mapId); if(!loc)return;
     marker.addEventListener('mouseenter',()=>showTooltip(marker,loc));
     marker.addEventListener('mouseleave',hideTooltip);
     marker.addEventListener('focus',()=>showTooltip(marker,loc));
     marker.addEventListener('blur',hideTooltip);
     marker.addEventListener('click',()=>select(loc,marker));
     marker.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();select(loc,marker);}});
   });
   const same=selected&&data.find(x=>x.id===selected.id);
   if(same){const marker=mapArt.querySelector(`[data-map-id="${CSS.escape(same.id)}"]`); if(marker)select(same,marker,false); else resetInfo();}
   else resetInfo();
 }
 function showTooltip(marker,loc){
   const tip=mapArt.querySelector('[data-map-tooltip]'); if(!tip)return;
   tip.innerHTML=`<strong>${escapeHTML(loc.name)}</strong><span>${escapeHTML(loc.region)}</span>`;
   tip.classList.add('show');
   const box=mapArt.getBoundingClientRect(), mr=marker.getBoundingClientRect();
   tip.style.left=`${Math.min(Math.max(mr.left-box.left+14,8),Math.max(8,mapArt.clientWidth-240))}px`;
   tip.style.top=`${Math.max(8,mr.top-box.top-12)}px`;
 }
 function hideTooltip(){mapArt.querySelector('[data-map-tooltip]')?.classList.remove('show');}
 function findCard(loc){
   return loc.card ? document.querySelector(loc.card) : document.querySelector(`[data-city="${CSS.escape(loc.id)}"]`);
 }
 function focusAndOpenCard(loc){
   const card=findCard(loc);
   if(!card) return false;
   document.querySelectorAll('.map-card-target').forEach(c=>c.classList.remove('map-card-target'));
   card.classList.add('map-card-target');
   card.setAttribute('tabindex','-1');
   card.setAttribute('data-map-selected','true');
   card.scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'});
   setTimeout(()=>{
     try{card.focus({preventScroll:true});}catch(e){card.focus();}
     if(typeof window.__westerosOpenCityCard==='function'){
       window.__westerosOpenCityCard(card);
     } else {
       card.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}));
     }
   },260);
   setTimeout(()=>{card.classList.remove('map-card-target');card.removeAttribute('data-map-selected');},5200);
   return true;
 }
 function resetInfo(){
   selected=null;
   mapArt.querySelectorAll('.map-marker.selected').forEach(m=>m.classList.remove('selected'));
   if(nameEl) nameEl.textContent=activeRealm==='essos'?'Essos':'Westeros';
   if(regionEl) regionEl.textContent=activeRealm==='essos'?'Explore the Free Cities, Slaver’s Bay and the far eastern lands.':'Explore the Seven Kingdoms, from the Wall to Dorne.';
   if(descEl) descEl.textContent='Select a marker to reveal its location story, regional context and direct connection to the city archive.';
   if(realmLabel) realmLabel.textContent=labelFor(activeRealm);
   if(regionLabel) regionLabel.textContent='—';
   if(link) link.hidden=true;
   if(imageWrap) imageWrap.hidden=true;
   if(archiveStatus) archiveStatus.textContent='Choose a marked location to explore its archive entry.';
 }
 function select(loc,marker,scroll=true){
   selected=loc;
   mapArt.querySelectorAll('.map-marker.selected').forEach(m=>m.classList.remove('selected'));
   marker.classList.add('selected'); hideTooltip();
   if(nameEl) nameEl.textContent=loc.name; if(regionEl) regionEl.textContent=loc.region; if(descEl) descEl.textContent=loc.description;
   if(realmLabel) realmLabel.textContent=labelFor(activeRealm); if(regionLabel) regionLabel.textContent=loc.region;
   const card=findCard(loc);
   const cardImg=card?.querySelector('.city-photo img');
   if(cardImg && imageWrap && imageEl){
     imageEl.src=cardImg.currentSrc || cardImg.src;
     imageEl.alt=cardImg.alt || loc.name;
     imageWrap.hidden=false;
   }else if(imageWrap) imageWrap.hidden=true;
   if(card){
     if(link){ link.hidden=false; link.href=loc.card || `#${card.id}`; link.textContent='OPEN CITY ENTRY ';
     const span=document.createElement('span'); span.textContent='↗'; link.appendChild(span); }
     if(archiveStatus) archiveStatus.textContent='City archive found — selecting this location will focus the matching card and open its full detail view.';
     link.onclick=e=>{e.preventDefault();focusAndOpenCard(loc);};
   } else {
     if(link) link.hidden=true;
     if(archiveStatus) archiveStatus.textContent='Map reference only — this location does not yet have a dedicated city card in this archive.';
   }
   if(scroll) {
     if(card) setTimeout(()=>focusAndOpenCard(loc),120);
     else if(window.matchMedia('(max-width:980px)').matches) info.scrollIntoView({behavior:'smooth',block:'nearest'});
   }
 }
 root.querySelector('[data-map-reset]')?.addEventListener('click',()=>{resetInfo();mapArt.querySelector('.map-marker')?.focus();});
 buttons.forEach(b=>b.addEventListener('click',()=>{const realm=b.dataset.mapRealm;if(realm!==activeRealm)render(realm);}));
 render('westeros');
}
