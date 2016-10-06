
// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(item, index, _array){
    if (item == "Waldo") {
      found(index);   // execute callback
    }
  });
}

function actionWhenFound(i) {
  console.log("Found Waldo at index " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);