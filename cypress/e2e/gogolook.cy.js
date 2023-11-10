describe('PChome24h Product Verification', () => {
	it('Should verify Whoscall象卡來市話版 product details', () => {
		cy.visit('https://24h.pchome.com.tw/');

		cy.get('.l-header__siteSearchBar').type('Whoscall')
			.get('.l-header__siteSearchBtn .btn').click();

		cy.get('.price .value').invoke('text').then((price) => {
			expect(parseFloat(price)).to.eq(799);
		});

		cy.get('.prod_name a').should('have.attr', 'href').then((href) => {
			cy.visit(href)
		})

		cy.get('.c-prodSpecs').screenshot('product_details');
	});
});