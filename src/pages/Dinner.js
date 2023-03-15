import CardList from '../components/Cards/CardList/CardList';
import SectionTitle from '../components/SectionTitle';

const Dinner = () => {
  return (
    <>
      <SectionTitle title={'Dinner'} />
      <CardList filterByCategory={'dinner'} />
    </>
  );
};

export default Dinner;
