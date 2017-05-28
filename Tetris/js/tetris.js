(function () {

    init();

    //fazer closures//
    function init(){
        //execucao do jogo
        gameLoop= null;
        //linhas do tabuleiro
        lines= 12;
        //controle de left e rigth
        controll= 0;
        //peca atual
        id= null;
        //ups giros
        girarI= true;
        girarS= true;
        girarL= [true, false, false, false];
        girarT= [true, false, false, false];
        //controla a velocidade
        fps= 1;
        //proxima peca
        criarProximaPeca();
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
            if(id == "i1" || id == "i2"){
                //verifica base
                if(down <= 8){
                    if(girarI){
                        //table.id= "i2";
                        i2();
                        girarI= false;
                    }else{
                        //table.id= "i1";
                        i1();
                        girarI= true;
                    }
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
            if(down < 12){
                down= down + 1;
            }
        }
        //left arrow
        else if (e.keyCode == '37') {
            if(id == "i1" && controll > -4){
                controll= controll -1;
            }
        }
        //right arrow
        else if (e.keyCode == '39') {
            if(id == "i1" && controll < 4){
                controll= controll + 1;
            }
        }
    });

    //inicio do jogo
    function start() {
        down= 0;
        //id proxima peca
        proximaPeca.id= "i1";
        //id peca tabuleiro
        id= "i1";
        gameLoop= setInterval(run, 1000/fps);
    }

    function run() {
        if(down < lines){
            //remove tabela do tabuleiro
            document.getElementById('tabuleiro').removeChild(table);
            //cria nova tabela
            createTabuleiro();
            //aplicar pecas
            aplicarPosicoes();       
            //peca i
            if(id == "i1"){
                i1();
                lines= 12;
            }else{
                if(colisaoI2()){
                    i2();
                    //base
                    lines= 9;
                }else{
                    //limpa loop
                    clearInterval(gameLoop);
                    //reinicia
                    start();
                }
            }
            //console.log("down: "+down+" controll: "+controll);
            //move para baixo
            down= down + 1;
            calculaPoint();
            //coloca tabela no tabuleiro
            document.getElementById('tabuleiro').appendChild(table);
        }else{
            //atualiza jogadas
            guardarPosicoes();
            //limpa loop
            clearInterval(gameLoop);
            //reinicia
            start();
        }
    }

    //cria o tabuleiro com uma tabela
    function criarProximaPeca(){
        proximaPeca= document.createElement("table");
        //cor dos blocos do tabuleiro
        proximaPeca.style.backgroundColor= "orange";
        //borda da tabela
        proximaPeca.border= "0";
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

    function q(){
        table.rows[down].cells[controll+5].style.backgroundColor= "black";
        table.rows[down].cells[controll+6].style.backgroundColor= "black";
        table.rows[down+1].cells[controll+5].style.backgroundColor= "black";
        table.rows[down+1].cells[controll+6].style.backgroundColor= "black";
    }

    function i1(){
        id= "i1";
        table.rows[down].cells[controll+4].style.backgroundColor= "black";
        table.rows[down].cells[controll+5].style.backgroundColor= "black";
        table.rows[down].cells[controll+6].style.backgroundColor= "black";
        table.rows[down].cells[controll+7].style.backgroundColor= "black";
        
        if(down < 11){
            colisao1= table.rows[down+1].cells[controll+4].style.backgroundColor;
            colisao2= table.rows[down+1].cells[controll+5].style.backgroundColor;
            colisao3= table.rows[down+1].cells[controll+6].style.backgroundColor;
            colisao4= table.rows[down+1].cells[controll+7].style.backgroundColor;
        }
        if(colisao1 == "black" || colisao2 == "black" || colisao3 == "black" || colisao4 == "black"){
            console.log("Colisão i1"+" Posição: "+down);
            //atualiza jogadas
            guardarPosicoes();
            //limpa loop
            clearInterval(gameLoop);
            if(down == 1){
                //infor
                console.log("GAME OVER");
            }else{
                //reinicia
                start();
            }
        }
    }

    function i2(){
        id= "i2";
        table.rows[down-1].cells[controll+5].style.backgroundColor= "black";
        table.rows[down].cells[controll+5].style.backgroundColor= "black";
        table.rows[down+1].cells[controll+5].style.backgroundColor= "black";
        table.rows[down+2].cells[controll+5].style.backgroundColor= "black";
    }

    function colisaoI2(){
        colisao= table.rows[down+2].cells[controll+5].style.backgroundColor;
        if(colisao == "black"){
            console.log("colisaoI2");
            return false;
        }else{
            return true;
        }
    }

    //
    pecasi= [];
    pecasj= [];
    //

    function guardarPosicoes(){
        cont= 0;
        for(var i= 0; i < 12; i++){
            for(var j= 0; j < 12; j++){
                if(table.rows[i].cells[j].style.backgroundColor == "black"){
                    //console.log("guardado: "+i+" "+j)
                    pecasi[cont]= i;
                    pecasj[cont]= j;
                    cont= cont + 1;
                }
            }
        }
    }

    function aplicarPosicoes(){
        for(var a= 0; a < pecasi.length; a++){
            table.rows[pecasi[a]].cells[pecasj[a]].style.backgroundColor= "black";
            //console.log('aplicando...');
            //console.log(pecasi[a]+" "+pecasj[a]);
        }
    }

    function calculaPoint(){
        cont= 0;
        for(var i= 0; i < 12; i++){
            for(var j= 0; j < 12; j++){
                if(table.rows[i].cells[j].style.backgroundColor == "black"){
                    cont= cont + 1;
                }
            }
            if(cont == 12){
                //limpa point
                for(var l= 11; l > 0; l--){
                    for(var c= 11; c >= 0; c--){
                        if(table.rows[l].cells[c].style.backgroundColor == "black"){
                            table.rows[l].cells[c].style.backgroundColor= table.rows[l-1].cells[c].style.backgroundColor;
                        }
                    }
                }
                console.log('aplicando deslocamento...');
                pecasi= [];
                pecasj= [];
                guardarPosicoes();
                //deslocar para baixo

            }
            cont= 0;
        }
    }

})();
