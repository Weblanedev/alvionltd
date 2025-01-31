import React from 'react';
import preloaderIMg from '../../../public/assets/img/logo/preloader.svg';
import Image from 'next/image';

const Preloader = () => {
  return (
    <>
      <div id="loading">
        <div id="loading-center">
          <div id="loading-center-absolute">
            <div className="loading-icon text-center d-flex flex-column align-items-center justify-content-center">
              {/* <Image src={logoImg} alt="logo-img" /> */}
              <h3
                style={{ fontSize: '30px', fontWeight: 'bold', color: '#000' }}
              >
                Alvion Integrated Service Limited
              </h3>
              <Image className="loading-logo" src={preloaderIMg} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
