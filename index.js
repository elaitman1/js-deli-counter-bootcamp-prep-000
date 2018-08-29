function takeANumber(deliLine) {
  var total = deliLine.length
  
  `Welcome, you are number ${deliLine.length + 1}.`
 
}

I would use .length to see the last person in line. 


function nowServing(deliLine){
if (deliLine.length === 0){
  return "There is nobody waiting to be served!";
}else{
  return `Currently serving ${deliLine.shift()}.`
}
}


function currentLine(y){
  var comment = "The line is currently:"
  if (y.length === 0){
    return "The line is currently empty."
  }else{
    var i = 1
    for (var x = 0; x < y.length; x++){
      comment += ` ${i}. ${y[x]}`
      if (i !== y.length){
        comment += ","
        i++
      }
    }
  }
  return comment
}