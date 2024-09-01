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
import AVTR4 from "../../assets/Avt4.jpeg";
import AVTR5 from "../../assets/Avt5.jpeg";
SwiperCore.use([]);


const data = [
  {
    id: 1,
    avatar: AVTR5,
    clientName: "NIKHITA R V",
    history: "Senior Software Engineer at Fidelity Investments",
    review:"Having worked with Nadeem for over a year, I can confidently say that he is one of the most resourceful front-end developers I’ve encountered. He has an uncanny ability to take abstract ideas and transform them into visually stunning, intuitive interfaces that resonate deeply with end-users. He is excellent in Angular and React, and his expertise played a crucial role in building a UI that was well-appreciated across all hierarchies. Over the past year, he has also expanded his knowledge to include Java and Spring Boot, steadily evolving towards becoming a full-stack developer. He is relentlessly curious and has a strong sense of ownership. He dives deep into the nuances of every project, ensuring that the smallest details are perfect. He takes onus not just for his work but for the success of the entire team. His hunger for knowledge and disciplined work ethic ensure that projects are delivered on time and often exceed expectations. Nadeem’s blend of technical skills, collaborative spirit, and eagerness to learn makes him an invaluable asset to any team." 
   },
  {
    id: 2,
    avatar: AVTR4,
    clientName: "SAMEER SK",
    history: "Lead Software Engineer at Fidelity Investments",
    review:
      "I had the pleasure of working closely with Nadeem, and I can confidently say he is one of the most dedicated and hardworking individuals I've encountered. As a junior member of the team, Nadeem consistently demonstrates an impressive ability to tackle challenges head-on, showing patience and perseverance in even the most demanding situations. What sets Nadeem apart is his commitment to personal growth. He is always pushing boundaries, eager to learn, and improve both personally and professionally. This drive, combined with a natural curiosity, makes him an invaluable asset to any team. His command over Front-end Frameworks and confidence in being able to tackle challenges with innovative solutions was very useful. Beyond technical skills and work ethic, he is incredibly endearing to all team members. He brings a positive attitude, collaborates effortlessly, and genuinely supports everyone around them, creating a strong sense of camaraderie within the group. I highly recommend Nadeem for any future endeavors. With his blend of hard work, patience, and team spirit, Nadeem will continue to thrive and make significant contributions wherever he goes.",
  },
  {
    id: 3,
    avatar: AVTR0,
    clientName: "SURAJ KUMAR",
    history: "SMTS @Fyle worked together",
    review:
      "I highly recommend Nadeem for any position. During his 3-month tenure at Fyle as a Frontend Developer, he demonstrated exceptional learning and leadership skills. Nadeem consistently met deadlines and performed commendably, even in challenging situations. His technical expertise and dedication will be valuable assets to any team. I strongly encourage you to consider Nadeem for any suitable opportunity without reservation.",
  },
  {
    id: 4,
    avatar: AVTR1,
    clientName: "RITVIK KALA",
    history: "CS @Fyle worked together",
    review:
      "I am delighted to recommend Nadeem, an intern in our Engineering team, who has been an outstanding asset to the team for the past months. As a highly skilled and efficient Web developer, he consistently impresses us with his ability to create seamless and user-friendly web applications. Beyond his technical expertise, Nadeem's friendly and easy-going nature fosters a positive work environment. He actively contributes to cross-team collaborations and remains receptive to feedback. Nadeem's attention to detail and proactive problem-solving has been invaluable, and he consistently meets deadlines without compromising quality. I have no doubt that Nadeem's talent and dedication will lead to a successful career. I wholeheartedly recommend him for any future opportunities.",
  },
  {
    id: 5,
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

