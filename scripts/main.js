const invites = {
    1: "Renise e Marcilio",
    2: "Mel",
    3: "Ariel",
    4: "Icaro e Bianca",
    5: "Polly e Luiz",
    6: "Dani, Erico e Cecilia",
    7: "Nubia, Cesar, Caio e Rute",
    8: "Steven",
    9: "Vanessa",
    10: "Fatima",
    11: "Fabiana, Manuel, Miguel e Moises",
    12: "Tatiana, israel e João",
    13: "Cleuma",
    14: "Luana, Everton, Heloisa e Helena",
    15: "Pollyana e Carlos",
    16: "Franci e Valdo",
    17: "Juh",
    18: "Sandra",
    19: "Socorro",
    20: "Caima",
    21: "Tota",
    22: "Martin e um acompanhante",
    23: "Manoel",
    24: "Henrique",
    25: "Doug",
    26: "Lourdes",
    27: "Carol e Cauber",
    28: "Deta"
}

let search = window.location.search;

let invite = search.split("=")[1];

const people = invites[invite];

let htmlForPeople = `Convidamos <b>${people}</b> para se juntar a nos para celebra a união entre Agatha e Joe`;

div = document.getElementById('people');

div.innerHTML = htmlForPeople;