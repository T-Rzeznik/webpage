import React from 'react';

const ProfileAvatar: React.FC = () => {
  // Replace 'url_to_profile_image' with the actual URL of the profile image
  const profileImageURL = 'https://www.freeiconspng.com/img/898';

  return (
    <div className="profile-avatar">
      <img src={profileImageURL} alt="Profile Avatar" className="avatar-image" />
    </div>
  );
};

export default ProfileAvatar;
