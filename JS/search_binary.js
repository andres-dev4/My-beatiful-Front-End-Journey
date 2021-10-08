/**
 * Algorithms search_binary
 * The binary_search function takes a sorted array and an item, if the item is in the array, the function
 * return its position
 * 
 * Binary search only works when your list is in order 
 * 
 */

const binary_search = (list, item) => {
    let low  = 0;
    let higth = list.length - 1; 
    let mid;
    let guess;


    while (low <= higth){
    mid = (low + higth) / 2; 
    mid = Math.round(mid);
    
    guess = list[mid];
    
    if(guess === item){
      return mid;
    }
    if (guess > item){
      higth = mid - 1
    }
    else {
      low = mid + 1;
    }
    
    }
    }
    
    console.log(binary_search([1,3,5,7,9],9));