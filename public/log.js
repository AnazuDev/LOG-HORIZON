const { spawn } = require('child_process');
const java = spawn('java', ['-Xms1G', '-Xmx1G', '-jar', 'server.jar', 'nogui']);

java.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

java.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

java.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
