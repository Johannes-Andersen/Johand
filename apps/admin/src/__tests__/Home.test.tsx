import { render } from '@testing-library/react'
import Home from '../pages/index'

describe('Home Page', () => {
  it('should render', async () => {
    const { getByText } = render(<Home />)
    const title = getByText('Admin // TODO')
    expect(title).toBeInTheDocument()
  })
})
