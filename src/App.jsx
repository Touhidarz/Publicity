import poster from './assets/aiml-img.jpg'
import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <div className="reg-poster">
        <div className="register">
          <a href="https://forms.gle/SHxHgxk2c3WFKCgF8" className="button">Register Here</a>
          </div>
        <div className='poster'>
          <img src={poster} alt="" /> 
          {/* poster */}

        </div>
        </div>
        
      </div>
    </>
  )
}

export default App
