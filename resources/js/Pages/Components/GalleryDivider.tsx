export default function GalleryDivider() {
  const images = [
    "images/groomed-animals/hond-1.jpg",
    "images/groomed-animals/hond-5.jpg",
    "images/groomed-animals/hond-2.jpg",
    "images/groomed-animals/kat-2.jpg",
    "images/groomed-animals/hond-3.jpg",
    "images/groomed-animals/kat-1.jpg",
    "images/groomed-animals/hond-6.jpg",
    "images/groomed-animals/hond-7.jpg",
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        {images.map((src, index) => (
          <div key={index} className="h-[150px]">
            <img
              src={src}
              alt={`Getrimde hond ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
