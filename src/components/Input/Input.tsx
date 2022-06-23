import useLanguage from '@hooks/useLanguage'
import styles from './Input.module.css'

interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    type:
        | 'text'
        | 'email'
        | 'password'
        | 'number'
        | 'tel'
        | 'url'
        | 'search'
        | 'date'
        | 'time'
        | 'datetime-local'
        | 'month'
        | 'week'
        | 'color'
        | 'textarea'
    label: string | React.ReactNode
    placeholder: string
}

const Input: React.FC<InputProps> = ({ type, label, ...rest }) => {
    return (
        <div className={styles.inputWrapper}>
            <div className={styles.inputLabel}>{label}</div>
            {type === 'textarea' ? (
                <textarea
                    className={styles.input}
                    style={{
                        minHeight: '150px',
                    }}
                    {...rest}
                />
            ) : (
                <input className={styles.input} type={type} {...rest} />
            )}
        </div>
    )
}

export default Input
