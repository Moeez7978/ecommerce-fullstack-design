import React from 'react';

const services = [
  {id: 1,title: 'Source from Industry Hubs',description: 'Efficiently source products from key industry hubs.',image: '/src/Source.png',},
  {id: 2,title: 'Customize Your Products',description: 'Personalize and tailor products to meet your needs.',image: '/src/Products.png',},
  {id: 3,title: 'Reliable Shipping by Ocean or Air',description: 'Fast and dependable shipping services by ocean or air.',image: '/src/3.png',},
  {id: 4,title: 'Product Monitoring and Inspection',description: 'Ensure quality with thorough product monitoring and inspection.',image: '/src/4.png',},
];

const Services = () => {
  return (
    <div className=" p-8 mx-auto">
      <h2 className="text-2xl font-bold mb-6 ml-32">Our Extra Services</h2>
      <div className="flex flex-wrap flex-col md:flex-row gap-4 justify-center items-center ">
        {services.map((service) => (
          <div key={service.id} className="rounded-lg shadow-md" style={{width:'280px', height:'200px'}}>
            <img
              src={service.image}
              alt={service.title}
              className="w-auto h-auto object-cover z-10 rounded-t-lg"
              style={{width:'280px', height:'120px'}}
            />
            <div className="flex items-center mt-4">
                  <h3 className="mx-4 text-lg font-semibold">{service.title}</h3>
              <div className="bg-blue-100 p-2 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </div>
            </div>
            {/* <p className="mt-2 text-gray-600">{service.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
