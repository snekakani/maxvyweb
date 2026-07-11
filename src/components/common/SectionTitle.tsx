import type { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  className = '',
}: Props) {
  const alignCls = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';
  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignCls} ${className}`}>
      {eyebrow && (
        <span className={dark ? 'eyebrow-dark' : 'eyebrow'}>
          <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-section font-bold tracking-tight ${
          dark ? 'text-white' : 'text-navy-800'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed lg:text-lg ${dark ? 'text-navy-200' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
