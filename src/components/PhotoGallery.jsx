import foto1 from './foto1.jpg'; // Files were created as .jpg in step 416 git status? No, verify files exist.
import foto2 from './foto2.jpg';
import foto3 from './foto3.jpg';
import foto4 from './foto4.jpg';
import foto5 from './foto5.jpg';

export default function PhotoGallery() {
    // Placeholder images - User can replace these URLs or file paths
    const photos = [
        { id: 1, src: foto1, caption: "Nuestro primer viaje" },
        { id: 2, src: foto2, caption: "Primer matri juntos" },
        { id: 3, src: foto3, caption: "Simplemente tú y yo" },
        { id: 4, src: foto4, caption: "Te amo ❤️" },
    ];

    return (
        <div className="gallery-container">
            <h2>Nuestros Recuerdos 📸</h2>

            {/* Featured Photo */}
            <div className="featured-photo">
                <img
                    src={foto5}
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
