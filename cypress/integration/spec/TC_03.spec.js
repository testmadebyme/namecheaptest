describe('My profile page. Client area', function () {
    it('Open Home page', function () {
        cy.visit('https://www.sbzend.ssls.com/')
    });

    it('Click on "LOG IN" text', function () {
        cy.get(':nth-child(2) > .ssls-toolbar__btn-text').click();
    });

    it('enter valid email for previously registered user', function () {
        cy.get('.form-group > .form-control').type('ssls.automation+666@gmail.com')
    });

    it('enter valid password for previously registered user', function () {
        cy.get('.input-box > .form-control').type('123456')
    });

    it('click on "eye" icon for password field', function () {
        cy.get('.btn-input').click();
    });

    it('Click on button LOGIN', function () {
        cy.get('.btn').click();
    });


    it('Click on dropdown User menu', function () {
        cy.get('.ssls-header-user > .ssls-btn--sm').click();
        cy.get('.ssls-dropdown.ssls-is-opened .ssls-dropdown__holder').find('a[href*="/user/profile"]').click();
    });

    it('Click on "Profile"', function () {
        cy.url().should('include', '/user/profile');
        cy.get('.panel').should('exist');


        cy.get('.panel.inline-panel .item .terms').find('span')
            .should(($p) => {
                // return an array of texts from all of the p's
                let texts = $p.map((i, el) => 
                    Cypress.$(el).text())

                // jquery map returns jquery object
                // and .get() convert this to simple array
                texts = texts.get()

                // array should have length of 3
                //expect(texts).to.have.length(3)

                // use second argument to expect(...) to provide clear
                // message with each assertion
                expect(texts, 'has expected text in each paragraph').to.deep.eq([
                    'Name',
                    'Email',
                    'Password',
                    'Phone',
                    'Address',
                    'Support pin',
                    'Newsletter'


                ])
            })

        //cy.get('span.text.ng-binding .ng-hide="activeRow === \'password\'"');
        cy.get('span.text.ng-binding').contains('*').should('not.to.be.empty');
        
        // cy.get('.connectors-list>li').then(function($lis){
        //     expect($lis).to.have.length(3)
        //     expect($lis.eq(0)).to.contain('Walk the dog')
        //     expect($lis.eq(1)).to.contain('Feed the cat')
        //     expect($lis.eq(2)).to.contain('Write JavaScript')
        //   })

    });

    it('Check at "Profile" page has to contain some precondition values ', function () {
        cy.get('h1.page-title').should('be.visible')
    });





    // describe('parent', () => {
    //     beforeEach(() => {
    //       cy.wrap('one').as('a')
    //     })

    //     context('child', () => {
    //       beforeEach(() => {
    //         cy.wrap('two').as('b')
    //       })

    //       describe('grandchild', () => {
    //         beforeEach(() => {
    //           cy.wrap('three').as('c')
    //         })

    //         it('can access all aliases as properties', function () {
    //           expect(this.a).to.eq('one') // true
    //           expect(this.b).to.eq('two') // true
    //           expect(this.c).to.eq('three') // true
    //         })
    //       })
    //     })
    //   })


})