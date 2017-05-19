(function () {

    init();

    //fazer closures//
    function init(){
        //o tabuleiro
        tabuleiro= null;
        //nova peca
        pecas= null;
        //execucao do jogo
        gameLoop= null;
        //controle de left e rigth
        controll= 0;
        //troca das pecas
        girarI= false;
        girarS= true;
        girarSS= true;
        girarL= true;
        girarLL= [true,false,false,false];
        girarT= true;
        girarTT= [true,false,false,false];
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
        table.border= "0";
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
        table.appendChild(tr);
    }

    //cria as colunas da tabela
    function createColunaTabuleiro(){
        td= document.createElement("td");
        //tamanho de cada bloco do tabuleiro
        td.width= "80";
        td.height= "80";
        tr.appendChild(td);
    }

    //controle de posicoes das pecas
    addEventListener("keydown", function(e) {
        //up arrow
        if (e.keyCode == '38') {
            //girar I
            if(peca.id == "I"){
                document.querySelector("#I").style.backgroundColor = "yellow";
                if(girarI){
                    document.querySelector("#I").style.width = "80px";
                    document.querySelector("#I").style.height = "20px";
                    girarI= false;
                }else{
                    document.querySelector("#I").style.width = "20px";
                    document.querySelector("#I").style.height = "80px";
                    girarI= true;
                }
            }

            //girar S
            if(peca.id == "S"){
                document.querySelector("#S").style.backgroundColor = "black";
                document.querySelector("#SS").style.backgroundColor = "black";
                if(girarSS){
                    document.querySelector("#SS").style.width = "40px";
                    document.querySelector("#SS").style.height = "20px";
                    girarSS= false;
                }else{
                    document.querySelector("#SS").style.width = "20px";
                    document.querySelector("#SS").style.height = "40px";
                    girarSS= true;
                }

                if(girarS){
                    document.querySelector("#S").style.width = "40px";
                    document.querySelector("#S").style.height = "20px";
                    girarS= false;
                }else{
                    document.querySelector("#S").style.width = "20px";
                    document.querySelector("#S").style.height = "40px";
                    girarS= true;
                }
            }

            //girar L
            if(peca.id == "L"){
                document.querySelector("#L").style.backgroundColor = "green";
                document.querySelector("#LL").style.backgroundColor = "green";
                if(girarL){
                    document.querySelector("#L").style.width = "60px";
                    document.querySelector("#L").style.height = "20px";
                    //document.querySelector("#L").style.top = "-10px";//static
                    girarL= false;
                }else{
                    document.querySelector("#L").style.width = "20px";
                    document.querySelector("#L").style.height = "60px";
                    //document.querySelector("#L").style.top = "10px";//static
                    girarL= true;
                }

                if(girarLL[0]){
                    document.querySelector("#LL").style.top = "20px";
                    document.querySelector("#LL").style.left = "0px";
                    girarLL[0]= false;
                    girarLL[1]= true;
                }else if(girarLL[1]){
                    document.querySelector("#LL").style.top = "0px";
                    document.querySelector("#LL").style.left = "-20px";
                    girarLL[1]= false;
                    girarLL[2]= true;
                }else if(girarLL[2]){
                    document.querySelector("#LL").style.top = "-20px";
                    document.querySelector("#LL").style.left = "40px";
                    girarLL[2]= false;
                    girarLL[3]= true;
                }else if(girarLL[3]){
                    document.querySelector("#LL").style.top = "40px";
                    document.querySelector("#LL").style.left = "20px";
                    girarLL[3]= false;
                    girarLL[0]= true;
                }
            }

            //girar T
            if(peca.id == "T"){
                if(girarT){
                    document.querySelector("#T").style.width = "20px";
                    document.querySelector("#T").style.height = "60px";
                    girarT= false;
                }else{
                    document.querySelector("#T").style.width = "60px";
                    document.querySelector("#T").style.height = "20px";
                    girarT= true;
                }

                if(girarTT[0]){
                    document.querySelector("#TT").style.top = "20px";
                    document.querySelector("#TT").style.left = "-20px";
                    girarTT[0]= false;
                    girarTT[1]= true;
                }else if(girarTT[1]){
                    document.querySelector("#TT").style.top = "-20px";
                    document.querySelector("#TT").style.left = "20px";
                    girarTT[1]= false;
                    girarTT[2]= true;
                }else if(girarTT[2]){
                    document.querySelector("#TT").style.top = "20px";
                    document.querySelector("#TT").style.left = "20px";
                    girarTT[2]= false;
                    girarTT[3]= true;
                }else if(girarTT[3]){
                    document.querySelector("#TT").style.top = "20px";
                    document.querySelector("#TT").style.left = "20px";
                    girarTT[3]= false;
                    girarTT[0]= true;
                }
            }

            //girar Q
            if(peca.id == "Q"){
                document.querySelector("#Q").style.backgroundColor = "red";
            }
        }
        //down arrow
        else if (e.keyCode == '40') {

        }
        //left arrow
        else if (e.keyCode == '37') {
            controll= controll - 20;
            if(peca.id == "I"){
                document.querySelector("#I").style.backgroundColor = "red";
                document.querySelector("#I").style.left = controll+"px";
            }
            
            if(peca.id == "Q"){
                document.querySelector("#Q").style.backgroundColor = "red";
                document.querySelector("#Q").style.left = controll+"px";
            }

            if(peca.id == "S"){
                document.querySelector("#S").style.backgroundColor = "red";
                document.querySelector("#S").style.left = controll+"px";
                document.querySelector("#SS").style.backgroundColor = "red";
            }

            if(peca.id == "T"){
                document.querySelector("#T").style.backgroundColor = "red";
                document.querySelector("#T").style.left = controll+"px";
                document.querySelector("#TT").style.backgroundColor = "red";
            }

            if(peca.id == "L"){
                document.querySelector("#L").style.backgroundColor = "red";
                document.querySelector("#L").style.left = controll+"px";
                document.querySelector("#LL").style.backgroundColor = "red";
            }

        }
        //right arrow
        else if (e.keyCode == '39') {
            controll= controll + 20;
            if(peca.id == "I"){
                document.querySelector("#I").style.backgroundColor = "red";
                document.querySelector("#I").style.left = controll+"px";
            }
            
            if(peca.id == "Q"){
                document.querySelector("#Q").style.backgroundColor = "red";
                document.querySelector("#Q").style.left = controll+"px";
            }

            if(peca.id == "S"){
                document.querySelector("#S").style.backgroundColor = "red";
                document.querySelector("#S").style.left = controll+"px";
                document.querySelector("#SS").style.backgroundColor = "red";
            }

            if(peca.id == "T"){
                document.querySelector("#T").style.backgroundColor = "red";
                document.querySelector("#T").style.left = controll+"px";
                document.querySelector("#TT").style.backgroundColor = "red";
            }

            if(peca.id == "L"){
                document.querySelector("#L").style.backgroundColor = "red";
                document.querySelector("#L").style.left = controll+"px";
                document.querySelector("#LL").style.backgroundColor = "red";
            };
        }
    });

    //inicio do jogo
    function start() {
        createPeca();
        down= 0;
        gameLoop= setInterval(run, 1000/fps);
    }

    function run() {
        document.querySelector("#proxima-peca").style.top= down + "px";
        down= down + 50;
        if(down > 500){
            clearInterval(gameLoop);
            start();
        }else{
            console.log(down);
        }
    }

    function createPeca() {
        pecas= ["I","T","S","L","Q"];
        proximaPeca= document.getElementById('proxima-peca');
        peca= document.createElement('div');
        peca.id= "L";//pecas[Math.floor((Math.random() * 5) + 1)];
        proximaPeca.appendChild(peca);
    }

})();