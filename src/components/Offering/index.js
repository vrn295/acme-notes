import Image from "next/image";
import offerings from "./data";
import styles from "./offering.module.scss";
export const Offering = () => {
  return (
    <section className={styles.offering}>
      <h2>What You Will Get</h2>
      <ul className={styles.offering_list}>
        {offerings.map((offering, index) => (
          <li key={index} className={styles.offering_item}>
            <div className={styles.icon_bg}>
              <Image
                src={`/icons/${offering.icon}`}
                alt={offering.heading}
                width={50}
                height={50}
              />
            </div>
            <h3>{offering.heading}</h3>
            <p>{offering.subHeading}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
