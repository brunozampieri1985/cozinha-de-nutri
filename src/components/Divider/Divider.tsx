import styles from './Divider.module.css'

type DividerProps = {
    color?: string
}

const Divider:React.FC<DividerProps> = ({ color = 'var(--theme-700'}) => (
    <div className={styles.divider} style={{
        backgroundColor: color
    }}/>
)
export default Divider