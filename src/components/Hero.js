import MobileHero from '../images/image-hero-mobile.png'
import DesktopHero from '../images/image-hero-desktop.png'


function Hero() {
    return (
        <section className="hero">
            <div className="hero__img">
                <picture>
                    <img src={MobileHero} alt="" />
                    <source media="(min-width: 768px)" srcset={DesktopHero} />
                </picture>
            </div>
            <div className="hero__content">
                
            </div>
        </section>
    )
}

export default Hero