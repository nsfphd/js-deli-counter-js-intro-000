var katzDeliLine = new Array()

function takeANumber(katzDeliLine, name){
  str= `Welcome, ${name}.  You are number ${katzDeliLine.length+1} in line.`
  katzDeliLine.push(name)
  return str
}
