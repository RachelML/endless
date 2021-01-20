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
      const sortProperty = types[type];
      const sorted = [...props.howData].sort((a, b) => a[sortProperty] - b[sortProperty]);
      setData(sorted);
      console.log(setData)
    };
    sortArray(sortType);
  }, [sortType]);

  return (
    <div className="Data-container">


      { data.map(({ versionContent, stepNumber }) => {
        console.log({ stepNumber })
        return <div >
          <div className="Works-number">
            0{stepNumber}
          </div>

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
  );
}

export default HowItWorks;
