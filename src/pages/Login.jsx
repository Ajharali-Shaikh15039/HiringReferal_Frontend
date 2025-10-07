
import React, { useState } from "react";
import "../components/Components.css";
import InnerHeader from "../components/InnerHeader"; // <- yahi import path hoga (pages -> components)
import { useNavigate, NavLink } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [showPwd, setShowPwd] = useState(false);
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const validate = () => {
    const e = {};
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 6) e.password = "Min 6 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    try {
      // TODO: yahan API call karna ho to karo (fetch/axios)
      // const res = await axios.post("/api/login", form);

      console.log("Login ->", form); // demo
      navigate("/", { replace: true }); // success pe home bhej diya
    } catch (err) {
      setErrors({ general: "Login failed. Please try again." });
    }
  };

  // return (
  //   // <div className="container login-page py-5">
  //   //   <div className="row justify-content-center">
  //   //     <div className="col-lg-5 col-md-7">
  //   //       <div className="card shadow-sm border-0">
  //   //         <div className="card-body p-4 p-md-5">
  //   //           <h1 className="h4 mb-1">Welcome back</h1>
  //   //           <p className="text-muted mb-4">Log in to continue</p>

  //   //           {errors.general && (
  //   //             <div className="alert alert-danger">{errors.general}</div>
  //   //           )}

  //   //           <form onSubmit={onSubmit} noValidate>
  //   //             <div className="mb-3">
  //   //               <label className="form-label">Email</label>
  //   //               <input
  //   //                 type="email"
  //   //                 className={`form-control ${errors.email ? "is-invalid" : ""}`}
  //   //                 placeholder="you@example.com"
  //   //                 name="email"
  //   //                 value={form.email}
  //   //                 onChange={onChange}
  //   //               />
  //   //               {errors.email && (
  //   //                 <div className="invalid-feedback">{errors.email}</div>
  //   //               )}
  //   //             </div>

  //   //             <div className="mb-3">
  //   //               <label className="form-label">Password</label>
  //   //               <div className="input-group">
  //   //                 <input
  //   //                   type={showPwd ? "text" : "password"}
  //   //                   className={`form-control ${errors.password ? "is-invalid" : ""}`}
  //   //                   placeholder="Your password"
  //   //                   name="password"
  //   //                   value={form.password}
  //   //                   onChange={onChange}
  //   //                 />
  //   //                 <button
  //   //                   type="button"
  //   //                   className="btn btn-outline-secondary"
  //   //                   onClick={() => setShowPwd((s) => !s)}
  //   //                   aria-label={showPwd ? "Hide password" : "Show password"}
  //   //                 >
  //   //                   {showPwd ? "Hide" : "Show"}
  //   //                 </button>
  //   //               </div>
  //   //               {errors.password && (
  //   //                 <div className="invalid-feedback d-block">
  //   //                   {errors.password}
  //   //                 </div>
  //   //               )}
  //   //             </div>

  //   //             <div className="d-flex justify-content-between align-items-center mb-3">
  //   //               <div className="form-check">
  //   //                 <input
  //   //                   className="form-check-input"
  //   //                   type="checkbox"
  //   //                   id="remember"
  //   //                   name="remember"
  //   //                   checked={form.remember}
  //   //                   onChange={onChange}
  //   //                 />
  //   //                 <label className="form-check-label" htmlFor="remember">
  //   //                   Remember me
  //   //                 </label>
  //   //               </div>
  //   //               <NavLink to="/forgot-password" className="small">
  //   //                 Forgot password?
  //   //               </NavLink>
  //   //             </div>

  //   //             <button type="submit" className="btn btn-primary w-100">
  //   //               Log in
  //   //             </button>
  //   //           </form>

  //   //           <div className="text-center mt-4">
  //   //             <span className="text-muted">No account?</span>{" "}
  //   //             <NavLink to="/register">Sign up</NavLink>
  //   //           </div>
  //   //         </div>
  //   //       </div>

  //   //       <div className="text-center text-muted mt-3">
  //   //         <small>
  //   //           By continuing you agree to our{" "}
  //   //           <NavLink to="/terms">Terms</NavLink> and{" "}
  //   //           <NavLink to="/privacy">Privacy Policy</NavLink>.
  //   //         </small>
  //   //       </div>
  //   //     </div>
  //   //   </div>
  //   // </div>
  // );
}
