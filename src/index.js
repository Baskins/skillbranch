const http = require(`http`);
const url = require(`url`);

function summary(req, res) {
  let baseURI = url.parse(req.url, true);

  let URIquery = baseURI.query;
  let URIpath = baseURI.path;

  let a = URIquery.a;
  let b = URIquery.b;

  if (a || b) {
      if (a) {
        a = parseInt(a);
      } else {
        a = 0;
      }

      if (b) {
        b = parseInt(b);
      } else {
        b = 0;
      }
    let sum = a+b;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.end(`${sum}`)
  } else {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.end(`0`)
  }
}
http.createServer(summary).listen(3000, () => {
  console.log('Server running on port 3000');
});
