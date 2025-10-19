import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('subscribers')
        .insert([{ email: email }]);
      if (error) {
        console.error(error);
      } else {
        console.log(data);
        router.push('/thank-you');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900">SaaS Landing Page</h1>
        <p className="text-lg text-gray-600">
          Subscribe to our newsletter to stay updated with the latest news and
          updates.
        </p>
        <form onSubmit={handleSubscribe} className="mt-4">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 p-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {loading ? 'Loading...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </div>
  );
}