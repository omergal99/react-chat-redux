import io from 'socket.io-client'
import ChatActions from '../store/actions/ChatActions';

import store from '../store/AppStore.js'

const serverUrl = process.env.NODE_ENV !== 'development' ?
    '' : '//localhost:9090';

var socket = io(serverUrl);

connectSocket();
function connectSocket() {
    socket.on('chat new msg', (txt, from) => {
        console.log('im innn',txt, from)
        // actions.addMsg(txt, from)
        store.dispatch(ChatActions.addMsg(txt, from))
    });

    // socket.on('other user type', (user) => {
    //     if (user) {
    //         AppStore.chatStore.setUserTyping(user)
    //     } else {
    //         AppStore.chatStore.setUserTyping('')
    //     }
    // });
}

const send = (txt) => {
    // socket.emit('msg sent', txt, AppStore.userStore.getCurrUser);
    var currUser = store.getState().userStore.currUser;
    socket.emit('msg sent', txt, currUser);
    console.log('stateeeee',store.getState())
}
// const typing = () => {
//     socket.emit('user type', AppStore.userStore.getCurrUser);
// }
// const stopTyping = () => {
//     socket.emit('user type', '');
// }

export default {
    send,
    // typing,
    // stopTyping
}
