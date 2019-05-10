import UserService from '../../services/UserService';



function loadUser() {
    return (dispatch) => {
        UserService.getUser()
        .then((user) =>{
            if(user){
                dispatch( {
                    type: 'setUser',
                    payload: {user}
                })
            }else{
                dispatch({type: ''})
            }
        })
    }
}

// function getUser() {
//     return {type: ''};
// }

export default {
    loadUser,
    // getUser
}