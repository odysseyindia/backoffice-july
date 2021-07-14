export default function docLoad(object) {

  return new Promise(function(resolve, reject) {

    var host = ((object.method == 'POST')? object.appHost : "") + object.url;

	console.log('Method is',object.method || "GET");

	console.log('Host is',host);

    var request = new XMLHttpRequest();
    request.open(object.method || "GET", host);
    //request.setRequestHeader('Access-Control-Allow-Headers', '*');
    //request.setRequestHeader("Content-Type", "application/json");
    //request.setRequestHeader("Access-Control-Allow-Origin","*");
    
    request.onload = function() {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(Error('Document requested did not load successfully; error code:' + request.statusText));
      }
    };

    request.onerror = function() {
      reject(Error('There was a network error.'));
    };
    
    request.send(JSON.stringify(object));
  });
};

console.log('docLoad')