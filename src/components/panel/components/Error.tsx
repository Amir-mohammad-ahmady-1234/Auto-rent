import { HiExclamationCircle } from 'react-icons/hi';

interface ErrorProps {
  message: string;
}

export function Error({ message }: ErrorProps) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 p-6 text-center">
      <HiExclamationCircle className="h-10 w-10 text-red-500" />
      <p className="text-sm font-medium text-red-700">{message}</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-2 rounded-md bg-red-600 px-4 py-2 text-sm text-white transition hover:bg-red-700"
      >
        تلاش دوباره
      </button>
    </div>
  );
}
