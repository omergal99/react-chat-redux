export default (state, action) => {
    var copy;
    if (!state) {
        copy = [{ txt: 'hello', from: 'Omer' }, { txt: 'hii', from: 'Amit' }]
    } else {
        copy = [...state];
    }
    console.log('reducer: CHAT state: ', state, ", action.type: ", action)
    var txt2 = (action.payload) ? action.payload.txt : 'text';
    var from2 = (action.payload) ? action.payload.from : 'from';

    switch (action.type) {
        case 'pushToMsgs':
            return [...copy, { txt: txt2, from: from2 }];
        default:
            return copy;
    }
}