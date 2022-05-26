import { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Spotlight from '../cards/SpotlightCard';

export default function SpotlightSection({data, className = "", forward = true, loading, setLoading}) {
    return (
        <section className={className} id="spotlight">
            <h2 className="smallHeader" style={{fontSize:"18pt"}}>Spotlight</h2>
            <Swiper
                modules={[Scrollbar]}
                direction="horizontal"
                loop={true}
                slidesPerView={3}
                spaceBetween={35}
                className="swiper"
                breakpoints={{
                768: {
                slidesPerView: 3,
                spaceBetween: 250,
                },
                320: {
                slidesPerView: 3,
                spaceBetween: 10,
                }
                }}
                style={{width:"35rem"}}>
                <div className="swiper-wrapper">
                {data.map(article => (
                    <SwiperSlide key={article._id}><Spotlight article={article} forward={forward}></Spotlight></SwiperSlide>
                ))}
                </div>
            </Swiper>
        </section>
    )
}