import React from "react";
import PropTypes from 'prop-types'

const Boton = ({color1, color2, text1, text2, onClick}) => {
    return(
    <div>
        <button onClick={onClick} 
            style= {{backgroundColor: color1}} 
            className='btn'>{text1} 
        </button>
        <button onClick={onClick} 
            style= {{backgroundColor: color2}} 
            className='btn'>{text2} 
        </button>
    </div>
    
    ) 
    
}

Boton.defaultProps = {
    color: 'steelblue',
}

Boton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string, 
}

export default Boton