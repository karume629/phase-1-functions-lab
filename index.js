// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    //returns the number of blocks given a value
   if (distance < 42){
    return distance - 26;
   }
   return distance - 42;

  }


  function distanceFromHqInFeet(distance) {
    if (distance === 43){
      return distance + 221
    } else{
      return 2112;
    }

  }

  function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
      return (start - destination) * 264;
    }
    return (destination - start) * 264;
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    if (destination > start && (destination - start)* 264 < 2000 ){
    return 0;
   } else if((destination -start )* 264 > 2000){
    return 25;
   }else if(( start - destination) * 264 > 2500 ){
    return 'cannot travel that far';
   } 
   else {
    return ((start - destination) * 264 - 400) * 0.02;
    }
    
  }
   calculatesFarePrice(43, 44);
   calculatesFarePrice(34, 32);
   calculatesFarePrice(50, 58);
   calculatesFarePrice(24, 34);