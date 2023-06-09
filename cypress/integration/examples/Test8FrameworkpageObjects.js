/// <reference types="Cypress" />
import homePage from "../pageObjects/homePage"
import productPage from "../pageObjects/productPage"

//Implementing Page object Design pattern into Cypress

describe('My First Test Suite', function() {

    beforeEach(()=>
{
    cy.fixture('example').then(function(data)
    {
this.data = data
    })
});


    it('My ninth test case', function() {
        //Created object for our class homePage()
        //Now I can pull all methods from the objects class
        const homePage = new homePage()
        const productPage = new ProductPage()
        Cypress.env('url')
        cy.visit(Cypress.env('url')+"/angularpractice/")
        
       // Modifying existing tests into Page object pattern as per Cypress standards

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        homePage.getEditBox().should('have.atrr','minlength','2')
        homePage.getEntrepreneur().should('be.disabled')

        homePage.getShopTab().click()
        Cypress. config('defaultCommandTimeout',8000)
        //Change timeout for specified spec file not globally

        //Iterate through array in js

        this.data.productName.forEach(function(element) {
            cy.selectProduct('element')
        });
        productPage.checkOutButton().click()
        var sum = 0
        //Summing up products functionality in cypress
        cy.get('tr td:nth-child(4'/strong).each(($el, index, $list) => {

            //grab the text of jQuery method
            const amount=$el.text()
            //splitting whitespace from product price string to remove ($.) from the 50000
            //res/result
            var res= actualText.split(" ")
            res = res[1].trim()
            sum = Number(sum)+Number(res)
            

        // ₹. 50000
        // res[0]= ₹.
        // res[1]= 50000
        //res or result
        }).then(function()
        {
            cy.log(sum)
        })
        cy.get('h3 strong').then(function(element)
            {
                const amount=element.text()
                //splitting whitespace from product price string to remove ($.) from the 50000
                var res= amount.split(" ")
                var total = res[1].trim()
                expect(Number(total)).to.equal(sum)
            })
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        //#checkbox2 threw an error but it was correct css selector use {force: true} to disregard error
        cy.get('#checkbox2').click({force: true})
        cy.get('input[type="submit"]').click()
        //If you can't find alert this way try it this way below
        //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in the next few weeks :-).')
        //Resolve the promise
        cy.get('.alert').then(function(element)
        {
            //grab the text of jQuery method
            const actualText=element.text()
            //splitting whitespace from product price string to remove ($.) from the 50000
            var res= actualText.split(" ")
            res = res[1].trim()
            

        // ₹. 50000
        // res[0]= ₹.
        // res[1]= 50000

            //use chai assertion to check if text matches and is true
            expect(actualText.includes("Success")).to.be.true
        })


})
})