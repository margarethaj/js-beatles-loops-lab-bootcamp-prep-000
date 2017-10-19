function theBeatlesPlay(musicians, instruments){
  var temp = [];
  for ( let i=0; i < musicians.length; i++){
    temp.push('$musicians[i] plays $instruments[i]');
  }
  return temp
}
