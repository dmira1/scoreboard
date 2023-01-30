let home = document.getElementById("home");
let guest = document.getElementById("guest");
let homeScore = 0;
let guestScore = 0;

function freethrow(team) {
    if (team == "home") {
        homeScore += 1;
        home.textContent = homeScore;
    } else {
        guestScore += 1;
        guest.textContent = guestScore;
    }

}

function layupDunk(team){
    if (team == "home") {
        homeScore += 2;
        home.textContent = homeScore;
    } else {
        guestScore += 2;
        guest.textContent = guestScore;
    }
}


function three(team) {
    if (team == "home") {
        homeScore += 3;
        home.textContent = homeScore;
    } else {
        guestScore += 3;
        guest.textContent = guestScore;
    }
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    home.textContent = 0;
    guest.textContent = 0;
    window.alert("New Game");
}

function highlight() {
    if (homeScore < guestScore) {
      return "guest";
    } else {
      return "home";
    }
}

