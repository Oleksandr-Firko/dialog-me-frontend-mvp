import type { BadgeProps } from '~/types/props/badge.props';

const variantStyles: Record<NonNullable<BadgeProps['style']>, string> = {
  default: 'bg-neutral-200 border border-gray-500',
  primary: 'badge-primary',
  secondary: 'badge-secondary',
  accent: 'badge-accent',
  info: 'badge-info',
  success: 'badge-success',
  warning: 'badge-warning',
  error: 'badge-error',
};

const variantSizes: Record<NonNullable<BadgeProps['size']>, string> = {
  xs: 'badge-xs',
  sm: 'badge-sm',
  md: 'badge-md',
  lg: 'badge-lg',
  xl: 'badge-xl',
};

export default function Badge({
  label,
  softStyle = false,
  outline = false,
  className,
  style,
  size = 'md',
}: BadgeProps) {
  return (
    <div
      className={`badge ${className} ${softStyle ? 'badge-soft' : ''}  ${outline ? 'badge-outline' : ''} ${variantStyles[style]}  ${variantSizes[size]}`}
    >
      {label}
    </div>
  );
}
