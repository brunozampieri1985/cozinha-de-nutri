import styles from './Button.module.css'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  style?: React.CSSProperties
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  style,
  onClick,
}) => {
  return (
    <button
      className={`${styles.btn} ${
        styles[variant !== undefined ? variant : 'primary']
      } ${styles[size !== undefined ? size : 'medium']}`}
      style={style}
      onClick={onClick}>
      {children}
    </button>
  )
}

export default Button