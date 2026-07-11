import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  as?: 'div' | 'article' | 'section';
};

export default function Card({ children, className = '', hover = false, glass = false, as = 'div' }: Props) {
  const base = glass ? 'glass-card' : 'card';
  const cls = `${base} ${hover ? 'card-hover' : ''} ${className}`;
  const Tag = as;
  return <Tag className={cls}>{children}</Tag>;
}
