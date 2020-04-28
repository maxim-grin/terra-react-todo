import staticServer from 'node-static';

/*
 * Create a node-static server instance to serve the './build' folder
 */
const file = new staticServer.Server('./build');

require('http').createServer((request, response) => {
  request.addListener('end', () => {
    // Serve files!
    file.serve(request, response);
  }).resume();
}).listen(8080);
