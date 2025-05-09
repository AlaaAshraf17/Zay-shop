import React from "react";
const AboutPage = () => {
  return (
    <div className="bg-white text-black-800 pt-24">
      <div className="container mx-auto py-12 px-6">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-green-400">
            About Zay Shop
          </h1>
          <p className="text-lg text-black-600">
            Your ultimate destination for premium e-commerce solutions.
          </p>
        </header>
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-green-400">
            Our Story
          </h2>
          <p className="text-black leading-relaxed">
            Zay Shop started with a mission to bring unique, high-quality
            products to our customers. From fashion to home essentials, we
            strive to meet all your needs.
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-green-400">
            Our Mission
          </h2>
          <p className="text-black leading-relaxed">
            To provide a seamless online shopping experience, offering a wide
            range of products backed by exceptional customer service.
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-green-400">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 border rounded-lg shadow-lg">
              <h3 className="font-bold text-xl text-green-400">Delivery Services</h3>
              <p className="text-black">
                Fast and reliable delivery to your doorstep, ensuring your orders reach you on time.
              </p>
            </div>
            <div className="p-4 border rounded-lg shadow-lg">
              <h3 className="font-bold text-xl text-green-400">Shipping & Return</h3>
              <p className="text-black">
                Hassle-free shipping and easy return policies for a smooth shopping experience.
              </p>
            </div>
            <div className="p-4 border rounded-lg shadow-lg">
              <h3 className="font-bold text-xl text-green-400">Promotion</h3>
              <p className="text-black">
                Exciting deals and discounts to make your shopping even more rewarding.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-black">
          © 2025 Zay Shop. All rights reserved.
        </footer>
      </div>
    </div>
  );
};
export default AboutPage;