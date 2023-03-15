const SectionTitle = ({ title, button }) => {
  return (
    <div style={{ display: 'flex', alignText: 'flex-end', marginTop: '4rem' }}>
      <span className='fresh-new unnamed-character-style-5'>{title}</span>
      <span
        style={{
          borderBottom: '1px solid #D8D8D8',
          flexGrow: '1',
          marginBottom: '0.7rem',
          marginLeft: '1rem',
        }}
      ></span>
      {button}
    </div>
  );
};

export default SectionTitle;
