import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className="login-box">
                {/* <!-- /.login-logo --> */}
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <b>Admin</b>LTE
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">Sign in to start your session</p>


                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <div className="icheck-primary">
                                    <input type="checkbox" id="remember" />
                                    <label for="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            {/* <!-- /.col --> */}
                            <div className="col-4">
                                <Link to={"/formulario1"} className="btn btn-primary btn-block"
                                >Sign In</Link>
                            </div>
                            {/* <!-- /.col --> */}
                        </div>


                        <div className="social-auth-links text-center mt-2 mb-3">
                            <a href="#" className="btn btn-block btn-primary">
                                <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
                            </a>
                            <a href="#" className="btn btn-block btn-danger">
                                <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
                            </a>
                        </div>
                        {/* <!-- /.social-auth-links --> */}

                        <p className="mb-1">
                            <a href="forgot-password.html">I forgot my password</a>
                        </p>
                        <p className="mb-0">
                            <a href="register.html" className="text-center">Register a new membership</a>
                        </p>
                    </div>
                    {/* <!-- /.card-body --> */}
                </div>
                {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.login-box --> */}
        </>
    )
}

export default Login;
