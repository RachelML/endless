import React, { useState, useEffect } from 'react';
import Axios from 'axios'




const HowItWorks = (props) => {
  const [data, setData] = useState([]);
  const [dataSort, setDataSorted] = useState([]);


  useEffect(() => {

    const fetchData = async () => {
      const result = await Axios(
        'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge',
      );
 
      setData(result.data);

      
      const sorted =  [...result.data].sort((a, b) => a['stepNumber'] - b['stepNumber'])
            setDataSorted(sorted);


      
    };


    fetchData();

  }, []);
  

  return (
    <div className="Works-footer">
        <p className="Works-title">How It Works </p>

        <div className="Data-container">

  {/* mapping through stepNumber  */}
            {dataSort.map(({ versionContent, stepNumber }) => {

   

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
