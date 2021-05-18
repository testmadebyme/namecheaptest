describe('Authorization page. Not registered user', function() {
    it('Open Home page', function(){
        cy.visit('https://www.sbzend.ssls.com/')
    });

    it('Click on "LOG IN" text', function(){
        cy.get(':nth-child(2) > .ssls-toolbar__btn-text').click();
    });
    
    it('Enter any user email', function(){
        cy.get('.form-group > .form-control').type('ssls.666@gmail.com')
    });

    it('Enter any user password', function(){
        cy.get('.input-box > .form-control').type('12345655')
    });

    it('Click on "eye" icon for password field', function(){
        cy.get('.btn-input').click();
    });

    it('Click on button LOGIN', function(){
        cy.get('.btn').click();
    });

    it('If user not registered, errors messages should be displayed', function(){
        cy.get('.ssls-notification__info .noty_text')
        .should('be.visible');
    
        cy.get('.ssls-notification__info .noty_text')
        .should( 'have.text', 'Uh oh! Email or password is incorrect');     
    });

    
})