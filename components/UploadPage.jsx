import React, { useRef } from "react";

function UploadPage({ onFileUpload }) {
  const fileInputRef = useRef();

  return (
    <div className="max-w-xl mx-auto mt-20 p-6 bg-white rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Upload a Song</h1>
      <input
        type="file"
        accept="audio/*"
        ref={fileInputRef}
        className="mb-4 w-full"
      />
      <button
        onClick={() => {
          const file = fileInputRef.current.files[0];
          if (file) onFileUpload(file);
        }}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition"
      >
        Remove Vocals
      </button>
    </div>
  );
}

export default UploadPage;
