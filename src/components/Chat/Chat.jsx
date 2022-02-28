import React,{useRef,useEffect} from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import { doc, orderBy,collection } from "firebase/firestore";

import {useSelector} from 'react-redux'
import {selectRoomId} from '../../features/appSlice.js'
import ChatInput from './ChatInput'
import {ChatContainer,Header,HeaderLeft,HeaderRight,ChatMessages,ChatBottom} from './ChadElement'
import {db} from '../../firebase'
import Message from './Message.jsx';


function Chat() {
  const roomId = useSelector(selectRoomId);
  const [roomsDetail] = useDocument(
    roomId &&  doc(db, `rooms/${roomId}`)
  )

  const [roomMessage,loading] = useCollection(
    roomId &&  collection(db, `rooms/${roomId}/messages`)
  )

  const chatRef = useRef(null);

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);

  // console.log(roomMessage)
  return (

    <ChatContainer>
    {roomsDetail && roomMessage && (
      <>
      <Header>
          <HeaderLeft>
              <h4><strong>#{roomsDetail?.data().name}</strong></h4>
          </HeaderLeft>

          <HeaderRight>
              <p>
                  <InfoOutlinedIcon/>Detail
                  </p>
          </HeaderRight>
      </Header>
      <ChatMessages>
      {roomMessage?.docs.map((doc) => {
            const { message, timeStamp, user, userImage } = doc.data();

            return (
              <Message
                key={doc.id}
                message={message}
                timeStamp={timeStamp}
                user={user}
                userImage={userImage}
              />
            );
          })}
         <ChatBottom ref={chatRef} />
      </ChatMessages>

      <ChatInput
      channelName={roomsDetail?.data().name}
        channelId={roomId}
        chatRef={chatRef}
      />
      </>
    ) }
    </ChatContainer>
   
  )
}

export default Chat