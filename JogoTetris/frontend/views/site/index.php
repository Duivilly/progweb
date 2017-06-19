<?php
use yii\helpers\Html;

/* @var $this yii\web\View */
$this->title = 'Jogo Tetris';
?>

<?= Html::img('@web/index.jpeg',['width'=>'400']) ?>
<?= Html::a('Iniciar Jogo', ['site/index'], ['class' => 'btn btn-success']) ?>

<html>
    <head>
        <meta charset="utf-8">
        <title>Jogo Tetris</title>
        <link rel="stylesheet" href="css/estilos.css">
    </head>
    <body>
        <!--<div id="proxima-peca"></div>
        <div id="tabuleiro"></div>
        <div id="informacoes"></div>
        <script type="text/javascript" src="js/tetris.js"></script>-->
    </body>
</html>
