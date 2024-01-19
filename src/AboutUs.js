import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <header className="bg-gray-800 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p>Empowering Your Journey to Better Health</p>
      </header>

      <section className="py-10 text-center">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
          <div className="about-container">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p>
              HealthyLife Style is dedicated to providing personalized health
              insights to empower individuals on their unique wellness journeys.
              We believe in the transformative power of knowledge, preventive
              measures, and a personalized approach to health.
            </p>

            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="text-left">
              <li>Personalized Health Predictions</li>
              <li>Actionable Recommendations</li>
              <li>Expert Guidance</li>
              <li>Focus on Preventive Measures</li>
              <li>Data Security and Privacy</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
            <p>
              Our team is passionate about helping you achieve optimal health.
              Meet the individuals behind  HealthyLife Style:
            </p>

            <ul className="text-left">
              <li>
                <strong>Ineesh</strong> - Co-founder
              </li>
              <li>
                <strong>Manideep</strong> - Lead Health Consultant
              </li>
              <li>
                <strong>Bala Bhargav</strong> - Wellness Expert
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2023  HealthyLife Style. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
