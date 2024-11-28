import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    referralCode: "",
    termsAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions");
      return;
    }
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="signup-page bg-gray-100 py-10">
      <div className="container mx-auto px-4 max-w-lg bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-900 text-center py-4">
          Tell us about yourself
        </h2>
        <button className="w-full bg-white border border-gray-300 rounded-lg py-2 px-4 flex items-center justify-center text-gray-600 mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Sign Up"
            className="w-5 h-5 mr-2"
          />
          Sign up with Google
        </button>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm text-gray-600">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First name"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last name"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm text-gray-600">Contact Number</label>
              <div className="flex items-center border border-gray-300 rounded-md px-4 py-2">
                <span className="mr-2 text-gray-600">+91</span>
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder="Contact number"
                  className="w-full outline-none"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-600">Email ID</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email ID"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm text-gray-600">Password</label>
              <div className="flex items-center border border-gray-300 rounded-md px-4 py-2">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full outline-none"
                />
                <button type="button">
                  <img
                    src="https://via.placeholder.com/20"
                    alt="Show Password"
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-600">Confirm Password</label>
              <div className="flex items-center border border-gray-300 rounded-md px-4 py-2">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm Password"
                  className="w-full outline-none"
                />
                <button type="button">
                  <img
                    src="https://via.placeholder.com/20"
                    alt="Show Password"
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="text-sm text-gray-600">Referral Code</label>
            <input
              type="text"
              name="referralCode"
              value={formData.referralCode}
              onChange={handleInputChange}
              placeholder="Referral Code (Optional)"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleInputChange}
              className="mr-2"
            />
            <p className="text-sm text-gray-600">
              By continuing, you’re agreeing to our{" "}
              <a href="#" className="text-blue-900">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-900">
                Privacy Policy
              </a>
              .
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 px-4 rounded-lg font-bold"
          >
            Save
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-900 font-bold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
