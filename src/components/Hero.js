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
          <source media="(min-width: 1024px )" srcset={DesktopHero} />
          <img src={MobileHero} alt="" />
        </picture>
      </div>
      <div className="hero__content">
        <h1 className="hero__heading"><span>Make</span> remote work</h1>
        <p className="hero__description">
          <span>Get your team in sync, no matter your location.</span> <span>
              Streamline processes,
              create team rituals,
          </span> and watch productivity soar.
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
