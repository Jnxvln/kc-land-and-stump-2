'use client';
import { useCallback } from 'react';
import styles from './ImageCarousel.module.scss'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image';

export default function ImageCarousel () {

	const [emblaRef, emblaApi] = useEmblaCarousel()		

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev()
	  }, [emblaApi])
	
	  const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext()
	  }, [emblaApi])

	return (
		<div className={styles.embla}>
			<div className={styles.emblaViewport} ref={emblaRef}>
				<div className={styles.emblaContainer}>
					<div className={styles.emblaSlide}>
						<Image src="/images/services/dirtwork/dirtwork-c9818.jpg" fill alt="dirtwork-c9818" />
					</div>
					<div className={styles.emblaSlide}>
						<Image src="/images/services/gravel/gravel-k3401.jpg" fill alt="gravel-k3401" />
					</div>
					<div className={styles.emblaSlide}>
						<Image src="/images/services/hauling/hauling-e81iz.jpg" fill alt="hauling-e81iz.jpg" />
					</div>
				</div>
			</div>
			<button className={styles.emblaPrev} onClick={scrollPrev}>Prev</button>
  			<button className={styles.emblaNext} onClick={scrollNext}>Next</button>
		</div>
	)
}