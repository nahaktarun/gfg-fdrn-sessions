// What is Lazy loading?
// we're trying to load certain things (Assets)-> images, files,... higher size
// load it by certain delay.
// it'll impacting performance of the website. we load them based on the request.
// website loading time will increase.
// demand will be received by the user.
// interaction -> scrolling, click ....etc.
// e.g. user feed.
import { useState } from "react";
import { Dog } from "lucide-react";
const LazyLoadingGallery = () => {
  const [images, setImages] = useState([
    { id: 1, url: null, loaded: false },
    { id: 2, url: null, loaded: false },
    { id: 3, url: null, loaded: false },
    { id: 4, url: null, loaded: false },
    { id: 5, url: null, loaded: false },
    { id: 6, url: null, loaded: false },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDogsData = async () => {
    try {
      const resp = await fetch("https://dog.ceo/api/breeds/image/random");
      const dogData = await resp.json();
      return dogData.message;
    } catch (error) {
      console.log(error);
      setError("Failed to fetch the data from the API");
    }
  };

  const loadOnDemand = async (id) => {
    setLoading(true);

    try {
      const imageUrl = await fetchDogsData();
      if (imageUrl) {
        setImages((prevImage) =>
          prevImage.map((image) =>
            image.id === id ? { ...image, url: imageUrl, loaded: true } : image
          )
        );
      }
    } catch (error) {
      setError("Failed to load the image");
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Dogs Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="relative rounded-lg shadow-md">
              {!image.loaded ? (
                <div
                  onClick={() => loadOnDemand(image.id)}
                  className="bg-gray-200 h-48 flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
                >
                  <Dog className="w-12 h-12 text-gray-500" />
                  <p className="mt-2 text-gray-600">Load Dog image</p>
                </div>
              ) : (
                <img
                  src={image.url}
                  alt={`Random Dog ${image.id}`}
                  className="w-full h-48 object-cover transition-opacity duration-300"
                  loading="lazy" // using this we're able to load image in a delay by making request to fetch the image.
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function Lazy_Loading_2() {
  return <LazyLoadingGallery />;
}

export default Lazy_Loading_2;
