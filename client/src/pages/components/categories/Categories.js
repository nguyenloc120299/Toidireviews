import { Box, Center, Container, Skeleton } from '@chakra-ui/react'
import React from 'react'
import style from './categories.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Categories = () => {
    const { categories } = useSelector(state => state)

    return (
        <Container maxW={'1200px'} pt={10}>
            <Box py={5}>
                <div className='title'>Mục đích bạn cần ?</div>
            </Box>
            <Box py={5}>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className={style.slider}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            centeredSlides: true
                        },
                        992: {
                            slidesPerView: 3,
                            centeredSlides: true
                        }
                    }}
                >
                    {
                        categories.data.length > 0 ?
                            categories?.data.map(item => (
                                <SwiperSlide key={item._id}>
                                    <Link to={`/search?type=${item.name}`} className={style.card_slide}>
                                        <img src={item.image} alt={item.image} />
                                        <div className={style.category}>
                                            <Center>
                                                <span>{item.name}</span>
                                            </Center>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))
                            :
                            [1, 2, 3].map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className={style.card_slide}>
                                        <Skeleton />
                                    </div>
                                </SwiperSlide>
                            ))
                    }
                </Swiper>
            </Box>
        </Container>
    )
}

export default Categories