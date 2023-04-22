<?php
$port = 25565; 
// port Minecraft default



$command = "java -Xms1G -Xmx1G -jar server.jar nogui";
// command untuk memulai server



exec(sprintf("%s > /dev/null 2>&1 & echo $!", $command), $output); // jalankan server dalam background
echo "Server Minecraft telah dimulai dengan PID $output[0]";
?>
