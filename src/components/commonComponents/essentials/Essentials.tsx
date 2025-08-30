import React, { useState } from "react";

interface Store {
  id: number;
  name: string;
  image: string;
  description: string;
  mapSrc?: string;
}

interface EssentialsProps {
  title: string;
  stores: Store[];
}

const Essentials: React.FC<EssentialsProps> = ({ title, stores }) => {
  const [selectedMap, setSelectedMap] = useState<string | null>(null);

  const closeModal = () => setSelectedMap(null);

  return (
    <>
      <main className="mt-44 md:mt-32 w-full max-w-none mx-auto px-4 md:px-20 py-8 md:py-16 min-h-[70vh] ">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-5xl text-gray-800 mb-4 font-bold">
            {title}
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-xl mx-auto leading-relaxed px-4 md:px-0">
            Find the perfect {title} near you with fresh produce, trusted
            services, and reliable options.
          </p>
        </div>

        {/* Stores Grid/List */}
        <div className="space-y-6 md:space-y-12">
          {stores.map((store, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={store.id}
                className={`
                  flex flex-col 
                  ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} 
                  items-stretch 
                  bg-white 
                  rounded-2xl 
                  shadow-lg 
                  overflow-hidden 
                  min-h-[300px] md:min-h-[320px]
                  hover:shadow-xl 
                  transition-shadow 
                  duration-300
                `}
              >
                {/* Store Image */}
                <div
                  className="
                    w-full md:w-2/5 
                    h-48 md:h-auto 
                    bg-cover 
                    bg-center 
                    relative
                    flex-shrink-0
                  "
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${store.image})`,
                  }}
                >
                  {/* Optional overlay for better text contrast if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden"></div>
                </div>

                {/* Store Content */}
                <div className="flex-1 p-4 md:p-8 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4 leading-tight">
                      {store.name}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                      {store.description}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-start">
                    {store.mapSrc && (
                      <button
                        className="
                          bg-gradient-to-r from-blue-500 to-purple-600 
                          hover:from-blue-600 hover:to-purple-700 
                          text-white 
                          border-none 
                          px-4 md:px-6 
                          py-2 md:py-3 
                          rounded-full 
                          text-sm md:text-base 
                          font-bold 
                          cursor-pointer 
                          transition-all 
                          duration-300 
                          transform 
                          hover:scale-105 
                          active:scale-95
                          shadow-md
                          hover:shadow-lg
                        "
                        onClick={() => setSelectedMap(store.mapSrc!)}
                      >
                        Show Map
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Map Modal - Responsive */}
      {selectedMap && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[9998] md:hidden"
            onClick={closeModal}
          ></div>

          {/* Modal */}
          <div className="fixed bottom-4 right-4 md:bottom-4 md:right-4 w-[calc(100vw-2rem)] md:w-96 h-64 md:h-72 bg-white rounded-xl shadow-2xl overflow-hidden z-[9999]">
            <iframe
              src={selectedMap}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title="Store Location Map"
            />
            <button
              onClick={closeModal}
              className="
                absolute 
                top-2 
                right-3 
                bg-red-500 
                hover:bg-red-600 
                text-white 
                border-none 
                rounded-full 
                w-6 h-6 
                md:w-7 md:h-7 
                cursor-pointer 
                flex 
                items-center 
                justify-center 
                text-xs 
                md:text-sm 
                font-bold
                transition-colors
                duration-200
                shadow-md
              "
            >
              ✕
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Essentials;