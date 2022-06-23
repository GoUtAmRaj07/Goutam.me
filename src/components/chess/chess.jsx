import React from 'react'
import './chess.css'
import blockchain from '../../assets/block-chain1.jpg'
import Cybersecurity from '../../assets/Cyber-security1.jpg'
import leadership from '../../assets/leadership1.jpg'
import chess1 from '../../assets/chess-21.jpeg'
import chess2 from '../../assets/5dchess1.png'
import sketch1 from '../../assets/sketch-6.jpeg'
import sketch2 from '../../assets/sketch-5.jpeg'
import football from '../../assets/football.jpg'
import fitness2 from '../../assets/fitness-2.jpeg'
import {SiHappycow} from 'react-icons/si'
import {BiAngry} from 'react-icons/bi'
import {RiEmotionHappyFill} from 'react-icons/ri'
import {RiEmotionLaughFill} from 'react-icons/ri'
import {RiEmotionNormalLine} from 'react-icons/ri'
import {RiEmotionFill} from 'react-icons/ri'
// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const chess = () => {
  return (
    <section id="chess">
      <h5>My Other</h5>
      <h2>Interests</h2>

      <Swiper className="container interest__container"
      modules={[Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >

        <SwiperSlide className="interest">
          <div className="interest__avatar">
            <img src={blockchain} alt="chess1" />
          </div>
          <h5 className="intrest__name">BlockChain</h5>
          <small className="intrest__review">Since Block chain is the most popular technology which has a huge potential, it is obvious for anyone to have interest in it Don'you agree with me <SiHappycow/> . But it is not just the interest, I do quite some studying on this technology. And trying to make something out of it.</small>
        </SwiperSlide>


        <SwiperSlide className="interest">
          <div className="interest__avatar">
            <img src={Cybersecurity} alt="chess2" />
          </div>
          <h5 className="intrest__name">Cyber Security</h5>
          <small className="intrest__review">Now as you know I have interest in block chain which make sure that data is shared to everyone and at the same time SECURE.<br/> Sooooooooo...oo Security v important haii. <RiEmotionLaughFill/><RiEmotionLaughFill/><RiEmotionLaughFill/></small>
        </SwiperSlide>


        <SwiperSlide className="interest">
          <div className="interest__avatar">
            <img src={leadership} alt="fitness1" />
          </div>
          <h5 className="intrest__name">LeaderShip</h5>
          <small className="intrest__review">Although I don't boss around like "ye kro wo kro", But when it comes to some group activity and there is no progress some measures have to be taken to make everyone on the group work. (Based on real Story).</small>
        </SwiperSlide>


        <SwiperSlide className="interest">
          <div className="interest__avatar">
            <img src={chess1} alt="fitness2" />
          </div>
          <h5 className="intrest__name">Chess</h5>
          <small className="intrest__review">Now after all those aside from padhai and technology, it's turn of chess which help me to get mad on the computer <BiAngry/><BiAngry/>. Yarrr mtlb it is way to hard to beat the levels after champion(dificulty about 6/10). But this match i won without undoing my steps <RiEmotionHappyFill/></small>
        </SwiperSlide>



        <SwiperSlide className="interest">
          <div className="interest__avatar">
            <img src={chess2} alt="sketch1" />
          </div>
          <h5 className="intrest__name">5d Chess with Multiverse Time Travel</h5>
          <small className="intrest__review">Now normal chess was not good enough and i found this. Naam se cool hai kaafi, But the concept is something I don't understand till now <RiEmotionNormalLine/><RiEmotionNormalLine/>. But khelne me kya hai <RiEmotionHappyFill/><RiEmotionHappyFill/>.</small>
        </SwiperSlide>



        <SwiperSlide className="interest">
          <div className="interest__avatar">
            <img src={fitness2} alt="sketch2" />
          </div>
          <h5 className="intrest__name">Fitness</h5>
          <small className="intrest__review">I also make sure that i don't get lazy and gain a lot of weight, so for that physical activity comes into play. This makes sure that i don't get lazy and helps me keep me fresh and chasma na lag jaye humme <RiEmotionFill/><RiEmotionFill/>.</small>
        </SwiperSlide>



        <SwiperSlide className="interest">
          <div className="interest__avatar">
            <img src={football} alt="sketch3" />
          </div>
          <h5 className="intrest__name">Football</h5>
          <small className="intrest__review">Another thing i lover is football, after all i have been my senior football team caption when i was in 11th. Although i really was happy ki bhaiya log ke hote hue i was declared as the caption <RiEmotionFill/>.</small>
        </SwiperSlide>



        <SwiperSlide className="interest">
          <div className="interest__avatar">
            <img src={sketch1} alt="sketch4" />
          </div>
          <h5 className="intrest__name">Sketching</h5>
          <small className="intrest__review">Another interest of mine izzzzzz sketching. Just check the sketch i made. Not just sketching though, i also like painting, but used to do that. For now sketching is the thing i like.</small>
        </SwiperSlide>




        <SwiperSlide className="interest">
          <div className="interest__avatar">
            <img src={sketch2} alt="sketch4" />
          </div>
          <h5 className="intrest__name">Sketching again</h5>
          <small className="intrest__review">Well i have a made quite some sketches so i thought ki ek aur dikha hi dete hai <RiEmotionFill/><RiEmotionFill/>. </small>
        </SwiperSlide>


      </Swiper>

    </section>
  )
}

export default chess