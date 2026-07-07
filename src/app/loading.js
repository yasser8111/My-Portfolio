/**
 * Route-level loading state shown during page transitions.
 * Mirrors the existing Preloader aesthetic — minimal square loader.
 */
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="square-loader" />
    </div>
  );
}
