import CardList from '../components/Cards/CardList/CardList';
import SectionTitle from '../components/SectionTitle';

const Breakfast = () => {
  return (
    <>
      <SectionTitle title={'Breakfast'} />
      <CardList filterByCategory={'breakfast'} />
    </>
  );
};

export default Breakfast;
