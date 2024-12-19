describe('search products', () => {
    it('should be able to search products', () => {
        cy.searchByQuery('moletom')

        cy.location('pathname').should('include', '/search')
        cy.location('search').should('include', 'q=moletom')

        cy.contains('Moletom').should('exist')
    })
})  