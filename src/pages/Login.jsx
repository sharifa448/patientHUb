import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const [errors, setErrors] = useState({});

  const validate = (values) => {
    const newErrors = {};

    if (!values.email.trim()) {
      newErrors.email = 'Please enter email or phone number';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!values.password) {
      newErrors.password = 'Please enter password';
    } else if (values.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updated = {
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    };
    setForm(updated);

    if (Object.keys(errors).length > 0) {
      setErrors(validate(updated));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

    
      <div className="relative h-[520px] overflow-hidden">
     
        <img
          src="./backround-of-sign-page.jpeg"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />
       
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-700/30 to-pink-500/40" />

       
        <div className="relative z-10 text-center pt-24 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Welcome to MyPatientHUB!
          </h1>
          <p className="text-white text-sm md:text-base drop-shadow-md">
            We provide smart healthcare services in your hands.
          </p>
        </div>
      </div>

     
      <div className="flex-1 flex justify-center -mt-72 relative z-20 px-4 pb-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-8">
            Sign in to MyPatientHUB
          </h2>

          
          <div className="flex justify-center gap-4 mb-8">
       
            <button
              type="button"
              className="w-14 h-14 border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center justify-center transition"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>

           
            <button
              type="button"
              className="w-14 h-14 border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center justify-center transition"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </button>
          </div>

        
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email or Phone number"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition ${
                  errors.email
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-200 focus:ring-purple-500'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Please enter your password"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition ${
                  errors.password
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-200 focus:ring-purple-500'
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

           
            <div className="flex justify-between items-center text-xs text-gray-500 pt-1">
              <a href="#" className="hover:text-purple-500 transition">
                Forgot password?
              </a>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
                />
                <span>Remember me</span>
              </label>
            </div>

           
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 rounded-lg shadow-md hover:opacity-90 transition"
            >
              SIGN IN
            </button>

           
            <div className="flex items-center gap-3 my-2">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-gray-400 text-xs">or</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold py-3 rounded-lg shadow-md hover:opacity-90 transition"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>

     
      <footer className="bg-gray-50 py-6 border-t border-gray-100">
        <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
          <a href="#" className="hover:text-purple-500 transition">Google Play Store APP</a>
          <a href="#" className="hover:text-purple-500 transition">App Store APP</a>
          <a href="#" className="hover:text-purple-500 transition">About MyPatientHUB</a>
          <a href="#" className="hover:text-purple-500 transition">About Us</a>
          <a href="#" className="hover:text-purple-500 transition">Our Blog</a>
        </div>
      </footer>
    </div>
  );
};

export default Login;