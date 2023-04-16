

export function loginAction(){
    return{
        type: Login,
        email:"email",
        password:"pass"
    };
}


export function logoutAction(){
    return{
        type: logout,
        email:"",
        password:""
    };
}