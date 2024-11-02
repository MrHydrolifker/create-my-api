import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={[
        styles.gradient,
        conic ? styles.glowConic : undefined,
        small ? styles.gradientSmall : styles.gradientLarge,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

const LINKS = [
  {
    title: "Docs",
    href: "https://turbo.build/repo/docs",
    description: "Find in-depth information about Turborepo features and API.",
  },
  {
    title: "Learn",
    href: "https://turbo.build/repo/docs/handbook",
    description: "Learn more about monorepos with our handbook.",
  },
  {
    title: "Templates",
    href: "https://turbo.build/repo/docs/getting-started/from-example",
    description: "Choose from over 15 examples and deploy with a single click.",
  },
  {
    title: "Deploy",
    href: "https://vercel.com/new",
    description:
      "Instantly deploy your Turborepo to a shareable URL with Vercel.",
  },
  {
    title: "API Reference",
    href: "https://turbo.build/repo/docs/api",
    description: "Access the comprehensive API reference for Turborepo.",
  },
  {
    title: "Community",
    href: "https://turbo.build/repo/community",
    description: "Join our community for discussions and support.",
  },
  {
    title: "Blog",
    href: "https://turbo.build/repo/blog",
    description: "Read the latest updates and articles on Turborepo.",
  },
];

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          examples/basic&nbsp;
          <Code className={styles.code}>docs</Code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"
            rel="noopener noreferrer"
            target="_blank"
          >
            By{" "}
            <Image
              alt="Vercel Logo"
              className={styles.vercelLogo}
              height={24}
              priority
              src="/vercel.svg"
              width={100}
            />
          </a>
        </div>
      </div>

      <Button appName="docs" className={styles.button}>
        Click me!
      </Button>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logos}>
            <div className={styles.circles}>
              <Image
                alt="Turborepo"
                height={614}
                src="circles.svg"
                width={614}
                style={{ pointerEvents: "none" }}
              />
            </div>
            <div className={styles.logoGradientContainer}>
              <Gradient className={styles.logoGradient} conic small />
            </div>

            <div className={styles.logo}>
              <Image
                alt="Turborepo Logo"
                height={120}
                priority
                src="turborepo.svg"
                width={120}
                style={{ pointerEvents: "none" }}
              />
            </div>
          </div>
          <Gradient className={styles.backgroundGradient} conic />
          <div className={styles.turborepoWordmarkContainer}>
            <svg
              className={styles.turborepoWordmark}
              viewBox="0 0 506 50"
              width={200}
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Turborepo logo</title>
              <path d="M53.7187 12.0038V1.05332H0.945312V12.0038H20.8673V48.4175H33.7968V12.0038H53.7187Z" />
              <path d="M83.5362 49.1431C99.764 49.1431 108.67 40.8972 108.67 27.3081V1.05332H95.7401V26.0547C95.7401 33.6409 91.7821 37.9287 83.5362 37.9287C75.2904 37.9287 71.3324 33.6409 71.3324 26.0547V1.05332H58.4029V27.3081C58.4029 40.8972 67.3084 49.1431 83.5362 49.1431Z" />
              <path d="M128.462 32.7174H141.325L151.484 48.4175H166.327L154.848 31.3321C161.313 29.0232 165.271 23.8778 165.271 16.8853C165.271 6.72646 157.685 1.05332 146.141 1.05332H115.532V48.4175H128.462V32.7174ZM128.462 22.4925V11.8719H145.481C150.033 11.8719 152.54 13.8509 152.54 17.2152C152.54 20.3816 150.033 22.4925 145.481 22.4925H128.462Z" />
              <path d="M171.287 48.4175H205.128C215.683 48.4175 221.752 43.404 221.752 35.0262C221.752 29.419 218.189 25.593 213.967 23.8778C216.87 22.4925 220.432 19.1942 220.432 13.9828C220.432 5.60502 214.495 1.05332 204.006 1.05332H171.287V48.4175ZM183.689 19.59V11.542H202.687C206.249 11.542 208.228 12.9273 208.228 15.566C208.228 18.2047 206.249 19.59 202.687 19.59H183.689ZM183.689 29.2871H203.875C207.371 29.2871 209.284 31.0022 209.284 33.5749C209.284 36.1476 207.371 37.8628 203.875 37.8628H183.689V29.2871Z" />
              <path d="M253.364 0.261719C236.806 0.261719 224.866 10.6185 224.866 24.7354C224.866 38.8523 236.806 49.2091 253.364 49.2091C269.922 49.2091 281.796 38.8523 281.796 24.7354C281.796 10.6185 269.922 0.261719 253.364 0.261719ZM253.364 11.4761C262.072 11.4761 268.602 16.6215 268.602 24.7354C268.602 32.8493 262.072 37.9947 253.364 37.9947C244.656 37.9947 238.126 32.8493 238.126 24.7354C238.126 16.6215 244.656 11.4761 253.364 11.4761Z" />
              <path d="M300.429 32.7174H313.292L323.451 48.4175H338.294L326.815 31.3321C333.28 29.0232 337.238 23.8778 337.238 16.8853C337.238 6.72646 329.652 1.05332 318.108 1.05332H287.499V48.4175H300.429V32.7174ZM300.429 22.4925V11.8719H317.448C322 11.8719 324.507 13.8509 324.507 17.2152C324.507 20.3816 322 22.4925 317.448 22.4925H300.429Z" />
              <path d="M373.933 37.2807C366.4 37.2807 359.908 32.893 359.908 26.0579C359.908 19.688 365.564 15.1677 371.961 11.6551C377.867 8.51188 382.199 4.69307 382.199 0H366.368C366.368 4.75009 362.61 8.59253 355.617 12.0562C349.093 15.8113 343.953 19.3534 343.953 26.0579C343.953 32.3433 351.908 37.2807 359.08 37.2807C366.267 37.2807 372.626 33.2993 373.933 29.4931V37.2807Z" />
            </svg>
          </div>
          <div className={styles.separator} />
          <div className={styles.links}>
            {LINKS.map(({ title, href, description }) => (
              <Card key={href} className={styles.card}>
                <h3>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {title}
                  </a>
                </h3>
                <p>{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
