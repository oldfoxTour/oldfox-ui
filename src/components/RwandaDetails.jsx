import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import kigali from "../IMAGE/kigali.jpg";
import { fetchPostsByDestination } from "../slices/postSlice";

function BookingForm({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-sky-500">Book Your Trip to Rwanda</h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50" placeholder="Your Email" />
          </div>
          <div>
            <label htmlFor="travelers" className="block text-sm font-medium text-gray-700">Number of Travelers</label>
            <input type="number" id="travelers" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50" placeholder="1" min="1" />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input type="date" id="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50" />
          </div>
          <div className="text-xl font-bold text-sky-500 mt-4">
            Price: $390
          </div>
          <div className="flex gap-4 mt-6">
            <button type="submit" className="flex-1 bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 transition duration-200">Book Now</button>
            <button onClick={onClose} className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function RelatedTours() {
  const [tours, setTours] = useState([
    { id: 1, name: "Jerusalem", location: "Israel", likes: 100, liked: false, comments: [] },
    { id: 2, name: "Cairo", location: "Egypt", likes: 50, liked: false, comments: [] }
  ]);

  const toggleLike = (id) => {
    setTours(
      tours.map((tour) =>
        tour.id === id ? { ...tour, liked: !tour.liked, likes: tour.liked ? tour.likes - 1 : tour.likes + 1 } : tour
      )
    );
  };

  const addComment = (id, comment) => {
    setTours(
      tours.map((tour) =>
        tour.id === id ? { ...tour, comments: [...tour.comments, comment] } : tour
      )
    );
  };

  return (
    <div>
      <div className="text-black text-xl font-bold mb-4">Related Tours</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tours.map((tour) => (
          <div key={tour.id} className="bg-white shadow-lg p-4">
            <img
              className="w-full h-40 object-cover mb-4"
              src={
                tour.name === "turkey"
                  ?  'https://cdn.builder.io/api/v1/image/assets/TEMP/d8efb44e43706d2ab842fdd19c2244025c01c5b8fad3492a380746506e88fc7c?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28'
                  : 'https://cdn.builder.io/api/v1/image/assets/TEMP/aa2915a0b34429f473d79e69bdfa330c9faf55d12ff59b9dddbaf71385e7f9fb?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28'
              }
              alt={tour.name}
            />
            <div className="text-black text-lg font-bold">{tour.name}</div>
            <div className="text-sm text-gray-500">{tour.location}</div>
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <div className="flex items-center">
                <button onClick={() => toggleLike(tour.id)} className="mr-2">
                  {tour.liked ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart className="text-gray-500" />
                  )}
                </button>
                <span>{tour.likes} Likes</span>
              </div>
              <span>120$</span>
            </div>

            <div className="mt-4">
              <h4 className="text-black text-sm font-bold">Comments:</h4>
              {tour.comments.length === 0 ? (
                <p className="text-gray-500">No comments yet</p>
              ) : (
                <ul className="text-sm text-gray-700">
                  {tour.comments.map((comment, index) => (
                    <li key={index} className="border-b border-gray-200 py-1">
                      {comment}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-2">
                <input
                  type="text"
                  className="w-full h-10 border border-gray-300 px-2 mb-2"
                  placeholder="Add a comment..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.target.value.trim()) {
                      addComment(tour.id, e.target.value);
                      e.target.value = "";
                    }
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RwandaDetails() {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const dispatch = useDispatch();
  const { destinationPosts, isLoading, error } = useSelector((state) => state.posts);
  
  useEffect(() => {
    dispatch(fetchPostsByDestination("Rwanda")); // Pass "Rwanda" as the destination
  }, [dispatch]);

  const Sites = [
    {
      name: "Kibeho",
      content: "Known for Marian apparitions, attracting pilgrims seeking spiritual renewal.",
      price: 120
    },
    {
      name: "Musanze",
      content: "Explore local churches and immerse yourself in the rich history of faith in this area.",
      price: 100
    },
    {
      name: "Lake Kivu",
      content: "A beautiful setting for contemplation, where you can enjoy the tranquility of its shores.",
      price: 90
    },
    {
      name: "Kigali Genocide Memorial",
      content: "A poignant site that offers insights into Rwanda's history, emphasizing themes of forgiveness and reconciliation.",
      price: 80
    }
  ];

  return (
    <div className="w-full h-auto bg-stone-50 relative">
      <div className="relative w-full h-[50vh]">
        <img
          className="w-full h-full object-cover"
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/ac109e70ddda2f99596b7c5e3d028a6ecd87d15434bcbc75fd434ab0f43f2d2e?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28'
          alt="City Background"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute left-8 md:left-16 top-[70%] transform -translate-y-1/2 text-white text-4xl md:text-5xl font-bold">
          RWANDA
        </div>
      </div>

      <div className="max-w-7xl mx-4 flex flex-col lg:flex-row gap-8 py-8 px-4 lg:ml-12">
        <div className="w-full lg:w-2/3 space-y-8">
          <div>
            <div className="text-sky-500 text-2xl font-bold mb-4">
              Kibeho (Rwanda):
            </div>
            <p className="text-black text-lg mb-6">
              Kibeho, located in Nyaruguru District, Rwanda, is a holy land famous for Marian apparitions, attracting pilgrims seeking spiritual renewal amidst beautiful mountainous landscapes and rich culture.
            </p>
            <div className="text-sky-500 text-2xl font-bold mb-4">
              Tour details:
            </div>
            <p className="text-black text-lg">
              Experience a transformative spiritual journey in Rwanda by visiting its significant religious sites. Begin your pilgrimage in Kibeho, known for the reported apparitions of the Virgin Mary, which attract thousands of pilgrims each year. The serene atmosphere and stunning landscapes provide a perfect backdrop for reflection and prayer.

              Next, travel to Musanze, where early missionaries laid the groundwork for Christianity in the region. Explore local churches and immerse yourself in the rich history of faith in this area.

              Don't miss Lake Kivu, a beautiful setting for contemplation, where you can enjoy the tranquility of its shores.

              Lastly, visit the Kigali Genocide Memorial, a poignant site that offers insights into Rwanda's history, emphasizing themes of forgiveness and reconciliation central to Christian teachings.

              Throughout your journey, engage with the welcoming Rwandan culture, savor traditional dishes, and enjoy breathtaking landscapes, making your religious tour both enriching and unforgettable.
            </p>
          </div>

          <div className="space-y-6">
            {destinationPosts.map((post) => (
              <div key={post._id} className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.content}</p>
                {post.postImage.map((image) => (
                  <img key={image._id} src={image.url} alt={post.title} className="w-full h-auto mb-4" />
                ))}
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Price: ${post.price}</p>
                </div>
                <div className="mt-4">
                  <h4 className="text-black text-lg font-bold">Sites:</h4>
                  {post.sites.map((site) => (
                    <div key={site._id} className="text-gray-600">
                      <p>{site.name} - Trip Date: {new Date(site.tripDate).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="text-black text-xl font-bold mb-4">
              Recently Visited Trip
            </div>
            <img
              className="w-full h-auto"
              src={kigali}
              alt="Recently Visited Trip"
            />
          </div>

          <RelatedTours />
        </div>

        <div className="w-full lg:w-1/3 h-auto mb-12 lg:mb-48 lg:ml-0 pb-20">
          <div className="bg-sky-500 text-white flex justify-between items-center px-6 py-4">
            <div className="text-lg font-semibold">Total Price</div>
            <div className="text-3xl font-bold">$390</div>
          </div>

          <div className="bg-white shadow-lg p-6">
            <div className="bg-sky-500 text-white text-center py-3 mb-6">
              <span className="text-base font-semibold">Tour Summary</span>
            </div>
            <div className="space-y-4">
              {Sites.map((destination) => (
                <div key={destination.name} className="flex justify-between">
                  <span>{destination.name}</span>
                  <span>${destination.price}</span>
                </div>
              ))}
              <div className="border-t pt-4 font-bold">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span>$390</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsBookingFormOpen(true)}
              className="w-full mt-6 bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      <BookingForm
        isOpen={isBookingFormOpen}
        onClose={() => setIsBookingFormOpen(false)}
      />
    </div>
  );
}

export default RwandaDetails;
