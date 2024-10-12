import { reactive, toRef } from 'vue';
import axios from 'axios';
import { setloading } from '../utils/extra';

// Reactive state for authentication
const state = reactive({
  authenticated: false,
});

const authenticatedRef = toRef(state, 'authenticated');

// Check localStorage for token during initialization
if (localStorage.getItem('token')) {
  authenticatedRef.value = true;
} else {
  authenticatedRef.value = false;
}

export function logout() {
  localStorage.clear();
  authenticatedRef.value = false;
}

export function login(token) {
  localStorage.setItem('token', token);
  authenticatedRef.value = true;
}

export function isAuthenticated() {
  return authenticatedRef.value;
}

export function setupRouterGuard(router) {
  router.beforeEach((to, from, next) => {
    const jwtToken = localStorage.getItem('token');

    // Function to check if the JWT token is expired
    function isTokenExpired(token) {
      const tokenData = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = tokenData.exp * 1000; // Convert expiration time to milliseconds
      return Date.now() >= expirationTime;
    }

    if (jwtToken && isTokenExpired(jwtToken)) {
      // Clear the localStorage and redirect to the login page
      localStorage.removeItem('token');
      logout();
      next('/login');
    } else {
      // Allow navigation to the next route
      if (to.meta.requiresAuth && !isAuthenticated()) {
        // Redirect to login page or any other desired route
        next('/login');
      } else if (to.meta.requiresGuest && isAuthenticated()) {
        next('/');
      } else {
        // Set default Axios configuration
        axios.defaults.baseURL = 'https://api.fairlightinvestments.com/';
        // axios.defaults.baseURL = 'http://127.0.0.1:8000/';
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        setloading(true); // Set loading to true before navigation
        next();
      }
    }
  });

  // Hook to run after each navigation
  router.afterEach(() => {
    setloading(false); // Set loading to false after the navigation is complete
  });
}
