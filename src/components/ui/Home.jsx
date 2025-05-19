import HeroSection from './HeroSection';  // Note capital H
import CategoryCarousel from './CategoryCarousel';
import LatestJobs from './LatestJobs';
import Footer from '/src/components/ui/shared/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">  {/* Fixed flex-co1 to flex-col */}
      <main className="flex-grow">
        <HeroSection />  {/* Fixed case */}
        <CategoryCarousel />
        <LatestJobs />
      </main>
      <Footer />
    </div>
  );
};

export default Home;