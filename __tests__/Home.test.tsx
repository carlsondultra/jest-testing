import { render, screen } from '@testing-library/react'
import Home from '@/app/page'


describe('Home', () => {
    //Basic test to check if Home component has the word "Docs" inside of it
    it('should have Docs text', () => {
        render(<Home />) // ARRANGE 

        const myElem = screen.getByText('Docs') // ACTION TAKEN

        expect(myElem).toBeInTheDocument() //ASSERT
    })

    //Test to check if Home component has the word "information" inside of it, using regex
    it('should contain the text "information"', () => {
        render(<Home />)

        const myElem = screen.getByText(/information/i) //case insensitive

        expect(myElem).toBeInTheDocument()
    })

    //Test to check if Home component has a heading element
    it('should have a heading', () => {
        render(<Home />)

        const myElem = screen.getByRole('heading', {
            name: 'Learn'
        })

        expect(myElem).toBeInTheDocument()
    })
})