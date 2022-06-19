function filterRange(arr, a, b) {
  // ваш код...
  let filterred = [];
  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] >=  Math.min(a, b) && arr[i] <= Math.max(a, b) ) {
      filterred.push(arr[i])
    }
  }
  return filterred;

}
