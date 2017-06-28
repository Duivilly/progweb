<?php

namespace frontend\controllers;
use Yii;
class JogadaController extends \yii\web\Controller
{
    public function actionPlay()
    {
        return $this->render('play');
    }

    public function actionRanking()
    {
        return $this->render('ranking');
    }

    public function actionSave()
    {
        #$pontuacao= Yii::app->request->post('pontuacao');
        #$id_user= Yii::app->user->id;
        #return $this->render('save');
    }

}
