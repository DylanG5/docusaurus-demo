import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Innovative Robotics",
    Svg: require("@site/static/img/exo_white_scalable.svg").default,
    description: (
      <>Cutting-edge exoskeleton technology developed at McMaster University.</>
    ),
  },
  {
    title: "Open Collaboration",
    Svg: require("@site/static/img/exo_white_scalable.svg").default,
    description: (
      <>Join our team or contribute to our open-source software and hardware.</>
    ),
  },
  {
    title: "Empowering Mobility",
    Svg: require("@site/static/img/exo_white_scalable.svg").default,
    description: (
      <>Our mission is to enhance mobility and independence for all.</>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
