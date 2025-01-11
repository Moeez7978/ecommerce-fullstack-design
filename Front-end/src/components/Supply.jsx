import React from 'react';

const suppliers = [
  { region: 'Arabic Emirates', url: 'shopname.ae' ,code:'AE'},
  { region: 'Australia', url: 'shopname.ae',code:'AU' },
  { region: 'United States', url: 'shopname.ae',code:'US' },
  { region: 'Russia', url: 'shopname.ru',code:'RU' },
  { region: 'Italy', url: 'shopname.it',code:'IT' },
  { region: 'Denmark', url: 'denmark.com.dk',code:'DK' },
  { region: 'France', url: 'shopname.com.fr',code:'FR' },
  { region: 'China', url: 'shopname.ae',code:'CN' },
  { region: 'Great Britain', url: 'shopname.co.uk',code:'GB' },
];

const Supply = () => {
  return (
    <div className="hidden md:flex flex-col p-8 mx-auto" style={{width:'1177px', height:'138px'}}>
      <h2 className="text-2xl font-bold mb-6">Suppliers by Region</h2>
      <div className="flex flex-wrap ">
        {suppliers.map((supplier, index) => (
          <div key={index} className=" p-4 flex justify-start align-middle items-center mb-4 gap-4" style={{width:'221px', height:'36px'}}>
            <div className="-4">
              <img
                src={`https://flagsapi.com/${supplier.code}/flat/64.png`}
                alt={`${supplier.region} flag`}
                className=" mx-auto"
                style={{width:'28px', height:'20px'}}
              />
            </div>
            <div className='flex flex-col g'>
            <h3 className="text-sm font-thin">{supplier.region}</h3>
            <a
              href={`https://${supplier.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm"
            >
              {supplier.url}
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Supply;
