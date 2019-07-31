const net = require('net');

const server = net.createServer();
const fs = require('fs');

server.listen(3000, () => {
  console.log("listening on port 3000");
});


server.on('connection', (client) => {
  
  client.setEncoding('utf8');
  console.log("Client has made a connection");
  
  client.on('data', (data) => {
    console.log(`You have requested for: ${data}`);
    
    let filePath = data;
    
    if (fs.existsSync(filePath)) {
      
      fs.readFile(filePath, (err, data) => {
      
        client.write(data);
      
      });
    }
  });
});
