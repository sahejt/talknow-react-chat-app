import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import Logout from '../img/logout.png'

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span className="displayName">{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Logout} alt="" onClick={()=>signOut(auth)}/>

        </div>

      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
