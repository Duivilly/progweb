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
        tabela.border= "0";//10x7
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

    i= true;
    s= true;

    //controle de posicoes das pecas
    addEventListener("keydown", function(e) {
        //up arrow
        if (e.keyCode == '38') {
            if(i){
                limpaI1();
                I2();
                i= false;
            }else{
                limpaI2();
                I1();
                i= true;
            }

            if(s){
                limpaS1();
                S2();
                s= false;
            }else{
                limpaS2();
                S1();
                s= true;
            }
            
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
        colisao= null;
        peca= "I1";
        gameLoop= setInterval(run, 1000);
    }

    function run() {
        //colisaoQT= tabela.rows[down+1].cells[controll+1].style.backgroundColor;
        //colisaoL= tabela.rows[down+2].cells[controll+1].style.backgroundColor;
        //colisaoL1= tabela.rows[down+2].cells[controll].style.backgroundColor;
        //colisaoI= tabela.rows[down].cells[controll].style.backgroundColor;
        if(down < 11){
            if(down != 0){
                if(peca == "I1"){
                    limpaI1();
                }else if(peca == "I2"){
                    limpaI2();
                }
                if(peca == "S1"){
                    limpaS1();
                }else if(peca == "S2"){
                    limpaS2();
                }
            }
            if(true){//colisao
                if(peca == "I1"){
                    I1();
                }else if(peca == "I2"){
                    I2();
                }
                if(peca == "S1"){
                    S1();
                }else if(peca == "S2"){
                    S2();
                }
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

    function T1(){
        tabela.rows[down].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down].cells[controll+1].style.backgroundColor= "orange";
        tabela.rows[down].cells[controll+2].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll+1].style.backgroundColor= "orange";
    }

    function limpaT1(){
        tabela.rows[downAntes].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes].cells[controllAntes+2].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
    }

    function T2(){
        tabela.rows[down].cells[controll+2].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll+2].style.backgroundColor= "orange";
        tabela.rows[down+2].cells[controll+2].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll+1].style.backgroundColor= "orange";
    }

    function limpaT2(){
        tabela.rows[downAntes].cells[controllAntes+2].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes+2].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+2].cells[controllAntes+2].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
    }

    function T3(){
        tabela.rows[down+2].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+2].cells[controll+1].style.backgroundColor= "orange";
        tabela.rows[down+2].cells[controll+2].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll+1].style.backgroundColor= "orange";
    }

    function limpaT3(){
        tabela.rows[downAntes+2].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+2].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+2].cells[controllAntes+2].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
    }

    function T4(){
        tabela.rows[down].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+2].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll+1].style.backgroundColor= "orange";
    }

    function limpaT4(){
        tabela.rows[downAntes].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+2].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
    }

    function Q(){
        tabela.rows[down].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down].cells[controll+1].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll+1].style.backgroundColor= "orange";
    }

    function limpaQ(){
        tabela.rows[downAntes].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
    }

    function L1(){
        tabela.rows[down].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+2].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+2].cells[controll+1].style.backgroundColor= "orange";
    }

    function limpaL1(){
        tabela.rows[downAntes].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+2].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+2].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
    }

    function L2(){
        tabela.rows[down].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down].cells[controll+1].style.backgroundColor= "orange";
        tabela.rows[down].cells[controll+2].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll].style.backgroundColor= "orange";
    }

    function limpaL2(){
        tabela.rows[downAntes].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes].cells[controllAntes+2].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes].style.backgroundColor= "#5F9EA0";
    }

    function L3(){
        tabela.rows[down].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down].cells[controll+1].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll+1].style.backgroundColor= "orange";
        tabela.rows[down+2].cells[controll+1].style.backgroundColor= "orange";
    }

    function limpaL3(){
        tabela.rows[downAntes].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+2].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
    }

    function L4(){
        tabela.rows[down+1].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll+1].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll+2].style.backgroundColor= "orange";
        tabela.rows[down].cells[controll+2].style.backgroundColor= "orange";
    }

    function limpaL4(){
        tabela.rows[downAntes+1].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes+2].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes].cells[controllAntes+2].style.backgroundColor= "#5F9EA0";
    }

    function S1(){
        peca= "S1";
        tabela.rows[down].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll+1].style.backgroundColor= "orange";
        tabela.rows[down+2].cells[controll+1].style.backgroundColor= "orange";
    }

    function limpaS1(){
        tabela.rows[downAntes].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+2].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
    }

    function S2(){
        peca= "S2";
        tabela.rows[down].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down].cells[controll+1].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll+1].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll+2].style.backgroundColor= "orange";
    }

    function limpaS2(){
        tabela.rows[downAntes].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes+2].style.backgroundColor= "#5F9EA0";
    }

    function I1(){
        peca= "I1";
        tabela.rows[down].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down].cells[controll+1].style.backgroundColor= "orange";
        tabela.rows[down].cells[controll+2].style.backgroundColor= "orange";
        tabela.rows[down].cells[controll+3].style.backgroundColor= "orange";
    }

    function limpaI1(){
        tabela.rows[downAntes].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes].cells[controllAntes+1].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes].cells[controllAntes+2].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes].cells[controllAntes+3].style.backgroundColor= "#5F9EA0";
    }

    function I2(){
        peca= "I2";
        tabela.rows[down].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+1].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+2].cells[controll].style.backgroundColor= "orange";
        tabela.rows[down+3].cells[controll].style.backgroundColor= "orange";
    }

    function SlimpaI2(){
        tabela.rows[downAntes].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+1].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+2].cells[controllAntes].style.backgroundColor= "#5F9EA0";
        tabela.rows[downAntes+3].cells[controllAntes].style.backgroundColor= "#5F9EA0";
    }

})();