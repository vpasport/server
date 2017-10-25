from datetime import datetime

def log( st, mode = True ):
  time = datetime.now()
  h = str( time.hour )
  m = str( time.minute )
  s = str( time.second )
  
  if len( h ) == 1: h = '0' + h
  if len( m ) == 1: m = '0' + m
  if len( s ) == 1: s = '0' + s
  
  st = '[' + h + ':' + m + ':' + s + '] ' + st + '\n'
  
  open( str( time.date() ) + '.txt', 'a' ).write( st )
  
  if mode: print( st )