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

## Handoff: 2026-06-12 18:03:59 +0400

### Current Task State
Блог полностью построен, отполирован и смержен в main (рабочая ветка feature/blog удалена). Полный цикл: спека → план → subagent-driven исполнение (8 задач) → пользовательская итерация (баг фильтров, дизайн-пасс, рассылка, path-URL категорий, SEO, sitemap/robots). Все проверки зелёные: tsc, production build (35 страниц), e2e в реальном браузере через playwright-skill. Последний коммит 8dec3c3, дерево чистое, dev-сервер на :3000.

### Key Decisions
- Категории постов: отдельная коллекция; авторы — текстовое поле («Grepfox Team» в сиде, без вымышленных людей); тело поста — один богатый lexical richText, не блоки.
- Фильтр категорий — path-URL `/blog/category/[slug]` (SSG + generateMetadata), старые `?category=` получают permanentRedirect; листинг вынесен в общий серверный компонент BlogListing.
- Баг «фильтры не работают»: MotionRuntime гонял reveal по usePathname, query-навигация не меняет pathname → новые карточки оставались opacity:0. Исправлено НЕ через useSearchParams (потребовал бы Suspense в layout), а через постоянный IntersectionObserver + MutationObserver на body — самовосстанавливается при любой замене DOM.
- `_status: published` фильтр обязателен во ВСЕХ публичных запросах постов (листинг, slug-lookup, generateStaticParams, generateMetadata, sitemap) — эмпирически доказано, что без него черновики утекают; `draft: false` не нужен (дефолт local API).
- Рассылка — настоящая, через CMS: коллекция Subscribers + server action subscribe() (пре-чек дубликата, lowercase). Писем не шлёт — только сбор адресов.
- SEO: metadataBase в корневом layout (NEXT_PUBLIC_SERVER_URL || grepfox.com) — все canonical/og:image абсолютные; metaTitle страниц в сиде БЕЗ бренда (шаблон layout сам добавляет «· Grepfox»); title постов без суффикса «Blog».
- Reveal-классы только на статичных контейнерах (className не пересобирается клиентским React) — .post-card безопасен, .post-rail НЕ добавлять (transform ломает position:sticky).
- Индексы в Posts: category и publishedAt (пути запросов листинга).

### Modified Files
- site/src/collections/: Categories.ts, Posts.ts, Subscribers.ts (новые) + payload.config.ts
- site/src/app/(frontend)/blog/: page.tsx, [slug]/page.tsx, category/[category]/page.tsx, actions.ts (новые)
- site/src/app/: sitemap.ts, robots.ts (новые); (frontend)/layout.tsx (metadataBase), page.tsx и [slug]/page.tsx и services/[slug]/page.tsx (generateMetadata расширены)
- site/src/components/site/: PostCard.tsx, BlogListing.tsx, NewsletterBand.tsx, NewsletterForm.tsx (новые), MotionRuntime.tsx (переписан observer)
- site/src/utils/: readingTime.ts, formatPostDate.ts (новые)
- site/src/styles/: components/_blog.scss (новый), _tabs.scss (text-decoration), utilities/_reveal.scss, grepfox.scss
- site/src/seed/: lexical.ts (+ol/quote/rich/Seg), content.ts (categories+posts+nav+metaTitle), images.ts (8 обложек), index.ts (upsert categories/posts)
- site/docs/superpowers/: specs/2026-06-12-blog-design.md, plans/2026-06-12-blog.md

### Blockers / Open Questions
- Прежние хвосты живы: вымышленные отзывы (FTC-риск), телефон-заглушка +1 415, предположительные соцссылки (linkedin/x/instagram /grepfox), юр. ревью privacy/terms, рассинхрон ds/css/tokens.css.
- Подписка собирает адреса в CMS, но отправки писем нет (нет email-адаптера Payload).
- На subscribe-action нет rate-limiting/honeypot — при выходе в прод стоит добавить.
- При деплое ОБЯЗАТЕЛЬНО задать NEXT_PUBLIC_SERVER_URL — иначе canonical/og/sitemap уйдут на фолбэк grepfox.com.

