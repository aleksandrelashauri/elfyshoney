import { navInfoEng, navInfoGeo, navInfoRus } from "./navBar";
import { productsGeo, productsEng, productsRus } from "./productData";
import { pictureInfoEng, pictureInfoGeo, pictureInfoRus } from "./pictureInfo";
import { socialEng, socialGeo, socialRus } from "./footerInfo";
import {
  footerAboutEng,
  footerAboutGeo,
  footerAboutRus,
  footerProductsEng,
  footerProductsGeo,
  footerProductsRus,
} from "./footerInfo";
const data = {
  Georgian: {
    navBar: {
      navInfoGeo,
    },
    pictureInfo: {
      pictureInfoGeo,
    },
    Products: {
      productsGeo,
    },
    social: {
      socialGeo,
    },
    footerAbout: {
      footerAboutGeo,
    },
    footerPoruducts: {
      footerProductsGeo,
    },
  },
  Russian: {
    navBar: {
      navInfoRus,
    },
    pictureInfo: {
      pictureInfoRus,
    },
    Products: {
      productsRus,
    },
    social: {
      socialRus,
    },
    footerAbout: {
      footerAboutRus,
    },
    footerPoruducts: {
      footerProductsRus,
    },
  },
  English: {
    navBar: {
      navInfoEng,
    },
    pictureInfo: {
      pictureInfoEng,
    },
    Products: {
      productsEng,
    },
    social: {
      socialEng,
    },
    footerAbout: {
      footerAboutEng,
    },
    footerPoruducts: {
      footerProductsEng,
    },
  },
};

export const getNavData = (language) => data[language].navBar;
export const getPictureData = (language) => data[language].pictureInfo;
export const getProductsData = (language) => data[language].Products;
export const getSocialData = (language) => data[language].social;
export const getFooterAbout = (language) => data[language].footerAbout;
export const getFooterProducts = (language) => data[language].footerPoruducts;
