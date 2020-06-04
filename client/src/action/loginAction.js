export const loginAction = () => (dispatch) =>
{
    console.log("hii");
    dispatch({
        type:"login",
        payload:"abhii"
    })
};