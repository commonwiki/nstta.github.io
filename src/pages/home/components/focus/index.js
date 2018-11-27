import React, { PureComponent } from "react";
import { Carousel } from "antd";
import { connect } from "react-redux";
import { CarouselWrapper } from "./style";

class Foucs extends PureComponent {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next() {
    this.slider.next();
  }

  prev() {
    this.slider.prev();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      effect: "fade"
    };

    return (
      <CarouselWrapper>
        <Carousel
          ref={c => (this.slider = c)}
          {...settings}
          autoplay
          className="ppre"
        >
          {this.props.list.map((item, index) => (
            <div key={index}>
              <img src={item.get("thumb")} alt="" />
              <a href="/">
                <p>{item.get("title")}</p>
              </a>
            </div>
          ))}
        </Carousel>

        <div className="pre" onClick={this.prev} />
        <div className="next" onClick={this.next} />
      </CarouselWrapper>
    );
  }
}

const mapState = state => ({
  list: state.getIn(["home", "focus"])
});

export default connect(
  mapState,
  null
)(Foucs);
