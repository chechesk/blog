import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSocialMedia } from '../../redux/Reducer/socialMedia';

const SocialMedia = () => {
  const dispatch = useDispatch();
  const { socialMedia, loading, error } = useSelector((state) => state.socialmedia);

  useEffect(() => {
    dispatch(fetchSocialMedia());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="social-media-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {socialMedia.filter(media => media.activo).map((media) => (
        <a
          key={media.id}
          href={media.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-item flex items-center space-x-2   rounded-lg shadow-lg"
        >
          <div className="social-media-icon h-8 w-8" dangerouslySetInnerHTML={{ __html: media.svg }} />

        </a>
      ))}
    </div>
  );
};

export default SocialMedia;