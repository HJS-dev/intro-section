import MobileHero from "../images/image-hero-mobile.png";
import DesktopHero from "../images/image-hero-desktop.png";
import Databiz from "../images/client-databiz.svg";
import Audiophile from "../images/client-audiophile.svg";
import Meet from "../images/client-meet.svg";
import Maker from "../images/client-maker.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__img">
        <picture>
                  <source media="(min-width: 768px )" srcset={DesktopHero} />
          <img src={MobileHero} alt="" />
        </picture>
      </div>
      <div className="hero__content">
        <h1 className="hero__heading">Make remote work</h1>
        <p className="hero__description">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="hero__btn-LearnMore">Learn More</button>
        <div className="hero__client">
          <img src={Databiz} alt="" />
          <img src={Audiophile} alt="" />
          <img src={Meet} alt="" />
          <img src={Maker} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
