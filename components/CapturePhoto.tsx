// CapturePhoto.tsx
import React, { useRef, useState } from 'react';

interface Props {
  onCapture?: (dataUrl: string) => void;  // Callback function to get the captured photo
}

const CapturePhoto: React.FC<Props> = ({ onCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isStreaming, setIsStreaming] = useState(false);

  // Start the video stream
  const startStream = async () => {
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

  // Capture the photo
  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current && isStreaming) {
      const context = canvasRef.current.getContext('2d');
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context?.drawImage(videoRef.current, 0, 0);

      const dataUrl = canvasRef.current.toDataURL('image/png');

      if (onCapture) {
        onCapture(dataUrl);
      }
    }
  };

  return (
    <div>
      <video ref={videoRef} width="640" height="480"></video>
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      <div>
        {!isStreaming && <button onClick={startStream}>Start Camera</button>}
        {isStreaming && <button onClick={capturePhoto}>Capture Photo</button>}
      </div>
    </div>
  );
};

export default CapturePhoto;