### Next Steps
1. Заменить вымышленные отзывы, телефон и соцссылки реальными данными.
2. Прогнать privacy/terms через юриста.
3. Решить судьбу ds/ исходников (tokens рассинхрон).
4. Опционально: email-адаптер Payload + отправка писем подписчикам; rate-limit на subscribe.
5. При деплое: NEXT_PUBLIC_SERVER_URL, проверить canonical/sitemap на реальном домене.

### Critical Context
- Playwright-skill РАБОТАЕТ на этой машине (бандл-Chromium): скрипты в /tmp/playwright-test-*.js, запуск `cd ~/.claude/plugins/cache/playwright-skill/playwright-skill/4.1.0/skills/playwright-skill && node run.js <script>`. Заблокирован политикой macOS только Playwright MCP (CDP к системному Chrome).
- НЕ собирать build при работающем dev-сервере — оба пишут в .next, build падает «Cannot find module './NNNN.js'»; лечится pkill next + rm -rf .next.
- `npx payload run script.ts`: класть скрипт в src/, использовать top-level await (без него процесс умирает до резолва промисов), вывод писать в файл — stdout глотается.
- Сид: npm run seed (upsert по slug); посты получают _status:'published' в seed/index.ts — без этого роуты их не покажут.
- Слаги постов: shipping-ai-agents-to-production, evals-before-vibes, boring-automation-pays-for-itself, internal-tools-teams-actually-use, case-reporting-pipeline-days-to-minutes, choosing-an-llm-stack, onboarding-teams-to-agent-workflows, why-we-stay-a-small-crew. Категории: ai-agents, engineering, automation, case-studies, company.
- Подписчики: таблица subscribers в site/grepfox.db; тестовая запись e2e-test-101214375@example.com — можно удалить.
- ensureMedia ищет по alt — alt существующих картинок не менять без sqlite UPDATE (дубликаты -1.jpg).
- Лексикал-хелперы сида: doc/p/h/ul/ol/quote/rich (rich принимает сегменты {t, bold, em, code}).

### Model Summary
- Блог на Payload 3 + Next 15: коллекции Categories/Posts/Subscribers, роуты /blog (+пагинация ?page=), /blog/category/[slug] (SSG), /blog/[slug] (SSG, related, share X/LinkedIn).
- Дизайн: featured-карточка, моноиндексы, стрелки, теги на обложках, счётчики в табах; статья — sticky-рейка метаданных + типографика (нумерованные h2 «01 /», цитаты с оранжевой планкой, ol/ul с акцент-маркерами, лид-абзац).
- MotionRuntime переписан: MutationObserver вместо pathname-эффекта — фильтры работают при client-side навигации.
- Рассылка: NewsletterBand на листинге и статьях, server action → CMS, e2e-проверены успех и дубликат.
- SEO: title/description/canonical/OG на всех 12 типах страниц, metadataBase, og:type article у постов, sitemap.xml (28 URL из CMS, revalidate 1h), robots.txt.
- Проверки: e2e-батареи 29/30, 17/17, 12/12; production build 35 страниц; черновики не утекают (доказано на реальной БД).
- 15 коммитов за сессию, всё в main, remote нет — не пушилось.
- Subagent-driven execution использовался для первичной сборки; после фидбэка пользователя — всё руками без агентов (по его требованию).

### Handoff Context (paste into next session)
Прочитай docs/handoff/HANDOFF.md (последняя запись). Проект: сайт Grepfox, Payload 3 + Next.js 15, рабочая директория site/. Блог готов и в main: /blog, /blog/category/[slug], /blog/[slug], рассылка в CMS (Subscribers), SEO полный (metadataBase, canonical, OG, sitemap.xml, robots.txt). Сид: npm run seed. Для браузерных проверок используй playwright-skill (НЕ Playwright MCP — тот заблокирован macOS). Не собирай build при живом dev-сервере (.next конфликт). Открытые хвосты: вымышленные отзывы, телефон, соцссылки, юр. ревью, ds/tokens, отправка писем подписчикам. Спроси: «Продолжаем с хвостов или новая задача?»

---
