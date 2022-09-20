import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Search() {
  return (
    <div className="h-screen">
      <Header />

      <main className="flex flex-grow pt-14 px-6">
        <section>
          <p className="text-xs">300+ stays for number of guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            {/*  */}
            <p className="custom-button">Cancellation Flexibility</p>
            <p className="custom-button">Type of Place</p>
            <p className="custom-button">Price</p>
            <p className="custom-button">Rooms and Beds</p>
            <p className="custom-button">More filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
