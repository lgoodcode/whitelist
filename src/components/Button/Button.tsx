import './Button.css'

type Size = 'sm' | 'md' | 'lg' | 'xl'
type Variant =
  | 'none'
  | 'default'
  | 'white'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'dark'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  size?: Size
  variant?: Variant
  outlined?: boolean
  icon?: boolean
  disabled?: boolean
  link?: string
  target?: string
}

/**
 * @property size
 * @returns
 */
export default function Button({
  children,
  className = '',
  onClick = () => null,
  size = 'md',
  variant = 'none',
  outlined,
  icon,
  disabled,
  link,
  target = '_self',
  ...rest
}: ButtonProps): JSX.Element {
  return !link ? (
    <button
      onClick={onClick}
      className={`btn ${size}${variant === 'none' ? '' : ` ${variant}`}${
        outlined ? ' outlined' : ''
      }${icon ? ' icon' : ''}${disabled ? ' disabled' : ''} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  ) : (
    <a
      href={link}
      target={link && target}
      onClick={
        disabled ? (e: React.MouseEvent) => e.preventDefault() : () => null
      }
      className={`btn ${size}${variant === 'none' ? '' : ` ${variant}`}${
        outlined ? ' outlined' : ''
      }${icon ? ' icon' : ''}${disabled ? ' disabled' : ''} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
