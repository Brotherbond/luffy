export const Routes = {
    home: "/",
    error404: "/",
    //Authentication
    signup: "/getstarted", //Auth first reaches signup before proceeding further
    login: "/getstarted/login",
    payment: "/getstarted/payment",
    forgotPass: "/getstarted/forgotpassword",
    // pages
    baseURL: process.env.URL || 'http://localhost:8000',
    bootstrapTables:"/dashboard/table", 
    charts:"/dashboard/charts",
    dashboardOverview:"/dashboard", 
    referral:"/dashboard/referral",
    settings:"/dashboard/settings",
    testing:"/test",
    transactions:"/dashboard/transactions",
    external:{
        pricing:"//coinmarketcap.com/currencies/luffy",
        uniswap:"//uniswap.org",
        luffy: "//luffytoken.com/buy",
        myGithub: "//github.com/Brotherbond"
    },
    api:{
        avatarUpdate: 'api/avatarUpdate',
        forgotPass: 'api/forgotpassword',
        login:'api/login',
        passwordReset: 'api/passwordReset',
        payment: "api/payment",
        profile: "api/profile",
        referredCode: 'api/referredCode',
        register: 'api/register',
        settingsGeneralInfo: 'api/settingsGeneralInfo',
        token: 'api/token',
        transactions:"api/transactions",
        transactionsAll:"api/transactionsAll",
        updatePackage: 'api/updatePackage'
    },
    params: {
        emailedCode: 'code',
        referredCode: 'referral',
        token: 'token',
        passwordReset: "reset",

    }


}