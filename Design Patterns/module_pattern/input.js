export function validateInput(input){
  if(typeof input !== "number"){
    throw Error("Invalid Input");
  }
}