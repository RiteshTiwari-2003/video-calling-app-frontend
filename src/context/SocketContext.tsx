import SocketIoClient from "socket.io-client";
import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    const navigate=useNavigate();// will help us programmatically handle navigation
    useEffect(()=>{

    },[]);
    return (<SocketContext.Provider value={{socket}}>{children}</SocketContext.Provider>)
}
