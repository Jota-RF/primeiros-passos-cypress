class MyInfoPages {

    selectorsList() {
        const selectors = {
           firstNameField: "[name='firstName']",
            
        }

        return selectors
    }

    firstname() {
        cy.get(this.selectorsList().firstNameField).clear().type('FirstNameTest')

    
    }

        
}

export default MyInfoPages
