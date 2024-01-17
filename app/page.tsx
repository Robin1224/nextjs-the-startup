import Header from "../src/components/Header";
import HeaderContent from "../src/components/HeaderContent";
import Forecast from "../src/components/Forecast/Forecast";
import Activities from "../src/components/Activities/Activities";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:h-full lg:grid lg:grid-cols-subgrid lg:gap-3 lg:col-start-1 lg:col-span-12 lg:row-start-1 lg:px-0">
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
