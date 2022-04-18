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
    23: "Manoel e Henrique",
    24: "Doug",
    25: "Lourdes",
    26: "Carol e Glauber",
    27: "Deta"
}

let search = window.location.search;

let invite = search.split("=")[1];

const people = invites[invite];
if (people) {
    const div = document.getElementById('people');

    div.innerHTML = people;
}

future = Date.parse("jun 12, 2022 01:30:00");
now = new Date();
diff = future - now;

SEC = 1000;
MIN = 1000 * 60;
HOUR = MIN * 60;
DAY = HOUR * 24;
  
function updateTimer() {
    future = Date.parse("jun 4, 2022 15:30:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / DAY);
    hours = Math.floor(diff / HOUR);
    mins = Math.floor(diff / MIN);
    secs = Math.floor(diff / SEC);

    d = days.toString().padStart(2, '0');
    h = (hours - days * 24).toString().padStart(2, '0');
    m = (mins - hours * 60).toString().padStart(2, '0');
    s = (secs - mins * 60).toString().padStart(2, '0');

    document.getElementById("timer")
        .innerHTML =
        '<div><span>Faltam:</span></div>' +
        '<div>' + d + '<span>dias</span></div>' +
        '<div>' + h + '<span>horas</span></div>' +
        '<div>' + m + '<span>minutos</span></div>' +
        '<div>' + s + '<span>segundos</span></div>';
}

updateTimer();
setInterval('updateTimer()', 1000);
