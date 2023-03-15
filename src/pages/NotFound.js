import { useNavigate } from 'react-router-dom';

import '../App.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: 'absolute',
        left: '0',
        top: '0',
        right: '0',
        bottom: '2rem',
        marginTop: 'auto',
        background: 'white',
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '5rem',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: '10000',
      }}
    >
      <div
        style={{
          fontSize: '12rem',
          fontFamily: 'Roboto Slab',
          fontWeight: 'bold',
        }}
      >
        <span style={{ color: '#A5A5A5' }}>4</span>
        <span style={{ color: '#F0972A' }}>0</span>
        <span style={{ color: '#A5A5A5' }}>4</span>
      </div>
      <div style={{ fontSize: '3.5rem', color: '#96BB36', fontWeight: '700' }}>
        Not Found
      </div>
      <div>{`(Something is cooking, but not here :))`}</div>
      <br />
      <div
        id='link-home'
        style={{
          fontSize: '2rem',
          fontFamily: 'Roboto Slab',
          fontWeight: '900',
          color: '#F0972A',
        }}
        onClick={() => {
          navigate('/');
        }}
      >
        Take me back to the front page!
      </div>
    </div>
  );
};
export default NotFound;
