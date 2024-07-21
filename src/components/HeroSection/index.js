import Image from "next/image";
import Button from "../common/Button";
import styles from "./heroSection.module.scss";
const HeroSection = () => {
  return (
    <div className={styles.container}>
      <h1>
        Streamline Your <br /> Thoughts with <br /> <span>Acme Note</span>
      </h1>
      <p className={styles.hero_subheading}>
        Effortless note-taking, wherever you are.
      </p>
      <div className={styles.btn_container}>
        <Button>Get Started</Button>
        <Button variant="outlined">Learn More</Button>
      </div>
      <div className={styles.hero_banner}>
        <Image
          src="/images/hero-banner.webp"
          alt="Effortless note-taking, wherever you are."
          objectFit="cover"
          width={800}
          height={500}
          quality={100}
        />
      </div>
    </div>
  );
};

export default HeroSection;
