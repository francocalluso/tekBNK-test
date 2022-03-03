import { useState, useEffect } from 'react';

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [incorrecto, setIncorrecto] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors(validateForm(form));
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    setErrors(validateForm(form));
    if (
      Object.keys(errors).length === 0 &&
      form.name !== '' &&
      form.password !== ''
    ) {
      setLoading(true);
      setTimeout(() => (setIncorrecto(true), setLoading(false)), 1500);
    } else {
      setIncorrecto(false);
    }
  };

  //un useEffect que reconoce los cambios en el form y valida a cada cambio
  useEffect(() => {
    setErrors(validateForm(form));
  }, [form]);


  // un useEffect que setea errors vacío cuando se recarga la pagina
  useEffect(() => {
    setErrors({});
  }, []);

  return {
    form,
    errors,
    loading,
    incorrecto,
    handleChange,
    handleSubmit,
  };
};