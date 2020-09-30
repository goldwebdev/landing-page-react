import React, {useState, useRef, useLayoutEffect} from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Container,
  Row,
  Col, 
  Card,
  Button
} from 'react-bootstrap';
import './App.scss';
import jumbotronImg from './assets/images/people-desk.png'
import topImg from './assets/images/Group 25.png';
import logo from './assets/images/Oval Copy.png';
import plant from './assets/images/plant.png';
import cleanup from './assets/images/cleanup-icon.png';
import grow from './assets/images/grow-icon.png';
import maintain from './assets/images/maintain-icon.png';
import gain from './assets/images/lots-to-gain-icon.png';
import author1 from './assets/images/author1.png';
import author2 from './assets/images/author2.png';
import author3 from './assets/images/author3.png';

SwiperCore.use([Navigation, Pagination]);


const App = () => {

  const [deviceType, setDeviceType] = useState('web');
  const [scrollPos, setScrollPos] = useState(100);
  const [show, doShow] = useState({
    item1: true, 
    item2: true, 
    item3: false, 
    item4: false, 
    item5: false, 
    item6: false, 
    item7: false, 
    item8: false, 
    item9: false,
    item10: true,
    item11: false
  });
  const Ref1 = useRef(null),
        Ref2 = useRef(null),
        Ref3 = useRef(null),
        Ref4 = useRef(null),
        Ref5 = useRef(null),
        Ref6 = useRef(null),
        Ref7 = useRef(null),
        Ref8 = useRef(null),
        Ref9 = useRef(null),
        Ref10 = useRef(null),
        Ref11 = useRef(null);

  useLayoutEffect(() => {

    const topPos = element => element.getBoundingClientRect().top;

    const div1Pos = topPos(Ref1.current),
          div2Pos = topPos(Ref2.current),
          div3Pos = topPos(Ref3.current),
          div4Pos = topPos(Ref4.current),
          div5Pos = topPos(Ref5.current),
          div6Pos = topPos(Ref6.current),
          div7Pos = topPos(Ref7.current),
          div8Pos = topPos(Ref8.current),
          div9Pos = topPos(Ref9.current),
          div10Pos = topPos(Ref10.current),
          div11Pos = topPos(Ref11.current)

    const onScroll = () => {
      // const scrollPos = window.scrollY + 100;
      setScrollPos(window.scrollY + window.innerHeight);
      if (div1Pos < window.innerHeight) {
        console.log('divPos1', div1Pos, scrollPos);
        doShow(state => ({ ...state, item1: true }));
      } 
      if (div2Pos < window.innerHeight) {
        console.log('div2Pos', div2Pos, scrollPos);
        doShow(state => ({ ...state, item2: true }));
      } 
      if (div3Pos < window.innerHeight) {
        console.log('div3Pos', div3Pos, scrollPos);
        doShow(state => ({ ...state, item3: true }));
      } 
      if (div4Pos < window.innerHeight) {
        console.log('div4Pos', div4Pos, scrollPos);
        doShow(state => ({ ...state, item4: true }));
      } 
      if (div5Pos < window.innerHeight) {
        console.log('div5Pos', div5Pos, scrollPos);
        doShow(state => ({ ...state, item5: true }));
      } 
      if (div6Pos < window.innerHeight) {
        console.log('div6Pos', div6Pos, scrollPos);
        doShow(state => ({ ...state, item6: true }));
      } 
      if (div7Pos < window.innerHeight) {
        console.log('div7Pos', div7Pos, scrollPos);
        doShow(state => ({ ...state, item7: true }));
      } 
      if (div8Pos < window.innerHeight) {
        console.log('div8Pos', div8Pos, scrollPos);
        doShow(state => ({ ...state, item8: true }));
      } 
      if (div9Pos < window.innerHeight) {
        console.log('div9Pos', div9Pos, scrollPos);
        doShow(state => ({ ...state, item9: true }));
      }
      if (div10Pos < window.innerHeight) {
        console.log('div10Pos', div10Pos, scrollPos);
        doShow(state => ({ ...state, item10: true }));
      }
      if (div11Pos < window.innerHeight) {
        console.log('div9Pos', div11Pos, scrollPos);
        doShow(state => ({ ...state, item11: true }));
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };

    /* 
       remove the event listener in the cleanup function 
       to prevent memory leaks
    */
  }, [scrollPos]);
  
  return (
    <React.StrictMode>
      <Container fluid className="wrapper">
        <Row className="topBar">
          <img src={topImg} />
        </Row>
        <div className="jumbotron-header">
          <Container fluid>
            <Row className="main-face">
              <Col sm={6} className={`d-flex jumbotron-text ${show.item1 ? 'jumbotron-text-animation' : ''}`} ref={Ref1} style={{visibility: `${show.item1 ? 'visible' : 'hidden'}`}}>
                  <div style={{margin: 'auto'}}>
                    <h1>Business Growth With a Clear View on Financials</h1>
                    <h3>
                      We help businesses get a tight grip of their financials so they can make informed decisions that drive growth.
                    </h3>
                    <Button variant="warning" className="jumbotron-btn">Schedule a Free Consultation</Button>
                  </div>
              </Col>
              <Col sm={6} className={`jumbotronImg ${show.item2 ? 'jumbotronImg-animation' : ''}`} ref={Ref2} style={{visibility: `${show.item2 ? 'visible' : 'hidden'}`}}>
                <img src={jumbotronImg} />
                <img src={plant} className={`plant ${show.item10 ? 'plant-animation' : ''}`} ref={Ref10} style={{visibility: `${show.item10 ? 'visible' : 'hidden'}`}}/>
              </Col>
            </Row>
          </Container>
        </div>
        <Row className="logo-box">
          <div className="logo">
            <div className="d-flex">
              <img src={logo} />
              <h5>Company logo</h5>
            </div>
          </div>

          <div className="logo">
            <div className="d-flex">
              <img src={logo} />
              <h5>Company logo</h5>
            </div>
          </div>

          <div className="logo">
            <div className="d-flex">
              <img src={logo} />
              <h5>Company logo</h5>
            </div>
          </div>

          <div className="logo">
            <div className="d-flex">
              <img src={logo} />
              <h5>Company logo</h5>
            </div>
          </div>

          <div className="logo">
            <div className="d-flex">
              <img src={logo} />
              <h5>Company logo</h5>
            </div>
          </div>
        </Row>
        
        <Container>
          <div className="whatwedo">
            <div className={`${show.item11 ? 'whattext-animation' : ''}`} ref={Ref11} style={{visibility: `${show.item11 ? 'visible' : 'hidden'}`}}>
              <h2>What We Do</h2>
              <h5>
                We start by cleaning up your books, maintain your numbers, guarantee a monthly financial report every 7th busines day, and provide a CFO level strategy for growth. 
              </h5>
            </div>
            <Row className="card-group">
              <Col md={6}>
                <Card className={`cleanup item ${show.item3 ? 'cleanup-animation' : ''}`}  ref={Ref3} style={{visibility: `${show.item3 ? 'visible' : 'hidden'}`}}>
                  <div>
                    <h3>Clean Up</h3>
                    <p>We start by cleaning up your books, guarantee a monthly financial report every 7th busines day, and provide a CFO level strategy for growth. </p>
                  </div>
                  <img src={cleanup} />
                </Card>

                <Card className={`grow item ${show.item4 ? 'grow-animation' : ''}`}  ref={Ref4} style={{visibility: `${show.item4 ? 'visible' : 'hidden'}`}}>
                  <div>
                    <h3>Grow</h3>
                    <p>We start by cleaning up your books, guarantee a monthly financial report every 7th busines day, and provide a CFO level strategy for growth. </p>
                    <p>We start by cleaning up your books.</p>
                  </div>
                  <img src={grow} />
                </Card>
              </Col>

              <Col md={6}>
                <Card className={`maintain item ${show.item5 ? 'maintain-animation' : ''}`}  ref={Ref5} style={{visibility: `${show.item5 ? 'visible' : 'hidden'}`}}>
                  <div>
                    <h3>Maintain</h3>
                    <p>We start by cleaning up your books, guarantee a monthly financial report every 7th busines day, and provide a CFO level strategy for growth. </p>
                    <p><i className="fa fa-check"></i>We start by cleaning up your books</p>
                    <p><i className="fa fa-check"></i>Guarantee a monthly financial report every 7th busines day</p>
                    <p><i className="fa fa-check"></i>Provide a CFO level strategy for growth. </p>
                  </div>
                  <img src={maintain} />
                </Card>

                <Card className={`gain item ${show.item6 ? 'gain-animation' : ''}`}  ref={Ref6} style={{visibility: `${show.item6 ? 'visible' : 'hidden'}`}}>
                  <div>
                    <h3>Lots to Gain</h3>
                    <p><i className="fa fa-check"></i>Earn the gift of time</p>
                    <p><i className="fa fa-check"></i>Help business performance</p>
                    <p><i className="fa fa-check"></i>Trusthworthy bookkeeping</p>
                    <p><i className="fa fa-check"></i>Invest wisely</p>
                  </div>
                  <img src={gain} />
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
        <Container>
          <div className="services">
            <div>
              <h2>Services</h2>
              <h5>We bring our expertise to work for your current and future needs; clean up, maintain, and grow.</h5>
            </div>
            <Row className="service-contents">
              <Col lg={4} md={6} className={`service-item1 ${show.item7 ? 'service-item1-animation' : ''}`} animate={show.item7} ref={Ref7} style={{visibility: `${show.item7 ? 'visible' : 'hidden'}`}}>
                <div className="w-90">
                  <div className="service-item-header">
                    <h3 className="text-center">STARTER</h3>
                    <h6 className="text-center text-uppercase text-muted">one time fee</h6>
                    <p className="border-top-blue">
                      We start by cleaning up your books, guarantee a monthly financial report every 7th busines day, and provide a CFO level strategy for growth. 
                    </p>
                  </div>
                  <div className="list-benefit">
                    <p><i className="fa fa-check"></i>An item listing a benefit.</p>
                    <p><i className="fa fa-check"></i>An item listing a benefit.</p>
                    <p><i className="fa fa-check"></i>An item listing a benefit.</p>
                    <p><i className="fa fa-check"></i>An item listing a benefit.</p>
                    <p><i className="fa fa-check"></i>An item listing a benefit.</p>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} className={`service-item2 ${show.item8 ? 'service-item2-animation' : ''}`} animate={show.item8} ref={Ref8} style={{visibility: `${show.item8 ? 'visible' : 'hidden'}`}}>
                <div className="w-90">
                  <div className="service-item-header">
                    <h3 className="text-center">ON-TRACK</h3>
                    <h6 className="text-center text-uppercase text-muted">one time fee</h6>
                    <p className="border-top-blue">
                      We start by cleaning up your books, guarantee a monthly financial report every 7th busines day, and provide a CFO level strategy for growth. 
                    </p>
                  </div>
                  <div className="list-benefit">
                    <p><i className="fa fa-check"></i>An item listing a benefit.</p>
                    <p><i className="fa fa-check"></i>An item listing a benefit.</p>
                    <p><i className="fa fa-check"></i>An item listing a benefit.</p>
                    <p><i className="fa fa-check"></i>An item listing a benefit.</p>
                    <p><i className="fa fa-check"></i>An item listing a benefit.</p>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={6} className={`service-item3 ${show.item9 ? 'service-item3-animation' : ''}`} animate={show.item9} ref={Ref9} style={{visibility: `${show.item9 ? 'visible' : 'hidden'}`}}>
                <div className="w-90">
                  <div className="service-item-header">
                    <h3 className="text-center">EXCEL</h3>
                    <h6 className="text-center text-uppercase text-muted">one time fee</h6>
                    <p className="border-top-blue">
                      We start by cleaning up your books, guarantee a monthly financial report every 7th busines day, and provide a CFO level strategy for growth. 
                    </p>
                  </div>
                  <div className="list-benefit">
                    <p><i className="fa fa-check"></i>An item listing a benefit.</p>
                    <p><i className="fa fa-check"></i>An item listing a benefit.</p>
                    <p><i className="fa fa-check"></i>An item listing a benefit.</p>
                    <p><i className="fa fa-check"></i>An item listing a benefit.</p>
                    <p><i className="fa fa-check"></i>An item listing a benefit.</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <Container fluid>
          <div className="carousel-box">
            <Container>
              <h2>Happy Customers</h2>
              <h5 className="mt-3">Trusted by 100+ real businesses in the Orange County area and beyond. </h5>
            </Container>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              navigation
              scrollbar={{ draggable: true }}
              loop={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <Card className="review">
                  <div className="review-content">
                    There are several ways people can make money online. From selling products to advertising. In this article I am going to explain the concept of contextual advertising.
                  </div>
                  <div className="author">
                    - Jane Doe, CEO & Founder  |  ABC Company
                  </div>
                  <img src={author1}/>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className="review">
                  <div className="review-content">
                    When I was just starting 6th grade I got my first job. Paperboy! Boy, was I excited. At that time I had spent a lot of time actually playing the video game Paperboy, so I knew I had what it took to get the job done. But, its just not that easy. The StarTribune doesn’t just hand out the responsibility of informing their community’s citizenry on a daily basis to just any fool that says they’d like a shot at paper delivery greatness.
                  </div>
                  <div className="author">
                    - Jane Doe, CEO & Founder  |  ABC Company
                  </div>
                  <img src={author2}/>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className="review">
                  <div className="review-content">
                    The collapse of the online-advertising market in 2001 made marketing on the Internet seem even less compelling. Website usability, press releases, online media buys, podcasts, mobile marketing and more – there’s an entire world of internet advertising opportunities to explore.
                  </div>
                  <div className="author">
                    - Jane Doe, CEO & Founder  |  ABC Company
                  </div>
                  <img src={author1}/>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className="review">
                  <div className="review-content">
                    The collapse of the online-advertising market in 2001 made marketing on the Internet seem even less compelling. Website usability, press releases, online media buys, podcasts, mobile marketing and more – there’s an entire world of internet advertising opportunities to explore.
                  </div>
                  <div className="author">
                    - Jane Doe, CEO & Founder  |  ABC Company
                  </div>
                  <img src={author1}/>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className="review">
                  <div className="review-content">
                    I want to talk about to things that are quite important to me. There are love and one my personal inadequacies. The thing is that I’m quite fond of love, I think that it’s a pretty all right deal. However, I’m going to have to admit that my emotional baggage has built up walls that not even a shock and awe campaign could bring down. 
                  </div>
                  <div className="author">
                    - Jane Doe, CEO & Founder  |  ABC Company
                  </div>
                  <img src={author2}/>
                </Card>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </Container>
      <div className="footer">
        <div className="d-flex justify-content-center">
          <div className="w-75">
            <h4 className="text-center text-white">Ready to start saving cash and resources? Schedule a free consultation to learn how to get started, no strings attached. </h4>
            <Button variant="warning" className="footer-btn">Schedule a Free Consultation</Button>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="d-flex justify-content-center">
          <div className="w-75 text-center">
            © Copyright 2020 Haven Financial   -   Privacy   -  Accessibility   -   Terms    |     Designed by AdmarAgency.com
          </div>
        </div>
      </div>
    </React.StrictMode>
  )
}

export default App;
