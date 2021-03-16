import React from "react";
import { SketchPicker } from 'react-color';
import './App.css';

// function Tools() {
  
    
//     return (
//         <div className ='tool-bar' >
    
//         <div id='eraser' className="tool" ></div>
//         <div id='clear' className="tool"></div>
//         <div id='palette' className="tool"></div>
//         <div id='save' className="tool"></div>

//         </div>

//     );
// }

// export default Tools;

class Tools extends React.Component {

        // state = {
        //     background: '#fff',
        // };
       
        // handleChangeComplete = (color) => {
        //     this.setState({ background: color.hex });
        // };

    render() { 
    
    
        return (
            <div>
            <div className ='tool-bar' >
    
            <div id='eraser' className="tool" ></div>
            <div id='clear' className="tool" ></div>
            <div id='palette' className="tool" ></div>
            <div id='save' className="tool"></div>
            
            </div>
            
            {/* <SketchPicker/> */}
        </div>
        )
    }
}

export default Tools;






