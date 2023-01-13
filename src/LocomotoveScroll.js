import { useEffect, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const ScrollComponent = () => {
  const { scroll, ...rest } = useLocomotiveScroll();

  return (
    <div data-scroll-container>
      <div className="block" data-scroll-section>
        Header block
      </div>
      <div className="container" data-scroll-section>
        <div className="description panel blue">
          <div>
            <h1 data-scroll data-scroll-speed="3">
              Horizontal snapping sections (simple)
            </h1>
            <p data-scroll data-scroll-speed="2">
              Scroll vertically to scrub the horizontal animation. It also
              dynamically snaps to the sections in an organic way based on the
              velocity. The snapping occurs based on the natural ending position
              after momentum is applied, not a simplistic "wherever it is when
              the user stops".
            </p>
            <div className="scroll-down" data-scroll data-scroll-speed="1">
              Scroll down<div className="arrow"></div>
            </div>
          </div>
        </div>
        <section className="panel red">ONE</section>
        <section className="panel orange">TWO</section>
        <section className="panel purple">THREE</section>
        <section className="panel green">FOUR</section>
        <section className="panel gray">FIVE</section>
      </div>
      <div className="block" data-scroll-section>
        Footer block
      </div>

      {/* <div>
        <div data-scroll-section>
          <h1 data-scroll>Hey</h1>
          <p data-scroll>👋</p>
        </div>
        <div data-scroll-section>
          <h2 data-scroll data-scroll-speed="1">
            What's up?
          </h2>
          <p data-scroll data-scroll-speed="2">
            😬
          </p>
        </div> 
      </div>*/}
    </div>
  );
};

const LocomotiveScroll = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,

        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <ScrollComponent />
      </main>
    </LocomotiveScrollProvider>
  );
};

export default LocomotiveScroll;
