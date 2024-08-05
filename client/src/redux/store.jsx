// src/redux/store.jsx
import { configureStore } from '@reduxjs/toolkit';
import sponsoreReducer from './Slice/NewsSponsore';
import speakerReducer from './Slice/NewsSpeakers'
import mediaReducer from './Slice/NewsMedia'
import newReducer from './Slice/NewsBlog'
import bannerReducer from './Slice/BannerHome'
import authReducer from './Slice/Auth'

const store = configureStore({
  reducer: {
    sponsore: sponsoreReducer,
    speakers: speakerReducer,
    media: mediaReducer,
    new: newReducer,
    banner: bannerReducer,
    auth: authReducer,
  },
});

export default store;