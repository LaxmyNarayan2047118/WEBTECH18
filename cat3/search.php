<?php
error_reporting(0);
$conn = mysqli_connect("localhost","root","","christ");
if(count($_POST)>0) {
$course=$_POST['course'];
$result = mysqli_query($conn,"SELECT * FROM stuinfo where course='$course' ");
}
?>
<!DOCTYPE html>
<html>
<head>
<title> Retrive data</title>
<style>
table, th, td {
    border: 1px solid black;
}
</style>
</head>
<body>
<table>
<tr>
<td>Name</td>
</tr>
<?php
$i=0;
while($row = mysqli_fetch_array($result)) {
?>
<tr>
<td><?php echo $row["first_name"]; ?></td>
<td><?php echo $row["last_name"]; ?></td>
</tr>
<?php
$i++;
}
?>
</table>
</body>
</html>