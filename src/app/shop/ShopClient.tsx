'use client';


import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; 
import Link from 'next/link';
import { useState, useMemo } from 'react';
import type { Container } from '@/app/lib/containers';

interface ShopClientProps {
  initialContainers: Container[];
}

export default function ShopClient({ initialContainers }: ShopClientProps) {
  const [filter, setFilter] = useState<'all' | '20ft' | '40ft'>('all');

  const filtered = useMemo(() => {
    return filter === 'all'
      ? initialContainers
      : initialContainers.filter((c) => c.size === filter);
  }, [filter, initialContainers]);

  if (!initialContainers || initialContainers.length === 0) {
    return (
      <main style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <p>Loading containers...</p>
      </main>
    );
  }

  return (
    <main style={{ padding: '4rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header + Filters */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--orange-600)' }}>
          Shop Containers
        </h1>
        <p style={{ color: 'var(--gray-700)', marginBottom: '1.5rem' }}>
          Choose your size, color, and condition.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {(['all', '20ft', '40ft'] as const).map((size) => (
            <button
              key={size}
              onClick={() => setFilter(size)}
              style={{
                background: filter === size ? 'var(--orange-600)' : 'var(--gray-100)',
                color: filter === size ? 'white' : 'var(--gray-700)',
                padding: '0.6rem 1.2rem',
                border: 'none',
                borderRadius: '9999px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {size === 'all' ? 'All Sizes' : `${size} Containers`}
            </button>
          ))}
        </div>
      </div>

      {/* Swiper Slider – Now mobile-friendly */}
      <Swiper
        key={`${filter}-${filtered.length}`}
        modules={[Navigation]}
        navigation={true}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="my-swiper"
      >
        {filtered.map((container) => (
          <SwiperSlide key={container.id}>
            <Link href={`/shop/${container.id}`} style={{ textDecoration: 'none' }}>
              <div
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 25px rgba(234, 88, 12, 0.12)',
                  transition: 'transform 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-8px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <img
                  src={container.image_url}
                  alt={container.name}
                  style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.2rem' }}>
                  <h3
                    style={{ margin: '0 0 0.5rem', fontSize: '1.3rem', color: 'var(--gray-900)' }}
                  >
                    {container.name}
                  </h3>
                  <p
                    style={{
                      margin: '0 0 1rem',
                      color: 'var(--gray-700)',
                      fontSize: '0.95rem',
                    }}
                  >
                    {container.description}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: 'bold',
                        color: 'var(--orange-600)',
                      }}
                    >
                      ${container.base_price}
                    </span>
                    <span
                      style={{
                        background: 'var(--orange-100)',
                        color: 'var(--orange-700)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '9999px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                      }}
                    >
                      {container.size}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Styling - Fixed for Mobile/Desktop */}
      <style jsx>{`
      /* --- Base Styles (Mobile First) --- */
      .my-swiper {
        /* Add small horizontal padding to keep arrows visible inside the container on mobile */
        padding: 0 10px; 
      }
      .my-swiper .swiper-button-next,
      .my-swiper .swiper-button-prev {
        top: 50%;
        transform: translateY(-50%);
        width: 40px; 
        height: 40px;
        /* FIX: Using !important to override Swiper's default blue background */
        background: var(--orange-600) !important; 
        color: white !important; 
        border-radius: 50%;
        box-shadow: 0 4px 10px rgba(234, 88, 12, 0.3);
        transition: all 0.2s;
        margin-top: -20px;
        z-index: 10;
      }

      /* --- Arrow Icons (ensuring the arrow character itself is white) --- */
      .my-swiper .swiper-button-next::after,
      .my-swiper .swiper-button-prev::after {
        font-size: 1.2rem;
        font-weight: bold;
        font-family: sans-serif;
        color: white !important; /* Ensure the arrow icon color is white */
        content: '→';
      }
      .my-swiper .swiper-button-prev::after {
        content: '←';
      }
      
      /* --- Hover Effects --- */
      .my-swiper .swiper-button-next:hover,
      .my-swiper .swiper-button-prev:hover {
        /* Use !important here too, just to be safe */
        background: var(--orange-700) !important;
      }

      /* --- Desktop Positioning (Push arrows outside container at 1200px+) --- */
      @media (min-width: 1200px) {
        .my-swiper {
            padding: 0; /* Remove padding when arrows are outside */
        }
        .my-swiper .swiper-button-next,
        .my-swiper .swiper-button-prev {
          width: 50px;
          height: 50px;
          margin-top: -25px;
          box-shadow: 0 8px 20px rgba(234, 88, 12, 0.3);
        }
        .my-swiper .swiper-button-next {
          right: -60px; /* Push outside */
        }
        .my-swiper .swiper-button-prev {
          left: -60px; /* Push outside */
        }
      }
    `}</style>
    </main>
  );
}