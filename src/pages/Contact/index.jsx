import { useForm, Controller } from 'react-hook-form';
import BaseLayout from '../../layouts/BaseLayout';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Stack, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const contactSchema = yup.object({
  name: yup.string().trim().required().min(5),
  email: yup.string().trim().email().required(),
  emailConfirmation: yup
    .string()
    .trim()
    .email()
    .required()
    .oneOf([yup.ref('email')], 'Email does not match'),
  message: yup.string().trim().required().max(100),
});

const Contact = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(contactSchema),
    reValidateMode: 'onSubmit',
  });

  const onSubmit = (data) => {
    console.log(data, 'Data');
    navigate('/', {
      state: { status: 'error', message: 'This is a success message!' },
    });
  };

  return (
    <BaseLayout>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap='20px'>
          <Controller
            control={control}
            name='name'
            render={({ field }) => (
              <TextField
                fullWidth
                error={errors.hasOwnProperty('name')}
                label='Name'
                helperText={errors.hasOwnProperty('name') ? errors.name.message : ''}
                {...field}
              />
            )}
            defaultValue=''
          />
          <Controller
            control={control}
            name='email'
            render={({ field }) => (
              <TextField
                fullWidth
                error={errors.hasOwnProperty('email')}
                label='Email'
                helperText={errors.hasOwnProperty('email') ? errors.email.message : ''}
                {...field}
              />
            )}
            defaultValue=''
          />
          <Controller
            control={control}
            name='emailConfirmation'
            render={({ field }) => (
              <TextField
                fullWidth
                error={errors.hasOwnProperty('emailConfirmation')}
                label='Email Confirmation'
                helperText={
                  errors.hasOwnProperty('emailConfirmation') ? errors.emailConfirmation.message : ''
                }
                {...field}
              />
            )}
            defaultValue=''
          />
          <Controller
            control={control}
            name='message'
            render={({ field }) => (
              <TextField
                fullWidth
                error={errors.hasOwnProperty('message')}
                helperText={errors.hasOwnProperty('message') ? errors.message.message : ''}
                multiline
                minRows={4}
                placeholder='Message'
                {...field}
              />
            )}
            defaultValue=''
          />
          <Button variant='contained' type='submit'>
            Send
          </Button>
        </Stack>
      </form>
    </BaseLayout>
  );
};

export default Contact;
