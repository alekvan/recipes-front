import NewUserForm from '../components/NewUserForm/NewUserForm';
import SectionTitle from '../components/SectionTitle';

const CreateUser = () => {
  return (
    <>
      <SectionTitle title={'Create Account'} />
      <NewUserForm />
    </>
  );
};

export default CreateUser;
