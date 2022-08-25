const RandomNumber = require("./random_number");
const CreateMatrix = async () => {
  var matrix = [],
    H = 10,
    W = 10;

  for (var y = 0; y < H; y++) {
    matrix[y] = [];
    for (var x = 0; x < W; x++) {
      matrix[y][x] = between(-10, 10);
    }
  }

  //   console.log(matrix.join("\n"));
  console.log("Hasil Matrix :");
  console.log("[" + matrix.join("\n") + "]");
  return matrix;
};

function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
module.exports = {
  CreateMatrix,
};
