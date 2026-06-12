---

## Handoff: 2026-06-12 15:13:05 +0400

### Current Task State
Завершён большой дизайн-рефреш сайта Grepfox (Payload 3 + Next.js 15). Ветка design/modern-refresh смержена в main (fast-forward), после мержа добавлено ещё 7 коммитов с фиксами прямо в main (мобильное меню, соцссылки, ретушь hero и пр.). Последний коммит: 5f174ae (hero заменён на код-крупный-план без брендов). Всё проверено: tsc чисто, production build проходит, dev-сервер на localhost:3000.

### Key Decisions
- Анимации: один глобальный клиентский MotionRuntime (IntersectionObserver) + CSS-селекторы существующих блоков вместо data-атрибутов в каждом серверном компоненте — серверные блоки не тронуты; включается инлайн-скриптом `html[data-motion='on']`, уважает prefers-reduced-motion.
- Reveal-классы нельзя вешать на элементы, чей className React пересобирает (аккордеон «исчезал» — класс is-in затирался); цель reveal перенесена на статичные контейнеры.
- Сетки с границами (feature-grid, logo-wall): отказ от nth-child-правил в пользу «каждая ячейка рисует right/bottom границу, рамка клипает внешний 1px» — работает при любом числе колонок/элементов.
- Ритм страниц: один оранжевый accentBlock в середине каждой страницы, нижние CTA — тёмные (cta-banner--dark). Отзывы — типографические, без фото.
- Сид upsert'ится по slug; ensureMedia ищет media по alt — при смене alt в манифесте создаются дубликаты `-1.jpg` (однажды пришлось чистить вручную). Менять alt синхронно: манифест + sqlite UPDATE.
- Замена картинок: те же имена файлов + точные размеры вариантов (Unsplash w/h/fit=crop), чтобы не трогать ссылки в БД.
- Шрифты Space Grotesk/Inter оставлены сознательно (идентичность DS), хотя они в «reflex-reject» списке скилла.
- Заливочные брендовые иконки рендерятся одним path с fill-rule=evenodd (сплиттер по M ломает вырезы) — флаг FILLED_ICONS в Icon.tsx.
- Юр. страницы: паттерн «short version карточками + полный текст»; terms прямо говорит, что метрики сайта информационные, SLA только в договоре.

### Modified Files
- site/src/components/site/: MotionRuntime.tsx (новый), NavLinks.tsx (новый), MobileMenu.tsx (новый), Header.tsx, Footer.tsx
- site/src/components/ds/: Icon.tsx (linkedin/x-social/instagram + filled-рендер), Accordion.tsx (grid-rows анимация)
- site/src/blocks/FeatureGrid/Component.tsx (обёртка feature-grid-frame)
- site/src/styles/: utilities/_reveal.scss (новый), components/_nav.scss (sticky + бургер + mobile-menu), _buttons.scss, _accordion.scss, _footer.scss, blocks/_feature-grid.scss, _logo-wall.scss, _cta-banner.scss, _pricing.scss, _marquee.scss, _numbers.scss, abstracts/_tokens.scss (фотофильтр)
- site/src/seed/content.ts (~6 сервисов-лендингов, все страницы), seed/images.ts (5 картинок заменено + svc-training)
- site/src/globals/Footer.ts (legal maxRows 6), payload-types.ts
- site/src/app/(frontend)/layout.tsx (inline motion-скрипт, suppressHydrationWarning, MotionRuntime)

### Blockers / Open Questions
- Отзывы (7 шт.) — вымышленные люди с метриками результатов; перед продакшеном заменить реальными (FTC-риск).
- Телефон +1 (415) 555 0123 — заглушка, и это US-код при «глобальном» позиционировании.
- Соцссылки — предположительные URL (linkedin.com/company/grepfox, x.com/grepfox, instagram.com/grepfox); подставить реальные.
- ds/css/tokens.css (исходник DS в корне репо) разошёлся с site/src/styles/abstracts/_tokens.scss по --photo-filter/--photo-tone — пользователь отклонил синхронизацию, решить позже.
- Privacy/Terms — шаблонные, нужен юрист (нет governing law; «across regions» мягче GDPR-нормы).
- Playwright MCP браузер сломан политикой macOS («DevTools remote debugging is disallowed by the system admin») — визуальные проверки делались через curl/HTML и sharp-рендеры.

