"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { data } from "./data";
import styles from "./discoverTemplates.module.scss";

export const DiscoverTemplates = () => {
  const ref = useRef(null);
  const hanldeScroll = (e, delta) => {
    if (delta > 0) {
      ref.current.scrollLeft += 100;
    } else {
      ref.current.scrollLeft -= 100;
    }
  };
  return (
    <section className={styles.discover} ref={ref} onMouseWheel={hanldeScroll}>
      <h2>Discover some creative templates</h2>
      <ul>
        {data.map((item) => (
          <Link key={item.id} href={`/`}>
            <li>
              <div className={styles.image_container}>
                <Image
                  fill={true}
                  src={`/images/templates/${item.image}`}
                  alt={item.title}
                />
              </div>
              <span>{item.title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};
