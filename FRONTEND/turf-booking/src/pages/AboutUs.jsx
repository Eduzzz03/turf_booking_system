import React from 'react';
import './AboutUs.css';

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-header">About Us</h1>

      <div className="about-us-content">
        <div className="about-us-description">
          <p>
            Welcome to our Turf Booking System, where we bring people together
            to enjoy the beautiful game of football. Our platform offers an
            easy and convenient way to book turfs for matches and practices.
            Whether you are a group of friends, a sports club, or a
            College team, we make it simple for you to find and book the best turf
            for your needs.
          </p>

          <p>
            Our mission is to provide a hassle-free and user-friendly experience
            for sports enthusiasts of all ages. With a user-friendly interface,
            you can easily view available time slots, make bookings, and even
            manage your reservations. We're here to help you maximize your game
            time and enjoy a great sporting experience.
          </p>

          <p>
            We believe in creating a community where athletes and sports lovers
            can come together, share their passion, and experience the thrill of
            playing on top-quality turfs. Join us today and take your football
            experience to the next level.
          </p>
        </div>

        <div className="about-us-team">
          <h2>Our Team</h2>
          <p>We are a group of passionate developers, designers, and sports enthusiasts dedicated to building the best turf booking experience.</p>
          <ul>
            <li><strong>Edwin C Anto</strong> - Founder & CEO</li>
            <li><strong>Aaron E J</strong> - Lead Developer</li>
            <li><strong>Ashwin P A</strong> - UI/UX Designer</li>
            <li><strong>Anandhu</strong> - Marketing Manager</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
