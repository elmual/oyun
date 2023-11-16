let say = 0;
let score = 0;
let score1 = 0;
let netice;

oyna.onclick = function () {
    if (ad.value == '') {
        document.getElementById('el').innerHTML = "Adinizi daxil edin";
        die();
    }
    say = Math.floor(Math.random() * 6);
    score += say;
    netice = `${ad.value}, sizin ${score} xaliniz var`;
    document.getElementById('user1').innerHTML = `${ad.value} : ${score}`;
    document.getElementById('el').innerHTML = netice;
    if (say == 0) {
        score = 0;
        netice = `${ad.value}, siz ${score} xal ile bankrot oldunuz`;
        document.getElementById('el').innerHTML = netice;
        document.getElementById('user1').innerHTML = `${ad.value} : ${score}`;
    }
}

son.onclick = () => {
    if (ad.value == '') {
        document.getElementById('el').innerHTML = "Adinizi daxil edin";
        die();
    }
    netice = `${ad.value}, ${score} xal ile oyunu bitirdiniz`;
    document.getElementById('el').innerHTML = netice;
    document.getElementById('user1').innerHTML = `${ad.value} : ${score}`;
}

oyna2.onclick = function () {
    if (ad2.value == '') {
        document.getElementById('el').innerHTML = "Adinizi daxil edin";
        die();
    }
    say = Math.floor(Math.random() * 6);
    score1 += say;
    netice = `${ad2.value}, sizin ${score1} xaliniz var`;
    document.getElementById('user2').innerHTML = `${ad2.value} : ${score1}`;
    document.getElementById('el').innerHTML = netice;
    if (say == 0) {
        score1 = 0;
        netice = `${ad2.value}, siz ${score1} xal ile bankrot oldunuz`;
        document.getElementById('el').innerHTML = netice;
        document.getElementById('user2').innerHTML = `${ad2.value} : ${score1}`;
    }
}

son2.onclick = () => {
    if (ad2.value == '') {
        document.getElementById('el').innerHTML = "Adinizi daxil edin";
        die();
    }
    netice = `${ad2.value}, ${score1} xal ile oyunu bitirdiniz`;
    document.getElementById('el').innerHTML = netice;
    document.getElementById('user2').innerHTML = `${ad2.value} : ${score1}`;
}

