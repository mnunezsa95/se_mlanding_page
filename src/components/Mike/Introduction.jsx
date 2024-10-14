import "./Introduction.css"; // Optional: for any custom styles
import mikeImage from "../../../public/images/mike-jules-press-conf.png";

const Introduction = () => {
  return (
    <section className="introduction">
      <div className="introduction__container">
        <div className="introduction__text-container">
          <h2 className="introduction__title">Meet Coach Mike</h2>
          <p className="introduction__text">
            Mike built his expertise on his way to earning a{" "}
            <strong>UFC Contract</strong>. Over the last{" "}
            <strong>17 years</strong>, he has honed his craft and worked with
            hundreds of one-on-one clients and thousands of students in his
            classes.
          </p>
          <p className="introduction__text">
            One thing that sets him apart is that{" "}
            <strong>he is here to support YOU</strong>! If you&apos;re looking
            for a coach who cares about{" "}
            <strong>your goals, development, and health</strong> as much as you
            do, you&apos;ve found the right coach.
          </p>
        </div>
        <img className="introduction__image" src={mikeImage}></img>
      </div>
    </section>
  );
};

export default Introduction;
