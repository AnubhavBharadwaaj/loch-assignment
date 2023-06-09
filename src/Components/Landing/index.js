import React, { useState } from "react";
import "./index.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { EmailInput } from "../../Containers/Input/EmailInput";
import { StartButton } from "../../Containers/Buttons/StartButton";
import { InfiniteCarousel } from "../../Containers/Slider/InfiniteCarousel";
import { SettingNotification } from "../../Containers/Cards/SettingNotification";
import { SettingNotifyDormant } from "../../Containers/Cards/SettingNotifyDormant";
import { SettingWalletMove } from "../../Containers/Cards/SettingWalletMove";
import { Whale } from "./Whale";
import { Feedback1 } from "../../Containers/Cards/Feedback1";
import { Feedback2 } from "../../Containers/Cards/Feedback2";
import { Feedback3 } from "../../Containers/Cards/Feedback3";
import { InfiniteCarouselFeedback } from "../../Containers/Slider/InfiniteCarouselFeedback";

export const Landing = props => {
    const [email, setEmail] = useState(null);
    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        }
      };
    return (<div class="main-flex">
        <div class="main-left">
            <div class="radiant-left">
                <div class="section-1">
                    <div class="sub-1-section-1">
                        <div class="bell-left"></div>
                        <div class="getnotify-text">Get notified when a highly correlated whale makes a move</div>
                        <div class="desc-1">Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</div>
                    </div>
                    <div class="sub-2-section-1">
                        <InfiniteCarousel carouselitems={
                            [<SettingNotification/>,
                            <SettingNotifyDormant/>,
                            <SettingWalletMove />,
                            <SettingNotification/>,
                            <SettingNotifyDormant/>,
                            <SettingWalletMove />,
                            <SettingNotification />,
                            <SettingNotifyDormant/>,
                            <SettingWalletMove />,
                            <SettingNotification />,
                            <SettingNotifyDormant/>,
                            <SettingWalletMove />,
                            <SettingNotification />]
                            }/>
                    </div>
                </div>
                <div class="section-2">
                {/* <img class="whale-left" src="../../Assets/images/whale_1.png" width="100" height="100" alt=""></img> */}
                    {/* <div class="whale-left"></div> */}
                    <Whale />

                    <div class="sub-2-section-2">
                        <div class="eye-right"></div>
                        <div class="eye-text1">Watch what the whales are doing</div>
                        <div class="eye-text2">All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</div>
                    </div>
                </div>
                <div class="section-3">
                    <div class="testimonial-text">Testimonials</div>
                    <div class="testimonial-divider"></div>
                    <div class="sub-3-section-3">
                        <div class="loch-logo"></div>
                        <div style={{position: "relative", top: "10rem", left: "10rem"}}>
                        <Carousel 
                        responsive={responsive}
                        draggable={true}
                        infinite={true}
                        keyBoardControl={true}
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                        containerClass="carousel-container">
                            <Feedback1 />
                            <Feedback2 />
                            <Feedback3 />
                            <Feedback1 />
                            <Feedback2 />
                            <Feedback3 />
                            <Feedback1 />
                            <Feedback2 />
                            <Feedback3 />
                        </Carousel>;
                        </div>
                        {/* <Slider sliderSettings={sliderSettings} /> */}
                        {/* <InfiniteCarouselFeedback carouselitems={[
                            <Feedback1 />,
                            <Feedback2 />,
                            <Feedback3 />,
                            <Feedback1 />,
                            <Feedback2 />,
                            <Feedback3 />,
                            <Feedback1 />,
                            <Feedback2 />,
                            <Feedback3 />,
                            <Feedback1 />,
                            <Feedback2 />,
                            <Feedback3 />,
                            <Feedback1 />,
                            <Feedback2 />
                        ]} /> */}
                        {/* <Slider sliderSettings={sliderSettings} /> */}
                    </div>
                </div>
            </div>
        </div>
        <div class="main-right">
            <div class="sign-text">Sign up for exclusive access.</div>
            <EmailInput email={email} setEmail={setEmail} />
            <StartButton email={email} setEmail={setEmail} />
            <div class="invite-text">You’ll receive an email with an invite link to join.</div>
        </div>
        
    </div>)
}