 <?php
$ret = true;

if(!$_POST){
 die('No Post Variables');
}
 
echo "Данные получены:\n";
print_r($_POST);



$db = mysql_connect('localhost', 'root');
mysql_select_db('goods_ajax');
mysql_query("SET NAMES utf8");

$name = $_POST['name'];
$telep = $_POST['telep'];
$email = $_POST['email'];



mysql_query("INSERT INTO `goods_x` (`name`, `telep`, `email`) VALUES ('$name' , '$telep', '$email')") or $ret = false; 


echo $ret;