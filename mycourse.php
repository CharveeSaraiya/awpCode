<?php
$mydata = $_REQUEST['datavalue'];
echo $mydata;
$a = array("Machine Learning","XML","WP");
$b = array("Bigdata","HTML","Database");
if($mydata =='B.Tech'){
    foreach($a as $x){
        echo"<option>$x</option>";
    }
}
if($mydata =='MBA.Tech'){
    foreach($b as $x){
        echo"<option>$x</option>";
    }
}