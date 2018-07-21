var katzDeliLine = new Array()

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}.  You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  }
  else{
    return `Currently serving ${katzDeliLine.pop()}.`
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length===0){
    return "The line is currently empty."
  }
  else{
    newArr = new Array()
    for (var i = 0; i<katzDeliLine.length; i++){
      str=`${i+1}. ${katzDeliLine[i]}`
    }
  }
}
