(function () {

    var tabuleiro;
    var peca;
    var fps = 10;
    var gameLoop;

    addEventListener("keydown", function(e) {
        if (e.keyCode == '38') {
          // up arrow
          //peca.style.top = (parseInt(peca.style.top) - 10) + "px";
        }
        else if (e.keyCode == '40') {
          // down arrow
          //peca.style.top = (parseInt(peca.style.top) + 10) + "px";
        }
        else if (e.keyCode == '37') {
           // left arrow
           peca.style.left = (parseInt(peca.style.left) - 10) + "px";
        }
        else if (e.keyCode == '39') {
           // right arrow
           peca.style.left = (parseInt(peca.style.left) + 10) + "px";
        }
    });

    function init () {
        createPeca();
        gameLoop = setInterval(run, 1000/fps);
    }

    function run () {
        var posicao = parseInt(peca.style.top);
        posicao = posicao + 10;
        if (posicao >= 800) {
            clearInterval(gameLoop);
        }
        peca.style.top = posicao + "px";
    }

    function createPeca () {
        tabuleiro = document.querySelector("#tabuleiro");
        peca = document.createElement("div");
        peca.style.top = "100px";
        peca.style.left = "100px";
        tabuleiro.appendChild(peca);
    }

    init();
})();
//usar matrix
