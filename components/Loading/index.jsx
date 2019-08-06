import './Loading.scss';

const Loading = ({ text = 'Carregando...', progress }) => {
  return (
    <div className="loading flex flex-center flex-column">
      <div>
        <div className="dice">
          
          <div className="face first-face">
            <div className="dot"></div>  
          </div>
          
          <div className="face second-face">
            <div className="dot"></div>  
            <div className="dot"></div>  
          </div>
          
          <div className="face third-face">
            <div className="dot"></div>  
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          
          <div className="face fourth-face">
            <div className="column">
              <div className="dot"></div>  
              <div className="dot"></div>  
            </div>
            <div className="column">
              <div className="dot"></div>  
              <div className="dot"></div>  
            </div>    
          </div>
          
          <div className="face fifth-face">
            <div className="column">
              <div className="dot"></div>  
              <div className="dot"></div>  
            </div>
            <div className="column">
              <div className="dot"></div>
            </div>
            <div className="column">
              <div className="dot"></div>  
              <div className="dot"></div>  
            </div>    
          </div>
          
          <div className="face sixth-face">
            <div className="column">
              <div className="dot"></div>  
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="column">
              <div className="dot"></div>  
              <div className="dot"></div>  
              <div className="dot"></div>
            </div>    
          </div>
          
        </div>
    
        <div className="progress">
          <span className="progress__bar" style={{ '--progress': `${progress}%` }}></span>
        </div>
        <div className="text--center">
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
