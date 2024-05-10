import React, { useCallback } from "react";
import ImageDisplayComponent from "./ImageDisplayComponent";

const ImagePreview = (props) => {

  const [images, setImages] = React.useState([...props.images]);
  
  const handleShowAllClick =useCallback( () => setImages(images.map(m => ({...m, visible: true}))), [images]);
  const handleHideAllClick = useCallback( () => setImages(images.map(m => ({...m, visible: false}))), [images]);

  const handleImageChanged = useCallback((id, visible) => {
    var targetImage = images.find(m => m.id === id);
    targetImage.visible = visible;
    setImages([...images]);
  }, [images]);

  return (
    <div className="layout align-items-center mt-100">
      <div className="card ma-20 pa-50">
        <section>
          <div
            className="layout-row justify-content-around"
            data-testid="images-div"
          >
            {
              images.map(img => 
                <ImageDisplayComponent 
                    key={img.id} src={img.src} visible={img.visible} id={img.id} alt={img.alt} 
                    onImageChanged={newValue => handleImageChanged(img.id, newValue) }/>
              )
            }
            
          </div>
        </section>
        <section className="card-actions justify-content-center">
          <button data-testid="show-all-btn" onClick={handleShowAllClick}>Show all</button>
          <button className="danger" data-testid="hide-all-btn" onClick={handleHideAllClick}>
            Hide all
          </button>
        </section>
      </div>
    </div>
  );
};



export default ImagePreview;
