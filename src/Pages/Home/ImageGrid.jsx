// import React from 'react';
import image1 from '../../assets/2.avif'
import image2 from '../../assets/1.avif'
import image3 from '../../assets/home-nest3.avif'
const ImageGrid = () => {
    return (
        //    <div className='grid grid-cols-12 gap-8 border-2 py-20 px-8 '>
        //     <div className='col-span-8 row-span-2 border'><img src={image1} alt="" /></div>
        //     <div className='col-span-4 row-span-2 border'>
        //         <div className='border row-span-2'> <img src={image2} alt="" /></div>
        //         <div className='border '> <img src={image3} alt="" /> </div>
        //     </div>
        //    </div>

        // <div className="grid grid-cols-12 gap-8 border-2 py-20 px-8">

        //     <div
        //         className="col-span-8 row-span-2 bg-cover bg-center rounded"
        //         style={{ backgroundImage: `url(${image1})` }}
        //     ></div>

        //     <div className="col-span-4 row-span-2 grid grid-rows-2 gap-8">

        //         <div
        //             className="bg-cover bg-center rounded"
        //             style={{ backgroundImage: `url(${image2})` }}
        //         ></div>

        //         <div
        //             className="bg-cover bg-center rounded"
        //             style={{ backgroundImage: `url(${image3})` }}
        //         ></div>

        //     </div>
        // </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 px-4 md:px-8 py-10">

  {/* Left Big Image */}
  <div
    className="md:col-span-8 h-[220px] sm:h-[300px] md:h-full min-h-[420px]
               bg-cover bg-center rounded-[10px] overflow-hidden
               transition-transform duration-500 hover:scale-105"
    style={{ backgroundImage: `url(${image1})` }}
  >
    <div className="h-full w-full bg-black/20"></div>
  </div>

  {/* Right Images */}
  <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">

    <div
      className="h-[200px] md:h-[200px]
                 bg-cover bg-center rounded-[10px] overflow-hidden
                 transition-transform duration-500 hover:scale-105"
      style={{ backgroundImage: `url(${image2})` }}
    >
      <div className="h-full w-full bg-black/20"></div>
    </div>

    <div
      className="h-[200px] md:h-[200px]
                 bg-cover bg-center rounded-[10px] overflow-hidden
                 transition-transform duration-500 hover:scale-105"
      style={{ backgroundImage: `url(${image3})` }}
    >
      <div className="h-full w-full bg-black/20"></div>
    </div>

  </div>
</div>




        // <div class="grid grid-flow-col grid-rows-3 gap-4">
        //     <div class="row-span-3 ..."><img src={image1} alt="" /></div>
        //     <div class="col-span-2 ..."><img src={image2} alt="" /></div>
        //     <div class="col-span-2  ..."><img src={image3} alt="" /></div>
        // </div>
    );
};

export default ImageGrid;

// export default function GridGallery() {
//   const images = [
//     {
//       src: image1,
//       className: "row-span",
//       alt: "Modern living room interior",
//     },
//     {
//       src: image2,
//       className: "",
//       alt: "Top view sofa setup",
//     },
//     {
//       src: image3,
//       className: "row-span-2",
//       alt: "Minimal furniture design",
//     },
//     // {
//     //   src: image2,
//     //   className: "col-span-2",
//     //   alt: "Family outdoor lifestyle",
//     // },
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10">
//       <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4">
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className={`relative overflow-hidden rounded-xl shadow-md ${img.className}`}
//           >
//             <img
//               src={img.src}
//               alt={img.alt}
//               loading="lazy"
//               className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//             />

//             {/* Optional overlay */}
//             <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition" />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
