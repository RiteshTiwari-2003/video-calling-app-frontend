import { useParams } from "react-router-dom";

const Room:React.FC=()=>{
    const {id}=useParams();
    return (
        <div>
            room:{id}
        </div>
    )
}
export default Room;