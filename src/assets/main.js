


router.beforeEach((to, from, next) => {
    // Function to check if the JWT token is expired
    function isTokenExpired(token) {
      const tokenData = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = tokenData.exp * 1000; // Convert expiration time to milliseconds
      return Date.now() >= expirationTime;
    }
    const jwtToken = localStorage.getItem('token');
    if (jwtToken && isTokenExpired(jwtToken)) {
      // Clear the localStorage and redirect to the login page
      localStorage.removeItem('token');
      logout();
      next('/login');
    } else {
      // Allow navigation to the next route
      
    // Check if the route requires authentication and user is not authenticated
    if (to.meta.requiresAuth && !authenticated()) {
      // Redirect to login page or any other desired route
      next('/login');
    } else {
      // Check if the route requires a guest (unauthenticated user) and user is authenticated
      if (to.meta.requiresGuest && authenticated()) {
        next('/');
      } else {
        // https://api.capitalswealthmanagement.com/
        // http://127.0.0.1:8000
        axios.defaults.baseURL='https://api.capitalswealthmanagement.com/';
        axios.defaults.headers.common['Authorization']='bearer'+localStorage.getItem('token');
       
  
        next();
        setloading(true);
      
      }
    }
    }
  })
  