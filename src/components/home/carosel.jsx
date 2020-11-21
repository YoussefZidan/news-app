import React, { useState } from "react";
import { randomNumber } from "./../../utility/commonFunctions";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
} from "reactstrap";
import slide1 from "../../assets/imgs/slide1.jpg";
import slide2 from "../../assets/imgs/slide2.jpg";
import slide3 from "../../assets/imgs/slide3.jpg";

const items = [
  {
    id: randomNumber(),
    src: slide1,
    altText: "Slide 1",
    captionHeader: <span className="d-block mb-5">AI Foundation</span>,
    captionText: (
      <React.Fragment>
        <span className="d-block mb-4 w-75 mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel suscipit
          dolore molestias dicta quidem omnis cum aperiam asperiores animi
          corporis?
        </span>
        <Button color="success">Donate Now</Button>
      </React.Fragment>
    ),
  },
  {
    id: randomNumber(),
    src: slide2,
    altText: "Slide 2",
    captionHeader: <span className="d-block mb-5">AI Foundation</span>,
    captionText: (
      <React.Fragment>
        <span className="d-block mb-4 w-75 mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel suscipit
          dolore molestias dicta quidem omnis cum aperiam asperiores animi
          corporis?
        </span>
        <Button color="success">Donate Now</Button>
      </React.Fragment>
    ),
  },
  {
    id: randomNumber(),
    src: slide3,
    altText: "Slide 3",
    captionHeader: <span className="d-block mb-5">AI Foundation</span>,
    captionText: (
      <React.Fragment>
        <span className="d-block mb-4 w-75 mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel suscipit
          dolore molestias dicta quidem omnis cum aperiam asperiores animi
          corporis?
        </span>
        <Button color="success">Donate Now</Button>
      </React.Fragment>
    ),
  },
];

/**
 * Carosel Functional Component
 */
const Carosel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}>
        <CarouselCaption
          captionText={item.captionText}
          captionHeader={item.captionHeader}
        />
        <img
          className="darkened-image"
          width="100%"
          src={item.src}
          alt={item.altText}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Carosel;
