function initialization(){
  var testJSBlock;
  
  testJSBlock = document.getElementById( "testJS" );
  testJSBlock.innerHTML = "BLUE RECTANGLE = SUCCESSFULLY STYLE";
}

function testJS(){
  alert( "THIS MESSAGE MEANS THAT\nTHE SERVER SUCCESSFULLY RETURN JS SCRIPT" );
  alert( "IF YOU SEE IMAGE ON PAGE IT'S MEANS THAT THE\nSERVER SUCCESSFULLY RETURN IMAGE" );
}

function badPageFunc(){
  var badPage;
  
  badPage = document.getElementById( "badPage" );
  
  badPage.style.left = document.body.clientWidth / 2 - badPage.clientWidth / 2 + "px";
}

function getMD5Hash(){
  var URL = "http://192.168.1.4:8020";
  
  var MD5Input, MD5InputValue, request;
  
  MD5Input = document.getElementById( "getMD5Input" );
  request = new XMLHttpRequest();
  
  MD5InputValue = MD5Input.value;
  MD5Input.value = "";
  
  data = JSON.stringify( {
    "MD5InputValue" : MD5InputValue
  } );
  
  request.onreadystatechange = function(){
    if( this.readyState == 4 && this.status == 200 ) document.getElementById( "MD5Output" ).value = this.responseText;
  }
  
  request.open( "POST", URL, true );
  request.setRequestHeader( "Content-type", "application/json; charset = utf8" );
  request.send( data );
}