const http = require(`http`);
const url = require(`url`);

function summary(req, res) {
  let baseURI = url.parse(req.url, true);

  let URIquery = baseURI.query;
  let URIpath = baseURI.path;

  let fullname = URIquery.fullname;

  let fullnameSplit = fullname.split(' ').reverse();


  if (fullnameSplit.length > 3 || fullname === '') {

      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.writeHead(200, {'Content-type' : 'text/html'});
      res.end(`Invalid fullname`);

  } else if (fullnameSplit.length === 1) {

      let lastName = fullnameSplit[0];
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.writeHead(200, {'Content-type' : 'text/html'});
      res.end(`${lastName}`);

  } else if (fullnameSplit.length === 2) {

      let lastName = fullnameSplit[0];
      let name = fullnameSplit[1];
      let name1Symbol = name.split(``)[0];

      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.writeHead(200, {'Content-type' : 'text/html'});
      res.end(`${lastName} ${name1Symbol}.`);

  } else {

      let name = fullnameSplit[2];
      let name1Symbol = name.split(``)[0];

      let middleName = fullnameSplit[1];
      let middleName1Symbol = middleName.split(``)[0];

      let lastName = fullnameSplit[0];

      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.writeHead(200, {'Content-type' : 'text/html'});
      res.end(`${lastName} ${name1Symbol}. ${middleName1Symbol}.`);

  }

}
http.createServer(summary).listen(3000, () => {
  console.log('Server running on port 3000');
  console.log();
});
