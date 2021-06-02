function scuberGreetingForFeet(distance){
  // Write your code here!
  let response
  if (distance <= 400) {
    response = 'This one is on me!'
  }
  else if (distance > 2000 && distance <= 2500) {
    response = 'I will gladly take your thirty bucks.'
  }
  else {
    response = 'No can do.'
  }
  return response
}

function ternaryCheckCity(city){
  // Write your code here!
  const response = city === 'NYC' ? "Ok, sounds good." : "No go."

  return response;

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response;

  switch(tip) {
  case 'generous':
    response = "Thank you so much."
    break;
  case 'not as generous':
    response = "Thank you."
    break;
  default:
    response = 'Bye.'
  };

  return response;
}
