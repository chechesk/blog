
import { Carousel } from "flowbite-react";

const Carrousel = () => {
  return (
    <div className="h-[700px] ">
      <Carousel slideInterval={5000}>
        <img src="https://miro.medium.com/v2/resize:fit:1400/0*Pc22jwQqjlVylo9_" alt="..." />
        <img src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/news/computex-2024-nvidia-geforce-announcements/computex-2024-nvidia-geforce-summary-recap-ogimage.jpg" alt="..." />
        <img src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/news/computex-2024-nvidia-geforce-announcements/announcing-nvidia-rtx-ai-toolkit.png" alt="..." />
        <img src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/news/computex-2024-nvidia-geforce-announcements/nvidia-aim-ai-inference-manager.png" alt="..." />
      </Carousel>
    </div>
  );
};

export default Carrousel;