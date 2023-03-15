import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';

import { logout } from '../../redux/slices/userLogin';
import 'react-datepicker/dist/react-datepicker.css';

import styles from './UserProfileForm.module.css';

const UserProfileForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [addUserFormData, setAddUserFormData] = useState({
    firstName: '',
    lastName: '',
    birthday: moment().toDate(),
    email: '',
    image: '',
  });

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    reset,
    control,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: addUserFormData,
  });

  let img = watch('file');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/users/${id}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then((res) => {
        setAddUserFormData({ ...res.data.user, password: '' });
      })
      .catch((err) => {
        alert('Error ' + err);
        dispatch(
          logout({
            userId: '',
            isLoggedIn: false,
          })
        );
        navigate('/', { replace: true });
      });
  }, []);

  useEffect(() => {
    reset(addUserFormData);
  }, [addUserFormData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddUserFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmitData = (fData, e) => {
    e.preventDefault();
    const data = new FormData();

    data.append('firstName', fData['firstName']);
    data.append('image', fData['file'][0]);
    data.append('lastName', fData['lastName']);
    data.append('birthday', fData['birthday']);
    data.append('email', fData['email']);
    data.append('password', fData['password']);

    axios
      .patch(`${process.env.REACT_APP_SERVER_URL}/users/${id}`, data, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
    alert('User updated!');
  };

  const onError = (err) => {
    console.log(err);
  };

  return (
    <div className={styles.userProfileWrapper}>
      <form
        className={styles.userProfileForm}
        onSubmit={handleSubmit(handleSubmitData, onError)}
      >
        <div className={styles.userProfilePicture}>
          <div className={styles.editImageWrapper}>
            <img
              src={
                img === undefined || img === [] || img.length === 0
                  ? addUserFormData.image
                  : URL.createObjectURL(img[0])
              }
              alt='profile_picture'
            />
          </div>
          <input
            type='file'
            id='file'
            style={{ display: 'none' }}
            multiple
            {...register('file')}
          />
          <label htmlFor='file' className={styles.imageLabel}>
            CHANGE AVATAR
          </label>
        </div>
        <div className={styles.allInputs}>
          <div className={styles.formDefaultInputContainer}>
            <label htmlFor='firstName' className={styles.formDefaultLabel}>
              First Name
            </label>
            <input
              id='firstName'
              placeholder='John'
              defaultValue={addUserFormData.firstName}
              className={styles.formDefaultInput}
              {...register('firstName', {
                onChange: (e) => handleInputChange(e),
              })}
            />
            {errors.firstName && (
              <span className={styles.invalidInput}>
                This field is required
              </span>
            )}
          </div>
          <div className={styles.formDefaultInputContainer}>
            <label htmlFor='lastName' className={styles.formDefaultLabel}>
              Last Name
            </label>
            <input
              id='lastName'
              placeholder='Smith'
              defaultValue={addUserFormData.lastName}
              className={styles.formDefaultInput}
              {...register('lastName', {
                onChange: (e) => handleInputChange(e),
              })}
            />
            {errors.lastName && (
              <span className={styles.invalidInput}>
                This field is required
              </span>
            )}
          </div>
          <div className={styles.formDefaultInputContainer}>
            <label htmlFor='email' className={styles.formDefaultLabel}>
              Email
            </label>
            <input
              id='email'
              className={styles.formDefaultInput}
              placeholder='john@smith.com'
              defaultValue={addUserFormData.email}
              {...register('email', {
                // eslint-disable-next-line no-useless-escape
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                onChange: (e) => handleInputChange(e),
              })}
            />
            {errors.email?.type === 'pattern' && (
              <span className={styles.invalidInput}>Enter valid email</span>
            )}
          </div>
          <div className={styles.formDefaultInputContainer}>
            <label htmlFor='birthday' className={styles.formDefaultLabel}>
              Birthday
            </label>

            <Controller
              control={control}
              name='birthday'
              rules={{ required: true }}
              render={({ field }) => (
                <DatePicker
                  id='birthday'
                  className={styles.formDefaultInput}
                  dateFormat='dd-MM-yyyy'
                  selected={moment(field.value).toDate()}
                  onChange={(date) => field.onChange(date)}
                  maxDate={moment().toDate()}
                  error={!!errors.birthday}
                />
              )}
            />
            {errors.birthday && (
              <span className={styles.invalidInput}>
                This field is required
              </span>
            )}
          </div>
          <div className={styles.formDefaultInputContainer}>
            <label htmlFor='password' className={styles.formDefaultLabel}>
              Password
            </label>
            <input
              type='password'
              id='password'
              className={styles.formDefaultInput}
              placeholder='******'
              {...register('password', {
                onChange: (e) => handleInputChange(e),
              })}
            />
          </div>
          <div className={styles.formDefaultInputContainer}>
            <label htmlFor='passwordRepeat' className={styles.formDefaultLabel}>
              Repeat Password
            </label>
            <input
              type='password'
              id='passwordRepeat'
              placeholder='******'
              className={styles.formDefaultInput}
              {...register('passwordRepeat', {
                onChange: (e) => handleInputChange(e),
                validate: {
                  passEqual: (value) =>
                    value === getValues().password || "Password doesn't match",
                },
              })}
            />
            {errors.passwordRepeat?.type === 'passEqual' && (
              <span className={styles.invalidInput}>Passwords don't match</span>
            )}
          </div>
        </div>
        <button type='submit' className={styles.formSubmitBtn}>
          SAVE
        </button>
      </form>
    </div>
  );
};

export default UserProfileForm;
