var https = require('https');

function getAndPrintHTML() {

   
    https.get(requestOptions, function (stream) {

        var allData = "";
        
        stream.on('data', function (data) {
            allData += data.toString();
        });

        stream.on('end', function () {
            console.log("stream is complete");
            console.log(allData);
        });


    });

}
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
};

getAndPrintHTML(requestOptions);