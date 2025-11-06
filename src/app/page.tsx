'use client'
import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  const [activeStep] = useState<number | null>(null);
    const scrollToStepOne = () => {
    const stepOne = document.getElementById('step-1');
    stepOne?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return(
    <main className={styles.main}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>WELCOME TO CO-Containers</h1>
        <p>
          Starting small as a family business in Texas, we’ve offered affordable,
          durable, and customizable container solutions since 2001!
        </p>
        <div className={styles.buttons}>
          <button className={styles.primary} onClick={scrollToStepOne}>Get Started</button>
          <button className={styles.secondary}>Order NOW</button>
        </div>
      </section>

      {/* PROCEDURE */}
      <section className={styles.procedure} >
        <h2>It&apos;s SIMPLE</h2>
        <ol className={styles.steps}>
          <li id="step-1" className={activeStep === 1 ? styles.activeStep : ''}>
            Browse containers and pick your fit.
          </li>
          <li id="step-2">Choose customizations.</li>
          <li id="step-3">Complete purchase & your delivery is incoming!</li>
        </ol>
        <p style={{ marginBottom: '1rem' }}>
          Questions? {<Link href="/faq">See <u>FAQ</u></Link>}
        </p>
        <button className={styles.shop}>SHOP</button>
      </section>
    </main>
  )
}
