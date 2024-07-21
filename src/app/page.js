import { About } from "@/components/About";
import { DiscoverTemplates } from "@/components/DiscoverTemplates";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Offering } from "@/components/Offering";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <About />
      <Offering />
      <DiscoverTemplates />
      <Footer />
    </main>
  );
}
