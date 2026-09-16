import {
  Building2, FileText, Shield, Award, Globe, BookOpen,
  Receipt, TrendingUp, CreditCard, Scale,
  ClipboardCheck, Book, FolderOpen, Users,
  Lightbulb, BarChart2, Banknote, Calculator,
  ArrowLeftRight, AlertTriangle, Eye,
  ChevronRight,
} from 'lucide-react';

const ICON_MAP = {
  Building2, FileText, Shield, Award, Globe, BookOpen,
  Receipt, TrendingUp, CreditCard, Scale,
  ClipboardCheck, Book, FolderOpen, Users,
  Lightbulb, BarChart2, Banknote, Calculator,
  ArrowLeftRight, AlertTriangle, Eye,
};

export function CategoryList({ categories, activeCategoryId, onHover }) {
  return (
    <ul className="flex flex-col gap-0.5 py-2 min-w-[220px]">
      {categories.map((cat) => {
        const Icon = ICON_MAP[cat.icon] ?? FileText;
        const isActive = cat.id === activeCategoryId;
        return (
          <li key={cat.id}>
            <button
              onMouseEnter={() => onHover(cat.id)}
              onFocus={() => onHover(cat.id)}
              className="group flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-left text-sm transition-colors"
              style={{
                backgroundColor: isActive ? 'var(--color-primary-muted)' : 'transparent',
                color: isActive ? 'var(--color-primary-dark)' : 'var(--color-text-secondary)',
                fontWeight: isActive ? 600 : 400,
              }}
            >
              <Icon
                size={16}
                style={{ color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)', flexShrink: 0 }}
              />
              <span className="flex-1 leading-snug">{cat.label}</span>
              <ChevronRight
                size={14}
                style={{
                  color: isActive ? 'var(--color-primary)' : 'transparent',
                  transition: 'color 150ms',
                }}
              />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
