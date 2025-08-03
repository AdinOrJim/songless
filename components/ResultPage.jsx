import React from "react";

function ResultPage({ fileUrl, onRestart }) {
  return (
    <div className="max-w-xl mx-auto mt-20 p-6 bg-white rounded-2xl shadow text-center">
      <h2 className="text-2xl font-bold mb-4">Your Instrumental Track</h2>
      <audio controls src={fileUrl} className="w-full mb-4" />
      <div className="flex justify-center gap-4">
        <a
          href={fileUrl}
          download="instrumental.mp3"
          className="bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700 transition"
        >
          Download
        </a>
        <button
          onClick={onRestart}
          className="bg-gray-500 text-white py-2 px-4 rounded-xl hover:bg-gray-600 transition"
        >
          Start Over
        </button>
      </div>
    </div>
  );
}

export default ResultPage;
