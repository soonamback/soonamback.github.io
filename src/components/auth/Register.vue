<template>
    <div>
      <div class="my-5 text-center offset-2 col-8">
        <img src="../../../assets/welcome.svg" class="img-fluid" />
      </div>
      <div class="text-center">
        <h2>Register Now</h2>
        <p>
          Or
          <a class="text-vue2" role="button"
            >Login with your Account</a
          >
        </p>
      </div>
      <form>
        <div class="form-row">
          <div class="form-group col-md-8 offset-2">
            <label for="email"><strong>E-Mail</strong></label>
            <input type="email" class="form-control" id="email" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-8 offset-2">
            <label for="password"><strong>Password</strong></label>
            <input type="password" class="form-control" id="password" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-8 offset-2">
            <label for="confirmPassword"
              ><strong>Repeat Password</strong></label
            >
            <input type="password" class="form-control" id="confirmPassword" />
          </div>
        </div>
        <div class="form-row mt-3">
          <div class="form-group col-md-8 offset-2">
            <div class="d-grid">
              <button class="btn bg-vue">Register Now</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "Register",
  };
  </script>
  
  <style scoped>
  </style>