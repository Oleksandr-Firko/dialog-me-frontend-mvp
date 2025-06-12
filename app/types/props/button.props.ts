export interface ButtonProps {
  label?: string;
  action: () => void;
  disabled?: boolean;
  imgUrl?: string;
  imgPosition?: 'left' | 'right' | 'center';
  imgStyle?: string;
  style: 'default' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  softStyle?: boolean;
  outline?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  className?: string;
}
