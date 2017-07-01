<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "jogada".
 *
 * @property integer $id
 * @property integer $id_user
 * @property integer $pontuacao
 * @property string $data_hora
 *
 * @property User $idUser
 */
class Jogada extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'jogada';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id_user', 'pontuacao'], 'required'],
            [['id_user', 'pontuacao'], 'integer'],
            [['data_hora'], 'safe'],
            [['id_user'], 'exist', 'skipOnError' => true, 'targetClass' => User::className(), 'targetAttribute' => ['id_user' => 'id']],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'id_user' => 'Jogador',
            'pontuacao' => 'Pontuação',
            'data_hora' => 'Data',
        ];
    }

    #public $idUser;

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getIdUser()
    {
        return $this->hasOne(User::className(), ['id' => 'id_user']);
    }

    public function afterFind(){
        parent::afterFind();
        $this->id_user= $this->idUser->username;
        $this->data_hora= date('d/m/Y H:s', strtotime($this->data_hora));
    }

    #todas as jogas ordenadas pela maior pontuação
    public function getRanking(){
        $jogadas= $this->find()->orderBy(['pontuacao'=>SORT_DESC])->all();
        return $jogadas;
    }
}
