import React, { useState } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 lg:flex-row lg:gap-0 space-x-2 mt-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Имейл"
        className="px-4 py-2 rounded-none focus:outline-none text-gray-800 border-none"
        required
      />
      <button
        type="submit"
        className="px-6 py-2 rounded-none bg-primary text-white hover:primary focus:outline-none"
      >
        Абонирай се
      </button>
    </form>
  );
};

export default SubscribeForm;
