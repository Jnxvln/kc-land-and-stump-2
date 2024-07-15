'use client';

import { useState, useEffect, } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import ImageData from './ImageData.json'
import styles from './ImageCarousel.module.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export interface ICarouselImage {
	path: string;
	alt: string;
	objectFit?: 'cover' | 'contain' | undefined;
	id?: string | number;
	service?: string;
}

function useWindowSize(callback: Function) {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState({
	  width: 0,
	  height: 0,
	});
  
	useEffect(() => {
	  // Handler to call on window resize
	  function handleResize() {
		// Set window width/height to state
		setWindowSize({
		  width: window.innerWidth,
		  height: window.innerHeight,
		});
	  }
	  
	  // Add event listener
	  window.addEventListener("resize", handleResize);
	   
	  // Call handler right away so state gets updated with initial window size
	  handleResize();
	  
	  // Remove event listener on cleanup
	  return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty array ensures that effect is only run on mount

	useEffect(() => {
		if (windowSize?.width && windowSize.width >= 1 && windowSize.width < 700) {
			callback((prevState: any) => ({
				...prevState,
				slidesPerView: 1
			}))
		} else if (windowSize?.width && windowSize.width >= 700 && windowSize.width < 900 ) {
			callback((prevState: any) => ({
				...prevState,
				slidesPerView: 2
			}))
		} else if (windowSize?.width && windowSize.width >= 900) {
			callback((prevState: any) => ({
				...prevState,
				slidesPerView: 3
			}))
		}
	}, [callback, windowSize])
	return windowSize;
  }

export default function App() {

	const CarouselImage = ({ path, alt, objectFit }: ICarouselImage) => (
		<div style={{
			position: 'relative',
			height: '100%'
		}}>
			<Image src={path} alt={alt} objectFit={objectFit} fill />
		</div>
	)

	const [config, setConfig] = useState({
		slidesPerView: 1,
		navigation: true,
		spaceBetween: 30,
		pagination: { clickable: true },
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		modules: [Pagination, Navigation, Autoplay],

	})

	const size = useWindowSize(setConfig)

  return (
    <>
		<Swiper
			className={styles.mySwiper}
			{...config}
			>
			{ ImageData && ImageData.length > 0 ? ImageData.map(image => (
				<SwiperSlide key={image.id}>
					<CarouselImage path={image.path} alt={image.alt} />
				</SwiperSlide>
			)) : (
				<SwiperSlide>
					<div className="flex flex-col p-4 border-2 border-gray-700 w-screen text-lg">
						<div className="italic">
							The image gallery is empty!
						</div>
						<div>
							Please check back later
						</div>
					</div>
				</SwiperSlide>
			) }
		</Swiper>
    </>
  );
}
