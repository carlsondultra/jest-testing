import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

//Basic test to check if Home component has the word "Docs" inside of it
it('should have Docs text', () => {
    render(<Home />) // ARRANGE 

    const myElem = screen.getByText('Docs') // ACTION TAKEN

    expect(myElem).toBeInTheDocument() //ASSERT
})