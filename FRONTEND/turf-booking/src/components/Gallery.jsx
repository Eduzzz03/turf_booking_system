import React, { useState, useEffect } from 'react';
import './Gallery.css';
import axios from 'axios';

function Gallery({ isAdmin }) {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fetch gallery images from the backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/gallery/images');
        if (response.data.success) {
          setImages(response.data.images);
        }
      } catch (error) {
        console.error('Error fetching gallery images:', error);
      }
    };

    fetchImages();
  }, []);

  const handleAddImage = async () => {
    if (title && file) {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('image', file);

      try {
        const response = await axios.post('http://localhost:5000/gallery/add', formData);
        if (response.data.success) {
          setImages([...images, response.data.image]); // Add the new image to the state
          setTitle(''); // Clear the title input
          setFile(null); // Clear the file input
        }
      } catch (error) {
        console.error('Error adding image:', error);
      }
    }
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-container">
      <h2>Gallery</h2>

      {isAdmin ? (
        <div className="gallery-inputs">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button onClick={handleAddImage}>Add Image</button>
        </div>
      ) : (
        <div className="slider-container">
          {images.length > 0 ? (
            <>
              <button className="prev-button" onClick={handlePrevImage}>
                &#8249;
              </button>
              <div className="slider-image">
                <img
                  src={images[currentImageIndex].filePath}
                  alt={images[currentImageIndex].title}
                />
                <p>{images[currentImageIndex].title}</p>
              </div>
              <button className="next-button" onClick={handleNextImage}>
                &#8250;
              </button>
            </>
          ) : (
            <p>No images to display.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Gallery;
