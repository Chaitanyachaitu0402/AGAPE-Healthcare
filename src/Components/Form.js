import React from "react";
import "../Styles/form.css";

function Form() {

  function sendToWhatsApp() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const pincode = document.getElementById("pincode").value.trim();
    const measurement = document.getElementById("measurement").value.trim();
    const openingTime = document.getElementById("openingTime").value.trim();
    const location = document.getElementById("location").value.trim();

    const pharmacist = document.querySelector('input[name="pharmacist"]:checked');

    // 🔴 VALIDATION
    if (
      !firstName ||
      !lastName ||
      !email ||
      !mobile ||
      !pincode ||
      !measurement ||
      !openingTime ||
      !location ||
      !pharmacist
    ) {
      alert("⚠️ Please fill all details properly.");
      return;
    }

    const message = `Hi AGAPE Medical Team, I want to register for a new franchise.

Name: ${firstName} ${lastName}
Pharmacist: ${pharmacist.value}
Email: ${email}
Mobile: ${mobile}
Pincode: ${pincode}
Shop Size: ${measurement}
Opening Time: ${openingTime}
Location: ${location}
`;

    const phone = "7997554433";
    const url = `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  }

  return (
    <div className="page">
      <div className="card">
        <h2>Join Agape Medical's™ Franchise</h2>

        <div className="form-grid">
          <div>
            <label>First Name</label>
            <input type="text" id="firstName" placeholder="Enter first name" />
          </div>

          <div>
            <label>Last Name</label>
            <input type="text" id="lastName" placeholder="Enter last name" />
          </div>

          <div>
            <label>Email ID</label>
            <input type="email" id="email" placeholder="Enter email" />
          </div>

          <div>
            <label>Mobile Number</label>
            <input type="tel" id="mobile" placeholder="Enter mobile number" />
          </div>

          <div>
            <label>Are you a Pharmacist?</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="pharmacist" value="Yes" /> Yes
              </label>
              <label>
                <input type="radio" name="pharmacist" value="No" /> No
              </label>
            </div>
          </div>

          <div>
            <label>Pin Code</label>
            <input type="text" id="pincode" placeholder="Enter pincode" />
          </div>

          <div>
            <label>Shop Measurement (in feet)</label>
            <input type="text" id="measurement" placeholder="Eg: 10 x 20" />
          </div>

          <div>
            <label>How soon do you want to open your store?</label>
            <input type="text" id="openingTime" placeholder="Eg: Within 3 months" />
          </div>

          <div>
            <label>Location (City / Mandal)</label>
            <input type="text" id="location" placeholder="Enter city or mandal" />
          </div>
        </div>

        <button onClick={sendToWhatsApp}>Send</button>
      </div>
    </div>
  );
}

export default Form;
