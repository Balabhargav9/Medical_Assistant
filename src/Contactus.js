import React, { useState } from 'react';
import axios from 'axios';
const ContactUs = () => {
    const [mail,setmail] = useState("");
    const [matter,setmatter] = useState("");
    const DoWork =(e) =>{
        e.preventDefault();
        axios.post("http://localhost:8379/health/sendemail",{mail:mail,matter:matter}).then(()=>{console.log("messagesentsuccessfully")}).catch((error)=>{console.log(error.message)})
    }
  return (
    <div>
      <header className="bg-gray-800 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p>We'd love to hear from you!</p>
      </header>

      <section className="py-10 text-center">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
          <form id="feedback-form" className="flex flex-col items-center" onSubmit={DoWork}>
            <label className="text-lg mb-2" htmlFor="name">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 mb-4 border rounded"
              required
            />

            <label className="text-lg mb-2" htmlFor="email">
              Your Email:
            </label>
            <input
            onChange={(e)=>{setmail(e.target.value)}}
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mb-4 border rounded"
              required
            />

            <label className="text-lg mb-2" htmlFor="message">
              Your Message:
            </label>
            <textarea
            onChange={(e)=>{setmatter(e.target.value)}}
              id="message"
              name="message"
              rows="6"
              className="w-full px-4 py-2 mb-4 border rounded"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-green-500 text-white px-8 py-4 text-lg rounded cursor-pointer hover:bg-green-600"
            >
              Submit
            </button>
          </form>

          <div className="mt-8 text-left">
            <h2 className="text-2xl font-bold mb-4">Contact Details</h2>

            <div className="mb-4">
              <h3 className="text-xl font-bold">Ineesh</h3>
              <p>Email: ineesh@example.com</p>
              <p>Phone: +123 456 7890</p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold">Manideep</h3>
              <p>Email: manideep@example.com</p>
              <p>Phone: +123 456 7891</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Bala Bhargav</h3>
              <p>Email: bala@example.com</p>
              <p>Phone: +123 456 7892</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2023 [Your Website Name]. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
