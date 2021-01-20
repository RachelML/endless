import React, { useState, useEffect } from 'react';



const HowItWorks = (props) => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('stepNumber');

  useEffect(() => {
    const sortArray = type => {
      const types = {
        stepNumber: 'stepNumber',
        versionContent: 'versionContent',
      };
      //sorting props in order
      const sortProperty = types[type];
      const sorted = [...props.howData].sort((a, b) => a[sortProperty] - b[sortProperty]);
      setData(sorted);
      console.log(sorted)
      

    };
    sortArray(sortType);
  }, [sortType]);
  
  console.log(props)

  return (
    <div className="Works-footer">
        <p className="Works-title">How It Works </p>

        <div className="Data-container">

  {/* mapping through stepNumber  */}
            {data.map(({ versionContent, stepNumber }) => {



                return <div >
                    <div className="Works-number">
                      
                        0{stepNumber}
                    </div>
  {/* mapping through title, body   */}

                    {versionContent.map(({ title, body }) => {
                        return <div className="Delivery-info">
                            <h3> {title}</h3>
                            <p className="Detail-text">{body}</p>
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
