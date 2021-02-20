import { useState } from 'react';

const useForm = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event, onSubmit) => {
    if (event) {
      event.preventDefault();
    }
    onSubmit(inputs);
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs(() => ({ ...inputs, [event.target.name]: event.target.value }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

export default useForm;
