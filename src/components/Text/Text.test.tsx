import { screen, render } from '@testing-library/react'
import Text from './Text'
describe('Text', () => {
    it('should render a paragraph', () => {
        render(<Text as="p">Hello world</Text>)
        expect(screen.getByText('Hello world')).toBeInTheDocument()
    })
    it('should render a span', () => {
        render(<Text as="span">Hello world</Text>)
        expect(screen.getByText('Hello world')).toBeInTheDocument()
    })
    it('should render a paragraph with a custom style', () => {
        render(<Text as="p" style={{ color: 'red' }}>Hello world</Text>)
        expect(screen.getByText('Hello world')).toHaveStyle('color: red')
    })
    it('should render a span with a custom style', () => {
        render(<Text as="span" style={{ color: 'red' }}>Hello world</Text>)
        expect(screen.getByText('Hello world')).toHaveStyle('color: red')
    })
    it('should render a h1', () => {
        render(<Text as="h1">Hello world</Text>)
        expect(screen.getByText('Hello world')).toBeInTheDocument()
    })
    it('should render a h2', () => {
        render(<Text as="h2">Hello world</Text>)
        expect(screen.getByText('Hello world')).toBeInTheDocument()
    })
    it('should render a h3', () => {
        render(<Text as="h3">Hello world</Text>)
        expect(screen.getByText('Hello world')).toBeInTheDocument()
    })
    it('should render a h4', () => {
        render(<Text as="h4">Hello world</Text>)
        expect(screen.getByText('Hello world')).toBeInTheDocument()
    })
    it('should render a h5', () => {
        render(<Text as="h5">Hello world</Text>)
        expect(screen.getByText('Hello world')).toBeInTheDocument()
    })
    it('should render a h6', () => {
        render(<Text as="h6">Hello world</Text>)
        expect(screen.getByText('Hello world')).toBeInTheDocument()
    })

    it('should render a h1 with custom css props', () => {
        render(<Text as="h1" style={{ color: 'red' }}>Hello world</Text>)
        expect(screen.getByText('Hello world')).toHaveStyle('color: red')
    })
    it('should render a h2 with custom css props', () => {
        render(<Text as="h2" style={{ color: 'red' }}>Hello world</Text>)
        expect(screen.getByText('Hello world')).toHaveStyle('color: red')
    })
    it('should render a h3 with custom css props', () => {
        render(<Text as="h3" style={{ color: 'red' }}>Hello world</Text>)
        expect(screen.getByText('Hello world')).toHaveStyle('color: red')
    })
    it('should render a h4 with custom css props', () => {
        render(<Text as="h4" style={{ color: 'red' }}>Hello world</Text>)
        expect(screen.getByText('Hello world')).toHaveStyle('color: red')
    })
    it('should render a h5 with custom css props', () => {
        render(<Text as="h5" style={{ color: 'red' }}>Hello world</Text>)
        expect(screen.getByText('Hello world')).toHaveStyle('color: red')
    })
    it('should render a h6 with custom css props', () => {
        render(<Text as="h6" style={{ color: 'red' }}>Hello world</Text>)
        expect(screen.getByText('Hello world')).toHaveStyle('color: red')
    })
})
