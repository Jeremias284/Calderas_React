import Caldera from "./Caldera";
const Calderas = ({calderas, onDelete, onToggle}) => {
    return (
        <>
            {calderas.map((caldera, index) => (
            <Caldera key={index} 
            caldera={caldera} 
                  onDelete={onDelete}  
                  onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Calderas;