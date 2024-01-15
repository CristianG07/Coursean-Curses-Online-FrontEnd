// Swiper react
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
// Images
import { SlideNextButton } from './SlideNextButton'
import { SlidePrevButton } from './SlidePrevButton'
// data
import { data_hero } from '../../utils/data'

export const Hero = () => {
  return (
    <section>
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        speed={1000}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        className='relative'
      >
        {data_hero?.map((info, i) => (
          <SwiperSlide key={i}>
            <div key={i} className='h-80'>
              <img
                src={info.img}
                alt='ilustration'
                className='w-full h-full object-cover -z-10'
              />
            </div>
            <div className='CardInfoHero'>
              <div className='bg-white p-5 shadow-sm rounded'>
                <h4 className='text-2xl sm:text-3xl md:text-4xl font-bold'>{info.title}</h4>
                <p className='text-sm sm:text-base md:text-lg max-w-80 sm:max-w-96 md:max-w-full'>{info.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className='absolute top-0 z-10 flex justify-between w-full h-full'>
          <SlidePrevButton />
          <SlideNextButton />
        </div>
      </Swiper>
    </section>
  )
}
