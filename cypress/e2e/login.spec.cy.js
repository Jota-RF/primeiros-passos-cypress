import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPages from '../pages/menuPages'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPages = new MenuPages()
const myInfoPage = new MyInfoPage()

describe('Orange HRM teste', () => {

  const selectorsList = {
    
    

    lastNameField:  "[name='lastName']",
    genericField: ".oxd-input--active",
    dataField: "[placeholder='yyyy-mm-dd']",
    genericCombobox: ".oxd-select-text--arrow",
    secondItemCombobox:".oxd-select-dropdown > :nth-child(2)",
    thirdItemCombobox:".oxd-select-dropdown > :nth-child(3)",
    dateCloseButton: ".--close",
    submitButton: "[type='Submit']",
    
  }

  it.only('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkdashboardPage()

    menuPages.accessMyInfo()

    myInfoPage.firstname()


    



   
    
    cy.get(selectorsList.genericField).eq(3).clear().type('NickTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('Employeeid')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherId')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericCombobox).eq(0).click()
    cy.get(selectorsList.thirdItemCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click()
    cy.get(selectorsList.secondItemCombobox).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('.oxd-text--toast-message')
  

  })
  it('Login-fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.userNameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type('Test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})

