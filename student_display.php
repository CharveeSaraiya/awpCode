<?php   
$conn = mysqli_connect("localhost", "root", "root", "firstsample");
//echo $pname;
$sql = "select * from student";
//echo $sql;
$res = mysqli_query($conn,$sql);

echo "<table border=1>";
echo "<tr><th>Rollno</th>";
echo "<th>Name</th>";
echo "<th>Fees</th>";
echo "<th>Course</th>";
echo "</tr>";

while($row=mysqli_fetch_array($res))
{
echo "<tr>";    
echo "<td>".$row['rno']."</td>";
echo "<td>".$row['sname']."</p>";
echo "<td>".$row['fees']."</p>";
echo "<td>".$row['course']."</p>";
echo "</tr>";
}
echo "</table>";

?>