import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Make sure you have react-router-dom installed
import Navbar from '../components/NavBar';

export default function ClubApp() {
  // Common fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [school, setSchool] = useState('');
  const [ess1, setEss1] = useState('');
  const [ess2, setEss2] = useState('');
  const [ess3, setEss3] = useState('');

  // Committee-specific fields
  const [ai1, setAi1] = useState('');
  const [ai2, setAi2] = useState('');
  const [robo1, setRobo1] = useState('');
  const [robo2, setRobo2] = useState('');
  const [market1, setMarket1] = useState('');
  const [market2, setMarket2] = useState('');
  const [market3, setMarket3] = useState('');
  const [hr1, setHr1] = useState('');
  const [hr2, setHr2] = useState('');
  const [hr3, setHr3] = useState('');
  const [ps1, setPs1] = useState('');
  const [ps2, setPs2] = useState('');
  const [ps3, setPs3] = useState('');
  const [ps4, setPs4] = useState('');

  // Committee selection
  const [selectedField, setSelectedField] = useState('');

  // Error and Success states
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');

  // React Router's navigate hook
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess('');

    // 1. Validate the common fields first
    if (!name || !email || !phone || !school || !ess1 || !ess2) {
      return setError('Please fill in all required fields (Name, Email, Phone, School, and Essays).');
    }

    // 2. Validate that a committee is chosen
    if (!selectedField) {
      return setError('Please choose a committee before submitting.');
    }

    // 3. Validate committee-specific fields
    switch (selectedField) {
      case 'AI & Data Science':
        if (!ai1 || !ai2) {
          return setError('Please fill in all AI & Data Science essay fields.');
        }
        break;
      case 'Robotics':
        if (!robo1 || !robo2) {
          return setError('Please fill in all Robotics essay fields.');
        }
        break;
      case 'Marketing':
        if (!market1 || !market2 || !market3) {
          return setError('Please fill in all Marketing essay fields.');
        }
        break;
      case 'HR':
        if (!hr1 || !hr2 || !hr3) {
          return setError('Please fill in all HR essay fields.');
        }
        break;
      case 'Problem Setters':
        if (!ps1 || !ps2 || !ps3 || !ps4) {
          return setError('Please fill in all Problem Setters essay fields.');
        }
        break;
      default:
        return setError('Please choose a valid committee.');
    }

    try {
      const res = await fetch('https://csclubbackend-production.up.railway.app/api/addApp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          school,
          ess1,
          ess2,
          ess3,
          selectedField,
          ai1,
          ai2,
          robo1,
          robo2,
          market1,
          market2,
          market3,
          hr1,
          hr2,
          hr3,
          ps1,
          ps2,
          ps3,
          ps4
        })
      });

      const data = await res.json();
      if (!res.ok) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return setError(data.error || 'Server returned an error.');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Success handling
      setSuccess('Application submitted successfully! Redirecting to the home page...');
      // Clear all fields
      setAi1('');
      setAi2('');
      setEmail('');
      setError('');
      setEss1('');
      setEss2('');
      setEss3('');
      setHr1('');
      setHr2('');
      setHr3('');
      setMarket1('');
      setMarket2('');
      setMarket3('');
      setName('');
      setPhone('');
      setPs1('');
      setPs2('');
      setPs3('');
      setPs4('');
      setRobo1('');
      setRobo2('');
      setSchool('');

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/');
      }, 4000);

    } catch (err) {
      setError(err.message || 'Something went wrong, please try again.');
    }
  };

  return (
    <div className='text-white bg-gradient-to-b from-black to-sky-900 min-h-screen'>
      <Navbar />
      <div className="flex flex-col items-center p-6">
        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-4xl">
          <h2 className='text-2xl font-bold mb-4 text-center'>Club Application Form</h2>

          {/* Display error if present */}
          {error && (
            <div className="mb-4 text-center text-red-600 border border-red-600 p-2">
              {error}
            </div>
          )}

          {/* Display success if present */}
          {success && (
            <div className="mb-4 text-center text-green-700 border border-green-700 p-2">
              {success}
            </div>
          )}

          <form className='space-y-4' onSubmit={handleSubmit}>
            {/* Common fields */}
            <label className='block font-semibold'>Full Name</label>
            <input
              type="text"
              className='w-full p-2 border rounded'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label className='block font-semibold'>Email</label>
            <input
              type="email"
              className='w-full p-2 border rounded'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className='block font-semibold'>Phone Number</label>
            <input
              type="tel"
              className='w-full p-2 border rounded'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <label className='block font-semibold'>School Name</label>
            <input
              type="text"
              className='w-full p-2 border rounded'
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />

            <label className='block font-semibold'>Why are you interested in the Computer Science field?</label>
            <textarea
              className='w-full p-2 border rounded'
              value={ess1}
              onChange={(e) => setEss1(e.target.value)}
            />

            <label className='block font-semibold'>
              How will you balance your time between Studying, School work, other Extracurriculars, and this Club?
            </label>
            <textarea
              className='w-full p-2 border rounded'
              value={ess2}
              onChange={(e) => setEss2(e.target.value)}
            />

            <label className='block font-semibold'>
              Do you have any experience in the field you're applying for? (If yes, tell us more)
            </label>
            <textarea
              className='w-full p-2 border rounded'
              value={ess3}
              onChange={(e) => setEss3(e.target.value)}
            />

            {/* Committee selection */}
            <label className='block font-semibold'>Choose Your Committee</label>
            <select
              className='w-full p-2 border rounded'
              value={selectedField}
              onChange={(e) => setSelectedField(e.target.value)}
            >
              <option value="">Select a Committee</option>
              <option value="AI & Data Science">AI & Data Science</option>
              <option value="Robotics">Robotics</option>
              <option value="Marketing">Marketing</option>
              <option value="HR">Human Resources</option>
              <option value="Problem Setters">Problem Setters</option>
            </select>

            {/* Conditionals for committee-specific fields */}
            {selectedField === 'AI & Data Science' && (
              <>
                <label className='block font-semibold'>What is the difference between AI and machine learning?</label>
                <textarea
                  className='w-full p-2 border rounded'
                  value={ai1}
                  onChange={(e) => setAi1(e.target.value)}
                />
                <label className='block font-semibold'>
                  How is reinforcement learning different from supervised learning?
                </label>
                <textarea
                  className='w-full p-2 border rounded'
                  value={ai2}
                  onChange={(e) => setAi2(e.target.value)}
                />
              </>
            )}

            {selectedField === 'Robotics' && (
              <>
                <label className='block font-semibold'>
                  What do you know about "Servo Motors"? Give examples of its use.
                </label>
                <textarea
                  className='w-full p-2 border rounded'
                  value={robo1}
                  onChange={(e) => setRobo1(e.target.value)}
                />
                <label className='block font-semibold'>
                  What is the difference between a microcontroller and a microprocessor?
                </label>
                <textarea
                  className='w-full p-2 border rounded'
                  value={robo2}
                  onChange={(e) => setRobo2(e.target.value)}
                />
              </>
            )}

            {selectedField === 'Marketing' && (
              <>
                <label className='block font-semibold'>
                  What do you know about marketing? Mention your experience.
                </label>
                <textarea
                  className='w-full p-2 border rounded'
                  value={market1}
                  onChange={(e) => setMarket1(e.target.value)}
                />
                <label className='block font-semibold'>
                  Mention a novel marketing strategy you aim to implement in the team's work.
                </label>
                <textarea
                  className='w-full p-2 border rounded'
                  value={market2}
                  onChange={(e) => setMarket2(e.target.value)}
                />
                <label className='block font-semibold'>How can you measure success in this role?</label>
                <textarea
                  className='w-full p-2 border rounded'
                  value={market3}
                  onChange={(e) => setMarket3(e.target.value)}
                />
              </>
            )}

            {selectedField === 'HR' && (
              <>
                <label className='block font-semibold'>
                  What is your background and understanding of a human resources role?
                </label>
                <textarea
                  className='w-full p-2 border rounded'
                  value={hr1}
                  onChange={(e) => setHr1(e.target.value)}
                />
                <label className='block font-semibold'>
                  Provide an example where you took innovative action for the team's benefit.
                </label>
                <textarea
                  className='w-full p-2 border rounded'
                  value={hr2}
                  onChange={(e) => setHr2(e.target.value)}
                />
                <label className='block font-semibold'>How would you handle a disagreement with a team member?</label>
                <textarea
                  className='w-full p-2 border rounded'
                  value={hr3}
                  onChange={(e) => setHr3(e.target.value)}
                />
              </>
            )}

            {selectedField === 'Problem Setters' && (
              <>
                <label className='block font-semibold'>Your CodeForces Handle:</label>
                <textarea
                  className='w-full p-2 border rounded'
                  value={ps1}
                  onChange={(e) => setPs1(e.target.value)}
                />
                <label className='block font-semibold'>
                  Leave a link (URL) for a problem that you have created before:
                </label>
                <textarea
                  className='w-full p-2 border rounded'
                  value={ps2}
                  onChange={(e) => setPs2(e.target.value)}
                />
                <label className='block font-semibold'>How do you ensure fairness in CP problem statements?</label>
                <textarea
                  className='w-full p-2 border rounded'
                  value={ps3}
                  onChange={(e) => setPs3(e.target.value)}
                />
                <label className='block font-semibold'>
                  On average, how long does it take you to set a medium-complexity CP problem?
                </label>
                <textarea
                  className='w-full p-2 border rounded'
                  value={ps4}
                  onChange={(e) => setPs4(e.target.value)}
                />
              </>
            )}

            <button
              type="submit"
              className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
