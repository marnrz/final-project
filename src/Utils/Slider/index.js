import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";

export default function Slider(plot, name, year, background) {
  return (
    <Swiper
      speed={600}
      parallax={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Parallax, Pagination, Navigation]}
      className="mySwiper"
    >
      <div
        slot="container-start"
        className="parallax-bg"
        style={{
          "background-image": { background },
        }}
        data-swiper-parallax="-23%"
      ></div>
      <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
          {name}
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
          {year}
        </div>
        <div className="text" data-swiper-parallax="-100">
          <p>{plot}</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
