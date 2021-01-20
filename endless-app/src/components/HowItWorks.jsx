import React from 'react'


const HowItWorks = (props) => {

  // console.log(props)
 console.log(props)


    return (
      
      <div className = "Works-footer">
        <p className ="Works-title">How It Works </p>

        <div className = "Data-container">
            { props.works.map( ( {versionContent, stepNumber} ) => {
              console.log({stepNumber})
  return <div > 
      <div className = "Works-number">
          0{stepNumber} 
          </div>

              {versionContent.map(({title,body})=> {
                
                return <div className ="Delivery-info">
                  <h3> {title}</h3>
                  <p className ="Detail-text">{body}</p>
          
                  </div>

              }
              
              
              
              )}

  
  </div>

  
} 

)}
        </div>

        
        
      </div>
    );
  }
  
  export default HowItWorks;
  