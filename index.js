const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function totalBatteries() {
  let total = batteryBatches.reduce(function(total, element){ element + total});
  return total;
}
