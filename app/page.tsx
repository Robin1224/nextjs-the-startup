import Header from "../src/components/Header";
import HeaderContent from "../src/components/HeaderContent";
import Forecast from "../src/components/Forecast/Forecast";
import Activities from "../src/components/Activities/Activities";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:h-full">
        <Header>
          <HeaderContent />
        </Header>
        <Forecast />
      </div>
      <Activities />
      <Footer />
    </>
  );
}
