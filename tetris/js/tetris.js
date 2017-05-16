(function () {

    var tabuleiro;
    var peca;
    var fps= 5;
    var gameLoop;

    addEventListener("keydown", function(e) {

        if (e.keyCode == '38') {
          //up arrow
          //peca.style.top = (parseInt(peca.style.top) - 10) + "px";
        }
        else if (e.keyCode == '40') {
          //down arrow
          //peca.style.top = (parseInt(peca.style.top) + 10) + "px";
        }
        else if (e.keyCode == '37') {
           //left arrow
           //peca.style.left = (parseInt(peca.style.left) - 10) + "px";
            posicao_x_w= posicao_x_y;
            posicao_x_y= posicao_x_y -1;
        }
        else if (e.keyCode == '39') {
           //right arrow
           //peca.style.left= (parseInt(peca.style.left) + 10) + "px";
            posicao_x_w= posicao_x_y;
            posicao_x_y= posicao_x_y +1;
        }
    });

    function init() {
        posicao_y_y= 1;
        posicao_x_y= 3;
        posicao_y_w= 0;
        posicao_x_w= 0;
        createPeca();
        gameLoop= setInterval(run, 1000/fps);
    }

    function run() {
        var posicao= parseInt(peca.style.top);
        posicao= posicao + 10;
        if (posicao >= 200) {
            clearInterval(gameLoop);
            posicao= 0;
            init();
        }
        peca.style.top= posicao + "px";
        //caminha
        $(document).ready(function(){
            $("table tr:nth-child("+parseInt(posicao_y_y)+") td:nth-child("+parseInt(posicao_x_y)+")").css("background-color", "yellow");
            $("table tr:nth-child("+parseInt(posicao_y_w)+") td:nth-child("+parseInt(posicao_x_w)+")").css("background-color", "white");
        });
    }

    // function t() {
    //     $(document).ready(function(){
    //         $("table tr:nth-child(3) td:nth-child(2)").css("background-color", "yellow");
    //     });
    // }

    function createPeca() {
        tabuleiro= document.querySelector("#tabuleiro");
        peca= document.createElement("div");
        peca.style.top= "10px";
        peca.style.left= "10px";
        tabuleiro.appendChild(peca);
    }

    init();
})();