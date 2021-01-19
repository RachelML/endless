import React from 'react'


const HowItWorks = (props) => {

  // console.log(props)
 console.log(props)

 props.works.map( ( {stepNumber} ) => {
  console.log(( {stepNumber} ))
 return <div className = "Works-number"> 
 {stepNumber} 
 
 </div>
} 

)


    return (
      
      <div className = "Works-footer">
        <p className ="Works-title">How It Works </p>

        <div className = "Data-container">
            { props.works.map( ( {versionContent, stepNumber} ) => {
  return <div className = "Works-number"> 0{stepNumber} 
              {versionContent.map(({title,body})=> {
                return <div>
                  <h3> {title}</h3>
                  <p>{body}</p>
          
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
  