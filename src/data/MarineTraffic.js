// const dataSet = 'https://www.marinetraffic.com/getData/get_data_json_4/z:12/X:1047/Y:678/station:0';
var axios = require('axios');

var config = {
    method: 'get',
    url: 'https://www.marinetraffic.com/getData/get_data_json_4/z:12/X:1047/Y:678/station:0',
    headers: {
        'Accept': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
        "Access-Control-Max-Age": "1000",
        "Access-Control-Allow-Headers": "ACCEPT, CONTENT-TYPE, X-CSRF-TOKEN",
    }
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
