/* oxlint-disable next/no-img-element */
import {
  ArrowDown,
  ArrowUpRight,
  Bath,
  CarFront,
  ChevronRight,
  Coffee,
  MapPin,
  Phone,
  Sparkles,
  Star,
  Wifi,
} from 'lucide-react';

const phoneDisplay = '+7 (911) 213-32-43';
const phoneHref = 'tel:+79112133243';
const mapsHref =
  'https://yandex.com/maps/org/universitetskaya_dacha/2476452892/';

const essentials = [
  {
    icon: Bath,
    title: 'Санузел в номере',
    copy: 'Личное пространство и всё основное без общих зон.',
  },
  {
    icon: Coffee,
    title: 'Техника под рукой',
    copy: 'Холодильник, чайник и микроволновка в номере.',
  },
  {
    icon: Wifi,
    title: 'Wi‑Fi',
    copy: 'Чтобы спланировать маршрут или остаться на связи.',
  },
  {
    icon: CarFront,
    title: 'Парковка',
    copy: 'Практично для тех, кто знакомится с пригородами на машине.',
  },
];

const stayReasons = [
  'Путешествие по Петергофу и окрестностям',
  'Поездка на машине с понятной точкой возвращения',
  'Несколько спокойных дней без гостиничной суеты',
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">
        К содержанию
      </a>

      <header className="site-header">
        <a
          className="brand"
          href="#top"
          aria-label="Университетская дача — наверх"
        >
          <span className="brand-mark" aria-hidden="true">
            УД
          </span>
          <span className="brand-name">
            Университетская
            <small>дача · Петергоф</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Основная навигация">
          <a href="#about">О доме</a>
          <a href="#comfort">Удобства</a>
          <a href="#location">Как добраться</a>
        </nav>

        <a className="header-call" href={phoneHref}>
          <Phone size={17} aria-hidden="true" />
          <span>Позвонить</span>
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/hero-concept.webp"
          width="2048"
          height="1152"
          fetchPriority="high"
          decoding="async"
          alt="Концептуальная иллюстрация тихого сада и дачного дома вечером"
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-content" id="content">
          <p className="concept-label">
            <Sparkles size={14} aria-hidden="true" />
            Приватный концепт сайта
          </p>
          <p className="eyebrow">Гостевой дом в Петергофе</p>
          <h1 id="hero-title">
            Когда главное —<em>спокойно остановиться.</em>
          </h1>
          <p className="hero-copy">
            «Университетская дача» — практичная точка для поездки по Петергофу:
            свой санузел, нужная техника в номере, Wi‑Fi и парковка.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={phoneHref}>
              Узнать о свободных датах
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a
              className="button button-ghost"
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
            >
              Открыть маршрут
              <MapPin size={17} aria-hidden="true" />
            </a>
          </div>
          <a className="scroll-cue" href="#about">
            <ArrowDown size={17} aria-hidden="true" />
            Что важно перед поездкой
          </a>
        </div>

        <aside className="rating-card" aria-label="Рейтинг в Яндекс Картах">
          <span className="rating-star" aria-hidden="true">
            <Star size={18} fill="currentColor" />
          </span>
          <strong>4,9</strong>
          <span>306 оценок</span>
          <small>Яндекс Карты · проверено 11.09.2026</small>
        </aside>
      </section>

      <section className="intro section" id="about">
        <div className="section-index">01</div>
        <div className="intro-heading">
          <p className="eyebrow dark">Формат проживания</p>
          <h2>
            Не курортный блеск.
            <br />
            Нормальная база для поездки.
          </h2>
        </div>
        <div className="intro-copy">
          <p>
            В отзывах гости чаще всего ценят самостоятельность: можно приехать
            на машине, оставить её на парковке и вернуться в номер, где есть
            бытовые мелочи для обычной жизни.
          </p>
          <p className="fine-print">
            Стоимость, правила заезда и доступность конкретного номера лучше
            уточнить напрямую — условия могут меняться.
          </p>
        </div>
      </section>

      <section className="facts" aria-label="Коротко о гостевом доме">
        <div>
          <span>Где</span>
          <strong>Петергоф</strong>
        </div>
        <div>
          <span>Формат</span>
          <strong>Гостевой дом</strong>
        </div>
        <div>
          <span>В номере</span>
          <strong>Свой санузел</strong>
        </div>
        <div>
          <span>Для автомобиля</span>
          <strong>Есть парковка</strong>
        </div>
      </section>

      <section className="comfort section" id="comfort">
        <div className="section-title-row">
          <div>
            <p className="eyebrow dark">Всё нужное рядом</p>
            <h2>Удобства без лишних обещаний</h2>
          </div>
          <p>
            Проверенные детали, которые помогают заранее понять формат
            проживания.
          </p>
        </div>

        <div className="comfort-grid">
          {essentials.map(({ icon: Icon, title, copy }, index) => (
            <article className="comfort-card" key={title}>
              <span className="card-number">0{index + 1}</span>
              <Icon size={25} strokeWidth={1.6} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stay" aria-labelledby="stay-title">
        <div className="stay-copy">
          <p className="eyebrow">Кому подойдёт</p>
          <h2 id="stay-title">
            Свой ритм
            <br />в историческом пригороде
          </h2>
        </div>
        <ol className="stay-list">
          {stayReasons.map((reason, index) => (
            <li key={reason}>
              <span>0{index + 1}</span>
              <strong>{reason}</strong>
              <ChevronRight size={20} aria-hidden="true" />
            </li>
          ))}
        </ol>
      </section>

      <section className="location section" id="location">
        <div className="location-map" aria-hidden="true">
          <div className="map-lines" />
          <span className="map-dot">
            <i />
          </span>
          <span className="map-label">ул. Первого Мая, 36/1</span>
        </div>
        <div className="location-copy">
          <p className="eyebrow dark">Адрес</p>
          <h2>
            Петергоф,
            <br />
            улица Первого Мая, 36/1
          </h2>
          <p>Сохраните точку заранее и постройте маршрут в Яндекс Картах.</p>
          <a
            className="text-link"
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
          >
            Показать на карте
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="booking" aria-labelledby="booking-title">
        <span className="booking-orbit orbit-one" aria-hidden="true" />
        <span className="booking-orbit orbit-two" aria-hidden="true" />
        <div className="booking-inner">
          <p className="eyebrow">Связаться напрямую</p>
          <h2 id="booking-title">
            Уточните даты
            <br />и условия проживания
          </h2>
          <p>
            Актуальную стоимость, свободные номера и время заезда подтвердят по
            телефону.
          </p>
          <a className="button button-primary light" href={phoneHref}>
            <Phone size={18} aria-hidden="true" />
            {phoneDisplay}
          </a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            УД
          </span>
          <span className="brand-name">
            Университетская<small>дача · Петергоф</small>
          </span>
        </a>
        <div className="footer-details">
          <a href={phoneHref}>{phoneDisplay}</a>
          <a href={mapsHref} target="_blank" rel="noreferrer">
            ул. Первого Мая, 36/1
          </a>
        </div>
        <p className="demo-note">
          Концепт не является официальным сайтом. Иллюстрация создана специально
          для демо и не изображает реальный объект.
        </p>
      </footer>
    </main>
  );
}
