<?php
/* @var $this yii\web\View */
$this->title = 'Jogo Tetris';
?>

<html>
    <head>
        <meta charset="utf-8">
        <title>Jogo Tetris</title>
        <link rel="stylesheet" href="css/estilos.css">
    </head>
    <body>
        <div id="proxima-peca"></div>
        <div id="tabuleiro"></div>
        <div id="informacoes"></div>
        <script type="text/javascript" src="js/tetris.js">
            $.ajax({
                type: 'POST',
                url: 'jagada/save',
                data: $pontuacao,
                success: function(data){
                    console.log('enviando...');
                }
            });
        </script>
    </body>
</html>
