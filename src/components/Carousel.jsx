import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

const Carousel = () => {
    const slides = [
        {
            text: "StudyMate is a MERN Stack web platform designed to help students connect and collaborate for better learning outcomes. It enables users to find study partners based on subjects, learning preferences, or nearby locations, making education more interactive, engaging, and goal-oriented."
        },
        {
            text: "Built with the MERN Stack (MongoDB, Express, React, Node.js), this project focuses on practical full-stack development through CRUD operations, Firebase authentication, and a responsive, user-friendly interface that enhances real-world learning collaboration."
        },
        {
            text: "Schedule regular sessions with your StudyMate so you both keep each other accountable — no more \"I'll start tomorrow\"."
        }
    ];

    return (
        <div className="w-10/12 lg:w-3/5 mx-auto mb-8 px-4">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCards]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{
                    clickable: true,
                    dynamicBullets: true
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                effect={'cards'}
                grabCursor={true}
                loop={true}
                className=""
            >
                {slides.map((slide, index) => (
                    <SwiperSlide className='rounded-3xl' key={index}>
                        <div className="relative flex items-center justify-center bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
                            <div className="relative rounded-2xl z-10 p-8 md:p-16">
                                <p className="text-white text-center text-base md:text-2xl leading-relaxed font-light tracking-wide">
                                    {slide.text}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }

        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          background: white;
        }

        .swiper-pagination {
          bottom: 20px !important;
        }
      `}</style>
        </div>
    );
};

export default Carousel;