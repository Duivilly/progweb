<?php
  //verifica se tem sessao se sim fica senao volta pro login
  session_start();
  if(!isset($_SESSION['start'])){
    print "Não Autorizado!";
    header("Location: index.html");
  }else{
    print "Iniciado em: ".$_SESSION['start'];
  }
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>PHP1</title>
  </head>
  <body>
    <h1>Formulário de Contato</h1>
    <h3>Por favor, preencha o formulária abaixo e click no botão Enviar Mensagem. Agradecemos por seu contato.</h3>
    <form class="" action="server.php" method="post">
      <fieldset>
        <legend>Dados Básicos</legend>
        <label for="nome">Nome </label><input type="text" name="nome" value="" id="nome"><br>
        <label for="email">E-mail </label><input type="email" name="email" id="email" required placeholder="seunome@dominio.com.br"><br>
        <label for="site">Website </label><input type="url" name="site" value="http://" id="site"><br>
      </fieldset>
      <br>
      <fieldset>
        <legend>Digite sua mensagem</legend>
        <textarea name="mensagem" rows="4" cols="50" placeholder="Este é o valor padrão!"></textarea>
      </fieldset>
      <br>
      <input type="reset" name="" value="Resetar Dados"><input type="submit" name="" value="Enviar Mensagem">
    </form>
  </body>
</html>