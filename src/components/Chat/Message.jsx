import React from 'react'

import {MessageContainer,MessageInfo} from './MessageElemnt'

function Message({message, timeStamp, user, userImage}) {
    return (
        <MessageContainer>
          <img src={userImage} alt="" />
          <MessageInfo>
            <h4>
              {user} <span>{new Date(timeStamp?.toDate()).toUTCString()}</span>
            </h4>
            <p>{message}</p>
          </MessageInfo>
        </MessageContainer>
      );
  
}

export default Message