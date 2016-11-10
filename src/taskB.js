const http = require(`http`);
const url = require(`url`);

console.log('Vladimir27 Vladimirovich Putin'.search('[^A-zА-яЁё\s]'));
console.log('Vladimir Vladimirovich Putin'.search('[^A-zА-яЁё]\s') == -1);

function setHeaders() {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.writeHead(200, {'Content-type' : 'text/html'});

}

function summary(req, res) {
  let baseURI = url.parse(req.url, true);

  let URIquery = baseURI.query;
  let URIpath = baseURI.path;

  let fullname = URIquery.fullname;

  let fullnameSplit = fullname.split(' ').reverse();

  console.log(fullname);

  if (fullnameSplit.length > 3 || fullname === '' || fullname.search('[0-9\._\/]') != -1) {

      console.log(fullname.search('[0-9\._]'));
      setHeaders();
      res.end(`Invalid fullname`);

  } else if (fullnameSplit.length === 1) {

      let lastName = fullnameSplit[0];
      setHeaders();
      res.end(`${lastName}`);

  } else if (fullnameSplit.length === 2) {

      let lastName = fullnameSplit[0];
      let name = fullnameSplit[1];
      let name1Symbol = name.split(``)[0];

      setHeaders();
      res.end(`${lastName} ${name1Symbol}.`);

  } else {

      let name = fullnameSplit[2];
      let name1Symbol = name.split(``)[0];

      let middleName = fullnameSplit[1];
      let middleName1Symbol = middleName.split(``)[0];

      let lastName = fullnameSplit[0];

      setHeaders();
      res.end(`${lastName} ${name1Symbol}. ${middleName1Symbol}.`);

  }

}
http.createServer(summary).listen(3000, () => {
  console.log('Server running on port 3000');
  console.log();
});
