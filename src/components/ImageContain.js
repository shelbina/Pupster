import React from 'react';
import RatingButton from "../components/RatingButton";

    const ImageContain = props =>
        <div className="ImageContain" style={{
            backgroundImage: props.image ? `url(${props.image})` : "none"}}>
            
            {!props.image}
            
            <RatingButton
                onClick={props.handleNextImage}
            />
        </div>;
export default ImageContain;