import SocketService from '../../services/SocketService';


function sendMsg(txt) {
    SocketService.send(txt)
    return {type: '', payload: { txt }}
}
// function sendUserTyping() {
//     SocketService.typing()
// }
// function sendUserStop() {
//     SocketService.stopTyping()
// }


function addMsg(txt, from) {
    console.log('add workkkkkkkkkkkkkkkk')
    // this.msgs.push({ txt, from })
    return {
        type: 'pushToMsgs',
        payload: { txt, from }
    }
}

// function setUserTyping(user) {
//     this.userTyping = user;
// }

export default {
    sendMsg,
    // sendUserTyping,
    // sendUserStop,
    addMsg,
    // setUserTyping
}