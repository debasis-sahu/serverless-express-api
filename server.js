const http = require('http');
const app = require('./app_routes');

const server = http.createServer(app);

const port = process.env.PORT || 80;
server.listen(port, () => {
  console.log('Server is running on port:' + port);
});
