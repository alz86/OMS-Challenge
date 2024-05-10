import React from "react";
import ImageDisplayComponent from "./ImageDisplayComponent";

const ImagePreview = (props) => {

  const [images, setImages] = React.useState([...props.images]);
  const changeImageVisibility = (newVisibility) => setImages(images.map(m => ({...m, visible: newVisibility})));
  const handleShowAllClick = changeImageVisibility(true);
  const handleHideAllClick = changeImageVisibility(false);

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
                <ImageDisplayComponent key={img.id} src={img.src} visible={img.visible} id={img.id} alt={img.alt} />
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
