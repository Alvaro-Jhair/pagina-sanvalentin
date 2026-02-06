import React from 'react';

export default function PhotoGallery() {
    // Placeholder images - User can replace these URLs or file paths
    const photos = [
        { id: 1, src: "src/components/foto1.JPG", caption: "Nuestro primer viaje" },
        { id: 2, src: "src/components/foto2.JPG", caption: "Primer matri juntos" },
        { id: 3, src: "src/components/foto3.JPG", caption: "Simplemente tú y yo" },
        { id: 4, src: "src/components/foto4.JPG", caption: "Te amo ❤️" },
    ];

    return (
        <div className="gallery-container">
            <h2>Nuestros Recuerdos 📸</h2>

            {/* Featured Photo */}
            <div className="featured-photo">
                <img
                    src="src/components/foto5.JPG"
                    alt="Foto Principal"
                />
                <p className="featured-caption">El día que todo comenzó... ✨</p>
            </div>

            <div className="gallery-grid">
                {photos.map((photo) => (
                    <div key={photo.id} className="polaroid">
                        <img src={photo.src} alt={photo.caption} />
                        <p>{photo.caption}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
