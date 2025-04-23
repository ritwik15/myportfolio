import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Finsta Project */}
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 space-y-4 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Finsta – Loan Management System</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Designed and developed a secure, cloud-native loan management system processing over 50,000+ financial transactions per day. Integrated Amazon S3 for secure document storage and AWS Lambda for automation of loan disbursements.
            </p>
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
              <strong>Technologies Used:</strong> Node.js, Angular, PostgreSQL, AWS Lambda, S3, API Gateway, RBAC, Audit Logs
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Implemented role-based access control (RBAC), JWT authentication, and audit trails to meet banking compliance and security standards. Reduced loan application processing time by 45% through efficient workflow automation and database indexing.
            </p>
            {/* <a href="https://github.com/ritwik15/finsta" target="_blank" className="text-blue-500 hover:underline">View on GitHub</a> */}
          </div>

          {/* KapilGuru Project */}
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 space-y-4 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">KapilGuru – E-Learning Platform</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Developed and deployed a scalable e-learning platform with 10,000+ monthly active users and 1,000+ concurrent live sessions. Integrated real-time chat, video streaming, and live class scheduling features.
            </p>
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
              <strong>Technologies Used:</strong> Angular 12+, AWS (Lambda, CloudFront, S3), WebSockets, PostgreSQL, Node.js
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Enabled subscription-based payments using Stripe API and implemented user analytics dashboards for instructors. Achieved 99.9% system uptime and improved session load time by 35% through frontend optimization.
            </p>
            {/* <a href="https://github.com/ritwik15/kapilguru" target="_blank" className="text-blue-500 hover:underline">View on GitHub</a> */}
          </div>

          {/* Jharkhand Police Project */}
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 space-y-4 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Jharkhand Police – Fleet Management Portal</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Designed and deployed a state-wide fleet and asset management system used by 100+ police officers across 12 districts. Integrated real-time vehicle tracking with GIS-based visualizations for route optimization and dispatch planning.
            </p>
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
              <strong>Technologies Used:</strong> AngularJS, Python, Odoo ERP, PostgreSQL, REST APIs, GIS Mapping
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Reduced manual reporting time by 70% by digitizing legacy processes and automating MIS report generation. The system is fully integrated with GIS for better decision-making and efficient resource management.
            </p>
            {/* <a href="https://github.com/ritwik15/jharkhand-police-fleet" target="_blank" className="text-blue-500 hover:underline">View on GitHub</a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
