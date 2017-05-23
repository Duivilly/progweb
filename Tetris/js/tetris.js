(function () {

    init();

    //fazer closures//
    function init(){
        //cria o tabuleiro
        createTabuleiro();
        //controle
        controll= 0;
        //inicia o jogo
        start();
    }

    //cria o tabuleiro com uma tabela
    function createTabuleiro(){
        tabela= document.createElement("table");
        //cor dos blocos do tabuleiro
        tabela.id= "tabela";
        tabela.style.backgroundColor= "#5F9EA0";
        //borda da tabela
        tabela.border= "0";
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
        createLinhaTabuleiro();
        document.getElementById("tabuleiro").appendChild(tabela);
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
        tabela.appendChild(tr);
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
            I2();
            limpaI();
        }
        //down arrow
        else if (e.keyCode == '40') {
            down= down + 1;
        }
        //left arrow
        else if (e.keyCode == '37') {
            if(controll > 0){
                controll= controll - 1;
            }
        }
        //right arrow
        else if (e.keyCode == '39') {
            if(controll < 10){
                controll= controll + 1;
            }
        }
    });

    //inicio do jogo
    function start() {
        down= 0;
        downAntes= 0;
        controllAntes= 0;
        gameLoop= setInterval(run, 1000);
    }

    function run() {
        //colisaoQT= tabela.rows[down+1].cells[controll+1].style.backgroundColor;
        //colisaoL= tabela.rows[down+2].cells[controll+1].style.backgroundColor;
        //colisaoL1= tabela.rows[down+2].cells[controll].style.backgroundColor;
        colisaoI= tabela.rows[down].cells[controll].style.backgroundColor;
        if(down < 15){
            if(down != 0){
                limpaS();
            }
            if(true){
                S();
                console.log("backgroundColor:"+tabela.rows[down+1].cells[controll+1].style.backgroundColor);
                downAntes= down;
                controllAntes= controll;
                down= down + 1;
            }else{
                clearInterval(gameLoop);
                start();
            }
            console.log("agora("+down+","+controll+")"+" -- antes("+downAntes+","+controllAntes+")");
        }else{
            clearInterval(gameLoop);
            start();
        }
    }

    function proximaPeca(){

    }

    function createPeca() {
        
    }

    function T(){
        tabela.rows[down].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down].cells[controll+1].style.backgroundColor= "orange";
        tabela.rows[down].cells[controll+2].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll+1].style.backgroundColor= "orange";
    }

    function Q(){
        tabela.rows[down].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down].cells[controll+1].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll+1].style.backgroundColor= "orange";
    }

    function L(){
        tabela.rows[down].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+2].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+2].cells[controll+1].style.backgroundColor= "orange";
    }

    function S(){
        tabela.rows[down].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll+1].style.backgroundColor= "orange";
        tabela.rows[down+2].cells[controll+1].style.backgroundColor= "orange";
    }

    function I(){
        tabela.rows[down].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down].cells[controll+1].style.backgroundColor= "orange";
        tabela.rows[down].cells[controll+2].style.backgroundColor= "orange";
        tabela.rows[down].cells[controll+3].style.backgroundColor= "orange";
    }

    function I2(){
        tabela.rows[down].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+2].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+3].cells[controll].style.backgroundColor= "orange";
    }

    function girarI(){
        tabela.rows[down+1].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+2].cells[controll+1].style.backgroundColor= "orange";
        tabela.rows[down].cells[controll+2].style.backgroundColor= "orange";
        tabela.rows[down].cells[controll+3].style.backgroundColor= "orange";
    }

    function limpaT(){
        tabela.rows[downAntes].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes].cells[controllAntes+2].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
    }

    function limpaQ(){
        tabela.rows[downAntes].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
    }

    function limpaL(){
        tabela.rows[downAntes].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+2].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+2].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
    }

    function limpaS(){
        tabela.rows[downAntes].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+2].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
    }

    function limpaI(){
        tabela.rows[downAntes].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes].cells[controllAntes+2].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes].cells[controllAntes+3].style.backgroundColor= "#5F9EA0";
    }

})();