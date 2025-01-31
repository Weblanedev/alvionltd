import React from 'react';
import SidebarMain from '../SharedComponents/Sidebars/SidebarMain';
import HomeTwoBannerArea from './HomeTwoBannerArea';
import CategoryArea from '../home/CategoryArea';

const HomeTwoMain = () => {
  return (
    <>
      <HomeTwoBannerArea />
      <CategoryArea />
      <SidebarMain />
    </>
  );
};

export default HomeTwoMain;
