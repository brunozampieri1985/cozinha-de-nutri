import { screen, render } from '@testing-library/react'
import Button from './Button'


describe('Button', () => {
    it('should render correctly', () => {
        const { container } = render(<Button>Hello</Button>)
        expect(container).toMatchSnapshot()
    })
    it('should render a primary button', () => {
        render(<Button variant='primary'>Hello</Button>)
        expect(screen.getByText('Hello')).toHaveClass('primary')
    })
    it('should render a secondary button', () => {
        render(<Button variant='secondary'>Hello</Button>)
        expect(screen.getByText('Hello')).toHaveClass('secondary')
    })
    it('should render a outline button', () => {
        render(<Button variant='outline'>Hello</Button>)
        expect(screen.getByText('Hello')).toHaveClass('outline')
    })
    it('should render a small button', () => {
        render(<Button size='small'>Hello</Button>)
        expect(screen.getByText('Hello')).toHaveClass('small')
    })
    it('should render a large button', () => {
        render(<Button size='large'>Hello</Button>)
        expect(screen.getByText('Hello')).toHaveClass('large')
    })
    it('should render a medium button', () => {
        render(<Button size='medium'>Hello</Button>)
        expect(screen.getByText('Hello')).toHaveClass('medium')
    })
    it('should have a click function', () => {
        const fn = jest.fn()
        render(<Button onClick={fn}>Hello</Button>)
        screen.getByText('Hello').click()
        expect(fn).toHaveBeenCalled()
    })
})
   