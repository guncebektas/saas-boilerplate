import React, { useState } from 'react';

const ContactRequest = () => {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [requests, setRequests] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = { subject, email, phoneNumber, address };
    setRequests([...requests, newRequest]);
    setSubject('');
    setEmail('');
    setPhoneNumber('');
    setAddress('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Request</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
          <select
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">Select a subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
          </select>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">Submit</button>
      </form>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Submitted Requests</h2>
        <ul>
          {requests.map((request, index) => (
            <li key={index} className="mb-2">
              <strong>Subject:</strong> {request.subject}, <strong>Email:</strong> {request.email}, <strong>Phone Number:</strong> {request.phoneNumber}, <strong>Address:</strong> {request.address}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactRequest;