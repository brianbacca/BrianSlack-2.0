import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import {ChatInputContainer} from './ChatInputElement'
import {db, auth,firebaseApp} from '../../firebase'
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import {useSelector} from 'react-redux'
import {selectRoomId} from '../../features/appSlice.js'

const firestore = getFirestore(firebaseApp);





 function ChatInput({channelName,channelId,chatRef}) {
  const [input, setInput] = useState('')
  const [user] = useAuthState(auth)






  const sendMessage = (e)=>{


    e.preventDefault();
    if(!channelId){
      return false;
    }
    const docuRef = doc(
      db,
      `rooms/${channelId}/messages/${new Date().getTime()}`)

      setDoc(docuRef, {
        message: input,
      user: user.displayName,
      timeStamp: serverTimestamp(),
      userImage:user.photoURL,
        id: new Date().getTime(),
      });


      chatRef?.current?.scrollIntoView({
        behavior: "smooth",
      });


    setInput("")
  }

  return (
    <ChatInputContainer>
        <form>
        <input onChange={e => setInput(e.target.value)} value={input} placeholder={`#Message #${channelName}`} />
            <Button hidden type="sumbit" onClick={sendMessage}>
              SEND
            </Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput