import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export default function home(){
    return<div>welcome to my home page
        <Carousel>
                <div className="main">
                    <img src="https://images.pexels.com/photos/719396/pexels-photo-719396.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://images.news18.com/telugu/uploads/2023/01/allu-arjun.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://images.news18.com/telugu/uploads/2023/01/allu-arjun.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
    
}