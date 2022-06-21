import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import '../scss/components/Slider.scss'

import sliderLogo from '../assets/img/Slider/slider-logo.png'
import sliderBg from '../assets/img/Slider/slider-bg.png'

function Slider() {
	return (
		<Swiper
			modules={[Navigation, Pagination, Autoplay, EffectFade]}
			spaceBetween={50}
			slidesPerView={1}
			loop={true}
			autoplay={false}
			navigation
			effect="fade"
			pagination={{ clickable: true }}>
			<SwiperSlide>
				<div className="slider__content">
					<img src={sliderBg} alt="" className="slider__bg" />
					<img src={sliderLogo} alt="Logo" className="slider__logo" />
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
					<img src={sliderBg} alt="" className="slider__bg" />
					<img src={sliderLogo} alt="Logo" className="slider__logo" />
					<div className="slider__body">
						<h2 className="slider__title">
							<span>Stan Smith111</span>, Forever!
						</h2>
						<button className="slider__link">Купить</button>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	)
}

export default Slider
