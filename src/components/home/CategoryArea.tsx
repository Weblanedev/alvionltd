import menu_data from '@/data/menu-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import categoryImg1 from '../../../public/assets/img/category_banner/books.png';
import categoryImg2 from '../../../public/assets/img/category_banner/author.jpg';
import categoryImg4 from '../../../public/assets/img/category_banner/bestsellers.png';

const CategoryArea = () => {
  const num_of_items = 4;
  const categories = menu_data[1].submenus
    ?.slice(0, num_of_items)
    .map((item, index) => {
      const categoryImg = [
        categoryImg1,
        categoryImg2,
        categoryImg1,
        categoryImg4,
      ][index % num_of_items];
      return {
        id: item.id,
        category: item.title,
        categoryImg,
      };
    });

  return (
    <>
      <section className="category-area pt-90 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center">
                <h2 className="section-main-title mb-50">Categories</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="product-category-wrapper">
                {categories?.map(item => (
                  <div
                    key={item.id}
                    className="product-category-single pos-rel"
                  >
                    <div
                      className="product-category-img"
                      //
                    >
                      <Link href="/contact">
                        <Image
                          style={{ width: '100%', height: 'auto' }}
                          src={item?.categoryImg}
                          alt="product-img"
                        />
                      </Link>
                    </div>
                    <div className="product-category-inner">
                      <div className="product-category-content">
                        <Link href="/contact" className="product-category">
                          {item?.category}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryArea;
