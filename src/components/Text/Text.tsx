import { createElement } from 'react'

interface TextProps {
    as: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    children: React.ReactNode
    style?: React.CSSProperties
}

const Text: React.FC<TextProps> = ({ as, style, children }) => {
    return createElement(as, { style }, children)
}
export default Text