// app/shop/page.tsx
import { getAllContainers } from '@/app/lib/containers';
import ShopClient from './ShopClient';

export const dynamic = 'force-dynamic';

export default async function ShopPage() {
  const containers = await getAllContainers();

  return <ShopClient initialContainers={containers} />;
}