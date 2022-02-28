import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocument } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import {selectRoomId} from '../../features/appSlice'
import {auth,db} from '../../firebase'
import { doc} from "firebase/firestore";

import {HeaderContainer,HeaderLeft,HeaderAvatar,HeaderSearch,HeaderRight } from './HeaderElement';

 function Header (){
    const [user] = useAuthState(auth);
    console.log(user)
    const roomId = useSelector(selectRoomId);
    const [roomsDetail] = useDocument(
        roomId &&  doc(db, `rooms/${roomId}`)
      )
    

    return(
        <div>
            <HeaderContainer>
            <HeaderLeft>
            <HeaderAvatar
               src={user?.photoURL}
               alt={user?.displayName}
               onClick={() => auth.signOut()}

            />
            <AccessTimeIcon/>
            </HeaderLeft>
            <HeaderSearch>
        <SearchIcon/>
            <input placeholder={`Search ${
            roomId && roomsDetail ? roomsDetail?.data().name : "channel"
          }`}/>
            </HeaderSearch>
            <HeaderRight>
        <HelpOutlineIcon/>
            </HeaderRight>

            </HeaderContainer>
        </div>
    )
}

export default Header;