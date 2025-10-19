import { useRouter } from 'next/navigation';

export default function ThankYou() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900">Thank you for subscribing!</h1>
        <p className="text-lg text-gray-600">
          You will receive updates and news from us.
        </p>
        <button
          onClick={() => router.push('/')}
          className="w-full mt-4 p-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Back to home
        </button>
      </div>
    </div>
  );
}