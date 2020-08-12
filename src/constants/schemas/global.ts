import * as Yup from 'yup';

export const username = Yup.string().min(5).max(10).required();
