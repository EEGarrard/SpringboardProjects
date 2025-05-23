export default function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h2 className="about-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-profile">
            <div className="profile-image"></div>
            <h3>Erin</h3>
            <p className="profile-title">Web Developer</p>
          </div>
          
          <div className="about-text">
            <p>
              Hello! I'm Erin, a passionate web developer with expertise in modern JavaScript frameworks.
              I love creating intuitive, user-friendly web applications that solve real problems.
            </p>
            
            <div className="skills-section">
              <h4>My Skills</h4>
              <ul className="skills-list">
                <li>React & React Router</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
                <li>Responsive Design</li>
                <li>UI/UX Principles</li>
              </ul>
            </div>
            
            <p>
              When I'm not coding, you can find me hiking, reading sci-fi novels, 
              or experimenting with new recipes in the kitchen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}