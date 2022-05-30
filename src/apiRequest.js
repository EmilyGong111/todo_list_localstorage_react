const apiRequest = async (url="", optionObj = null, errMsg = null) =>{
    try{
       const response = await fetch(url, optionObj);
       if(!response.ok)throw Error('Please reload the app');//the state of the function may not be in sync with the database if we've had an error with creating updating or deleting they would be out of sync we reload we'll get that data back from the server. 
    }catch(err){
       errMsg = err.message;
    }finally{
       return errMsg;
    }

}
export default apiRequest;