import React from "react";
// import './ProfessionalExperience.css'; // Import your CSS

const ProfessionalExperience = () => {
  return (
    <section id="professionalexp">
      <h2>Professional Experience</h2>

      {/* Experience 1: Team Lead Development */}
      <div className="experience-item">
        <h3>🚀 Team Lead Development | KapilIT Solutions Pvt Ltd</h3>
        <p><strong>Duration:</strong> Dec 2021 - Present</p>
        <ul>
          <li>Led a full-stack team to build enterprise-grade applications using Angular, Node.js, and PostgreSQL.</li>
          <li>Supervised teams and individuals, giving feedback on performance and setting goals for improvement.</li>
          <li>Monitored team operations and workflow during busy periods, adjusting to improve pace.</li>
          <li>Identified areas of improvement and implemented necessary changes.</li>
          <li>Helped mitigate and resolve issues by analyzing situations and implementing appropriate solutions.</li>
        </ul>
      </div>

      {/* Experience 2: Team Lead */}
      <div className="experience-item">
        <h3>🚀 Team Lead | KCS Software Solutions</h3>
        <p><strong>Duration:</strong> Mar 2021 - Dec 2021</p>
        <ul>
          <li>Developed and maintained Angular + Node.js web applications for enterprise clients.</li>
          <li>Integrated secure REST APIs for seamless communication between frontend & backend.</li>
          <li>Monitored team operations and workflow during busy periods, making adjustments to improve pace.</li>
          <li>Implemented strategies to improve overall team efficiency.</li>
          <li>Helped mitigate and resolve issues by analyzing situations and implementing appropriate solutions.</li>
        </ul>
      </div>

      {/* Experience 3: Senior Software Engineer */}
      <div className="experience-item">
        <h3>🚀 Senior Software Engineer | Excelra Knowledge Solutions</h3>
        <p><strong>Duration:</strong> Jul 2019 - Feb 2021</p>
        <ul>
          <li>Frontend UI Development, API integration with Frontend through Angular 7+, HTML, CSS, Javascript</li>
          <li>Collaborated with cross-functional teams to ensure seamless integration of software components.</li>
          <li>Developed efficient software solutions to meet client requirements.</li>
          <li>Resolved critical production issues by debugging code, analyzing logs, and collaborating with support teams.</li>
        </ul>
      </div>

      {/* Experience 4: Software Developer */}
      <div className="experience-item">
        <h3>🚀 Software Developer | Jaguar Software India</h3>
        <p><strong>Duration:</strong> Apr 2019 - Jun 2019</p>
        <ul>
          <li>Built and optimized data-driven applications using D3.js, AngularJS, and PostgreSQL.</li>
          <li>Debugged software issues to ensure optimal performance and minimize system downtime.</li>
          <li>Collaborated with cross-functional teams to design, develop, and implement new features.</li>
        </ul>
      </div>

      {/* Experience 5: Developer */}
      <div className="experience-item">
        <h3>🚀 Developer | Successmetric Pvt Ltd</h3>
        <p><strong>Duration:</strong> May 2018 - Apr 2019</p>
        <ul>
          <li>Developed Odoo-based ERP applications with Flask and Angular.</li>
          <li>Created interactive frontend dashboards for enterprise clients.</li>
          <li>Optimized existing code for improved efficiency, readability, and maintainability.</li>
          <li>Collaborated with cross-functional teams to design, develop, and implement new features.</li>
        </ul>
      </div>

      {/* Experience 6: Application Developer */}
      <div className="experience-item">
        <h3>🚀 Application Developer | NIIT Technologies</h3>
        <p><strong>Duration:</strong> May 2016 - May 2018</p>
        <ul>
          <li>Implemented customized Odoo applications and developed secure Node.js & Angular-based solutions.</li>
          <li>Implemented and customized applications according to client requirements.</li>
        </ul>
      </div>

      {/* Experience 7: Associate */}
      <div className="experience-item">
        <h3>🚀 Associate | HCL Technologies Ltd</h3>
        <p><strong>Duration:</strong> Dec 2013 - Jan 2016</p>
        <ul>
          <li>Developed Fleet Management System using Odoo and trained police personnel across districts.</li>
          <li>Built interactive dashboards for real-time tracking & analytics.</li>
        </ul>
      </div>

    </section>
  );
};

export default ProfessionalExperience;
