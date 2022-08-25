var Mode = function (data) {
  var counts = {};
  for (let i = 0; i < data.length; i++) {
    counts[data[i]] = (counts[data[i]] || 0) + 1;
  }
  var max = 0;
  var values = [];
  for (var key in counts) {
    if (counts.hasOwnProperty(key)) {
      if (counts[key] > max) {
        max = counts[key];
        values = [key];
      } else if (counts[key] === max) {
        max = counts[key];
        values.push(key);
      }
    }
  }
  return (
    "The highest value is= " + values.join(",") + " with a count of=" + max
  );
};
console.log(Mode([1, 2, 3, 3, 4, 4]));
module.exports = {
  Mode,
};
