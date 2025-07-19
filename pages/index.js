import { useEffect, useState } from "react";

export default function Home() {
  const [deals, setDeals] = useState({ hotels: [], restaurants: [] });

  useEffect(() => {
    fetch("/deals.json")
      .then((res) => res.json())
      .then((data) => setDeals(data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-black text-white p-6">
        <h1 className="text-3xl font-bold">Nashville Luxury Deals</h1>
        <p className="text-lg">Exclusive hotel & fine dining promotions</p>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Hotels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deals.hotels.map((hotel, idx) => (
              <a
                key={idx}
                href={hotel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold">{hotel.name}</h3>
                <p className="mt-2 text-gray-700">{hotel.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Fine Dining</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deals.restaurants.map((restaurant, idx) => (
              <a
                key={idx}
                href={restaurant.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold">{restaurant.name}</h3>
                <p className="mt-2 text-gray-700">{restaurant.description}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-black text-white text-center p-4">
        &copy; {new Date().getFullYear()} Nashville Luxury Deals
      </footer>
    </div>
  );
}
