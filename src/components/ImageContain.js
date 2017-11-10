import React from 'react';
import RatingButton from "../components/RatingButton";

    const ImageContain = props =>
        <div className="ImageContain" style={{
            backgroundImage: props.image ? `url(${props.image})` : "none"}
            }
            >
            {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
            <p>Aww! Pupster!</p>
            <RatingButton 
        handleNextImage = {this.handleNextImage}
        />
        </div>;
export default ImageContain;