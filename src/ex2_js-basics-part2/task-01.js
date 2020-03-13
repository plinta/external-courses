function outputResault(input){
  let assistant =typeof(input);
  if(assistant ==='number'|| assistant === 'string'){
    return assistant;}
  return undefined;
}  
module.exports = outputResault;