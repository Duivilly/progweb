(function () {

    var tabuleiro;
    var peca;
    var fps= 2;
    var gameLoop;
    var controle= 6;

    function createTabuleiro(){
        table= document.createElement("table");
        table.style.backgroundColor= "#FFFACD";
        table.border= "0";
        createLinhaTabuleiro();
        createLinhaTabuleiro();
        createLinhaTabuleiro();
        createLinhaTabuleiro();
        createLinhaTabuleiro();
        createLinhaTabuleiro();
        createLinhaTabuleiro();
        createLinhaTabuleiro();
        createLinhaTabuleiro();
        createLinhaTabuleiro();
        createLinhaTabuleiro();
        createLinhaTabuleiro();
        createLinhaTabuleiro();

        document.getElementById("tabuleiro").appendChild(table);
    }

    function createLinhaTabuleiro(){
        tr= document.createElement("tr");
        createColunaTabuleiro();
        createColunaTabuleiro();
        createColunaTabuleiro();
        createColunaTabuleiro();
        createColunaTabuleiro();
        createColunaTabuleiro();
        createColunaTabuleiro();
        createColunaTabuleiro();
        createColunaTabuleiro();
        createColunaTabuleiro();
        createColunaTabuleiro();
        createColunaTabuleiro();
        createColunaTabuleiro();
        table.appendChild(tr);
    }

    function createColunaTabuleiro(){
        td= document.createElement("td");
        td.width= "20";
        td.height= "20";
        tr.appendChild(td);
    }

    addEventListener("keydown", function(e) {

        if (e.keyCode == '38') {
            //up arrow
            //peca.style.top = (parseInt(peca.style.top) - 10) + "px";
        }
        else if (e.keyCode == '40') {
            //down arrow
            //peca.style.top = (parseInt(peca.style.top) + 10) + "px";
            if(coluna < 13){
                coluna= coluna +1;
            }
        }
        else if (e.keyCode == '37') {
            //left arrow
            //peca.style.left = (parseInt(peca.style.left) - 10) + "px";
            if(controle > 0){
                controle= controle -1;
            }
        }
        else if (e.keyCode == '39') {
            //right arrow
            //peca.style.left= (parseInt(peca.style.left) + 10) + "px";
            if(controle < 12){
                controle= controle +1;
            }
        }
    });

    function init() {
        coluna= 0;
        gameLoop= setInterval(run, 1000/fps);
    }

    function run() {
        if(parseInt(coluna) < 13){
            createPeca();
            coluna= coluna + 1;
            console.log(coluna);
        }else{
            clearInterval(gameLoop);
            init();
        }
    }

    function createPeca() {
        table.rows[coluna].cells[controle-1].style.background= "yellow";
        table.rows[coluna].cells[controle].style.background= "yellow";
        table.rows[coluna].cells[controle+1].style.background= "yellow";
    }

    function limpar() {
        table.rows[coluna-1].cells[controle].style.background= "#FFFACD";
    }

    createTabuleiro();
    init();
})();