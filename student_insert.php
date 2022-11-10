<?php   
$conn = mysqli_connect("localhost", "root", "root", "firstsample");
$sname=$_POST['sname'];
$fees=$_POST['fees'];
$course=$_POST['course'];
$qry="Insert into student values(0,'$sname',$fees,'$course')";
$res=mysqli_query($conn,$qry);
if ($res==1)
    echo "<b>Inserted</b>";
else   
    echo "Some Errors...";

?>