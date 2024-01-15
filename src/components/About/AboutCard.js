import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yogesh </span>
            from <span className="purple"> Lucknow, Uttar Pradesh, India.</span>
            <br /> I am a final year student pursuing by Bachelor's in Information Technology at MMMUT Gorakhpur.
            <br />
            I also do problem solving on various coding platforms like <span className="purple"> Leetcode</span> {" "} and {" "}
            <span className="purple"> GeeksForGeeks.</span>
            <br />
            Online Coding Profiles: 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <a href="https://leetcode.com/yogesh619/" target="_blank" rel="noopener noreferrer"><span className="purple"> Leetcode</span></a>
            </li>
            <li className="about-activity">
              <ImPointRight /> <a href="https://auth.geeksforgeeks.org/user/yogesh087/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" target="_blank" rel="noopener noreferrer"><span className="purple"> GeeksForGeeks</span></a>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Yogesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
