    // This page contains 2 clickable buttons: one for passing or "thumbs-downing" a dog, 
    // and one for picking or "thumbs-upping" a dog. 
    // When either button is clicked, a new dog image is loaded from the API. 
    // If you "thumbs up" a dog, there is a 1 in 5 chance that the dog likes you too, and the friends count goes up by 1.
import React from 'react';
    const RatingButton = props =>
        <div>
            <button onClick={props.searchImage} className="btn btn-info">
                <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
                Like 
            </button>
            <button onClick={props.searchImage} className="btn btn-info">
                <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                Dislike 
            </button>
        </div>;

export default RatingButton;