# Персональный лендинг (статичный)

Сайт собран в одном файле `index.html` с подключёнными шрифтами и стилями. Дополнительные ассеты лежат в `public/` (фавиконка и фото).

## Как открыть локально
- Просто открыть `index.html` в браузере (двойной клик или `open index.html`).
- Или поднять простой сервер в корне репо:
  - `python3 -m http.server 4173`
  - перейти на http://localhost:4173/index.html

## Деплой
- GitHub Pages настроен через workflow `.github/workflows/pages.yml` и публикует содержимое репозитория из ветки `main`.
- Для ручного запуска: в Actions выбрать `Deploy static site to GitHub Pages` → `Run workflow`.

## Структура
- `index.html` — вся разметка и стили.
- `public/` — фавиконка (`favicon.svg`) и фото (`profile.jpg`).
- `.github/workflows/pages.yml` — автодеплой на GitHub Pages.
