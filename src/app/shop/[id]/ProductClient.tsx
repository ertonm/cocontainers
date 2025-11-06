'use client';

import { useCart } from '@/app/lib/cart';
import Link from 'next/link';
import { useState, useMemo} from 'react';
import type { Container } from '@/app/lib/containers';
import styles from './ProductClient.module.css'; // Importing the CSS module

interface Props {
  container: Container;
}

export default function ProductClient({ container }: Props) {
  // Initialize state, defaulting to the first color and 'new' condition
  const [color, setColor] = useState(container.colors[0]);
  const [condition, setCondition] = useState<'new' | 'used'>('new');
  const { addItem } = useCart();

  // Use useMemo to calculate the price only when condition or base/discount changes
  const price = useMemo(() => {
    return condition === 'new'
      ? container.base_price
      : container.base_price * (1 - container.used_discount / 100);
  }, [condition, container.base_price, container.used_discount]);

  // Handler for adding the item to the cart
  const handleAdd = () => {
    addItem({
      id: `${container.id}-${condition}-${color}`,
      containerId: container.id,
      name: `${container.name} (${condition.toUpperCase()}, ${color})`,
      size: container.size,
      color,
      condition,
      price,
    });
    alert(`Added ${container.name} to cart!`);
  };

  return (
    <main className={styles.main}>
      {/* Back Link */}
      <Link href="/shop" className={styles.backLink}>
        Back to Shop
      </Link>
      
      {/* Content Wrapper for Mobile-First Stacked/Desktop Grid Layout */}
      <div className={styles.contentWrapper}>
        {/* Product Image */}
        <img 
          src={container.image_url} 
          alt={container.name} 
          className={styles.productImage} 
        />
        
        {/* Product Details and Options */}
        <div className={styles.details}>
          <h1>{container.name}</h1>
          <p>{container.description}</p>

          {/* Color Selector */}
          <div className={styles.selectorGroup}>
            <label className={styles.selectorLabel} htmlFor="color-select">Color: </label>
            <select 
              id="color-select"
              value={color} 
              onChange={e => setColor(e.target.value)}
              className={styles.colorSelect}
            >
              {container.colors.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>

          {/* Condition Selector (Radio Buttons) */}
          <div className={styles.selectorGroup}>
            <label className={styles.selectorLabel}>Condition: </label>
            {(['new', 'used'] as const).map((c) => {
              const optionPrice =
                c === 'new'
                  ? container.base_price
                  : container.base_price * (1 - container.used_discount / 100);
              return (
                <label key={c} className={styles.conditionOption}>
                  <input
                    type="radio"
                    checked={condition === c}
                    onChange={() => setCondition(c)}
                  />
                  {/* Span used to apply visual styling when selected */}
                  <span>{c} – ${optionPrice.toFixed(0)}</span>
                </label>
                );
              })}
          </div>

          {/* Add to Cart Button */}
          <button 
            onClick={handleAdd} 
            className={styles.addToCartButton}
          >
            Add to Cart – ${price.toFixed(0)}
          </button>
        </div>
      </div>
    </main>
  );
}