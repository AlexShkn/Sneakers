import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../scss/components/Slider.scss'

function Slider() {
	return (
		<Swiper
			modules={[Navigation, Pagination, Autoplay]}
			spaceBetween={50}
			slidesPerView={1}
			loop={true}
			autoplay={true}
			navigation
			pagination={{ clickable: true }}>
			<SwiperSlide>
				<div className="slider__content">
					<img src="img/slider/slider-bg.png" alt="" className="slider__bg" />
					<img src="img/slider/slider-logo.png" alt="Logo" className="slider__logo" />
					<div className="slider__body">
						<h2 className="slider__title">
							<span>Stan Smith</span>, Forever!
						</h2>
						<button className="slider__link">Купить</button>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="slider__content">
					<img src="img/slider/slider-bg.png" alt="" className="slider__bg" />
					<img src="img/slider/slider-logo.png" alt="Logo" className="slider__logo" />
					<div className="slider__body">
						<h2 className="slider__title">
							<span>Stan Smith</span>, Forever!
						</h2>
						<button className="slider__link">Купить</button>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="slider__content">
					<img src="img/slider/slider-bg.png" alt="" className="slider__bg" />
					<img src="img/slider/slider-logo.png" alt="Logo" className="slider__logo" />
					<div className="slider__body">
						<h2 className="slider__title">
							<span>Stan Smith</span>, Forever!
						</h2>
						<button className="slider__link">Купить</button>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	)
}

export default Slider
