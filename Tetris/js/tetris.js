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
        //createTabuleiro();
        //inicia o jogo
        start();
    }

    //cria o tabuleiro com uma tabela
    function createTabuleiro(){
        table= document.createElement("table");
        //cor dos blocos do tabuleiro
        table.id= "tabela";
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
            //girar I
            if(peca.id == "I"){
                document.querySelector("#I").style.backgroundColor = "#B22222";
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
                document.querySelector("#S").style.backgroundColor = "#B22222";
                document.querySelector("#SS").style.backgroundColor = "#B22222";
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
                document.querySelector("#L").style.backgroundColor = "#B22222";
                document.querySelector("#LL").style.backgroundColor = "#B22222";
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
                document.querySelector("#T").style.backgroundColor = "#B22222";
                document.querySelector("#TT").style.backgroundColor = "#B22222";
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
                document.querySelector("#Q").style.backgroundColor = "#B22222";
            }
        }
        //down arrow
        else if (e.keyCode == '40') {
            down= down + 20;
            if(down < 350){
                peca.style.top= down + "px";
            }
        }
        //left arrow
        else if (e.keyCode == '37') {
            controll= controll - 20;
            controllTeste= controllTeste -1;
            //test
            
            //test
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
            controllTeste= controllTeste +1;
            //test
            
            //test
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
        down= 0;
        downTest= 0;
        controllTeste= 6;
        proximaPeca();
        gameLoop= setInterval(run, 1000/fps);
    }

    function run() {
        if(downTest < 12){
            var delayMillis= 1000; //1 second
            setTimeout(function() {
                //your code to be executed after 1 second
                table.rows[downTest].cells[controllTeste].style.backgroundColor= "red";
            }, delayMillis);
            console.log(downTest);
            downTest= downTest + 1;
            if(downTest <= 12){
                setTimeout(function() {
                    //your code to be executed after 1 second
                    document.getElementById('tabuleiro').removeChild(table);
                    //document.getElementById('tabela').style.backgroundColor= "#5F9EA0";
                }, 800);
            }
            createTabuleiro();
        }else{
            clearInterval(gameLoop);
        }
        //peca.style.top= down + "px";
        //tabuleiro.parentNode.removeChild(table);
        //down= down + 20;
    }

    function proximaPeca(){
        proximaPeca= document.getElementById('proxima-peca');
        createPeca();
        //ajusteProximaPeca();
        proximaPeca.appendChild(peca);
    }

    function ajusteProximaPeca(){
        if(peca.id == "T"){
            peca.style.left= "20px";
            peca.style.top= "10px";
        }else if(peca.id == "I"){
            peca.style.top= "20px";
            peca.style.left= "10px";
        }else if(peca.id == "Q"){
            peca.style.top= "10px";
            peca.style.left= "30px";
        }else if(peca.id == "L" || peca.id == "S"){
            peca.style.top= "0px";
            peca.style.left= "30px";
        }
    }

    function createPeca() {
        pecas= ["I","T","S","L","Q"];
        peca= document.createElement('div');
        peca.id= pecas[Math.floor((Math.random() * 5))];
        
        if(peca.id == "T"){
            pecaExtra= document.createElement('div');
            pecaExtra.id= "TT";
            peca.appendChild(pecaExtra);
        }

        if(peca.id == "S"){
            pecaExtra= document.createElement('div');
            pecaExtra.id= "SS";
            peca.appendChild(pecaExtra);
        }

        if(peca.id == "L"){
            pecaExtra= document.createElement('div');
            pecaExtra.id= "LL";
            peca.appendChild(pecaExtra);
        }
    }

})();