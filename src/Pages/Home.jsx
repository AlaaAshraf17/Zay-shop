import React from 'react';
import { Carousel } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import ProductCard from "../Components/ProductCard";

const Home = ({ products }) => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="w-full pt-10">
      {/* Carousel Section */}
      <section className="w-full bg-gray-100">
        <Carousel
          autoplay
          loop
          transition={{ duration: 1 }}
          className="rounded-none"
        >
          {/* Slide 1 */}
          <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 items-center gap-10">
            <div>
              <h1 className="text-4xl font-bold text-green-600 mb-4">
                Zay <span className="text-gray-800">eCommerce</span>
              </h1>
              <h2 className="text-2xl font-semibold mb-4">
                Tiny and Perfect eCommerce Template
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Zay Shop is an eCommerce HTML5 CSS template with the latest version of
                Bootstrap 5. This template is 100% free provided by TemplateMo website.
                Image credits go to{" "}
                <Link to="#" className="text-green-600 underline">
                  Freepik Stories
                </Link>
                ,{" "}
                <Link to="#" className="text-green-600 underline">
                  Unsplash
                </Link>{" "}
                and{" "}
                <Link to="#" className="text-green-600 underline">
                  Icons 8
                </Link>
                .
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/banner_img_01.jpg"
                alt="Hero Product"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>

          {/* Slide 2 */}
          <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 items-center gap-10">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Proident occaecat</h2>
              <p className="text-gray-600 leading-relaxed">
                Aliquip ex ea commodo consequat. You are permitted to use this Zay CSS
                template for your commercial websites. You are not permitted to
                re-distribute the template ZIP file in any kind of template collection
                websites.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/banner_img_02.jpg"
                alt="Hero Product"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>

          {/* Slide 3 */}
          <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 items-center gap-10">
            <div>
              <h2 className="text-2xl mb-4">Repr in voluptate</h2>
              <p className="text-gray-600 leading-relaxed">
                Ullamco laboris nisi ut aliquip. We bring you 100% free CSS templates
                for your websites. If you wish to support TemplateMo, please make a
                small contribution via PayPal or tell your friends about our website.
                Thank you.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/banner_img_03.jpg"
                alt="Hero Product"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </Carousel>
      </section>

 
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Categories of The Month</h2>
            <p className="text-gray-600">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         
            <div className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden shadow-md w-48 h-48 mb-4">
                <img
                  src="/category_img_01.jpg"
                  alt="Watches"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Watches</h3>
              <Link
                to="/products?category=Watches"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
              >
                Go Shop
              </Link>
            </div>

        
            <div className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden shadow-md w-48 h-48 mb-4">
                <img
                  src="/category_img_02.jpg"
                  alt="Shoes"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Shoes</h3>
              <Link
                to="/products?category=Shoes"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
              >
                Go Shop
              </Link>
            </div>

        
            <div className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden shadow-md w-48 h-48 mb-4">
                <img
                  src="/category_img_03.jpg"
                  alt="Sunglasses"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sunglasses</h3>
              <Link
                to="/products?category=Sunglasses"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
              >
                Go Shop
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Featured Product</h2>
            <p className="text-gray-600">
              Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
