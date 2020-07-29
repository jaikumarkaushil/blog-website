<div>
        {/* <p>taskade</p> */}
        <p className="title">Let's get started</p>
        <p className="subtitle"> <span>Create your free account</span> 😎</p>
        <div className="google">
          <img className="google-logo" src="https://img.favpng.com/22/17/2/google-logo-g-suite-google-guava-png-favpng-9UYx7Tub6HPd8t6SEJ65iMHzL.jpg" /><span className="sign-google">Sign up with Google</span>
        </div>
        <p className="sign-up"> <span className="faint">Or sign up with email</span></p>
        {/* <p class="text">Sign up with Google</p> */}
        <form>
          <input type="email" name="Email" placeholder="Email" autofocus autoComplete="email" /><br />
          <input type="text" name="Username" placeholder="Username" /><br />
          <input type="password" name="Password" placeholder="Password" /><br />
          {/* <input class="input" type="password" name="Retype-Password" placeholder="Retype Password"> */}
          <button id="signup-button">Sign up for free</button>
        </form>
        <p><span className="faint">By signing up you agree to our</span> Terms of Service</p><p>
        </p><p><span className="faint">Already have an account?</span> Log In</p>
      </div>


body {
	font-family: Helvetica Neue, Helvetica, sans-serif;
	border-width: 0;
 }
.company-logo {
  display: block;
  margin: 34px auto auto auto;
  margin-left: auto;
  margin-right: auto;
  width: 160px;
}
div {
	text-align: center;
}

.title {
	margin-top: 40px;
	margin-bottom: 30px;
	font-size: 28px;
	line-height: 1px;
}
.subtitle {
	font-size: 20px;
	line-height: 1px;
	color: #999;
}
.google-logo {
	width: 30px;
	height: 30px;
	margin-right: 4px;
	margin-left: auto;
	vertical-align: middle;
}
.google {
	display: inline-block;
	margin-left: auto;
	margin-right: auto;
	border: 0.8px solid #cccccc;
	padding: 10px 0;
	border-radius: 5px;
	width: 330px;
	height: 23.2px;
	margin-top: 30px;
	vertical-align: middle;

}


form {
	text-align: center;
}
input {
	margin: 10px auto 10px auto;
	width: 310px;
	font-size: 120%;
	padding: 10px;
	border-width: 0.8px;
	border-radius: 5px;
}
#signup-button {
	background: #ff1a66;
	color: white;
	width: 340px;
	border: 1px solid #ff1a66;
	margin: 10px auto 10px auto;
	font-size: 120%;
	padding: 10px;
	border-width: 0.8px;
	border-radius: 5px;
}
button:link{
	color: #FF4773;
}
.faint {
	color: #A9A19B;
	font-size: 0.95rem;
}
.sign-google {
	color: #333333;
	vertical-align: middle;
}
