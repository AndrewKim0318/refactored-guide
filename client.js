const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: '3000'
  });

  conn.on('connect', () => {
    console.log("You have connected to the server, what file would you like to grab?")  ;
  });
  
  conn.setEncoding('utf8');
  
  const stdin = process.stdin;
  stdin.setEncoding('utf8');
  stdin.resume();
  
  stdin.on('data', input => {
    let fileName = input.replace("\n", "");
    conn.write(fileName);
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

connect();