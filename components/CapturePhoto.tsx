import React, { useRef, useState } from 'react';

interface Props {
  onCapture?: (dataUrl: string) => void;  // Callback function to get the captured photo
}

const CapturePhoto: React.FC<Props> = ({ onCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isStreaming, setIsStreaming] = useState(false);

  // Start the video stream
  const startStream = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            if (videoRef.current) {
              videoRef.current.play();
              setIsStreaming(true);
            }
          };
        }
      } catch (err) {
        console.error('Error accessing the camera', err);
      }
    }
  };

  // Stop the video stream
  const stopStream = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      setIsStreaming(false);
    }
  };

  // Capture the photo and stop the video stream
  const capturePhoto = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (videoRef.current && canvasRef.current && isStreaming) {
      const context = canvasRef.current.getContext('2d');
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context?.drawImage(videoRef.current, 0, 0);

      const dataUrl = canvasRef.current.toDataURL('image/png');

      if (onCapture) {
        onCapture(dataUrl);
      }

      stopStream();  // Stop the video stream after capturing the photo
    }
  };

  // Optional: Handle form submit event if it's inside a form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <video ref={videoRef} width="640" height="480"></video>
        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        <div>
          {!isStreaming && <button onClick={startStream}>Start Camera</button>}
          {isStreaming && <button onClick={capturePhoto}>Capture Photo</button>}
        </div>
      </form>
    </div>
  );
};

export default CapturePhoto;
