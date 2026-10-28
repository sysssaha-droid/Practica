# EventFlow MVP

Навчальний проєкт MVP платформи EventFlow, розроблений у межах практики.

## Структура проєкту

- `backend/` — REST API на Node.js + Express (TypeScript). Надає сторінку `/` з привітанням та ендпоінт `/health` для перевірки стану сервера.
- `frontend/` — клієнтська частина на Next.js (React).

## Запуск

### Бекенд

```bash
cd backend
npm install
npm run dev        # режим розробки (ts-node-dev)
npm run build && npm start   # виробничий запуск (порт 3000 за замовчуванням)
```

### Фронтенд

```bash
cd frontend
npm install
npm run dev        # http://localhost:3000
```

## Стабільна версія

Стабільна версія зафіксована анотованим тегом **v1.0.0**. Опис змін — у файлі [RELEASE_NOTES.md](RELEASE_NOTES.md).
