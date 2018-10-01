var https = require('https');

function getHTML(options, stuffIWantToDoWithTheHTMLOnceItIsAvailable){
    https.get(options, function (stream) {

        var allData = "";
        
        stream.on('data', function (data) {
            allData += data.toString();
        });

        stream.on('end', function () {
            
            stuffIWantToDoWithTheHTMLOnceItIsAvailable(allData)
        });


    });

}
function printHTML(html){
    console.log('Printing HTML');
    console.log(html);
}
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};
getHTML(requestOptions, printHTML);