import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { fetchLogin, type LoginBody } from '@entities/user';

import { useAppDispatch } from '@shared/hooks';

import type { FC } from 'react';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<LoginBody>();

    const handleLoginSubmit = (body: LoginBody) => {
        dispatch(fetchLogin(body))
            .unwrap()
            .catch(() => {
                setError('root', { message: 'Неправильный логин или пароль' });
            });
    };

    return (
        <Box
            boxSizing='border-box'
            className={className}
            component='form'
            display='flex'
            flexDirection='column'
            gap='16px'
            justifyContent='center'
            padding='16px'
            onSubmit={handleSubmit(handleLoginSubmit)}
        >
            <Typography
                fontSize='20px'
                textAlign='center'
            >
                Авторизация
            </Typography>
            <TextField
                label='Логин'
                size='small'
                {...register('username', { required: true })}
            />
            <TextField
                label='Пароль'
                size='small'
                type='password'
                {...register('password', { required: true })}
            />
            {errors.root && (
                <Typography
                    color='error'
                    textAlign='center'
                >
                    {errors.root.message}
                </Typography>
            )}
            <Button
                size='large'
                type='submit'
                variant='contained'
            >
                Войти
            </Button>
        </Box>
    );
};
