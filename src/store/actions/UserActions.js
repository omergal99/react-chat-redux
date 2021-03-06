import UserService from '../../services/UserService';

// function loadUser() {
//   return (dispatch) => {
//     UserService.getUser()
//       .then((user) => dispatch({ type: 'setUser', payload: { user } }))
//   }
// }
function loadUser() {
  return async (dispatch) => {
    const user = await UserService.getUser();
    dispatch({ type: 'setUser', payload: { user } })
  }
}

export default {
  loadUser,
}