import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../store/actions';

class Chat extends Component {
  state = {
    text: '',
    typeTime: null
  }

  componentDidMount() {
    console.log(this.props)
    this.props.loadUser();
  }

  updateMsg = (ev) => {
    this.setState({ text: ev.target.value, typeTime: Date.now() });
    // if (Date.now() - this.state.typeTime > 250) {
    //   this.props.store.chatStore.sendUserTyping();
    // }

    // setTimeout(() => {
    //   if (Date.now() - this.state.typeTime > 1000 ) {
    //     this.props.store.chatStore.sendUserStop()
    //   }
    // }, 1200)
  }

  imSendMsg = (ev) => {
    ev.preventDefault();
    if (this.state.text) {
      this.props.sendMsg(this.state.text);
      this.setState({ text: '' });
    }
  }

  render() {
    var userName = this.props.currUser;
    // var userTyping = this.props.store.chatStore.getNameType;
    var massages = this.props.msgs;
    const chat = massages.map((msg, idx) => (
      <li className={userName === msg.from ? 'own' : 'else'} key={idx}>
        <label className="user">{msg.from}:&nbsp;</label>
        <label>{msg.txt}</label>
      </li>
    ));
    return (
      <section className="homePage">

        <h1>{userName}, Welcome to Chat!</h1>
        {/* <h1>Welcome to Chat!</h1> */}

        {/* {userTyping &&
          <div className="type-area">{userTyping} typing...</div>
        }
        {!userTyping &&
          <div className="type-area"></div>
        } */}

        <form className="msg-form">
          <input autoFocus value={this.state.text} onChange={this.updateMsg} type="text" />
          <button onClick={this.imSendMsg}>SEND</button>
        </form>

        <ul className="msg-list">{chat}</ul>

      </section>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    msgs: state.chatStore,
    currUser: state.userStore.currUser
  }
}

export default connect(mapStateToProps, actions)(Chat)