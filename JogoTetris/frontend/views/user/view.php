<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model common\models\User */

$this->title = $model->username;
$this->params['breadcrumbs'][] = ['label' => 'Users', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="user-view">

    <h1><?= Html::encode($this->title) ?></h1>
    <!--
    <p>
        <?= Html::a('Update', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Você deseja apagar este usuário?',
                'method' => 'post',
            ],
        ]) ?>
    </p>
    -->
    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            //'id',
            'username',
            //'auth_key',
            //'password_hash',
            //'password_reset_token',
            'email:email',
            'status',
            [
                'attribute' => 'created_at',
                'value'=> date("d/m/Y", $model->created_at)
            ],
            [
                'attribute' => 'updated_at',
                'value'=> date("d/m/Y", $model->updated_at)
            ],
            [
                'attribute' => 'id_curso',
                'value' => $model->curso->nome,
            ],
        ],
    ]) ?>

</div>
