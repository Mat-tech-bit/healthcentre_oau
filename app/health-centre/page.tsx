"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface AppointmentData {
  studentId: string;
  department: string;
  reason: string;
  date: string;
}

export default function HealthCentre() {
  const [formData, setFormData] = useState<AppointmentData>({
    studentId: '',
    department: 'General Consultation',
    reason: '',
    date: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Booking Request:", formData);
    alert("Appointment request submitted! You will receive a confirmation via your student email.");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Emergency Alert */}
      <div className="bg-red-50 border-l-4 border-red-600 p-4 mb-10 flex justify-between items-center">
        <div>
          <h3 className="text-red-800 font-bold">Emergency Line (24/7)</h3>
          <p className="text-red-700 text-sm">Call 080X-XXX-XXXX for immediate campus ambulance response.</p>
        </div>
        <button className="bg-red-600 text-white px-6 py-2 rounded-full font-bold animate-pulse">Call Now</button>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left Side: Services */}
        <section>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Medical Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['General Medicine', 'Dental Clinic', 'Pharmacy', 'Laboratory', 'Optometry', 'Immunization'].map((service) => (
              <div key={service} className="p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md transition">
                <p className="font-semibold text-slate-700">{service}</p>
                <p className="text-xs text-slate-500 mt-1">Available 8 AM - 4 PM</p>
              </div>
            ))}
          </div>
        </section>

        {/* Right Side: Appointment Form */}
        <section className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
          <h3 className="text-2xl font-bold mb-6 text-slate-800">Book an Appointment</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Registration Number</label>
              <input 
                type="text" 
                name="studentId"
                required
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="CVE/20XX/XXX" 
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Select Department</label>
              <select 
                name="department"
                className="w-full p-3 border border-slate-300 rounded-lg outline-none"
                onChange={handleChange}
              >
                <option>General Consultation</option>
                <option>Dental</option>
                <option>Laboratory Test</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Date</label>
              <input 
                type="date" 
                name="date"
                required
                className="w-full p-3 border border-slate-300 rounded-lg outline-none" 
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Reason for Visit</label>
              <textarea 
                name="reason"
                rows={3} 
                className="w-full p-3 border border-slate-300 rounded-lg outline-none"
                onChange={handleChange}
              ></textarea>
            </div>
            <button className="w-full bg-slate-900 text-white py-4 rounded-lg font-bold hover:bg-black transition">
              Confirm Appointment
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
