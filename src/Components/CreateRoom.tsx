import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";


const CreateRoom: React.FC=()=>{
    const {socket}=useContext(SocketContext);
    const initRoom=()=>{
        socket.emit("create-room");
    }
    return (
        <button onClick={initRoom} className="btn btn-secondary">Start aq new meeting in a new room </button>
    )
}
export default CreateRoom;