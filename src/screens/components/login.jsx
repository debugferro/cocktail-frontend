import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import requestAuthentication from '../../requests/authentication';

const validationSchema = yup.object().shape({
  email: yup.string().required('Email is required!'),
  password: yup.string().required('Password is required!'),
});

export default function Login() {
  const { register, handleSubmit, errors } = useForm({ mode: 'onChange', resolver: yupResolver(validationSchema) });
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    dispatch(requestAuthentication(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">E-mail</label>
          <input type="text" name="email" id="email" ref={register()} />
          {errors.email && <p>{errors.email.message}</p>}
        <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" ref={register()} />
          {errors.password && <p>{errors.password.message}</p>}
        <input type="submit" />
      </form>
    </div>
  );
}
