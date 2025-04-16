import React from 'react';

const Projects = () => {


  return (
    <section id="projects">
  <h2>Projects</h2>
  <div className="projects">
    
    {/* <!-- Finsta Project --> */}
    <div className="project-card">
      <h3>Finsta – Loan Management System</h3>
      <p>Designed and developed a secure, cloud-native loan management system processing over 50,000+ financial transactions per day. Integrated Amazon S3 for secure document storage and AWS Lambda for automation of loan disbursements.</p>
      <p><strong>Technologies Used:</strong> Node.js, Angular, PostgreSQL, AWS Lambda, S3, API Gateway, RBAC, Audit Logs</p>
      <br></br>
      <p>Implemented role-based access control (RBAC), JWT authentication, and audit trails to meet banking compliance and security standards. Reduced loan application processing time by 45% through efficient workflow automation and database indexing.</p>
      {/* <a href="https://github.com/ritwik15/finsta" target="_blank">View on GitHub</a>  */}
    </div>

    {/* <!-- KapilGuru Project --> */}
    <div className="project-card">
      <h3>KapilGuru – E-Learning Platform</h3>
      <p>Developed and deployed a scalable e-learning platform with 10,000+ monthly active users and 1,000+ concurrent live sessions. Integrated real-time chat, video streaming, and live class scheduling features.</p>
      <p><strong>Technologies Used:</strong> Angular 12+, AWS (Lambda, CloudFront, S3), WebSockets, PostgreSQL, Node.js</p>
      <br></br>
      <p>Enabled subscription-based payments using Stripe API and implemented user analytics dashboards for instructors. Achieved 99.9% system uptime and improved session load time by 35% through frontend optimization.</p>
      {/* <a href="https://github.com/ritwik15/kapilguru" target="_blank">View on GitHub</a>  */}
    </div>

    {/* <!-- Jharkhand Police Project --> */}
    <div className="project-card">
      <h3>Jharkhand Police – Fleet Management Portal</h3>
      <p>Designed and deployed a state-wide fleet and asset management system used by 100+ police officers across 12 districts. Integrated real-time vehicle tracking with GIS-based visualizations for route optimization and dispatch planning.</p>
      <p><strong>Technologies Used:</strong> AngularJS, Python, Odoo ERP, PostgreSQL, REST APIs, GIS Mapping</p>
      <br></br>
      <p>Reduced manual reporting time by 70% by digitizing legacy processes and automating MIS report generation. The system is fully integrated with GIS for better decision-making and efficient resource management.</p>
      {/* <a href="https://github.com/ritwik15/jharkhand-police-fleet" target="_blank">View on GitHub</a> */}
    </div>

  </div>
    </section>
  );
};

export default Projects;
