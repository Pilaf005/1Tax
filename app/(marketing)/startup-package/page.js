import PackageDetailPage, { generateMetadata as baseGenerateMetadata } from '../packages/[slug]/page';

export async function generateMetadata() {
  return baseGenerateMetadata({ params: Promise.resolve({ slug: 'startup' }) });
}

export default async function StartupPackageLegacyPage() {
  return PackageDetailPage({ params: Promise.resolve({ slug: 'startup' }) });
}
