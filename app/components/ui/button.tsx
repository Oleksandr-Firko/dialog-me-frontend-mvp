import type { ButtonProps } from '~/types/props/button.props';

const variantStyles: Record<NonNullable<ButtonProps['style']>, string> = {
  default: '',
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  info: 'btn-info',
  success: 'btn-success',
  warning: 'btn-warning',
  error: 'btn-error',
};

export default function Button({
  label,
  action,
  disabled = false,
  imgUrl,
  imgPosition = 'center',
  imgStyle,
  softStyle = false,
  outline = false,
  className,
  style = 'default',
}: ButtonProps) {
  const getPositionClasses = () => {
    switch (imgPosition) {
      case 'left':
        return 'flex-row';
      case 'right':
        return 'flex-row-reverse';
      case 'center':
      default:
        return 'justify-center items-center';
    }
  };

  return (
    <button
      onClick={action}
      disabled={disabled}
      className={`btn ${className} ${softStyle ? 'btn-soft' : ''} ${outline ? 'btn-outline' : ''} ${variantStyles[style]} flex items-center ${getPositionClasses()}`}
    >
      {imgUrl && <img src={imgUrl} alt="" className={`${imgStyle}} inline-block`} />}
      <span>{label}</span>
    </button>
  );
}
