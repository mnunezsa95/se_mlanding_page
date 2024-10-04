import Header from "../../components/Header/Header";
import Carousel from "../../components/carousel/Carousel";

const pageOneItems = [
  {
    description:
      "Over the last several months, I’ve been taking private boxing lessons with Michael. Under his tutelage, my footwork has become more fluid, my punches are crisper and more accurate and my defensive skills and fight IQ has vastly improved. Also worth noting my cardio and overall fitness has increased tremendously...",
    imageUrl: "https://via.placeholder.com/100x100",
    name: "Paul MacInnes",
  },
  {
    description:
      "Mike You taught me to stay consistent and disciplined and more importantly, trying out different things in sparring, giving me small hints and details! And don’t worry, this is just the start into my Boxing/MMA journey! And I hope to train with you even more a little bit longer! ! Much love and much respect to my guy Mike Rodriguez, THE ULTIMATE COACH!",
    imageUrl: "https://via.placeholder.com/100x100",
    name: "Faisel Ibrahim",
  },
  {
    description:
      "Mike You taught me to stay consistent and disciplined and more importantly, trying out different things in sparring, giving me small hints and details! And don’t worry, this is just the start into my Boxing/MMA journey! And I hope to train with you even more a little bit longer! ! Much love and much respect to my guy Mike Rodriguez, THE ULTIMATE COACH!",
    imageUrl: "https://via.placeholder.com/100x100",
    name: "Placeholder",
  },
  {
    description: "This is the fourth item",
    imageUrl: "https://via.placeholder.com/100x100",
    name: "Placeholder",
  },
];

const PageOne = () => {
  return (
    <>
      <Header />
      <Carousel items={pageOneItems} visibleItemsCount={3} />
    </>
  );
};

export default PageOne;
