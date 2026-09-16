'use client';

import { useState } from 'react';
import { CategoryList } from './CategoryList';
import { ServicePanel } from './ServicePanel';

export function MegaMenuPanel({ tab }) {
  const [activeCategoryId, setActiveCategoryId] = useState(tab.categories[0]?.id);

  const activeCategory = tab.categories.find((c) => c.id === activeCategoryId)
    ?? tab.categories[0];

  return (
    <div className="flex divide-x" style={{ borderColor: 'var(--color-border)' }}>
      {/* Left sidebar — Tier 2 */}
      <div
        className="flex-shrink-0 p-2"
        style={{ backgroundColor: 'var(--color-surface-raised)', minWidth: 240 }}
      >
        <CategoryList
          categories={tab.categories}
          activeCategoryId={activeCategoryId}
          onHover={setActiveCategoryId}
        />
      </div>

      {/* Right panel — Tier 3 */}
      <div className="flex-1 bg-white">
        <ServicePanel category={activeCategory} />
      </div>
    </div>
  );
}
