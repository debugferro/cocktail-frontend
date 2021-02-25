import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import requestSignUp from '../../requests/signup';

const validationSchema = yup.object().shape({
  email: yup.string()
    .email('E-mail address format is invalid')
    .required('E-mail address is required'),
  username: yup.string().min(3).max(20),
  password: yup.string().required('Password is required!').min(8).max(20),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Password must match'),
});

export default function SingUpForm() {
  const { register, handleSubmit, errors } = useForm({ mode: 'onChange', resolver: yupResolver(validationSchema) });
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    dispatch(requestSignUp(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" id="email" ref={register()} />
        {errors.email && <p>{errors.email.message}</p>}
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" ref={register()} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" ref={register()} />
        {errors.password && <p>{errors.password.message}</p>}
        <label htmlFor="passwordConfirmation">Password Confirmation</label>
        <input type="password" name="passwordConfirmation" id="passwordConfirmation" ref={register()} />
        {errors.passwordConfirmation && <p>{errors.passwordConfirmation.message}</p>}
        <input type="submit" />
      </form>
    </div>
  );
}
