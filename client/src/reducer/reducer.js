 const initial={
     user:"",
     login:false
 }
 const reducer = (state={},action) => {
    console.log("in action");
    console.log(state.user);
    if(action.type==='logout')
    {
     return {
         
         user:"",
         login:false
       };
    }
    else if(action.type==='login')
    {
        console.log(action.payload,action.type);
        return {
            
            user:action.payload,
            login:true
        };
        
        
    }
    return state;
    
}
export default reducer;


