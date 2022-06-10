function scuberGreetingForFeet(distanceInFeet){
  if (distanceInFeet <= 400) {
    return 'This one is on me!'
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500){
    return 'I will gladly take your thirty bucks.'
  } else if (distanceInFeet > 2500){
    return 'No can do.'
  }
}

function ternaryCheckCity(destinationCity){
  return destinationCity === 'NYC'?'Ok, sounds good.' : 'No go.'  
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    case 'thanks for everything':
      return 'Bye.'
      break;
  }
}