<?php
use yii\helpers\Html;

/* @var $this yii\web\View */
$this->title = 'Jogo Tetris';
?>

<?= Html::img('@web/index.jpeg', ['width'=>'400']) ?>
<?= Html::a('Iniciar Jogo', ['site/jogo'], ['class' => 'btn btn-success']) ?>