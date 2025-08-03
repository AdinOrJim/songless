// App.jsx
import React, { useState } from "react";
import UploadPage from "./components/UploadPage";
import ProcessingPage from "./components/ProcessingPage";
import ResultPage from "./components/ResultPage";

function App() {
  const [step, setStep] = useState("upload");
  const [audioFile, setAudioFile] = useState(null);
  const [processedFileUrl, setProcessedFileUrl] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {step === "upload" && (
        <UploadPage
          onFileUpload={(file) => {
            setAudioFile(file);
            setStep("processing");
            // Simulate processing delay and result
            setTimeout(() => {
              setProcessedFileUrl(URL.createObjectURL(file)); // Simulate result with original file
              setStep("result");
            }, 3000);
          }}
        />
      )}
      {step === "processing" && <ProcessingPage />}
      {step === "result" && (
        <ResultPage
          fileUrl={processedFileUrl}
          onRestart={() => {
            setAudioFile(null);
            setProcessedFileUrl(null);
            setStep("upload");
          }}
        />
      )}
    </div>
  );
}

export default App;
