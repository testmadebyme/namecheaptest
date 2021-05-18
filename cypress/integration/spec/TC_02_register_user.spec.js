describe('Authorization page (Welcome back!)', function() {
    it('Open Home page', function(){
        cy.visit('https://www.sbzend.ssls.com/')
    });

    it('Click on "LOG IN" text', function(){
        cy.get(':nth-child(2) > .ssls-toolbar__btn-text').click();
    });
    
    it('Enter valid email for previously registered user', function(){
        cy.get('.form-group > .form-control').type('ssls.automation+666@gmail.com')
    });

    it('Enter valid password for previously registered user', function(){
        cy.get('.input-box > .form-control').type('123456')
    });

    it('Click on "eye" icon for password field', function(){
        cy.get('.btn-input').click();
    });

    it('Click on button LOGIN', function(){
        cy.get('.btn').click();
    });

    
})