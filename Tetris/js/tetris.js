(function () {

    init();

    //fazer closures//
    function init(){
        //execucao do jogo
        gameLoop= null;
        //linhas
        lines= 4;
        //controle de left e rigth
        controll= 0;
        //ups
        girarI= true;
        girarS= true;
        girarL= [true, false, false, false];
        girarT= [true, false, false, false];
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
        table.style.backgroundColor= "#5F9EA0";
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
            if(table.id == "i1" || table.id == "i2"){
                if(girarI){
                    table.id= "i2";
                    girarI= false;
                }else{
                    table.id= "i1";
                    girarI= true;
                }
            }

            if(table.id == "s1" || table.id == "s2"){
                if(girarS){
                    table.id= "s2";
                    girarS= false;
                }else{
                    table.id= "s1";
                    girarS= true;
                }
            }

            if(table.id == "l1" || table.id == "l2" || table.id == "l3" || table.id == "l4"){
                if(girarL[0]){
                    table.id= "l2";
                    girarL[1]= true;
                    girarL[0]= false;
                }else if(girarL[1]){
                    table.id= "l3";
                    girarL[2]= true;
                    girarL[1]= false;
                }else if(girarL[2]){
                    table.id= "l4";
                    girarL[3]= true;
                    girarL[2]= false;
                }else{
                    table.id= "l1";
                    girarL[0]= true;
                    girarL[3]= false;
                }
            }

            if(table.id == "t1" || table.id == "t2" || table.id == "t3" || table.id == "t4"){
                if(girarT[0]){
                    table.id= "t2";
                    girarT[1]= true;
                    girarT[0]= false;
                }else if(girarT[1]){
                    table.id= "t3";
                    girarT[2]= true;
                    girarT[1]= false;
                }else if(girarT[2]){
                    table.id= "t4";
                    girarT[3]= true;
                    girarT[2]= false;
                }else{
                    table.id= "t1";
                    girarT[0]= true;
                    girarT[3]= false;
                }
            }
        }
        //down arrow
        else if (e.keyCode == '40') {
            
        }
        //left arrow
        else if (e.keyCode == '37') {
            controll= controll -1;
        }
        //right arrow
        else if (e.keyCode == '39') {
            controll= controll + 1;
        }
    });

    //inicio do jogo
    function start() {
        down= 0;
        proximaPeca();
        //random
        proximaPeca.id= "i1";
        gameLoop= setInterval(run, 1000/fps);
    }

    jogadas= [];

    function run() {
        if(down < lines){
            //remove tabela do tabuleiro
            document.getElementById('tabuleiro').removeChild(table);
            //cria nova tabela
            createTabuleiro();
            //inseri peca atual
            table.id= "t1";

            //verifica colunas preenchidas
            var cont= 0;
            for(var i= 0; i < lines; i++) {
                if(table.rows[down].cells[i].style.backgroundColor == "black"){
                    cont= cont + 1;
                }
            }
            //se colunas preenchidas totalmente limpa e desce pecas
            if(cont == lines){
                console.log('limpa');
            }
            down= down + 1;
            //coloca tabela no tabuleiro
            document.getElementById('tabuleiro').appendChild(table);
        }else{
            clearInterval(gameLoop);
            //atualiza jogadas
            stop= (down-1)+","+controll;
            jogadas[0]= stop.split(',');
            console.log(jogadas);
            //start();
        }
    }

    //cria o tabuleiro com uma tabela
    function proximaPeca(){
        proximaPeca= document.createElement("table");
        //cor dos blocos do tabuleiro
        proximaPeca.style.backgroundColor= "orange";
        //borda da tabela
        proximaPeca.border= "1";
        createLinhaProximaPeca();
        createLinhaProximaPeca();
        createLinhaProximaPeca();
        document.getElementById('proxima-peca').appendChild(proximaPeca);
    }

    //cria as linhas da tabela
    function createLinhaProximaPeca(){
        tr= document.createElement("tr");
        createColunaProximaPeca();
        createColunaProximaPeca();
        createColunaProximaPeca();
        createColunaProximaPeca();
        createColunaProximaPeca();
        createColunaProximaPeca();
        createColunaProximaPeca();
        createColunaProximaPeca();
        createColunaProximaPeca();
        createColunaProximaPeca();
        createColunaProximaPeca();
        createColunaProximaPeca();
        proximaPeca.appendChild(tr);
    }

    //cria as colunas da tabela
    function createColunaProximaPeca(){
        td= document.createElement("td");
        //tamanho de cada bloco do tabuleiro
        td.width= "20";
        td.height= "20";
        tr.appendChild(td);
    }

})();