import CallToday from "./home/CallToday";
import FreeEstimates from "./home/FreeEstimates/FreeEstimates";
import ImageCarousel from "./home/ImageCarousel/ImageCarousel";
import ServiceCard from "./home/ServiceCard/ServiceCard";
import Welcome from "./home/Welcome/Welcome";
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Welcome />

          <section className={styles.estimatesSection}>
            <div className="flex-grow"><FreeEstimates /></div>
            <div className="bg-[#8B4B1C]"><CallToday /></div>
          </section>

        <ImageCarousel />

        <section>
          <ServiceCard
            title="Stump Grinding"
            description="My stump grinding services are designed to efficiently remove tree stumps from your property, restoring the space, beauty, and function of your landscape."
            ctaText="Learn More"
            ctaUrl="/services/stump"
            serviceType="stump"
          />

          <ServiceCard
            title="Dirt Work"
            description="I offer minor dirt work services including grading and hauling to help ensure your property is transformed with precision and care."
            ctaText="Learn More"
            ctaUrl="/services/dirt"
            serviceType="dirt"
          />

          <ServiceCard
            title="Land Clearing"
            description="Reliable and efficient land clearing services including clearing brush, vegetatioon, and small trees up to 4 inches in diameter."
            ctaText="Learn More"
            ctaUrl="/services/land"
            serviceType="land"
          />

          <ServiceCard
            title="Gravel Grading"
            description="I can help create a smooth and even surface for your driveway, road, or walkway."
            ctaText="Learn More"
            ctaUrl="/services/gravel"
            serviceType="gravel"
          />
        </section>
      </div>
    </main>
  );
}
