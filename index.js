const CreateMatrix = require("./creatematrix");
const Modus = require("./modus");

function main() {
  try {
    console.log("Mulai !!!")
    const data = CreateMatrix.CreateMatrix();
    Modus.Mode(data);
  } catch (error) {}
}
main();
