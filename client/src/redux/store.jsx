// src/redux/store.jsx
import { configureStore } from '@reduxjs/toolkit';
import sponsoreReducer from './Slice/NewsSponsore';
import speakerReducer from './Slice/NewsSpeakers'
import mediaReducer from './Slice/NewsMedia'
import newReducer from './Slice/NewsBlog'
import bannerReducer from './Slice/BannerHome'
import strategyReducer from './Slice/NewsStrategy'
import authReducer from './Slice/Auth'
import imagesReducer from './Slice/ImageControl'
import settingReducer from './Slice/setting'
import seoReducer from './Slice/seo'

const store = configureStore({
  reducer: {
    sponsore: sponsoreReducer,
    speakers: speakerReducer,
    media: mediaReducer,
    new: newReducer,
    banner: bannerReducer,
    strategy: strategyReducer,
    auth: authReducer,
    images: imagesReducer,
    settings: settingReducer,
    seo: seoReducer,
  },
});

export default store;