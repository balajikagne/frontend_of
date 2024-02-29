import React, { useEffect, useState } from 'react';
import { filterItem } from '../actions/MenuActions';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Menusa from '../components/Menus';

function NotifyMap({ notifyME }) {
  const dispatch = useDispatch();
  const data = useSelector((item) => item.getAllitemsReducer);
  const [Cmaker, setCmaker] = useState(true);
  const [isReplacing, setIsReplacing] = useState(false); // New state for replacement loader
  const { items, loading, error } = data;

  function Search(e) {
    setIsReplacing(true); // Start showing the replacement loader
    dispatch(filterItem(e));
    setCmaker(false);
  }

  useEffect(() => {
    setIsReplacing(false); // Hide the replacement loader when new data is available
  }, [items]);

  return (
    <div>
      {Cmaker ? (
        <>
          <div className='outnoti' onClick={() => Search(notifyME.name)}>
            <div className='img-notify'>
              <img src={notifyME.img} alt={notifyME.headline} />
            </div>
            <div className='des-notify'>
              <h2>{notifyME.headline}</h2>
              <br />
              <p>{notifyME.paragraph}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='democ'>
            {loading || isReplacing ? (
              <Loading /> // Show loading indicator while data is being fetched or replaced
            ) : error ? (
              <Error error="We have been working on Testygo app for two days" />
            ) : (
              items.map((menu) => (
                <div key={menu._id} style={{ margin: '-4px' }}>
                  <Menusa menu={menu} />
                </div>
              ))
            )}
          </div>
          <div style={{ marginTop: '30px' }}>
            <button className='btn' onClick={() => setCmaker(true)}>
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default NotifyMap;

