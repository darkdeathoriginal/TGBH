import * as z from 'zod'


export const NewPasswordSchema = z.object({
    password: z.string().min(8,{
        message: 'Password must be at least 8 characters'
    }),
});



export const ResetSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email address'
    }),
});


export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email address'
    }),
    password: z.string().min(1,{
        message: 'Password is required'
    }),
    code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email address'
    }),
    password: z.string().min(8, {

        message: 'Password must be at least 8 characters'
    }),
    name: z.string().min(1, {
        message: "Name is required",
    }),
});
