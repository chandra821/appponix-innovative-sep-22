import { Carousel } from "react-bootstrap"
import img1 from '../../images/2.jpg'
import img2 from '../../images/3.jpg'
import img3 from '../../images/4.jpg'
interface IMycarousel{}
export const Mycarousel:React.FC<IMycarousel>=(props)=>{
    return <>
    
    <Carousel>
      <Carousel.Item>
        <img height='400px' width='100%'
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>ROMANTIC ROSE</h3>
          <p>It's only made for couple.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height='400px'width='100%'
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>SUN FOLLOWER</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height='400px'width='100%'
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>PINK ROSE</h3>
          <p>
            let's give it to anyone.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
}