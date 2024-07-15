import FreeEstimatesCallToday from "./home/FreeEstimatesCallToday/FreeEstimatesCallToday";
import ImageCarousel from "./home/ImageCarousel/ImageCarousel";
import ServiceCard from "./home/ServiceCard/ServiceCard";
import Welcome from "./home/Welcome/Welcome";
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Welcome />
        <FreeEstimatesCallToday />
        <ImageCarousel />

        <section>
          <ServiceCard
            title="Stump Grinding"
            description="I can efficiently remove tree stumps from your property, restoring the space, beauty, and function of your landscape."
            descriptionCenter
            ctaText="Learn More"
            ctaUrl="/services/stump"
            serviceType="stump"
          />

          <ServiceCard
            title="Dirt Work"
            description="I offer minor dirt work services including grading and hauling to help ensure your property is transformed with precision and care."
            descriptionCenter
            ctaText="Learn More"
            ctaUrl="/services/dirt"
            serviceType="dirt"
          />

          <ServiceCard
            title="Land Clearing"
            description="Reliable and efficient land clearing services including clearing brush, vegetation, and small trees."
            descriptionCenter
            ctaText="Learn More"
            ctaUrl="/services/land"
            serviceType="land"
          />

          <ServiceCard
            title="Gravel Grading"
            description="I can haul and spread gravel, creating smooth and even surfaces for your driveway, small road, or walkway."
            descriptionCenter
            ctaText="Learn More"
            ctaUrl="/services/gravel"
            serviceType="gravel"
          />
        </section>
      </div>
    </main>
  );
}
