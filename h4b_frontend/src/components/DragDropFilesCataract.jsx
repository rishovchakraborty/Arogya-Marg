import { useState, useRef } from "react";

const DragDropFilesCataract = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const fileList = Array.from(event.dataTransfer.files);
    setFiles(fileList);
  };
  
  // send files to the server // learn from my other video
  const handleUpload = async() => {
    console.log(files)
    const formData = new FormData();
    formData.append("Files", files);
    for (let i = 0; i < files.length; i++) {
      formData.append("Files", files[i]);
    }
    try {
      const response = await fetch('https://sehat-backend.onrender.com/api/upload_cataract', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Image uploaded successfully');
      } else {
        console.error('Failed to upload image');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (files) return (
    <div className="uploads">
        <ul>
            {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li> )}
        </ul>
        <div className="actions">
            <button onClick={() => setFiles(null)}>Cancel</button>
            <button onClick={handleUpload}>Upload</button>
        </div>
    </div>
  )

  return (
    <>
        <div 
            className="dropzone"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
          <h1>Drag and Drop Files to Upload</h1>
          <h1>Or</h1>
          <input
  type="file"
  multiple
  onChange={(event) => setFiles(Array.from(event.target.files))}
  accept="image/png, image/jpeg"
  ref={inputRef}
/>
          <button onClick={() => inputRef.current.click()}>Select Files</button>
        </div>
    </>
  );
};

export default DragDropFilesCataract;