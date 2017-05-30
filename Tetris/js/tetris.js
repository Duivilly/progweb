(function () {

    init();

    //fazer closures//
    function init(){
        //pecas do tabuleiro
        pecas= ["q","i1","s1","l1"];
        //primeira peca
        random= Math.floor(Math.random() * 4);
        pecaAnterior= pecas[random];
        //execucao do jogo
        gameLoop= null;
        //gameover
        gameover= false;
        //linhas do tabuleiro
        lines= 12;
        //controle de left e rigth
        controll= 0;
        //peca atual
        id= null;
        //
        girar= true;
        //ups giros
        girarI= true;
        girarS= true;
        girarL= [true, false, false, false];
        girarT= [true, false, false, false];
        //controla a velocidade
        fps= 1;
        //pontuacao
        infor= null;
        score= 0;
        //proxima peca
        criarProximaPeca();
        //cria o tabuleiro
        createTabuleiro();
        //infor
        informacoes();
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
                if(girarI){
                    girar= false;
                    i2();
                    girarI= false;
                    girar= true;
                }else{
                    girar= false;
                    //evita bug na left
                    if(controll == -5){
                        controll= controll + 1;
                    }
                    //evita bug na right
                    if(controll == 6){
                        controll= controll - 2;
                    }
                    i1();
                    girarI= true;
                    girar= true;
                }
            }

            if(id == "s1" || id == "s2"){
                if(girarS){
                    girar= false;
                    //evita bug na lateral left
                    if(controll == -5){
                        controll= controll + 1; 
                        console.log(controll);
                    }
                    s2();
                    girarS= false;
                    girar= true;
                }else{
                    girar= false;
                    s1();
                    girar= true;
                    girarS= true;
                }
            }

            if(id == "l1" || id == "l2" || id == "l3" || id == "l4"){
                if(girarL[0]){
                    girar= false;
                    //evita bug na left
                    if(controll == -5){
                        controll= controll +1;
                    }
                    l2();
                    girarL[1]= true;
                    girarL[0]= false;
                    girar= true;
                }else if(girarL[1]){
                    girar= false;
                    l3();
                    girarL[2]= true;
                    girarL[1]= false;
                    girar= true;
                }else if(girarL[2]){
                    girar= false;
                    l4();
                    girarL[3]= true;
                    girarL[2]= false;
                    girar= true;
                }else{
                    girar= false;
                    l1();
                    girarL[0]= true;
                    girarL[3]= false;
                    girar= true;
                }
            }

            if(id == "t1" || id == "t2" || id == "t3" || id == "t4"){
                if(girarT[0]){
                    girar= false;
                    t2();
                    girarT[1]= true;
                    girarT[0]= false;
                    girar= true;
                }else if(girarT[1]){
                    girar= false;
                    //evita bug na left
                    if(controll == -5){
                        controll= controll + 1;
                    }
                    t3();
                    girarT[2]= true;
                    girarT[1]= false;
                    girar= true;
                }else if(girarT[2]){
                    girar= false;
                    t4();
                    girarT[3]= true;
                    girarT[2]= false;
                    girar= true;
                }else{
                    girar= false;
                    t1();
                    girarT[0]= true;
                    girarT[3]= false;
                    girar= true;
                }
            }
        }
        //down arrow
        else if (e.keyCode == '40') {
            if(down < 11){
                down= down + 1;
            }
        }
        //left arrow
        else if (e.keyCode == '37') {
            if(id == "i1" && controll > -4){
                controll= controll -1;
            }
            if(id == "i2" && controll > -5){
                controll= controll -1;
            }
            if(id == "q" && controll > -5){
                controll= controll -1;
            }
            if(id == "s1" && controll > -5){
                controll= controll -1;
            }
            if(id == "s2" && controll > -4){
                controll= controll -1;
            }
            if(id == "l1" && controll > -5){
                controll= controll -1;
            }
            if(id == "l2" && controll > -4){
                controll= controll -1;
            }
            if(id == "l3" && controll > -5){
                controll= controll -1;
            }
            if(id == "l4" && controll > -4){
                controll= controll -1;
            }
            if(id == "t1" && controll > -5){
                controll= controll -1;
            }
            if(id == "t2" && controll > -5){
                controll= controll -1;
            }
            if(id == "t3" && controll > -4){
                controll= controll -1;
            }
            if(id == "t4" && controll > -4){
                controll= controll -1;
            }

        }
        //right arrow
        else if (e.keyCode == '39') {
            if(id == "i1" && controll < 4){
                controll= controll + 1;
            }
            if(id == "i2" && controll < 6){
                controll= controll + 1;
            }
            if(id == "q" && controll < 5){
                controll= controll + 1;
            }
            if(id == "s1" && controll < 5){
                controll= controll + 1;
            }
            if(id == "s2" && controll < 5){
                controll= controll + 1;
            }
            if(id == "l1" && controll < 5){
                controll= controll + 1;
            }
            if(id == "l2" && controll < 5){
                controll= controll + 1;
            }
            if(id == "l3" && controll < 5){
                controll= controll + 1;
            }
            if(id == "l4" && controll < 5){
                controll= controll + 1;
            }
            if(id == "t1" && controll < 4){
                controll= controll + 1;
            }
            if(id == "t2" && controll < 5){
                controll= controll + 1;
            }
            if(id == "t3" && controll < 5){
                controll= controll + 1;
            }
            if(id == "t4" && controll < 6){
                controll= controll + 1;
            }
        }
    });

    function createPeca(){
        //id peca tabuleiro
        id= "t1";//pecaAnterior;
        //pecas do tabuleiro
        pecas= ["q","i1","s1","l1"];
        //primeira peca
        random= Math.floor(Math.random() * 4);
        //id proxima peca
        proximaPeca.id= pecas[random];
        pecaAnterior= pecas[random];
    }

    //inicio do jogo
    function start() {
        down= 0;
        createPeca();
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
                //base
                lines= 12;
            }
            if(id == "i2"){
                i2();
                //base
                lines= 9;
            }
            if(id == "q"){
                q();
                //base
                lines= 11;
            }
            if(id == "s1"){
                s1();
                //base
                lines= 10;
            }
            if(id == "s2"){
                s2();
                //base
                lines= 11;
            }
            if(id == "l1"){
                l1();
                //base
                lines= 10;
            }
            if(id == "l2"){
                l2();
                //base
                lines= 10;
            }
            if(id == "l3"){
                l3();
                //base
                lines= 10;
            }
            if(id == "l4"){
                l4();
                //base
                lines= 10;
            }
            if(id == "t1"){
                t1();
                //base
                lines= 11;
            }
            if(id == "t2"){
                t2();
                //base
                lines= 10;
            }
            if(id == "t3"){
                t3();
                //base
                lines= 10;
            }
            if(id == "t4"){
                t4();
                //base
                lines= 10;
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
        if(down < 10){
            colisao1= table.rows[down+2].cells[controll+5].style.backgroundColor;
            colisao2= table.rows[down+2].cells[controll+6].style.backgroundColor;
        }
        if(colisao1 == "black" || colisao2 == "black"){
            console.log("Colisão q"+" Posição: "+down);
            //atualiza jogadas
            guardarPosicoes();
            //limpa loop
            clearInterval(gameLoop);
            if(down == 1){
                //infor
                console.log("GAME OVER");
                document.getElementById('informacoes').removeChild(infor);
                gameover= true;
                score= "GAME OVER";
                informacoes();
            }else{
                //reinicia
                start();
            }
        }
    }

    function i1(){
        id= "i1";
        table.rows[down].cells[controll+4].style.backgroundColor= "black";
        table.rows[down].cells[controll+5].style.backgroundColor= "black";
        table.rows[down].cells[controll+6].style.backgroundColor= "black";
        table.rows[down].cells[controll+7].style.backgroundColor= "black";
        if(girar){
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
                    document.getElementById('informacoes').removeChild(infor);
                    gameover= true;
                    score= "GAME OVER";
                    informacoes();
                }else{
                    //reinicia
                    start();
                }
            }
        }
    }

    function i2(){
        id= "i2";
        table.rows[down].cells[controll+5].style.backgroundColor= "black";
        table.rows[down+1].cells[controll+5].style.backgroundColor= "black";
        table.rows[down+2].cells[controll+5].style.backgroundColor= "black";
        table.rows[down+3].cells[controll+5].style.backgroundColor= "black";
        if(girar){
            if(down < 8){
                colisao= table.rows[down+4].cells[controll+5].style.backgroundColor;
            }
            if(colisao == "black"){
                console.log("Colisão i2"+" Posição: "+down);
                //atualiza jogadas
                guardarPosicoes();
                //limpa loop
                clearInterval(gameLoop);
                if(down == 1){
                    //infor
                    console.log("GAME OVER");
                    document.getElementById('informacoes').removeChild(infor);
                    gameover= true;
                    score= "GAME OVER";
                    informacoes();
                }else{
                    //reinicia
                    start();
                }
            }
        }
    }

    function s1(){
        id= "s1";
        table.rows[down].cells[controll+5].style.backgroundColor= "black";
        table.rows[down+1].cells[controll+5].style.backgroundColor= "black";
        table.rows[down+1].cells[controll+6].style.backgroundColor= "black";
        table.rows[down+2].cells[controll+6].style.backgroundColor= "black";
        if(down < 9){
            colisao1= table.rows[down+2].cells[controll+5].style.backgroundColor;
            colisao2= table.rows[down+3].cells[controll+6].style.backgroundColor;
        }
        if(colisao1 == "black" || colisao2 == "black"){
            console.log("Colisão s1"+" Posição: "+down);
            //atualiza jogadas
            guardarPosicoes();
            //limpa loop
            clearInterval(gameLoop);
            if(down == 1){
                //infor
                console.log("GAME OVER");
                document.getElementById('informacoes').removeChild(infor);
                gameover= true;
                score= "GAME OVER";
                informacoes();
            }else{
                //reinicia
                start();
            }
        }
    }

    function s2(){
        id= "s2";
        table.rows[down].cells[controll+5].style.backgroundColor= "black";
        table.rows[down].cells[controll+6].style.backgroundColor= "black";
        table.rows[down+1].cells[controll+5].style.backgroundColor= "black";
        table.rows[down+1].cells[controll+4].style.backgroundColor= "black";
        if(girar){
            if(down < 10){
                colisao1= table.rows[down+1].cells[controll+6].style.backgroundColor;
                colisao2= table.rows[down+2].cells[controll+5].style.backgroundColor;
                colisao3= table.rows[down+2].cells[controll+4].style.backgroundColor;
            }
            if(colisao1 == "black" || colisao2 == "black" || colisao3 == "black"){
                console.log("Colisão s1"+" Posição: "+down);
                //atualiza jogadas
                guardarPosicoes();
                //limpa loop
                clearInterval(gameLoop);
                if(down == 1){
                    //infor
                    console.log("GAME OVER");
                    document.getElementById('informacoes').removeChild(infor);
                    gameover= true;
                    score= "GAME OVER";
                    informacoes();
                }else{
                    //reinicia
                    start();
                }
            }
        }
    }

    function l1(){
        id= "l1";
        table.rows[down].cells[controll+5].style.backgroundColor= "black";
        table.rows[down+1].cells[controll+5].style.backgroundColor= "black";
        table.rows[down+2].cells[controll+6].style.backgroundColor= "black";
        table.rows[down+2].cells[controll+5].style.backgroundColor= "black";
        if(girar){
            if(down < 9){
                colisao1= table.rows[down+3].cells[controll+6].style.backgroundColor;
                colisao2= table.rows[down+3].cells[controll+5].style.backgroundColor;
            }
            if(colisao1 == "black" || colisao2 == "black"){
                console.log("Colisão s1"+" Posição: "+down);
                //atualiza jogadas
                guardarPosicoes();
                //limpa loop
                clearInterval(gameLoop);
                if(down == 1){
                    //infor
                    console.log("GAME OVER");
                    document.getElementById('informacoes').removeChild(infor);
                    gameover= true;
                    score= "GAME OVER";
                    informacoes();
                }else{
                    //reinicia
                    start();
                }
            }
        }
    }

    function l2(){
        id= "l2";
        table.rows[down+1].cells[controll+4].style.backgroundColor= "black";
        table.rows[down+1].cells[controll+5].style.backgroundColor= "black";
        table.rows[down+1].cells[controll+6].style.backgroundColor= "black";
        table.rows[down+2].cells[controll+4].style.backgroundColor= "black";
        if(girar){
            if(down < 9){
                colisao1= table.rows[down+2].cells[controll+5].style.backgroundColor;
                colisao2= table.rows[down+2].cells[controll+6].style.backgroundColor;
                colisao3= table.rows[down+3].cells[controll+4].style.backgroundColor;
            }
            if(colisao1 == "black" || colisao2 == "black" || colisao3 == "black"){
                console.log("Colisão l2"+" Posição: "+down);
                //atualiza jogadas
                guardarPosicoes();
                //limpa loop
                clearInterval(gameLoop);
                if(down == 1){
                    //infor
                    console.log("GAME OVER");
                    document.getElementById('informacoes').removeChild(infor);
                    gameover= true;
                    score= "GAME OVER";
                    informacoes();
                }else{
                    //reinicia
                    start();
                }
            }
        }
    }

    function l3(){
        id= "l3";
        table.rows[down].cells[controll+5].style.backgroundColor= "black";
        table.rows[down].cells[controll+6].style.backgroundColor= "black";
        table.rows[down+1].cells[controll+6].style.backgroundColor= "black";
        table.rows[down+2].cells[controll+6].style.backgroundColor= "black";
        if(girar){
            if(down < 9){
                colisao1= table.rows[down+1].cells[controll+5].style.backgroundColor;
                colisao2= table.rows[down+3].cells[controll+6].style.backgroundColor;
            }
            if(colisao1 == "black" || colisao2 == "black"){
                console.log("Colisão l3"+" Posição: "+down);
                //atualiza jogadas
                guardarPosicoes();
                //limpa loop
                clearInterval(gameLoop);
                if(down == 1){
                    //infor
                    console.log("GAME OVER");
                    document.getElementById('informacoes').removeChild(infor);
                    gameover= true;
                    score= "GAME OVER";
                    informacoes();
                }else{
                    //reinicia
                    start();
                }
            }
        }
    }

    function l4(){
        id= "l4";
        table.rows[down+2].cells[controll+4].style.backgroundColor= "black";
        table.rows[down+2].cells[controll+5].style.backgroundColor= "black";
        table.rows[down+2].cells[controll+6].style.backgroundColor= "black";
        table.rows[down+1].cells[controll+6].style.backgroundColor= "black";
        if(girar){
            if(down < 9){
                colisao1= table.rows[down+3].cells[controll+4].style.backgroundColor;
                colisao2= table.rows[down+3].cells[controll+5].style.backgroundColor;
                colisao3= table.rows[down+3].cells[controll+6].style.backgroundColor;
            }
            if(colisao1 == "black" || colisao2 == "black" || colisao3 == "black"){
                console.log("Colisão l4"+" Posição: "+down);
                //atualiza jogadas
                guardarPosicoes();
                //limpa loop
                clearInterval(gameLoop);
                if(down == 1){
                    //infor
                    console.log("GAME OVER");
                    document.getElementById('informacoes').removeChild(infor);
                    gameover= true;
                    score= "GAME OVER";
                    informacoes();
                }else{
                    //reinicia
                    start();
                }
            }
        }
    }

    function t1(){
        id= "t1";
        table.rows[down].cells[controll+5].style.backgroundColor= "black";
        table.rows[down].cells[controll+6].style.backgroundColor= "black";
        table.rows[down].cells[controll+7].style.backgroundColor= "black";
        table.rows[down+1].cells[controll+6].style.backgroundColor= "black";
        if(girar){
            if(down < 10){
                colisao1= table.rows[down+1].cells[controll+5].style.backgroundColor;
                colisao2= table.rows[down+1].cells[controll+7].style.backgroundColor;
                colisao3= table.rows[down+2].cells[controll+6].style.backgroundColor;
            }
            if(colisao1 == "black" || colisao2 == "black" || colisao3 == "black"){
                console.log("Colisão l4"+" Posição: "+down);
                //atualiza jogadas
                guardarPosicoes();
                //limpa loop
                clearInterval(gameLoop);
                if(down == 1){
                    //infor
                    console.log("GAME OVER");
                    document.getElementById('informacoes').removeChild(infor);
                    gameover= true;
                    score= "GAME OVER";
                    informacoes();
                }else{
                    //reinicia
                    start();
                }
            }
        }
    }

    function t2(){
        id= "t2";
        table.rows[down+1].cells[controll+5].style.backgroundColor= "black";
        table.rows[down].cells[controll+6].style.backgroundColor= "black";
        table.rows[down+1].cells[controll+6].style.backgroundColor= "black";
        table.rows[down+2].cells[controll+6].style.backgroundColor= "black";
        if(girar){
            if(down < 9){
                colisao1= table.rows[down+2].cells[controll+5].style.backgroundColor;
                colisao2= table.rows[down+3].cells[controll+6].style.backgroundColor;
            }
            if(colisao1 == "black" || colisao2 == "black"){
                console.log("Colisão t2"+" Posição: "+down);
                //atualiza jogadas
                guardarPosicoes();
                //limpa loop
                clearInterval(gameLoop);
                if(down == 1){
                    //infor
                    console.log("GAME OVER");
                    document.getElementById('informacoes').removeChild(infor);
                    gameover= true;
                    score= "GAME OVER";
                    informacoes();
                }else{
                    //reinicia
                    start();
                }
            }
        }
    }

    function t3(){
        id= "t3";
        table.rows[down+2].cells[controll+4].style.backgroundColor= "black";
        table.rows[down+2].cells[controll+5].style.backgroundColor= "black";
        table.rows[down+2].cells[controll+6].style.backgroundColor= "black";
        table.rows[down+1].cells[controll+5].style.backgroundColor= "black";
        if(girar){
            if(down < 9){
                colisao1= table.rows[down+3].cells[controll+4].style.backgroundColor;
                colisao2= table.rows[down+3].cells[controll+5].style.backgroundColor;
                colisao3= table.rows[down+3].cells[controll+6].style.backgroundColor;
            }
            if(colisao1 == "black" || colisao2 == "black" || colisao3 == "black"){
                console.log("Colisão t3"+" Posição: "+down);
                //atualiza jogadas
                guardarPosicoes();
                //limpa loop
                clearInterval(gameLoop);
                if(down == 1){
                    //infor
                    console.log("GAME OVER");
                    document.getElementById('informacoes').removeChild(infor);
                    gameover= true;
                    score= "GAME OVER";
                    informacoes();
                }else{
                    //reinicia
                    start();
                }
            }
        }
    }

    function t4(){
        id= "t4";
        table.rows[down].cells[controll+4].style.backgroundColor= "black";
        table.rows[down+1].cells[controll+4].style.backgroundColor= "black";
        table.rows[down+1].cells[controll+5].style.backgroundColor= "black";
        table.rows[down+2].cells[controll+4].style.backgroundColor= "black";
        if(girar){
            if(down < 9){
                colisao1= table.rows[down+2].cells[controll+5].style.backgroundColor;
                colisao2= table.rows[down+3].cells[controll+4].style.backgroundColor;
            }
            if(colisao1 == "black" || colisao2 == "black"){
                console.log("Colisão t3"+" Posição: "+down);
                //atualiza jogadas
                guardarPosicoes();
                //limpa loop
                clearInterval(gameLoop);
                if(down == 1){
                    //infor
                    console.log("GAME OVER");
                    document.getElementById('informacoes').removeChild(infor);
                    gameover= true;
                    score= "GAME OVER";
                    informacoes();
                }else{
                    //reinicia
                    start();
                }
            }
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
                //atualiza pontuacao
                document.getElementById('informacoes').removeChild(infor);
                score= score + 100;
                informacoes();
                //
                pecasi= [];
                pecasj= [];
                guardarPosicoes();
                //deslocar para baixo

            }
            cont= 0;
        }
    }

    function informacoes(){
        infor= document.createElement('div');
        infor.style.width= "290px";
        infor.style.height= "50px";
        infor.style.backgroundColor= "yellow";
        infor.innerHTML= "SCORE: "+score;
        document.getElementById('informacoes').appendChild(infor);
    }

})();
