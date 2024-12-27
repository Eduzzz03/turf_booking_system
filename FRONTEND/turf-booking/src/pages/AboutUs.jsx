import React from 'react';
import './AboutUs.css';

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Connecting passion with play, one turf at a time.</p>
      </header>

      <main className="about-us-content">
        <section className="about-us-description">
          <h2>Our Mission</h2>
          <p>
            At Nutmeg Turf, our mission is to revolutionize the way sports enthusiasts
            book and enjoy turfs. With an easy-to-use platform, we aim to bring
            convenience and joy to players of all skill levels. Whether it's a friendly
            match or a professional training session, we’re here to make it seamless for you.
          </p>

          <p>
            Join our growing community of players, teams, and sports lovers who share
            the passion for the beautiful game. Let’s create unforgettable memories
            on the field together.
          </p>
        </section>

        <section className="about-us-team">
          <h2>Meet Our Team</h2>
          <p>Behind every booking is a team dedicated to delivering excellence.</p>
          <div className="team-members">
            <div className="team-member">
              <img
                src="https://via.placeholder.com/100"
                alt="Edwin C Anto"
                className="team-member-image"
              />
              <h3>Edwin C Anto</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img
                src="https://via.placeholder.com/100"
                alt="Aaron E J"
                className="team-member-image"
              />
              <h3>Aaron E J</h3>
              <p>Lead Developer</p>
            </div>
            <div className="team-member">
              <img
                src="https://via.placeholder.com/100"
                alt="Ashwin P A"
                className="team-member-image"
              />
              <h3>Ashwin P A</h3>
              <p>UI/UX Designer</p>
            </div>
            <div className="team-member">
              <img
                src="https://via.placeholder.com/100"
                alt="Anandhu"
                className="team-member-image"
              />
              <h3>Anandhu</h3>
              <p>Marketing Manager</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUsPage;
