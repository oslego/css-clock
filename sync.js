var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/css'});

  var now = new Date();

  var hourOffset = (360 / 12) * ((now.getUTCHours() + 24) % 12)
  var minuteOffset = (360 / 60) * now.getUTCMinutes();
  var secondOffset = (360 / 60) * now.getUTCSeconds();

  var t = [];
  t.push(".hands .hour{ transform: rotate({{h}}deg) }");
  t.push(".hands .minute{ transform: rotate({{m}}deg) }");
  t.push(".hands .second{ transform: rotate({{s}}deg) }");

  var out = t.join('\n').replace("{{h}}", hourOffset).replace("{{m}}", minuteOffset).replace("{{s}}", secondOffset);

  res.end(out, "utf-8");
}).listen(9615);
