import { useContext,useEffect } from "react";
import { useParams } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";

const Room:React.FC=()=>{
    const {id}=useParams();
    const {socket}=useContext(SocketContext)
    useEffect(()=>{
        //emitting this event so that either creator of the room or joinee in the room 
        //anyone is added the server knownsthat new people have been added 
        //to this room
        socket.emit("joined-room",{roomId:id});
    },[]);
    return (
        <div>
            room:{id}
        </div>
    )
}
export default Room;