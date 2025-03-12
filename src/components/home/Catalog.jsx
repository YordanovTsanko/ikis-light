import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";

const Catalog = () => {
  const items = Array.from({ length: 40 }, (_, index) => ({
    id: index + 1,
    imgSrc: `/catalog/${index + 1}.jpg`,
    title: `Item ${index + 1}`,
    text: `Description for Item ${index + 1}`,
  }));

  const [visibleItems, setVisibleItems] = useState(10);
  const breakpoints = { default: 5, 1100: 4, 700: 3, 500: 2 };
  const loadMoreItems = () => setVisibleItems((prev) => prev + 10);

  // Variants for staggering the grid items
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation for each item in the Masonry grid
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <style>{`
        .my-masonry-grid {
          display: flex;
          margin-left: -16px;
          width: auto;
        }
        .my-masonry-grid_column {
          padding-left: 16px;
          background-clip: padding-box;
        }
        .my-masonry-grid_column > div {
          margin-bottom: 16px;
        }
      `}</style>
      <div className="min-h-screen w-full bg-gray-100 p-6">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl xl:text-3xl text-center font-semibold text-gray-900 mb-6 underline decoration-primary underline-offset-2"
        >
          Каталог
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-md xl:text-lg text-gray-600 leading-relaxed text-center mb-12"
        >
          В нашия каталог ще намерите широк избор от модерни
          и класически решения, които придават уникален стил и уют на всяко
          пространство. От елегантни висящи лампи и полилеи до иновативни LED
          системи, ние сме подбрали продукти, които съчетават качество, дизайн и
          функционалност.
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {items.slice(0, visibleItems).map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="relative bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className={`w-full object-cover transition-transform duration-300 ${
                    item.id % 3 === 0 ? "h-72" : "h-56"
                  }`}
                  loading="lazy"
                />
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-lg group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                  {item.text}
                </div>
              </motion.div>
            ))}
          </Masonry>
        </motion.div>
        {visibleItems < items.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-4"
          >
            <button
              onClick={loadMoreItems}
              className="text-primary underline underline-offset-2 text-lg"
            >
              Зареди още
            </button>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Catalog;
