<?php
namespace frontend\controllers;
use Yii;
use common\models\JogadaSearch;
use common\models\Jogada;
use common\models\LoginForm;

class JogadaController extends \yii\web\Controller
{
    public function actionPlay()
    {
        if (Yii::$app->user->isGuest) {
            $model= new LoginForm();
            if ($model->load(Yii::$app->request->post()) && $model->login()) {
                return $this->goBack();
            } else {
                return $this->render('//site/login', [
                    'model' => $model,
                ]);
            }
        }

        return $this->render('play');
    }

    public function actionRanking()
    {
        $searchModel= new JogadaSearch();
        $dataProvider= $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('ranking', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    public function actionSave()
    {
        if(!Yii::$app->user->isGuest){
            $pontuacao= Yii::$app->request->post('pontuacao');
            $user= Yii::$app->user->identity->id;
            $jogada= new Jogada();
            $jogada->id_user= $user;
            $jogada->pontuacao= $pontuacao;
        }

        if($jogada->save()){
            return 1;
        }else{
            return 0;
        }
    }

}
