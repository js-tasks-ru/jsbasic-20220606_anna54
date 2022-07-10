function isEmpty(obj) {
  // ваш код...
  
    for (const key in obj) {
    return false;
  }
  return true;
}
  
  
  
//    for (let key in obj) {
//
//    if  (key in obj == true) {
//      if (obj[key] == "undefined" && obj[key] == "null") {
//        return true;
//      } else {
//        return false;
//      }
//    } else {
//      return true;
//    }









//    if (obj[key] == undefined) {
//      
//      if (key in obj == true) {
//        return false;
//      } else {
//         return true;
//        }
//    } else {
//        return false;
//      }
//    //  return true;
//    //}
//  }
//}