const http = require(`http`);
const url = require(`url`);

function summary(req, res) {
  let baseURI = url.parse(req.url, true);

  let URIquery = baseURI.query;
  let URIpath = baseURI.path;

  let fullname = URIquery.fullname;
  console.log(`fullname`, fullname);

  let fullnameSplit = fullname.split(' ');
  console.log(`fullnameSplit`, fullnameSplit);
  console.log(`fullnameSplit.length`, fullnameSplit.length);


  if (fullnameSplit.length > 3) {
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.end(`<p>Query: /?fullname=${fullname}</p><p>Invalid fullname</p>`);
  } else if (fullnameSplit.length === 1) {
    let lastName = fullname;
    console.log(`lastName`, lastName);
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.end(`<p>Query: /?fullname=${fullname}</p><p>${lastName}</p>`);
  } else {
    let name = fullnameSplit[0];
    console.log(`name`, name);

    let name1Symbol = name.split(``)[0];
    console.log(`name1Symbol`, name1Symbol);

    let middleName = fullnameSplit[1];
    console.log(`middleName`, middleName);

    let middleName1Symbol = middleName.split(``)[0];
    console.log(`middleName1Symbol`, middleName1Symbol);

    let lastName = fullnameSplit[2];
    console.log(`lastName`, lastName);

    res.writeHead(200, {'Content-type' : 'text/html'});
    res.end(`<p>Query: /?fullname=${fullname}</p><p>${lastName} ${name1Symbol}. ${middleName1Symbol}</p>`);
  }

}
http.createServer(summary).listen(3000, () => {
  console.log('Server running on port 3000');
  console.log();
});
