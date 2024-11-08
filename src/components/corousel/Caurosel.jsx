import Carousel from 'react-bootstrap/Carousel';
import Med1 from '../../assets/head_2.png';
import Med2 from '../../assets/head_3.png';
import Med3 from '../../assets/head_4.png';
import './caurousel.css';

function NoTransitionExample() {
    return (
        <Carousel slide={true} interval={3000} indicators={true}>
            <Carousel.Item>
                <img className="d-block w-100" src={Med2} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={Med1} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={Med3} alt="Third slide" />
            </Carousel.Item>
        </Carousel>
    );
}

export default NoTransitionExample;
