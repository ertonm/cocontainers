'use client';

import { useState } from 'react';
import styles from './ContactPage.module.css'; // Import the CSS Module
import Link from 'next/link'; // Added Link for the "View larger map"

export default function ContactPage() {
  const [mapError] = useState(false); // Map error state is currently unused, but kept

  return (
    // Apply main styles via className
    <main className={styles.main}>
      <h1 className={styles.title}>
        Contact Us
      </h1>
      <p className={styles.subtitle}>
        Have questions about our 20ft or 40ft containers? We're here to help!
      </p>

      {/* Main contact card container */}
      <div className={styles.contactCard}>
        
        {/* Email */}
        <div className={styles.contactItem}>
          <h3 className={styles.itemTitle}>📧 Email</h3>
          <a 
            href="mailto:info@containercompany.com" 
            className={styles.itemLink}
          >
            info@containercompany.com
          </a>
        </div>

        {/* Phone */}
        <div className={styles.contactItem}>
          <h3 className={styles.itemTitle}>📞 Phone</h3>
          <a 
            href="tel:+15551234567" 
            className={styles.itemLink}
          >
            +1 (555) 123-4567
          </a>
        </div>

        {/* Address & Map */}
        <div className={styles.contactItem}>
          <h3 className={styles.itemTitle}>📍 Address</h3>
          <p className={styles.address}>
            4567 Container Blvd<br />
            Houston, TX 77001
          </p>
          
          {/* Map iframe */}
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-95.3748,29.7554,-95.3648,29.7654&layer=mapnik&marker=29.7604,-95.3698"
            className={styles.mapFrame}
            title="Map showing our location in Houston, Texas"
            // onError={() => setMapError(true)} // Example of how to use mapError state
          />
          
          {/* View larger map link */}
          <p className={styles.mapLinkWrapper}>
            <Link 
              href="https://www.openstreetmap.org/?mlat=29.7604&mlon=-95.3698#map=14/29.7604/-95.3698"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              View larger map
            </Link>
          </p>
        </div>

        {/* Business Hours */}
        <div className={styles.contactItem}>
          <h3 className={styles.itemTitle}>🕒 Business Hours</h3>
          <p className={styles.hours}>
            Monday - Friday: 8:00 AM - 6:00 PM<br />
            Saturday: 9:00 AM - 4:00 PM<br />
            Sunday: Closed
          </p>
        </div>
      </div>

      <p className={styles.tagline}>
        We are open for business!
      </p>
    </main>
  );
}