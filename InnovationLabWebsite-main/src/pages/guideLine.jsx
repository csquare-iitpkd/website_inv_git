import React from 'react';

// Assuming Header and Footer are in a components folder like this:
import Header from '../components/header';
import Footer from '../components/footer';


// Using inline SVGs as components for easy reuse and styling.

const GlobeIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" />
  </svg>
);

const LinkIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const PencilAltIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const WrenchScrewdriverIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.83-5.83M11.42 15.17l2.472-2.472a3.75 3.75 0 0 0-5.303-5.303L6 11.42m5.83-5.83.12.12a3.75 3.75 0 0 0 5.303 5.303l.12.12M11.42 15.17.16 21.42a2.25 2.25 0 0 1-3.182-3.182l5.83-5.83m5.83 5.83-2.472-2.472a3.75 3.75 0 0 0 5.303-5.303l2.472 2.472M3 11.42l5.83-5.83a2.25 2.25 0 0 1 3.182 3.182L6 14.84m5.83-5.83 2.472 2.472a3.75 3.75 0 0 0-5.303 5.303L6 11.42" />
    </svg>
);

const DocumentTextIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const CheckBadgeIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);


// --- Reusable Card Component ---
const InstructionCard = ({ icon, title, children }) => (
  <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 md:p-8 transform hover:scale-[1.02] hover:border-amber-400 transition-all duration-300 shadow-lg">
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-slate-800 p-3 rounded-full">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-amber-400">{title}</h3>
    </div>
    <div className="text-slate-300 space-y-3">
      {children}
    </div>
  </div>
);

// --- Main Page Component ---
export default function App() {
  return (
    // This main div now controls the overall page background color
    <div className="flex flex-col min-h-screen bg-fixed bg-cover bg-center " style={{backgroundImage:`url("./assets/bc.jpg")`}}  >
      <Header />
      
      {/* This wrapper is now relative, to act as a container for the absolute positioned background grid */}
      <div className="relative">
        {/* The background grid. It's inside the relative parent and has no solid background color itself. */}
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'transparent'
          }}
        ></div>
        
        {/* The main content is also relative to sit ON TOP of the background grid. 
            The container class here centers the content, but lets the background fill the screen. */}
        <main className="relative container mx-auto px-4 py-12 md:py-20">
          <header className="text-center mb-12 md:mb-16">
            <div className="flex justify-center items-center gap-4 mb-4">
              <GlobeIcon className="w-12 h-12 text-amber-500"/>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                Web Portal Instructions for Students
            </h1>

            </div>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
              Follow these steps to access, register, and use the web portal for equipment booking and project management.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Column 1 */}
            <div className="space-y-8">
              <InstructionCard title="Portal Access" icon={<LinkIcon className="w-6 h-6 text-amber-500" />}>
                <p className="font-semibold text-lg">Website:</p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>Accessible only via institute <span className="font-semibold text-amber-400">WiFi/LAN</span>.</li>
                  <li>Best viewed on <span className="font-semibold text-amber-400">laptop/desktop</span>.</li>
                </ul>
              </InstructionCard>

              <InstructionCard title="User Registration" icon={<PencilAltIcon className="w-6 h-6 text-amber-500" />}>
                <ol className="list-decimal list-inside space-y-2 pl-2">
                  <li>Enter your <span className="font-semibold">roll number</span> → click <span className="font-semibold">Verify</span> → verify email.</li>
                  <li>Receive OTP on registered email.</li>
                  <li>Create <span className="font-semibold">username</span>, <span className="font-semibold">password</span> → enter OTP → <span className="font-semibold">Submit</span>.</li>
                </ol>
              </InstructionCard>

              <InstructionCard title="Approval Process" icon={<CheckBadgeIcon className="w-6 h-6 text-amber-500" />}>
                <ol className="list-decimal list-inside space-y-3 pl-2">
                      <li>You and your guide will get an <span className="font-semibold">email confirmation</span> after submission.</li>
                      <li>Guide approval is required via email (link in guide email).</li>
                      <li>CSquare reviews the request after guide approval.</li>
                      <li>You'll be notified by email once approved/rejected by CSquare Manager/Technician.</li>
                      <li>📌 Provide all details for faster processing.</li>
                  </ol>
                  <div className="mt-4 p-4 bg-amber-900/50 border border-amber-500/50 rounded-lg text-amber-200">
                      <span className="font-bold">Important:</span> Visit the lab <span className="underline">after</span> receiving approval/rejection email to initiate or modify the request.
                  </div>
              </InstructionCard>
            </div>

            {/* Column 2 */}
            <div className="space-y-8">
              <InstructionCard title="Equipment Booking" icon={<WrenchScrewdriverIcon className="w-6 h-6 text-amber-500" />}>
                <ol className="list-decimal list-inside space-y-3 pl-2">
                    <li>Login with your credentials.</li>
                    <li>Click <span className="font-semibold">New Booking</span> (top right).</li>
                    <li>Select equipment category.</li>
                    <li>Choose <span className="font-semibold">booking date and time</span> → Submit.</li>
                    <li>Select available equipment.</li>
                    <li>Fill in details: category, guide, project code, project name, work details, file link, fabrication details, co-working roll no.</li>
                    <li>Submit the form.</li>
                </ol>
              </InstructionCard>

              <InstructionCard title="Project Code Format" icon={<DocumentTextIcon className="w-6 h-6 text-amber-500" />}>
                <ul className="space-y-2">
                  {[
                    { type: 'BTP', code: 'BTP_RollNo' },
                    { type: 'MTP', code: 'MTP_RollNo' },
                    { type: 'MSc', code: 'MSc_RollNo' },
                    { type: 'OELP', code: 'OELP_RollNo' },
                    { type: 'MS/PhD', code: 'Research_RollNo' },
                    { type: 'Course Project', code: 'CourseCode_RollNo' },
                    { type: 'Hobby Project', code: 'Hobby_RollNo' },
                    { type: 'Club Project', code: 'ClubName_RollNo' },
                    { type: 'Lab Project', code: 'LabName_RollNo' },
                    { type: 'Funded Projects', code: 'ICSR Project Code' },
                  ].map(item => (
                    <li key={item.type} className="flex items-center justify-between">
                      <span>{item.type}</span>
                      <span className="text-right font-mono bg-slate-800 px-3 py-1 rounded-md text-amber-300">{item.code}</span>
                    </li>
                  ))}
                </ul>
              </InstructionCard>
            </div>
          </div>
          
          <footer className="text-center mt-16 text-slate-500">
              <p>Student Portal Instructions</p>
          </footer>
        </main>
      </div>
      <Footer/>
    </div>
  );
}

