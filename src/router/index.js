import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'
import riskView from '../views/RiskView.vue'
import consultantsView from '../views/consultants.vue'
import estateView from '../views/estate.vue'
import constructionView from '../views/construction.vue'
import finnaceView from '../views/finnace.vue'
import dealershipView from '../views/dealership.vue'
import termsView from '../views/terms.vue'
import cookieView from '../views/cookie.vue'
import storyView from '../views/story.vue'
import faqView from '../views/faq.vue'
import careersView from '../views/careers.vue'
// import LeadView from '../views/LeadView.vue'

// user

// import DeshboardView from '../views/Deshboard/DeshboardView.vue'
// import KycView from '../views/Deshboard/KycView.vue'
// import DepositView from '../views/Deshboard/DepositView.vue'
// import WithdrawView from '../views/Deshboard/WithdrawView.vue'
// import depositLog from '../views/Deshboard/depositLog.vue'

// import withdrawLog from '../views/Deshboard/withdrawLog.vue'
// import TransactionView from '../views/Deshboard/TransactionView.vue'
// import AccountView from '../views/Deshboard/AccountView.vue'
// import ChangeView from '../views/Deshboard/ChangeView.vue'


// admin


// import AdminDeshboardview from '../views/Admin/DeshboardView.vue'
// import UserManageview from './../views/Admin/UserManageView.vue'
// import LeadsManageview from '../views/Admin/LeadsManageView.vue'
// import Leadsview from '../views/Admin/LeadsView.vue'

// import AdminTransactionView from '../views/Admin/TransactionView.vue'
// import UserDetailsview from '../views/Admin/UserDetailsView.vue'
// import AdminDepositView from '../views/Admin/DepositView.vue'
// import AdminWithdrawView from '../views/Admin/WithdrawView.vue'
// import AdminChangeView from '../views/Admin/ChangeView.vue'
// import transferView from '../views/Admin/transferView.vue'


// import LoginComponent from '../views/Auth/SignIn.vue'
// import RegisterComponent from '../views/Auth/SignUp.vue'
// import ForgetComponent from '../views/Auth/Forget.vue'
// import authenticated from '../midleware/auth.js';
// import { logout } from "../midleware/auth.js";
// import { setloading } from '../utils/extra'
// import axios from 'axios';



const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [



    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
   
        // requiresAuth:'auth'
      },
      
    },
    {
      path: '/about',
      name: 'about',
     
      component: AboutView,
      meta:{

      },
    },
    // {
    //   path: '/login',
    //   name: 'login',
   
    //   component:LoginComponent,
    //   meta:{
    //   requiresGuest:true,
    //   },
    // },
    // {
    //   path: '/register',
    //   name: 'register',

    //   component:RegisterComponent,
    //   meta:{
    //     requiresGuest:true,
    //   },
    // },
    // {
    //   path: '/forget',
    //   name: 'forget',

    //   component:ForgetComponent,

    // },
    {
      path: '/servics',
      name: 'servics',

      component:ServicesView,
     
    },
    {
      path: '/contact',
      name: 'contactUs',
  
      component:ContactView,
 
    },
    {
      path: '/risk/disclosure',
      name: 'risk',
  
      component:riskView,
 
    },
    
    {
      path: '/consultants',
      name: 'consultants',
  
      component:consultantsView,
 
    },
    {
      path: '/estate',
      name: 'estate',
  
      component:estateView,
 
    },
    {
      path: '/construction',
      name: 'construction',
  
      component:constructionView,
 
    },
    {
      path: '/finnace',
      name: 'finnace',
  
      component:finnaceView,
 
    },
    {
      path: '/dealership',
      name: 'dealership',
  
      component:dealershipView,
 
    },
    {
      path: '/terms',
      name: 'terms',
  
      component:termsView,
 
    },
    {
      path: '/cookie',
      name: 'cookie',
  
      component:cookieView,
 
    },
    {
      path: '/story',
      name: 'story',
  
      component:storyView,
 
    },
    {
      path: '/faq',
      name: 'faq',
  
      component:faqView,
 
    },
    {
      path: '/careers',
      name: 'careers',
  
      component:careersView,
 
    },




















    // user Deshboard--------------------------------------------------
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',

    //   component:DeshboardView,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    // {
    //   path: '/kyc',
    //   name: 'kyc',

    //   component:KycView,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    
    // {
    //   path: '/deposit',
    //   name: 'deposit',

    //   component:DepositView,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    // {
    //   path: '/deposit/log',
    //   name: 'deposit-log',

    //   component:depositLog,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    
    // {
    //   path: '/withdraw',
    //   name: 'withdraw',

    //   component:WithdrawView,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    // {
    //   path: '/withdraw/log',
    //   name: 'withdraw-log',

    //   component:withdrawLog,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    // {
    //   path: '/transaction',
    //   name: 'transaction',

    //   component:TransactionView,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },

    // {
    //   path: '/account',
    //   name: 'account',

    //   component:AccountView,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    // {
    //   path: '/change',
    //   name: 'change',

    //   component:ChangeView,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },




    // admin----------------------------
    // {
    //   path: '/admin/dashboard',
    //   name: 'admindashboard',

    //   component:AdminDeshboardview,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    // {
    //   path: '/admin/user',
    //   name: 'alluser',

    //   component:UserManageview,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    // {
    //   path: '/admin/user.details/:id?',
    //   name: 'userdetails',

    //   component:UserDetailsview,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    // {
    //   path: '/admin/deposit/:id?',
    //   name: 'AdminDeposit',

    //   component:AdminDepositView,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    // {
    //   path: '/admin/withdraw/:id?',
    //   name: 'AdminWithdraw',

    //   component:AdminWithdrawView,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    // {
    //   path: '/admin/transfer/:id?',
    //   name: 'transferView',

    //   component:transferView,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    // {
    //   path: '/admin/leads',
    //   name: 'leads',

    //   component:LeadsManageview,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    // {
    //   path: '/admin/leadcollect',
    //   name: 'lead',

    //   component:Leadsview,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    
    // {
    //   path: '/admin/transaction',
    //   name: 'Admintransaction',

    //   component:AdminTransactionView,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    // {
    //   path: '/admin/change',
    //   name: 'adminchange',

    //   component:AdminChangeView ,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },

})










export default router
