import { useState } from 'react'
import triangle_up from './assets/triangle_up.png'
import triangle_down from './assets/triangle_down.png'
import triangle_left from './assets/triangle_left.png'
import triangle_right from './assets/triangle_right.png'
import seal from './assets/seal.png'
import './App.css'
import img1 from './assets/img1.jpeg'
import img2 from './assets/img2.jpeg'
import img3 from './assets/img3.jpeg'
import img4 from './assets/img4.jpeg'
import img5 from './assets/img5.jpeg'
import heart1 from './assets/heart1.png'
import heart2 from './assets/heart2.png'





function App() {
  const [slidenum, setslide] = useState(0)
  const [sealed, setSealed] = useState(false)

  const onSealClick = () => {
    onSealClick_animate()
    setSealed(true)                  // add animation class via state
    setTimeout(() => setslide(1), 1500)
  }

  const onYesClick = () => {
    setslide(2)
  }

  const slides = [
    <S1 key="s1" onSealClick={onSealClick} sealed={sealed} />,
    <S2 key="s2" onYesClick={onYesClick} />,
    <S3 key="s3" />
  ]

  return slides[slidenum]
}

function S1({ onSealClick, sealed }){
  return(
    <div className="letterbag">
      <img onClick={onSealClick} src={seal} className={`seal ${sealed ? 'sealanimate' : ''}`} alt="Seal" />
      <img src={triangle_down} className="triangle" id="tridown" alt="Triangle" />
      <img src={triangle_up} className="triangle" id="triup" alt="Triangle" />
      <img src={triangle_right} className="triangle" id="triright" alt="Triangle" />
      <img src={triangle_left} className="triangle" id="trileft" alt="Triangle" />
    </div>
  )
}

function S2({onYesClick}){
  return(
    <div className="slide2">
      <h1 className="inspiration-regular fadein">I love you <br/> Aishni</h1>
      <p className="fadein lettertext">
        To the only woman my heart belongs to, <br/><br/>
        I know I've said it a lot of times before but I love you more than I can ever express. I swear on everything I hold dear that I never lied whenever I said "I love you", "I miss you", "I need you", "I am sorry", "You look cute", "You look pretty", "You are smart", "You are funny", "YOU ARE THE BEST" and that I want to marry you and grow old together. I know these words might sound fake to you but to me they are as real as my own existence. Even as I'm writing this I can remember all the times I have cried when you wanted to break up, all the times I've felt like I don't deserve you, all the times I've felt that I probably don't mean a lot to you. But at the same time I can recall all the times I've felt like the happiest man alive because of something sweet you said, all the times you've told me that you love me and all the times you've shown that you do care. To be honest I still have a lot of questions that you probably won't answer - maybe because you think the answers will hurt me or maybe because you just don't feel like answering; I only request you to let me stay with you for the rest of my life and give me the answers whenever you feel like it. I really never want to be separated from you even if we have to do long distance; but I know you don't want to so I'll not talk anymore about that. I love you and I always will. You will always be my top priority no matter what and You will always be the only woman I love intimately. I know we started dating not even two months ago but even in that short time I feel like my love for you has only grown. I only wish to give you a chance to feel the same for me. I want you to someday tell me every thought you have even if you think there's nothing I can do about it. I want to explore the deepest parts of your soul and understand you so intimately that we can never have secrets between us. I want to experience everything with you, Aishni. I really really love you the most and I mean every word of affection I tell you. So please don't ever leave me. Thank you for loving me, Aishni. 
      </p>

      <div className="gallery">
        <img src={img1} alt="Gallery Image 1" id='img1' className="gallery-image fadein" />
        <img src={img2} alt="Gallery Image 2" id='img2' className="gallery-image fadein" />
        <img src={img3} alt="Gallery Image 3" id='img3' className="gallery-image fadein" />
        <img src={img4} alt="Gallery Image 4" id='img4' className="gallery-image fadein" />
        <img src={img5} alt="Gallery Image 5" id='img5' className="gallery-image fadein" />
      </div>

      <div className="question inspiration-regular fadein">
        <img src={heart2} alt="Heart" className="heartimg" />
        <h1>Aishni, Will you be my Valentine?</h1>
        <img src={heart1} alt="Heart" className="heartimg" />
        <div className="buttons">
           <button onClick={onYesClick} className="yesbutton">Yes</button> <button onClick={onYesClick} className="yesbutton redbutton">Yes (but in red)</button>
        </div>
       
      </div>
      
    </div>
  )
}



function S3(){
  return(
    <div className="slide3">
      <h1 className="endtext fadein">YAYAYAYYAYAYAYAYAY <br/> I LOVE YOUUUU 💗💗💗</h1>
      <img className="gif" src={'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTF1c3YzOWpzcHU4NnV6dnBzY2JlMzd4bW8xMXZtMDl2cDJzd3hpdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SYo1DFS8NLhhqzzjMU/giphy.gif'}/>
    </div>
  )
}


function onSealClick_animate(){
  const seal = document.querySelector('.seal');
  seal.classList.add('sealanimate');
  setTimeout(() => {
    seal.style.display = 'none';
  }, 1000); // Adjust the timeout to match the animation duration

  const tridown = document.getElementById('tridown');
  const triup = document.getElementById('triup');
  const triright = document.getElementById('triright');
  const trileft = document.getElementById('trileft');

  tridown.classList.add('tridownanimate');
  triup.classList.add('triupanimate');
  triright.classList.add('trirightanimate');
  trileft.classList.add('trileftanimate');
  
}

export default App

