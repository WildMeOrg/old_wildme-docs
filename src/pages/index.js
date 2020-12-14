import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: "Researcher guide",
    imageUrl: "img/undraw_researching.svg",
    buttonUrl: "docs/researchers/overview",
    buttonText: 'View guide',
    description: (
      <>
        A researcher's guide to Wildbook, our flagship product.
      </>
    ),
  },
  {
    title: "Developer docs",
    imageUrl: "img/undraw_programming.svg",
    buttonUrl: "docs/developers/overview",
    buttonText: 'View docs',
    description: (
      <>
        Architectural overviews, installation instructions, API definitions, etc.
      </>
    ),
  },
  {
    title: "How to edit",
    imageUrl: "img/undraw_writing.svg",
    buttonUrl: "docs/how_to_edit",
    buttonText: 'Learn more',
    description: (
      <>
        How to edit pages and create new ones, regardless of technical experience.
      </>
    ),
  },
];

function Feature({imageUrl, title, description, buttonUrl, buttonText }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <Link
        className={clsx(
          'button button--outline button--primary',
        )}
        to={useBaseUrl(buttonUrl)}>
        {buttonText}
      </Link>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img className={styles.heroLogo} alt="Wild Me Logo" src="img/logo-white-mark-only.png" />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          {/* <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get started
            </Link>
          </div> */}
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
