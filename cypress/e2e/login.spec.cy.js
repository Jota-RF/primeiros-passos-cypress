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

  it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkdashboardPage()

    menuPages.accessMyInfo()

    myInfoPage.fillPersonalDetails('First Name', 'Last Name', 'nickName')
    myInfoPage.fillEmployeeDetails('EmployeeId', 'otherId', 'Drivers Number','2025-07-29', '123456', '654321')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

  })

  it.only('Login-fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })

})