### Next Steps
1. Заменить вымышленные отзывы и кейс «40%» реальными данными клиента.
2. Подставить реальные соцссылки и телефон (или убрать телефон).
3. Решить судьбу ds/ исходников (синхронизировать tokens или объявить site источником правды).
4. Прогнать юр. страницы через юриста.
5. Опционально: переименовать файлы home-hero-server-room*.jpg (контент уже не серверная) с обновлением БД.

### Critical Context
- Запуск: `npm run dev` из site/ (порт 3000; если занят — уходит на 3001, старые вкладки показывают устаревшее).
- Сид: `npm run seed` — upsert по slug, безопасно перезапускать; после смены alt картинок сначала sqlite UPDATE media, иначе дубликаты `-1.jpg`.
- БД: site/grepfox.db (sqlite). Таблица media; footer-глобал в footer/footer_columns_links.
- public/media в .gitignore — источник правды по картинкам: seed/images.ts (манифест URL).
- После изменения iconOptions/схем: `npm run generate:types`.
- Сервис-лендинги: слаги ai-agents, automation-integrations, web-platforms, analytics-reporting, technical-maintenance, team-training.
- Скелет сервис-страницы: numbers → sectionHead+featureGrid(6) → accentBlock (оранжевый) → processTimeline → logoWall(12) → testimonial (без фото) → FAQ(4) → тёмный CTA.
- Унификация текстов: пилот «2–4 weeks», ответ «one business day», провайдеры «OpenAI · Claude · self-host».

### Model Summary
- Grepfox: маркетинговый сайт, Payload 3 + Next 15, тёмная Swiss-Engineer DS (оранжевый hazard-акцент), весь контент в src/seed/content.ts.
- За сессию: слой движения (reveal/счётчики/sticky-шапка), микро-интеракции, плавный аккордеон, починены сетки границ под любые колонки.
- 6 сервисов = 6 полноценных лендингов по единому скелету; добавлен Team Training & Enablement.
- Аудит текстов: «Five/Six practices» выровнено, SLA-обещания смягчены (15 min → target per SLA), 40%-кейс оставлен один.
- Картинки: заменены кукла, AI-буквы, платы с чипами, серверные стойки; hero — кинематографичный крупный план кода без чужих брендов (ретушь с лого отвергнута, скрипт удалён).
- Фотофильтр: цвет сохраняем (grayscale 0.15), унификация тёплой multiply-вуалью 0.1.
- Глобальное позиционирование: без US/IL/Tel Aviv/NYC; «Remote · Worldwide»; домен grepfox.com; «NO BOTS» → «HUMANS + AGENTS».
- /about и юр. страницы пересобраны в дизайн-элементы; /ai-solutions превращена в воронку (кликабельные карточки, мост на training).
- Мобильное меню (бургер + grid-rows панель), активная страница подсвечивается в навигации (NavLinks/usePathname).
- Соцссылки в футере: LinkedIn/X/Instagram (simple-icons, filled-рендер), GitHub убран.
- Всё в main (165fd2d), build зелёный; remote у репо нет — ничего не пушилось.

### Handoff Context (paste into next session)
Прочитай docs/handoff/HANDOFF.md (последняя запись) и site/README.md. Проект: маркетинговый сайт Grepfox на Payload 3 + Next.js 15, рабочая директория site/. Контент сидится из src/seed/content.ts (npm run seed, upsert). Дизайн-рефреш завершён и смержен в main. Открытые хвосты: вымышленные отзывы, телефон-заглушка, предположительные соцссылки, юр. ревью privacy/terms, рассинхрон ds/css/tokens.css с site-токенами. Спроси пользователя: «Продолжаем с хвостов (отзывы/контакты/соцссылки) или новая задача?»

---
