import styles from './Input.module.css'

type InputProps = {
   placeholder: string
   value?: string
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
   return (
      <div className={styles.inputBox}>
         <input type='text' value={value} onChange={onChange} required />
         <span>{placeholder}</span>
      </div>
   )
}
export default Input
