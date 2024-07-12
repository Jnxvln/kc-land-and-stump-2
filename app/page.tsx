import CallToday from "./home/CallToday";
import FreeEstimates from "./home/FreeEstimates";
import ImageCarousel from "./home/ImageCarousel/ImageCarousel";
import Welcome from "./home/Welcome";

export default function Home() {
  return (
    <main>
      <section>
        <Welcome />

        <div className="flex items-center bg-[#4F351E]">
          <div className="flex-grow"><FreeEstimates /></div>
          <div className="bg-[#8B4B1C]"><CallToday /></div>
        </div>

        <ImageCarousel />
      </section>
    </main>
  );
}
