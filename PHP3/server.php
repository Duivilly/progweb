<?php
/*
setcookie('nome','Duivilly');
echo $_COOKIE['nome'];
$token = md5('Duivilly');
echo "<br>";
echo "MD5:".$token;
$token = sha1('Duivilly');
echo "<br>";
echo "SHA1:".$token;
*/
$user= $_POST['user'];
$senha= $_POST['senha'];

//cria sessao e loga
if($user == "demo" && $senha == "demo"){
	session_start();
	$_SESSION['start']= date('H:i');
	header("Location: formulario.php");
	print "Autorizado. Iniciando...";
}else{
	//login invalido
	print "Não autorizado!";
}
/*
try {
	$usario= "root";
	$senha= "#boot#";
	$conn= new PDO("mysql:host=localhost;dbname=Tetris", $usario, $senha);
	echo "Conectado.";
	echo "<br>";
	$stml= $conn->prepare('insert into contato (nome, email, site, mensagem) values (:nome, :email, :site, :mensagem)');
	$stml->bindValue(":nome", $_POST['nome']);
	$stml->bindValue(":email", $_POST['email']);
	$stml->bindValue(":site", $_POST['site']);
	$stml->bindValue(":mensagem", $_POST['mensagem']);
	$stml->execute();
	echo "Inserido com sucesso!";
	echo "<br>";
	echo 'Nome: '.$_POST['nome'];
	echo "<br>";
	echo 'Email: '.$_POST['email'];
	echo "<br>";
	echo "Site: ".$_POST['site'];
	echo "<br>";
	echo "Mensagem: ".$_POST['mensagem'];
	echo "<br>";
} catch (PDOException $e) {
	echo $e->getMessage();
}

function inserir(){
	$stml= $conn->prepare('insert into contato (nome, email, site, mensagem) values (:nome, :email, :site, :mensagem)');
	$stml->bindValue(":nome", $_POST['nome']);
	$stml->bindValue(":email", $_POST['email']);
	$stml->bindValue(":site", $_POST['site']);
	$stml->bindValue(":mensagem", $_POST['mensagem']);
	$stml->execute();
	echo "Inserido com sucesso!";
}

function imprimir(){
	echo 'Nome: '.$_POST['nome'];
	echo "<br>";
	echo 'Email: '.$_POST['email'];
	echo "<br>";
	echo "Site: ".$_POST['site'];
	echo "<br>";
	echo "Mensagem: ".$_POST['mensagem'];
	echo "<br>";
}
*/
?>