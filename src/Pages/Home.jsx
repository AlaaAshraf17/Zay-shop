import React from 'react';
import { Carousel } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Gym Weight',
      image: '/feature_prod_01.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sunt in culpa qui officia deserunt.',
      rating: 4,
      price: 240.00,
      reviews: 24,
    },
    {
      id: 2,
      name: 'Cloud Nike Shoes',
      image: '/feature_prod_02.jpg', 
      description: 'Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.',
      rating: 5,
      price: 480.00,
      reviews: 48,
    },
    {
      id: 3,
      name: 'Summer Addides Shoes',
      image: '/feature_prod_03.jpg',
      description: 'Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.',
      rating: 3,
      price: 360.00,
      reviews: 74,
    },
  ];

 
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i < rating ? 'text-yellow-500' : 'text-gray-300'}
        />
      );
    }
    return <div className="flex">{stars}</div>; 
  };
  return (
    <div className="w-full pt-10">
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
          
            <h2 className="text-2xl font-semibold mb-4">
            Proident occaecat
            </h2>
            <p className="text-gray-600 leading-relaxed">
            Aliquip ex ea commodo consequat
            You are permitted to use this Zay CSS template for your commercial websites. You are not permitted to re-distribute the template ZIP file in any kind of template collection websites.
            </p>
          </div>
         
         {/* Slide 3 */}
          <div className="flex justify-center">
            <img
              src="/banner_img_02.jpg"
              alt="Hero Product"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 items-center gap-10">
          <div>
         
            <h2 className="text-2xl  mb-4">
            Repr in voluptate
            </h2>
            <p className="text-gray-600 leading-relaxed">
            Ullamco laboris nisi ut
            We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.
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
              <Link to="/shop/watches" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300">
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
              <Link to="/shop/shoes" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300">
                Go Shop
              </Link>
            </div>

        
            <div className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden shadow-md w-48 h-48 mb-4">
                <img
                  src="/category_img_03.jpg" 
                  alt="Accessories"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Accessories</h3>
              <Link to="/shop/accessories" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-md shadow-md overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                  <div className="flex items-center justify-between mb-2">
                    {renderStars(product.rating)}
                    <span className="text-gray-700">${product.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-500 text-xs">Reviews ({product.reviews})</p>
                  <Link
                    to={`/product/${product.id}`} 
                    className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
