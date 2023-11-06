<h1 align="center">Приложение "Movies Hub"</h1>

> RU: Поиск, оценка и рекомендации о фильме в удобном формате.

> EN: Search, evaluate and recommend a movie in a convenient format.

> ВАЖНО: Это демонстрационная версия приложения, сделанная в формате MVP для презентации работы с фреймворком Next.js,
> языком JavaScript и надстройкой TypeScript. В приложении учтены не весь UX и проработаны не все элементы UI.

<details>
  <summary>Описание задания</summary>

Создать мини-приложение для просмотра, оценки и комментирования фильмов.

#### Технические требования

- Использование `React` и `TypeScript`, также можете использовать `NextJs`.
- Использование `React Hooks`.
- Для стилей можете использовать любой подход.

#### Функциональность

- Отображение списка фильмов с их названиями, кратким описанием и постерами.
- Возможность добавить новый фильм в список.
- Возможность оценить фильм (например, от 1 до 5 звезд).
- Возможность просмотра детальной информации о фильме (название, описание, рейтинг, длительность и др.).

#### Тестирование

Покрытие основных функций приложения юнит-тестами.

#### Дизайн

Приложение должно корректно отображаться на разных устройствах: смартфонах, планшетах и десктопе.

#### Документация

Краткая документация по проекту: архитектурные решения, использованные библиотеки и инструменты, инструкции по установке
и запуску.

#### Дополнительные технические требования

- Рассмотреть возможность использования состояния приложения с помощью таких инструментов, как `Effector`, `Redux`
  или `MobX`.
- Реализация маршрутизации с использованием `React Router`.
- Использование архитектурной методологии `Feature Sliced Design`.

#### Дополнительные функциональные требования

- Оставление комментариев к фильму и отображение комментариев других пользователей.
- Поиск фильма по названию.
- Фильтрация фильмов по рейтингу и/или длительности.
- Сортировка фильмов по дате добавления, рейтингу или длительности.
- Сохранение данных приложения (фильмы, оценки, комментарии) в `localStorage`.

#### Работа с внешним API

Если возможно, интегрировать приложение с публичным API для фильмов, чтобы обновлять список фильмов, предоставлять
постеры и другую информацию.

</details>

<details>
  <summary>Выполненные требования</summary>

#### Общие требования

- [x] Приложение разработано с использованием фреймворка Next.js [последней версии](https://nextjs.org) с использованием
  App Router.
- [x] Код чистый и читабельный.
- [x] Архитектурная методология - [FSD](https://feature-sliced.design).
- [x] Отсутствует дублирование кода, приложение разбито на компоненты, отформатировано в едином стиле.
- [x] Приложение адаптировано под различные устройства.
- [x] Корректное отображение в браузерах Chrome, Firefox, Edge.
- [x] Для описание стилей используется TailwindCSS вместе с DaisyUI.

#### Дополнительные требования

- [x] Используется TypeScript.
- [x] В качестве state-менеджера используется Effector вместе с Farfetched.
- [x] Выполнен деплой проекта на хостинг [Vercel](https://vercel.com),
- [x] Написана документация по сборке и настройке проекта.

#### Серверная часть

Для работы приложения используется база данных PostgresQL (хранение комментариев пользователей). Источником сервера
служит NextJS.

</details>

---

Приложение написано с использованием следующего _JavaScipt/TypeScript_ стека:

Клиентская часть:

- [Next.js](https://nextjs.org)
- [moment.js](https://momentjs.com)
- [React Hook Form](https://react-hook-form.com)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [Lint Staged](https://github.com/okonet/lint-staged)

Серверная часть:

- [PostgresQL](https://postgresql.org/)
- [Prisma](https://www.prisma.io)

API:

- [Kinopoisk Dev](https://kinopoisk.dev)

State-менеджер:

- [Effector](https://effector.dev)

Загрузка данных:

- [Farfetched](https://effector.dev)

UI:

- [TailwindCSS](https://tailwindcss.com)
- [Daisy UI](https://daisyui.com)

Архитектурная методология:

- [Feature Sliced Design (FSD)](https://feature-sliced.design)

## Настройка приложения

1. Для корректной работы приложения необходимо указать переменные среды. Название переменных указаны в
   файле [.env.example](.env.example).
2. Файл `.env` располагается в корневой папке проекта.
3. Для получения информации о фильмах необходимо подключить сторонний сервис, предоставляющий доступ к библиотеке
   фильмов. По-умолчанию, приложение настроено на работу с сервисом [Kinopoisk Dev](https://kinopoisk.dev). Для
   использования сервиса необходимо получить [ключ API](https://t.me/kinopoiskdev_bot), затем указать данный ключ в
   файле `.env` вместе с адресом сервера.
4. В приложении используется база данных PostgresQL для хранения комментариев к фильмам. Для подключения к базе данных
   необходимо указать следующие данные: хост, порт, пользователя, пароль, имя базы данных или указать сразу строку для
   подключения.
5. Описание файла `.env`:
   ```bash
   # Kinopoisk API Token (see: https://kinopoisk.dev)
   NEXT_PUBLIC_API_TOKEN=PUT_API_TOKEN_HERE

   # Films Server URL (default: https://api.kinopoisk.dev)
   NEXT_PUBLIC_BASE_URL=PUT_BASE_SERVER_FILMS_URL

   # Next Server URL (default: http://localhost:3000)
   NEXT_PUBLIC_SERVER_URL=PUT_NEXTJS_SERVER_URL

   # Postgres Database User
   POSTGRES_USER=PUT_POSTGRES_USER

   # Postgres Database Password
   POSTGRES_PASSWORD=PUT_POSTGRES_PASSWORD

   # Postgres Database Name
   POSTGRES_DB=PUT_POSTGRES_DATABASE_NAME

   # Postgres Database Default Host with Port
   POSTGRES_HOST=PUT_POSTGRES_HOST_WITH_PORT

   # Postgres Database URL
   POSTGRES_URL=postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}/${POSTGRES_DATABASE}?schema=public&connect_timeout=30&pool_timeout=30&socket_timeout=30
   ```

## Запуск приложения

> ВАЖНО: В качестве пакетного менеджера используется [pnpm](https://pnpm.io)

1. Для работы приложения требуется NodeJS версии `>= 18.18`.
2. Для запуска приложения в режиме разработчика использовать `pnpm dev`.
3. Для сборки использовать `pnpm build`.
4. Для запуска использовать `pnpm start`.

---

## ✨ [Превью](https://movies-hub-2023.vercel.app)

## Автор

👤 Разработчик **Indar Basto** ([@wowblvck](https://github.com/wowblvck))
****