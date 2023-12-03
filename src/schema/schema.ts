import { boolean, mixed, number, object, ref, string } from 'yup';

export const schema = object({
  name: string()
    .required('поле обязательно')
    .test(
      'Заглавная буква',
      'введите имя с заглавной буквы',
      (value) => !!value && value[0] === value[0].toUpperCase()
    ),
  age: number()
    .required('поле обязательно')
    .min(1, 'минимальный возраст 1')
    .typeError('введите свой возраст'),
  email: string().email('некорректный email').required('поле обязательно'),
  password: string()
    .required('поле обязательно')
    .matches(/[A-Z]/, 'добавьте заглавную букву')
    .matches(/[a-z]/, 'добавьте строчную букву')
    .matches(/[1-9]/, 'добавьте цифру')
    .matches(/[!@#$%^&*()\-_=+{};:,<.>]/, 'добавьте спецсимвол')
    .min(8, 'пароль не содержит 8 символов'),
  repeatPassword: string()
    .required('поле обязательно')
    .min(8, 'пароль не содержит 8 символов')
    .oneOf([ref('password')], 'пароли не совпадают'),
  gender: string().required('поле обязательно'),
  picture: mixed<FileList>().required('поле обязательно'),
  country: string().required('поле обязательно'),
  terms_conditions: boolean()
    .oneOf([true], 'примите условия соглашения')
    .required(),
});
