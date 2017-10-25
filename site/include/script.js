var URL = "http://10.5.50.249:8020";
var lastUpdate = 0;

function initialization(){
  var request;
  
  request = new XMLHttpRequest();
  
  data = JSON.stringify( { "getLastUpdate" : 0 } );
  
  request.onreadystatechange = function(){
    if( this.readyState == 4 && this.status == 200 ){
      lastUpdate = this.responseText;
      document.getElementById( "lastUpdate" ).innerHTML = lastUpdate;
    }
  }
  
  request.open( "POST", URL, true );
  request.setRequestHeader( "Content-type", "application/json; charset = utf8" );
  request.send( data );
}

function checkLastUpdate(){
  var request;
  
  request = new XMLHttpRequest();
  
  data = JSON.stringify( { "getLastUpdate" : 0 } );
  
  request.onreadystatechange = function(){
    if( this.readyState == 4 && this.status == 200 ) document.getElementById( "lastUpdate" ).innerHTML = this.responseText;
  }
  
  request.open( "POST", URL, true );
  request.setRequestHeader( "Content-type", "application/json; charset = utf8" );
  request.send( data );
}

function sendRequest(){
  var request;
  
  lastUpdate++;
  request = new XMLHttpRequest();
  
  data = JSON.stringify( {
    "setLastUpdate" : lastUpdate
  } );
  
  request.open( "POST", URL, true );
  request.setRequestHeader( "Content-type", "application/json; charset = utf8" );
  request.send( data );
  
  checkLastUpdate();
}