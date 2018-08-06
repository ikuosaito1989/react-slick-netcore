import * as React from "react";
import "isomorphic-fetch";
import Slider from "react-slick";

export class Slick extends React.Component<{}, any> {
    public render(): JSX.Element {
        const settings: any = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500
        };
        return (
            <div>
                <h2>Center Mode</h2>
                <Slider {...settings}>
                    <div className="red">
                        <h3>1</h3>
                    </div>
                    <div className="yellow">
                        <h3>2</h3>
                    </div>
                    <div className="green">
                        <h3>3</h3>
                    </div>
                    <div className="blue">
                        <h3>4</h3>
                    </div>
                    {/* <div className="red">
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div> */}
                </Slider>
            </div>
        );
    }
}
