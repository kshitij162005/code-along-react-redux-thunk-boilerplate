// here users is the success data from the API and erroe i failed data from the API
export const fetchUserData = (users)=>({type:"FETCH_DATA",payload:users});
export const showError = (error)=>({type:"ERROR",payload:error});