var request= require('request');

request(opt, function (err, response, body) {
  var data = body && body.data;
  if (data) {
      data.startTime = data.expiredTime - durationSeconds;
      callback(null, data);
  } else {
      callback(body);
  }
});

