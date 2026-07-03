import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

function Register() {
    //form data va hold panna
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phno: "",
    collegename: "",
    course: "",
    cgpa: "",
    dob: "",
    gender: "",
    address: "",
  });
//login page ku poi redirect panna useNavigate hook use pannirukom
  const navigate = useNavigate();

//form data change aagum pothu handle panna 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

//form submit aagum pothu handle panna
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Registration Successful!");
    navigate("/login");
  };

  return (
    <div className="register-page">
      <form className="register-card" onSubmit={handleSubmit}>
        <h2 className="register-title">Student Registration</h2>

        <div className="register-form-grid">
          <div className="register-form-group">
            <label className="register-form-label">Name</label>
            <input
              className="register-form-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-form-group">
            <label className="register-form-label">Email</label>
            <input
              className="register-form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-form-group">
            <label className="register-form-label">Password</label>
            <input
              className="register-form-input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-form-group">
            <label className="register-form-label">Phone Number</label>
            <input
              className="register-form-input"
              type="text"
              name="phno"
              value={formData.phno}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-form-group">
            <label className="register-form-label">College Name</label>
            <input
              className="register-form-input"
              type="text"
              name="collegename"
              value={formData.collegename}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-form-group">
            <label className="register-form-label">Course</label>
            <select
              className="register-form-select"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select Course</option>
              <option value="B.Tech">B.Tech</option>
              <option value="B.Sc">B.Sc</option>
              <option value="MBA">MBA</option>
            </select>
          </div>

          <div className="register-form-group">
            <label className="register-form-label">CGPA</label>
            <input
              className="register-form-input"
              type="text"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-form-group">
            <label className="register-form-label">Date of Birth</label>
            <input
              className="register-form-input"
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-form-group">
            <label className="register-form-label">Gender</label>
            <select
              className="register-form-select"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="register-form-group register-full-width">
            <label className="register-form-label">Address (Optional)</label>
            <textarea
              className="register-form-textarea"
              name="address"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <button className="register-submit-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;