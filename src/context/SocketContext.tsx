import SocketIoClient from "socket.io-client";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {v4 as UUIDv4} from "uuid";
import Peer from "peerjs"; 
const WS_Server="http://localhost:5500";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SocketContext=createContext <any | null>(null);
const socket=SocketIoClient(WS_Server,{
    withCredentials:false,
    transports:["pooling","websocket"]
});
interface Props{
    children:React.ReactNode
}
export const SocketProvider: React.FC<Props>=({children})=>{
    const navigate=useNavigate();
    // will help us programmatically handle navigation
    // state variable to stored the userId
    const [user,setUser]=useState<Peer>();//new peer user 
    useEffect(()=>{
        const userId=UUIDv4();
        const newPeer=new Peer(userId);
        setUser(newPeer);
        const enterRoom=({roomid}:{roomid:string})=>{
            navigate(`/room/${roomid}`);
        }
        // we will transfer the user to the room page when we collect an event of room_created from server
        socket.on("oom-created",enterRoom);

    },[]);
    return (<SocketContext.Provider value={{socket,user}}>{children}</SocketContext.Provider>)
}
