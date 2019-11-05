import React, { useState } from 'react';
import './style.css';

const ChatBox = ({ io, user }) => {
  const [messages, setMessages] = useState([
    { own: false, text: <>&nbsp;</> },
    { own: false, text: <>&nbsp;</> },
    { own: false, text: <>&nbsp;</> },
    { own: false, text: <>&nbsp;</> }
  ]);

  const handleSendMessage = () => {
    const inputMessage = document.querySelector('input[name=message]');
    const temp = [...messages];
    temp.push({ own: true, text: inputMessage.value });
    if (temp.length >= 5) {
      temp.shift();
    }
    setMessages(temp);
    io.emit('CLIENT_SEND_MESSAGE', { user, msg: inputMessage.value });

    inputMessage.value = '';
  };

  io.on('SERVER_SEND_MESSAGE', req => {
    const temp = [...messages];
    temp.push({ own: false, text: req.msg });
    if (temp.length >= 5) {
      temp.shift();
    }
    setMessages(temp);
  });

  const renderMessages = () => {
    return (
      <ul className="list-group">
        {messages.map((item, index) => (
          <li
            key={index}
            className={`list-group-item  ${
              item.own ? 'text-right list-group-item-primary' : 'text-left'
            }`}
          >
            {/* {item.text === '' ? <>&nbsp;</> : item.text} */}
            {item.text}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      {renderMessages()}
      <div className="input-group mb-3">
        <input type="text" className="form-control" name="message" />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleSendMessage}
          >
            Gửi
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
