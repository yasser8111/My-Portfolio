"use client";

/**
 * Route-level error boundary.
 * Catches rendering errors and shows a recoverable fallback.
 */
export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="w-14 h-14 bg-red-50 flex items-center justify-center mx-auto mb-8">
          <span className="material-symbols-sharp text-red-500 text-3xl">error</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
          Something went wrong
        </h1>
        <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8">
          {error?.message || "An unexpected error occurred. Please try again."}
        </p>
        <button
          onClick={reset}
          className="bg-blue-600 text-white px-6 py-3 text-sm font-bold tracking-wider uppercase hover:bg-blue-700 transition-colors cursor-pointer"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
