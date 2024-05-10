import React, { useCallback } from "react";
import HiddenImageDiv from "./HiddenImageDiv";

const   ImageDisplayComponent = (props) => {
    const [show, setShow] = React.useState(props.visible);
    
    const handleImageClick = useCallback( () => setShow(false), []) ;
    const handleHideClick =  useCallback( () => setShow(true), []) ;

    return <>
        {show 
            ? <img key={props.id} src={props.src} height={200} width={300} alt={props.alt} onClick={handleImageClick} />
            : <HiddenImageDiv key={props.id} onClick={handleHideClick} />
        }
    </>;
  }
  
  export default ImageDisplayComponent;