// src/app/lib/containers.ts

import { query } from './db';

export interface Container {
  id: number;
  name: string;
  size: '20ft' | '40ft';
  description: string;
  image_url: string;
  base_price: number;
  colors: string[];
  used_discount: number;
}

/**
 * Safely parse the `colors` field.
 * PostgreSQL can return:
 *   • text[] → array of strings
 *   • text   → comma‑separated string
 *   • json   → JSON array (optional)
 */
function parseColors(raw: any): string[] {
  if (Array.isArray(raw)) {
    return raw.map((c: any) => String(c).trim()).filter(Boolean);
  }
  if (typeof raw === 'string') {
    return raw
      .split(',')
      .map((c) => c.trim())
      .filter(Boolean);
  }
  // fallback – empty array
  return [];
}

export async function getAllContainers(): Promise<Container[]> {
  const rows = await query('SELECT * FROM containers ORDER BY id');

  return rows.map((row) => ({
    id: Number(row.id),
    name: row.name,
    size: row.size,
    description: row.description,
    image_url: row.image_url,
    base_price: Number(row.base_price),
    colors: parseColors(row.colors),
    used_discount: Number(row.used_discount),
  }));
}

export async function getContainerById(id: string): Promise<Container | null> {
  const idNum = Number(id);
  if (!id || isNaN(idNum) || idNum <= 0) {
    console.log('Invalid ID:', id);
    return null;
  }

  const rows = await query('SELECT * FROM containers WHERE id = $1', [idNum]);
  if (rows.length === 0) {
    console.log('No container found for ID:', idNum);
    return null;
  }

  const row = rows[0];

  return {
    id: Number(row.id),
    name: row.name,
    size: row.size,
    description: row.description,
    image_url: row.image_url,
    base_price: Number(row.base_price),
    colors: parseColors(row.colors),
    used_discount: Number(row.used_discount),
  };
}