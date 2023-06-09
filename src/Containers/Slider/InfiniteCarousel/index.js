import React from "react";
import "./index.css";

export const InfiniteCarousel = props => {
    return (<div class="slider">
	<div class="slide-track">
        {props.carouselitems.map(item=>{
            return (<div class="slide">
                {item}
            </div>)
        })}
	</div>
</div>);
}