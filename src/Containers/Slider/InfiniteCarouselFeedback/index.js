import React from "react";
import "./index.css";

export const InfiniteCarouselFeedback = props => {
    return (<div class="slider-feedback">
	<div class="slide-track-feedback">
        {props.carouselitems.map(item=>{
            return (<div class="slide-feedback">
                {item}
            </div>)
        })}
	</div>
</div>);
}