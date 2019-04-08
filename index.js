/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
 // This example is in Node ES6 using the request-promise library
 const rp = require('request-promise');
 const requestOptions = {
   method: 'GET',
   uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
   qs: {
     start: 1,
     limit: 5000,
     convert: 'USD'
   },
   headers: {
     'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'
   },
   json: true,
   gzip: true
 };

exports.helloWorld = (req, res) => {
  console.log('beginning of helloWorld')
  rp(requestOptions).then(response => {
    console.log('API call response:', response);
    res.status(200).send(response);
  }).catch((err) => {
    console.log('API call error:', err.message);
    res.status(200).send(err.message);
  });
};
