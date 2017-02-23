<?php
$count = file_get_contents("count.txt");
$count = intval($count);
$count++;
file_put_contents("count.txt",$count);
echo "page view is:".$count;
?>