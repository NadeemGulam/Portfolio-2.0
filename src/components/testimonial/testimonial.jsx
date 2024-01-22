/** @format */

import React from "react";
import "./testimonial.css";
// Import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Import pagination styles
import "swiper/css/scrollbar";

// Initialize Swiper core
import AVTR0 from "../../assets/Avt1.jpeg";
import AVTR1 from "../../assets/Avt2.jpeg";
import AVTR2 from "../../assets/Avt3.jpeg";
SwiperCore.use([]);


const data = [
  {
    id: 0,
    avatar: AVTR0,
    clientName: "SURAJ KUMAR",
    history: "SMTS @Fyle worked together",
    review:
      "I highly recommend Nadeem for any position. During his 3-month tenure at Fyle as a Frontend Developer, he demonstrated exceptional learning and leadership skills. Nadeem consistently met deadlines and performed commendably, even in challenging situations. His technical expertise and dedication will be valuable assets to any team. I strongly encourage you to consider Nadeem for any suitable opportunity without reservation.",
  },
  {
    id: 1,
    avatar: AVTR1,
    clientName: "RITVIK KALA",
    history: "CS @Fyle worked together",
    review:
      "I am delighted to recommend Nadeem, an intern in our Engineering team, who has been an outstanding asset to the team for the past months. As a highly skilled and efficient Web developer, he consistently impresses us with his ability to create seamless and user-friendly web applications. Beyond his technical expertise, Nadeem's friendly and easy-going nature fosters a positive work environment. He actively contributes to cross-team collaborations and remains receptive to feedback. Nadeem's attention to detail and proactive problem-solving has been invaluable, and he consistently meets deadlines without compromising quality. I have no doubt that Nadeem's talent and dedication will lead to a successful career. I wholeheartedly recommend him for any future opportunities.",
  },
  {
    id: 2,
    avatar: AVTR2,
    clientName: "TUSHAR SAROCH",
    history: "Team Lead @Fyle worked together",
    review:
      "Nadeem is an exceptional Web developer with a focus on React, and his skills in this area are truly outstanding. His problem-solving abilities are top-notch, and he consistently brings innovative solutions to the table. Nadeem's profound knowledge of data structures and algorithms sets him apart in the software field. I wholeheartedly recommend Nadeem Gulam to any organization seeking a highly skilled and motivated Web developer. He is a valuable asset to any software team and will undoubtedly excel in any future opportunities.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from coworkers</h5>
      <h2>testimonials</h2>
      <Swiper
        className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((i) => {
          return (
            <SwiperSlide key={i.id} className="testimonial">
              <div className="client__avatar">
                <img src={i.avatar} alt="avatar" />
              </div>
              <h5 className="client__name">{i.clientName}</h5>
              <h2 className="history">{i.history}</h2>
              <small className="client__review">{i.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

