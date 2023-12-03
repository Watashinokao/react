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
    .matches(/[!@#$%^&*()\-_=+{};:,<.>]/, 'добавьте спецсимвол'),
  repeatPassword: string()
    .required('поле обязательно')
    .oneOf([ref('password')], 'пароли не совпадают'),
  gender: string().required('поле обязательно'),
  picture: mixed<FileList>()
    .required('поле обязательно')
    .test('поле обязательно', 'поле обязательно', (value) => value.length > 0)
    .test('размер', 'максимальный размер 5мб', (value) => {
      return !!value.length && value[0].size <= 5242880;
    })
    .test('тип файла', 'тип файла не поддерживается', (value) => {
      return (
        !!value.length && ['image/jpeg', 'image/png'].includes(value[0].type)
      );
    }),
  country: string().required('поле обязательно'),
  terms_conditions: boolean()
    .oneOf([true], 'примите условия соглашения')
    .required(),
});
