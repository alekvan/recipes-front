import CardList from '../components/Cards/CardList/CardList';
import SectionTitle from '../components/SectionTitle';

const Brunch = () => {
  return (
    <>
      <SectionTitle title={'Brunch'} />
      <CardList filterByCategory={'brunch'} />
    </>
  );
};

export default Brunch;
