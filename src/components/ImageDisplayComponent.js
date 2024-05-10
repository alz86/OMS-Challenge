import React from "react";
import HiddenImageDiv from "./HiddenImageDiv";

const ImageDisplayComponent = (props) => {
    const [show, setShow] = React.useState(props.visible);
    
    return <>
    {show 
      ? <img key={props.id} src={props.src} height={200} width={300} alt={props.alt} onClick={setShow(false)} />
      : <HiddenImageDiv key={"1"} onClick={setShow(true)} />
    }
  </>;
  }
  
  export default ImageDisplayComponent;