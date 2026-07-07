"use client";

const Preloader = ({ isLoading, onComplete }) => {
  return (
    <div 
      className={`preloader-container ${!isLoading ? 'preloader-hidden' : ''} cursor-pointer select-none`}
      onClick={() => onComplete && onComplete()}
    >
      <div className="square-loader"></div>
      
      {/* Skip indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.3em] opacity-30 animate-pulse hidden md:block">
        Click to skip
      </div>
    </div>
  );
};

export default Preloader;
