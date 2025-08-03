import React from "react";

function ProcessingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <div className="loader mb-4 border-4 border-blue-500 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
      <p className="text-xl">Processing your track…</p>
    </div>
  );
}

export default ProcessingPage;
