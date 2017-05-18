(function () {

    init();

    //fazer closures//
    function init(){
        //o tabuleiro
        tabuleiro= "";
        //nova peca
        peca= "";
        //execucao do jogo
        gameLoop= "";
        //controle de left e rigth
        controll= 6;
        //controla a velocidade
        fps= 1;
        //cria o tabuleiro
        createTabuleiro();
        //inicia o jogo
        start();
    }

    //cria o tabuleiro com uma tabela
    function createTabuleiro(){
        table= document.createElement("table");
        //cor dos blocos do tabuleiro
        table.style.backgroundColor= "#FFFACD";
        //borda da tabela
        table.border= "1";
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

    //cria as linhas da tabela
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

    //cria as colunas da tabela
    function createColunaTabuleiro(){
        td= document.createElement("td");
        //tamanho de cada bloco do tabuleiro
        td.width= "20";
        td.height= "20";
        tr.appendChild(td);
    }

    //controle de posicoes das pecas
    addEventListener("keydown", function(e) {
        //up arrow
        if (e.keyCode == '38') {
            //peca.style.top = (parseInt(peca.style.top) - 10) + "px";
        }
        //down arrow
        else if (e.keyCode == '40') {
            //peca.style.top = (parseInt(peca.style.top) + 10) + "px";
        }
        //left arrow
        else if (e.keyCode == '37') {
            //peca.style.left = (parseInt(peca.style.left) - 10) + "px";
            if(controll > 0){
                controll= controll -1;
            }
        }
        //right arrow
        else if (e.keyCode == '39') {
            //peca.style.left= (parseInt(peca.style.left) + 10) + "px";
            if(controll < 12){
                controll= controll +1;
            }
        }
    });

    //inicio do jogo
    function start() {
        linha= 0;
        //createPeca();
        gameLoop= setInterval(run, 1000/fps);
    }

    function run() {
        //console.log('px:'+peca.style.backgroundColor);
        //peca.style.top= linha +"px";
        if (linha < 13) {
            table.rows[linha].cells[controll-1].style.backgroundColor= "green";
            table.rows[linha].cells[controll].style.backgroundColor= "green";
            table.rows[linha].cells[controll+1].style.backgroundColor= "green";
            if(linha != 0){
                table.rows[linha-1].cells[controll-1].style.backgroundColor= "#FFFACD";
                table.rows[linha-1].cells[controll].style.backgroundColor= "#FFFACD";
                table.rows[linha-1].cells[controll+1].style.backgroundColor= "#FFFACD";
            }
            linha= linha + 1;
            console.log(linha);
        }
    }

    function createPeca() {
        proximaPeca= document.getElementById('proxima-peca');
        peca= document.createElement('div');
        peca.style.backgroundColor= "orange";
        proximaPeca.appendChild(peca);
    }

})();