'use strict';

exports.http = (request, response) => {
  response.status(200).send(request.query.count ? this.pi(request.query.count) : this.pi(10000));
};

exports.pi = (count) => {
  let inside = 0;

  for (let i = 0; i < count; i++) {
    let x = Math.random() * 2 - 1;
    let y = Math.random() * 2 - 1;
    if ((x * x + y * y) < 1) {
      inside++
    }
  }
  return (4.0 * inside / count).toString();
};


exports.event = (event, callback) => {
  callback();
};
