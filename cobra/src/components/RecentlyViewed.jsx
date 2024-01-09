import { useState } from 'react';

const RecentlyViewed = () => {
  const [viewed, setViewed] = useState([
    {
      clubName: 'Aerojet ls',
      img: '//www.cobragolf.com/cdn/shop/products/ffgxqq7o09l71pd4xwha_1cf811ed-00ec-4feb-bd9d-7d2a5078fadc_1200x.jpg?v=1702043439',
      modelYear: '2023 Driver',
      price: '$399.00'
    },
    {
        clubName: 'Aerojet Max',
        img: '//www.cobragolf.com/cdn/shop/products/s58mdb3oexouyqnvbsoi_1200x.jpg?v=1702043443',
        modelYear: '2023 Driver',
        price: '$399.00'
    },
    {
        clubName: 'AEROJET 50th Anniversary - Limited Edition',
        img: '//www.cobragolf.com/cdn/shop/products/uyu4c54ijctbjg14hwia_1200x.jpg?v=1702389120',
        modelYear: '2023 Driver',
        price: '$449.00'
    },
    {
        clubName: 'AIR-X Striaght Neck',
        img: '//www.cobragolf.com/cdn/shop/files/jdswf1ld28acuxhu83os_1200x.jpg?v=1703080577',
        modelYear: '2023 Driver',
        price: '$349.00'
    }
    // Add other items as needed
  ]);


  return (
    <div className="py-8 mx-12 font-titillium">
      <h3 className="text-2xl font-semibold border-b pb-2">RECENTLY VIEWED</h3>
      <ul className='grid grid-cols-2 gap-4 md:grid-cols-4' id="reviewedList">
        {viewed.map((item, index) => (
          <li key={index}>
            <div
              className="card card-compact cursor-pointer w-72"
              id="viewed"
            >
              <div className='overflow-hidden'>
                <img className='hover:scale-105' src={item.img} alt="Right" />
              </div>
              <div className="card-body">
                <h2 className="text-lg font-semibold uppercase hover:text-blue-700 hover:underline">{item.clubName}</h2>
                <span>{item.modelYear}</span>
                <p className='hover:text-blue-700'>{item.price}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentlyViewed;
