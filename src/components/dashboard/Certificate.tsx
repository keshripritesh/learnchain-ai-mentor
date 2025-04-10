// components/Certificate.tsx
import { useState } from 'react';

const Certificate = () => {
    
  const { studentName = 'Alex Johnson', completionDate = 'June 15, 2025', 
    courseName = 'Advanced Web Development' } = location.state || {};




    // const [studentName, setStudentName] = useState('Alex Johnson');
    // const [completionDate, setCompletionDate] = useState('June 15, 2025');
    // const [certificateId, setCertificateId] = useState('LC-ADVWEB-2025-0421');
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="w-full max-w-4xl border-8 border-purple-700 bg-white shadow-2xl overflow-hidden">
          {/* Certificate Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-center">
            <h1 className="text-4xl font-bold text-white mb-2">LearnChain</h1>
            <p className="text-purple-200 text-lg">Empowering the Future of Web Development</p>
          </div>
  
          {/* Certificate Body */}
          <div className="p-8 text-center">
            <div className="mb-6">
              <p className="text-gray-500 mb-2">This is to certify that</p>
              <h2 className="text-3xl font-bold text-purple-800 mb-6 border-b-2 border-purple-200 pb-4 inline-block px-8">
                {studentName}
              </h2>
              <p className="text-gray-600 mb-8">
                has successfully completed the <span className="font-semibold text-purple-700">Advanced Web Development</span> course
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-700 mb-2">Skills Acquired</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>React & Next.js</li>
                  <li>TypeScript Mastery</li>
                  <li>Advanced CSS/SASS</li>
                  <li>GraphQL & REST APIs</li>
                  <li>Web Performance</li>
                </ul>
              </div>
  
              <div className="flex items-center justify-center">
                <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center border-4 border-purple-300">
                  <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
  
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-700 mb-2">Course Details</h3>
                <p className="text-sm text-gray-600">
                  <span className="block">Duration: 12 Weeks</span>
                  <span className="block">Projects: 5</span>
                  <span className="block">Certified: {completionDate}</span>
                </p>
              </div>
            </div>
  
            <div className="flex flex-col sm:flex-row justify-between items-center mt-8 border-t pt-6">
              <div className="mb-4 sm:mb-0">
                <div className="h-16 w-48 bg-purple-100 flex items-center justify-center rounded">
                  <p className="text-xs text-purple-700 font-mono">Digital Signature</p>
                </div>
                <p className="text-sm text-gray-500 mt-2">Sarah Chen</p>
                <p className="text-xs text-gray-400">Lead Instructor</p>
              </div>
  
              <div className="text-center">
                <p className="text-sm text-gray-500">Certificate ID</p>
                <p className="font-mono text-purple-700">{certificateId}</p>
                <p className="text-xs text-gray-400 mt-2">
                  Verify at: <span className="text-purple-600">learnchain.io/verify</span>
                </p>
              </div>
  
              <div className="mt-4 sm:mt-0">
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <p className="text-xs text-gray-400 mt-2">LearnChain Seal</p>
              </div>
            </div>
          </div>
  
          {/* Certificate Footer */}
          <div className="bg-gray-50 p-4 text-center border-t">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} LearnChain. All rights reserved. This certificate verifies successful completion of the course.
            </p>
          </div>
        </div>
      </div>
    );
  };
  

export default Certificate;