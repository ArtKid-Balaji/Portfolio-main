import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ArtGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Art pieces with different mediums and styles
  const artworks = [
    // Pencil Portraits
    { id: 1, title: "Portrait Study I", medium: "Pen", image: "get.webp" },
    { id: 2, title: "Character Portrait", medium: "Pencil", image: "pencil2.jpg" },
    { id: 3, title: "Expression Study", medium: "charcoal & graphite", image: "pencil3.jpg" },
    { id: 4, title: "Portrait Series II", medium: "Colour Pencil", image: "pencil4.jpg" },
  
    // Acrylic Paintings
    { id: 5, title: "Abstract Landscape", medium: "Pencil", image: "pencil5.jpg" },
    { id: 6, title: "Color Symphony", medium: "Pencil", image: "pencil6.jpg" },
    { id: 7, title: "Urban Dreams", medium: "Pencil", image: "pencil7.jpg" },
    { id: 8, title: "Nature's Palette", medium: "Acrylic", image: "https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&w=500" },
    
    // Watercolors
    { id: 9, title: "Flowing Waters", medium: "Watercolor", image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 10, title: "Floral Study", medium: "Watercolor", image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 11, title: "Atmospheric Mood", medium: "Watercolor", image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 12, title: "Transparent Beauty", medium: "Watercolor", image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=500" },
    
    // Mixed Media
    { id: 13, title: "Digital Art I", medium: "Digital", image: "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 14, title: "Mixed Media Study", medium: "Mixed Media", image: "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 15, title: "Contemporary Vision", medium: "Acrylic", image: "https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 16, title: "Sketch Collection", medium: "Pencil", image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500" },
    
    // Additional pieces
    { id: 17, title: "Color Theory", medium: "Watercolor", image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 18, title: "Portrait Study III", medium: "Pencil", image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 19, title: "Abstract Expression", medium: "Acrylic", image: "https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 20, title: "Final Study", medium: "Mixed Media", image: "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=500" }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? artworks.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === artworks.length - 1 ? 0 : selectedImage + 1);
    }
  };
  // 🔑 Keyboard navigation effect
 useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage === null) return;

    if (e.key === "ArrowRight") goToNext();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "Escape") closeLightbox();
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [selectedImage, goToNext, goToPrevious]);

  const getMediumColor = (medium: string) => {
    const colors = {
      "Pencil": "from-blue-600 to-purple-600",
      "Acrylic": "from-blue-600 to-purple-600",
      "Watercolor": "from-blue-600 to-purple-600",
      "Digital": "from-blue-600 to-purple-600",
      "Mixed Media": "from-blue-600 to-purple-600",
      "Colour Pencil": "from-blue-600 to-purple-600",
      "Pen": "from-blue-600 to-purple-600",
      "charcoal & graphite": "from-blue-600 to-purple-600"
    };
    return colors[medium as keyof typeof colors] || "from-gray-600 to-gray-800";
  };

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ART GALLERY
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A curated collection of my artistic journey, featuring pencil portraits, 
              acrylic paintings, w4atercolor studies, and digital art. Each piece tells 
              a unique story through color, form, and emotion.
            </p>
            <div className="mt-6">
              <a 
                href="https://instagram.com/arts.of_bala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium transition-colors duration-200"
              >
                Follow @arts.of_bala on Instagram
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Art Grid - 4x5 Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
            {artworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {artwork.title}
                    </h3>
                    <div className={`inline-block px-2 py-1 rounded-full bg-gradient-to-r ${getMediumColor(artwork.medium)} text-white text-xs font-medium`}>
                      {artwork.medium}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage !== null && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image Container */}
              <div className="max-w-4xl max-h-full flex flex-col items-center">
                <img
                  src={artworks[selectedImage].image}
                  alt={artworks[selectedImage].title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
                
                {/* Image Info */}
                <div className="mt-6 text-center">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {artworks[selectedImage].title}
                  </h3>
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${getMediumColor(artworks[selectedImage].medium)} text-white font-medium`}>
                    {artworks[selectedImage].medium}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* View More on Instagram */}
          <div className="text-center">
            <a
              href="https://instagram.com/arts.of_bala"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              View More Art on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtGallery;