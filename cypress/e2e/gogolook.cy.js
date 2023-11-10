describe('PChome24h Product Verification', () => {
	it('Should verify Whoscall象卡來市話版 product details', () => {
		// Visit PChome24h website
		cy.visit('https://24h.pchome.com.tw/');

		// Search for Whoscall
		cy.get('.l-header__siteSearchBar').type('Whoscall')
			.get('.l-header__siteSearchBtn .btn').click();
		// cy.get('.input-group-btn button').click();

		// Verify the price (adjust the price accordingly based on the actual price during the test)
		cy.get('.price .value').invoke('text').then((price) => {
			expect(parseFloat(price)).to.eq(799);
		});

		cy.get('.prod_name a').should('have.attr', 'href').then((href) => {
			cy.visit(href)
		})


		// Take a screenshot of the product details (red box area)
		cy.get('.c-prodSpecs').screenshot('product_details');
	});
});