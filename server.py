#!/usr/bin/env python

from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import hashlib
from easyLoggerModule import log

host = '10.5.50.249'
port = 8020
siteFolder = 'site/'
lastUpdate = 0

class JSONRequestHandler( BaseHTTPRequestHandler ):
  def do_GET( self ):
    self.send_response( 200 )
    
    parametr = self.path[ 1: ]
    
    if parametr[ -1: ] == '/': parametr = parametr[ :-1 ]
    
    if 'js' in parametr: contentType = 'text/javascript'
    elif 'css' in parametr: contentType = 'text/css'
    else: contentType = 'text/html'
    
    self.send_header( 'Content-type', contentType )
    self.end_headers()
    
    # Parse request
    if parametr == '': pagePath = 'index.html'
    elif 'ico' in parametr: pass
    else: pagePath = parametr
    
    if( not 'ico' in parametr ):
      try:
        page = open( siteFolder + pagePath, 'rb' ).read()
      except IOError as err:
        page = open( siteFolder + 'badPage.html', 'rb' ).read()
      
      self.wfile.write( page )
    
  def do_POST( self ):
    global lastUpdate
    
    self.send_response( 200 )
    
    self.data_string = self.rfile.read( int( self.headers[ 'Content-Length' ] ) )
    self.end_headers()
    
    data = json.loads( self.data_string.decode( 'utf8' ) )
    
    if 'setLastUpdate' in data:
      lastUpdate = data[ 'setLastUpdate' ]
    elif 'getLastUpdate' in data:
      self.wfile.write( bytes( str( lastUpdate ), 'utf8' ) )

log( 'Try to run server...' )

server = HTTPServer( ( host, port ), JSONRequestHandler )
server.serve_forever()