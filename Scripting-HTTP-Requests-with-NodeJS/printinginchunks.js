var https = require('https');



function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions,function(stream){
    
    stream.on('data',function(data){
        console.log(data + '\n');
    });

    stream.on('end', function(){
        console.log("stream is complete");
    });



  });

 

}

getAndPrintHTMLChunks();