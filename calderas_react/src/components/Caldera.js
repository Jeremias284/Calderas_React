import Calderas from "./Calderas"
import {FaTimes} from 'react-icons/fa';

 const Caldera = ({caldera, onDelete, onToggle}) => {
    return (
        <div className={`caldera ${caldera.reminder ? 'reminder': ''}`} onDoubleClick={() => onToggle(caldera.id)}>
            <h3>{caldera.nombre} <FaTimes style= {{color: 'red', cursor: 'pointer'}} onClick= {() => onDelete(caldera.id)} /></h3>
            <h3>{caldera.caldera}</h3>
        </div>
    )
}

export default Caldera