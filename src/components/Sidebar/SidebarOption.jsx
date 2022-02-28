import React from 'react'

import { collection, addDoc } from "firebase/firestore";
import { useDispatch } from 'react-redux';

import {enterRoom} from '../../features/appSlice'
import {SideBarOptionChannel,SideBarOptionContainer} from './SidebarOptionElement'
import {db} from '../../firebase'
function SidebarOption({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();
  const addChannel  = async ()=>{
    const channelName = prompt("Please enter channel name");
    if(channelName){
      await addDoc(collection(db, "rooms"),{
        name: channelName
      })
    }
  }

  const selectChannel =()=>{
    if(id){
      dispatch(enterRoom({
        roomId: id
      }))
    }
  }

  return (
    <SideBarOptionContainer 
       onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SideBarOptionChannel>
          <span>#</span>{title}
        </SideBarOptionChannel>)
      }
    </SideBarOptionContainer >
  )
}



export default SidebarOption