<<<<<<< HEAD
window.onload = function () {
    let tetris = [],
        tetrisField = document.querySelector("#tetris-field"),
        scoreField = document.querySelector(".score-field"),
        color = [1, 2, 3, 4, 5], //kov-vo fishek
        timer,
        flag, //proverka kogda zapuskat sled blok
        score = 0;

    //zapolniaem massiv

    function init() {
        let x = 9;
        let y = 15;
        for (let i = 0; i < y; i++) {
            tetris[i] = [];
            for (let j = 0; j < x; j++) {

                tetris[i][j] = 0; //0 - pustoe pole;
            }
        }
        console.table(tetris);



    }

    //   risuem igrovoe pole
    function draw() {
        let out = '';
        for (let i = 0; i < tetris.length; i++) {
            for (let j = 0; j < tetris[i].length; j++) {
                if (tetris[i][j] == 0) {
                    out += '<div class="white"></div>';
                } else if (tetris[i][j] == 1 || tetris[i][j] == 11) {
                    out += '<div class="orange"></div>';
                } else if (tetris[i][j] == 2 || tetris[i][j] == 12) {
                    out += '<div class="purple"></div>';
                } else if (tetris[i][j] == 3 || tetris[i][j] == 13) {
                    out += '<div class="alcon"></div>';
                } else if (tetris[i][j] == 4 || tetris[i][j] == 14) {
                    out += '<div class="red"></div>';
                }
            }
        }
        tetrisField.innerHTML = out; //perepisovuem igrovoe pole
        scoreField.innerHTML = score; // vivozhy ochki
       
    };

    //risuem igrovoi block
    function square() {
        function randomInteger(min, max) {
            var rand = min + Math.random() * (max + 1 - min);
            rand = Math.floor(rand);
            return rand;
        }
        tetris[0][0] = randomInteger(0, color.length);
        console.log(tetris[0][0]);
    }

    function run() {
        timer = setTimeout(function () {
            if (finish()) return false;
            draw();
            flag = true;
            for (let i = tetris.length - 1; i >= 0; i--) {
                for (let j = 0; j < tetris[i].length; j++) {
                    if (tetris[i][j] < 10) {
                        if (tetris[i][j] != 0) {
                            if (i == tetris.length - 1) {
                                tetris[i][j] = tetris[i][j] + 10;
                            } else if (tetris[i + 1][j] == 0) {
                                tetris[i + 1][j] = tetris[i][j];
                                tetris[i][j] = 0;
                                flag = false;
                            }
                        }
                    }
                }
            }
            checkLine();
            if (flag) square();
            run();
        }, 400);
    }

    function tetrisRight() {
        for (let i = tetris.length - 1; i >= 0; i--) {
            for (let j = tetris[i].length - 1; j >= 0; j--) {
                if (tetris[i][j] < 10) {
                    if (tetris[i][j] != 0 && tetris[i][j + 1] == 0) {
                        tetris[i][j + 1] = tetris[i][j];
                        tetris[i][j] = 0;
                    }
                }

            }
        }
        draw();
    }

    function tetrisLeft() {
        for (let i = tetris.length - 1; i >= 0; i--) {
            for (let j = 0; j < tetris[i].length; j++) {
                if (tetris[i][j] < 10) {
                    if (tetris[i][j] != 0 && tetris[i][j - 1] == 0) {
                        tetris[i][j - 1] = tetris[i][j];
                        tetris[i][j] = 0;
                    }
                }

            }
        }
        draw();
    }

    function checkLine() {
        for (let i = tetris.length - 1; i >= 0; i--) {
            for (let j = 0; j < tetris[i].length; j++) {
                if (tetris[i][j] > 10 && tetris[i][j + 1] != undefined && tetris[i][j + 2] != undefined) {
                    if (tetris[i][j] == tetris[i][j + 1] && tetris[i][j] == tetris[i][+2]) {
                        tetris[i][j] = 0;
                        tetris[i][j + 1] = 0;
                        tetris[i][j + 2] = 0;
                        score += 30;
                        for (let m = i; m >= 0; m--) {
                            if (tetris[m][j] > 10) tetris[m][j] = tetris[m][j] - 10;
                            if (tetris[m][j + 1] > 10) tetris[m][j + 1] = tetris[m][j + 1] - 10;
                            if (tetris[m][j + 2] > 10) tetris[m][j + 2] = tetris[m][j + 2] - 10;
                        }
                    }
                }
            }
        }
    }

    function finish() {
        let stop = false;
        for (let i = tetris.length - 1; i >= 0; i--) {
            for (let j = 0; j < tetris[i].length; j++) {
                stop = true;
                for (let k = 0; k < tetris.length; k++) {
                    if (tetris[k][j] == 0) {
                        stop = false;
                        break;
                    }
                }
                if (stop) {
                    clearTimeout(timer);
                    alert('Stop');
                    break;
                }
            }
            if (stop) break;
        }
        if (stop) createForm();
        return stop;
    }

    // function createForm() {
    //     let form = document.createElement('form');
    //     form.setAttribute('method', 'POST');
    //     form.setAttribute('action', 'send.php');
    //     let hiddenInput = document.createElement('input');
    //     hiddenInput.setAttribute("type", "hidden");
    //     hiddenInput.setAttribute("name", "score");
    //     hiddenInput.setAttribute("value", score);
    //     let nameInput = document.createElement('input');
    //     nameInput.setAttribute("type", "text");
    //     nameInput.setAttribute("name", "username");
    //     let submitInput = document.createElement('input');
    //     submitInput.setAttribute("type", "submit");
    //     submitInput.setAttribute("value", "Send Result");
    //     form.appendChild(hiddenInput);
    //     form.appendChild(nameInput);
    //     form.appendChild(submitInput);
    //     document.querySelector(".form").appendChild(form);
    // }
 


    document.querySelector(".start").onclick = function () {
        init();
        draw();
        square();
        run();
    };
    document.onkeydown = function (event) {
        switch (event.code) {
            case "ArrowRight":
                tetrisRight();
                break;
            case "ArrowLeft":
                tetrisLeft();
                break;
        }
        return false;
    };
=======
window.onload = function () {
    let tetris = [],
        tetrisField = document.querySelector("#tetris-field"),
        scoreField = document.querySelector(".score-field"),
        color = [1, 2, 3, 4, 5], //kov-vo fishek
        timer,
        flag, //proverka kogda zapuskat sled blok
        score = 0;

    //zapolniaem massiv

    function init() {
        let x = 9;
        let y = 15;
        for (let i = 0; i < y; i++) {
            tetris[i] = [];
            for (let j = 0; j < x; j++) {

                tetris[i][j] = 0; //0 - pustoe pole;
            }
        }
        console.table(tetris);



    }

    //   risuem igrovoe pole
    function draw() {
        let out = '';
        for (let i = 0; i < tetris.length; i++) {
            for (let j = 0; j < tetris[i].length; j++) {
                if (tetris[i][j] == 0) {
                    out += '<div class="white"></div>';
                } else if (tetris[i][j] == 1 || tetris[i][j] == 11) {
                    out += '<div class="orange"></div>';
                } else if (tetris[i][j] == 2 || tetris[i][j] == 12) {
                    out += '<div class="purple"></div>';
                } else if (tetris[i][j] == 3 || tetris[i][j] == 13) {
                    out += '<div class="alcon"></div>';
                } else if (tetris[i][j] == 4 || tetris[i][j] == 14) {
                    out += '<div class="red"></div>';
                }
            }
        }
        tetrisField.innerHTML = out; //perepisovuem igrovoe pole
        scoreField.innerHTML = score; // vivozhy ochki
       
    };

    //risuem igrovoi block
    function square() {
        function randomInteger(min, max) {
            var rand = min + Math.random() * (max + 1 - min);
            rand = Math.floor(rand);
            return rand;
        }
        tetris[0][0] = randomInteger(0, color.length);
        console.log(tetris[0][0]);
    }

    function run() {
        timer = setTimeout(function () {
            if (finish()) return false;
            draw();
            flag = true;
            for (let i = tetris.length - 1; i >= 0; i--) {
                for (let j = 0; j < tetris[i].length; j++) {
                    if (tetris[i][j] < 10) {
                        if (tetris[i][j] != 0) {
                            if (i == tetris.length - 1) {
                                tetris[i][j] = tetris[i][j] + 10;
                            } else if (tetris[i + 1][j] == 0) {
                                tetris[i + 1][j] = tetris[i][j];
                                tetris[i][j] = 0;
                                flag = false;
                            }
                        }
                    }
                }
            }
            checkLine();
            if (flag) square();
            run();
        }, 400);
    }

    function tetrisRight() {
        for (let i = tetris.length - 1; i >= 0; i--) {
            for (let j = tetris[i].length - 1; j >= 0; j--) {
                if (tetris[i][j] < 10) {
                    if (tetris[i][j] != 0 && tetris[i][j + 1] == 0) {
                        tetris[i][j + 1] = tetris[i][j];
                        tetris[i][j] = 0;
                    }
                }

            }
        }
        draw();
    }

    function tetrisLeft() {
        for (let i = tetris.length - 1; i >= 0; i--) {
            for (let j = 0; j < tetris[i].length; j++) {
                if (tetris[i][j] < 10) {
                    if (tetris[i][j] != 0 && tetris[i][j - 1] == 0) {
                        tetris[i][j - 1] = tetris[i][j];
                        tetris[i][j] = 0;
                    }
                }

            }
        }
        draw();
    }

    function checkLine() {
        for (let i = tetris.length - 1; i >= 0; i--) {
            for (let j = 0; j < tetris[i].length; j++) {
                if (tetris[i][j] > 10 && tetris[i][j + 1] != undefined && tetris[i][j + 2] != undefined) {
                    if (tetris[i][j] == tetris[i][j + 1] && tetris[i][j] == tetris[i][+2]) {
                        tetris[i][j] = 0;
                        tetris[i][j + 1] = 0;
                        tetris[i][j + 2] = 0;
                        score += 30;
                        for (let m = i; m >= 0; m--) {
                            if (tetris[m][j] > 10) tetris[m][j] = tetris[m][j] - 10;
                            if (tetris[m][j + 1] > 10) tetris[m][j + 1] = tetris[m][j + 1] - 10;
                            if (tetris[m][j + 2] > 10) tetris[m][j + 2] = tetris[m][j + 2] - 10;
                        }
                    }
                }
            }
        }
    }

    function finish() {
        let stop = false;
        for (let i = tetris.length - 1; i >= 0; i--) {
            for (let j = 0; j < tetris[i].length; j++) {
                stop = true;
                for (let k = 0; k < tetris.length; k++) {
                    if (tetris[k][j] == 0) {
                        stop = false;
                        break;
                    }
                }
                if (stop) {
                    clearTimeout(timer);
                    alert('Stop');
                    break;
                }
            }
            if (stop) break;
        }
        if (stop) createForm();
        return stop;
    }

    // function createForm() {
    //     let form = document.createElement('form');
    //     form.setAttribute('method', 'POST');
    //     form.setAttribute('action', 'send.php');
    //     let hiddenInput = document.createElement('input');
    //     hiddenInput.setAttribute("type", "hidden");
    //     hiddenInput.setAttribute("name", "score");
    //     hiddenInput.setAttribute("value", score);
    //     let nameInput = document.createElement('input');
    //     nameInput.setAttribute("type", "text");
    //     nameInput.setAttribute("name", "username");
    //     let submitInput = document.createElement('input');
    //     submitInput.setAttribute("type", "submit");
    //     submitInput.setAttribute("value", "Send Result");
    //     form.appendChild(hiddenInput);
    //     form.appendChild(nameInput);
    //     form.appendChild(submitInput);
    //     document.querySelector(".form").appendChild(form);
    // }
 


    document.querySelector(".start").onclick = function () {
        init();
        draw();
        square();
        run();
    };
    document.onkeydown = function (event) {
        switch (event.code) {
            case "ArrowRight":
                tetrisRight();
                break;
            case "ArrowLeft":
                tetrisLeft();
                break;
        }
        return false;
    };
>>>>>>> 5d5065016d80fe4dabf9cf26abca101f97f8e1bd
};