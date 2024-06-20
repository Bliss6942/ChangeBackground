import './App.css'
import img from './assets/bycicle.svg'
import img1 from './assets/background.svg'
import img2 from './assets/ocean.svg'
import { useState } from 'react'

function App() {

  const [activeImage, setActiveImage] = useState(false)
  const [image, setImage] = useState(img1) 

  const onActive = () => {
    setActiveImage(true)
  }
  const onHidden = () => {
    setActiveImage(false)
  }
  const handleImg1 = () => {
    setImage(img1)
  }
  const handleImg2 = () => {
    setImage(img2)
  }


  return (
    <>
      <div className= 'Main'>
        <div className='Main__container'>
          <div className='background_container'>
            <img src={image} alt="" className='backgound_img'/>
          </div>
          <div className='bycicle__container'>
              <img src={img} alt="" className='bycicle_img'/>
              <div className='description'>
                <div className='des1'>
                  Thematic Backgrounds
                </div>
                <div className='des2'>
                  Whimsical handcrafted backdrops in different styles
                </div>
              </div>
          </div>
          <div className='button'>
            <button onClick={onActive} className={`${activeImage ? "hidden" : "active"} `}>Edit background</button>
          </div>
          {activeImage === true &&
            <div className='modal'>
          <div>
            <div className='close'>
              <button onClick={onHidden} className='close_btn'>Close</button>
            </div>
          </div>
          <div className='flex justify-center items-center w-full h-auto'>
            <img
              src={img1}
              alt=''
              className='one'
              onClick={handleImg1} />
          </div>
          <div className='flex justify-center items-center w-full h-auto'>
            <img
              src={img2}
              alt=''
              className='two'
              onClick={handleImg2} />
          </div>
        </div>
      }
        </div>
        
      
      </div>
      
      
    </>
  )
}


export default App
