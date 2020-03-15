function showProperty(strForTask, objForTask){
    for(let key in objForTask){
        if((objForTask.hasOwnProperty(key))&&(key === strForTask)){
            return
         }
         }
         Object.assign(objForTask, {[strForTask]:'new'});
    
  }
  module.exports = showProperty;