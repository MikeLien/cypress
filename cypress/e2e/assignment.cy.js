describe('Amazon Search Test', () => {
  it('Searches for wrist watches with specific criteria', () => {
    // Visit Amazon website
    cy.visit('https://www.amazon.com/en');

    // Type "Wrist Watches" in the search bar
    cy.get('#twotabsearchtextbox').type('Wrist Watches');

    // Click the search button
    cy.get('.nav-search-submit').click();

    // Filter by Material: "Ceramic"
    cy.get('[data-csa-c-content-id="p_n_material_browse/2205791011"] label').click()

    // Filter by Price: $1000 to $2000
    cy.get('#low-price').type('1000')
        .get('#high-price').type('2000')
        .get('.a-button-input').click();

    // Sort by "Best Sellers"
    cy.get('#s-result-sort-select').next().click().get('.a-popover-inner [role="option"]').each(($element) => {
      if(['Best Sellers', '暢銷商品'].includes($element.text())) {
        cy.get($element).click()
    }
  })

    // Get the name of the first search result
    cy.get('[data-component-type="s-search-result"]').first()
        .find('.s-title-instructions-style')
        .invoke('text').then((productName) => {
          cy.log(`First search result: ${productName}`);
    });
  });
});