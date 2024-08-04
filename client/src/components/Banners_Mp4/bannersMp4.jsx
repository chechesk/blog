import React from 'react'


export default function BannersMp4() {
  return (
    <div>
        <video className=" md:h-[200px] sm:h-[100px] phone:h-[100px] mini:h-[100px]  md:w-full sm:w-full phone:w-full object-cover " autoPlay loop muted>
        <source src="https://cgsbrasil.com/wp-content/uploads/2024/07/banner-site-do-CGS-MP4-.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video className=" md:h-[200px] sm:h-[100px] phone:h-[100px] mini:h-[100px]   md:w-full sm:w-full phone:w-full object-cover " autoPlay loop muted>
        <source src="https://cgsbrasil.com/wp-content/uploads/2024/04/Pay4Fun_v6.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
