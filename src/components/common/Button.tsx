import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline-light';
type Size = 'sm' | 'md' | 'lg';

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: 'button' | 'submit';
  icon?: ReactNode;
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const variants: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
  'outline-light': 'btn-outline-light',
};

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  icon,
}: Props) {
  const cls = `${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      {children}
      {icon}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {content}
    </button>
  );
}
