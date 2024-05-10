import React, { useCallback } from "react";
import HiddenImageDiv from "./HiddenImageDiv";

const   ImageDisplayComponent = (props) => {
    const handleImageClick =useCallback(() => props.onImageChanged(false), [props]);
    const handleHideClick = useCallback(() => props.onImageChanged(true), [props]);

    return <>
        {props.visible 
            ? <img key={props.id} src={props.src} height={200} width={300} alt={props.alt} onClick={handleImageClick} />
            : <HiddenImageDiv key={props.id} onClick={handleHideClick} />
        }
    </>;
  }
  
  export default ImageDisplayComponent;