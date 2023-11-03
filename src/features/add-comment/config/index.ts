import { SelectOption } from '@/shared/ui';

export const commentsType: SelectOption[] = [
  {
    value: '',
    label: 'Тип комментария',
    disabled: true,
  },
  {
    value: 'positive',
    label: 'Позитивный',
  },
  {
    value: 'negative',
    label: 'Негативный',
  },
  {
    value: 'neutral',
    label: 'Нейтральный',
  },
];
