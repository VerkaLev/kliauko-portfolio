import imgCreateYourElement1 from '@/assets/foto/create-your-element-1.jpg';
import imgCreateYourElement2 from '@/assets/foto/create-your-element-2.jpg';
import imgCreateYourElement3 from '@/assets/foto/create-your-element-3.jpg';
import imgWeatherMixApp1 from '@/assets/foto/weather-mix-1.jpg';
import imgWeatherMixApp2 from '@/assets/foto/weather-mix-2.jpg';
import imgWeatherMixApp3 from '@/assets/foto/weather-mix-3.jpg';
import imgWeatherMixApp4 from '@/assets/foto/weather-mix-4.jpg';
import imgMyPortfolioApp1 from '@/assets/foto/kliauko-portfolio-1.jpg';
import imgMyPortfolioApp2 from '@/assets/foto/kliauko-portfolio-2.jpg';
import imgMyPortfolioApp3 from '@/assets/foto/kliauko-portfolio-3.jpg';
import imgMyPortfolioApp4 from '@/assets/foto/kliauko-portfolio-4.jpg';

export const projects = [
  {
    id: 1,
    title: 'Create Your Element App',

    description: {
      ru: (
        <p>
          Это мой первый целый проект - онлайн-платформа для загрузки, создания
          и редактирования интерактивных UI-компонентов, таких как кнопки и поля
          ввода, созданный на{' '}
          <span className='text-[var(--contrary-accent)] font-bold'>
            React + TypeScript
          </span>
          . <br /> <br />Я использовала{' '}
          <span className='text-[var(--contrary-accent)] font-bold'>Redux</span>{' '}
          и{' '}
          <span className='text-[var(--contrary-accent)] font-bold'>Thunk</span>{' '}
          для управления состоянием,{' '}
          <span className='text-[var(--contrary-accent)] font-bold'>
            REST API
          </span>{' '}
          для обмена данными и{' '}
          <span className='text-[var(--contrary-accent)] font-bold'>
            Styled-Components
          </span>{' '}
          для стилизации, а также предусмотрела адаптивный дизайн. <br /> <br />
          Сейчас (это очень важно) веду ревизию проекта: добавляю улучшения по
          производительности, доступности и тестированию, а также планирую
          внедрить React Hook Form. На данный момент очень интересно внести
          корректировки с учетом приобретенных новых знаний. Так сказать,
          взглянуть по-новому. <br /> <br />
          Продолжение слудует . . .
        </p>
      ),
      en: (
        <p>
          This is my first full-scale project — an online platform for
          uploading, creating, and editing interactive UI components such as
          buttons and input fields, built with{' '}
          <span className='text-[var(--contrary-accent)] font-bold'>
            React + TypeScript
          </span>
          . <br /> <br />I used{' '}
          <span className='text-[var(--contrary-accent)] font-bold'>Redux</span>{' '}
          and{' '}
          <span className='text-[var(--contrary-accent)] font-bold'>Thunk</span>{' '}
          for state management,{' '}
          <span className='text-[var(--contrary-accent)] font-bold'>
            REST API
          </span>{' '}
          for data exchange and{' '}
          <span className='text-[var(--contrary-accent)] font-bold'>
            Styled-Components
          </span>{' '}
          for styling, while also implementing a fully responsive design. <br />{' '}
          <br />
          Currently (and this is very important), I am revisiting the project:
          improving performance, accessibility, and testing, and planning to
          integrate React Hook Form. At this stage, I’m especially interested in
          refining the project by applying the new knowledge I’ve gained —
          looking at it with a fresh perspective. <br /> <br />
          To be continued . . .
        </p>
      ),
      es: (
        <p>
          Este es mi primer proyecto completo: una plataforma en línea para
          cargar, crear y editar componentes de interfaz interactivos, como
          buttons y inputs, desarrollada con{' '}
          <span className='text-[var(--contrary-accent)] font-bold'>
            React + TypeScript
          </span>
          . <br /> <br />
          Utilicé{' '}
          <span className='text-[var(--contrary-accent)] font-bold'>
            Redux
          </span>{' '}
          y{' '}
          <span className='text-[var(--contrary-accent)] font-bold'>Thunk</span>{' '}
          para la gestión del estado,{' '}
          <span className='text-[var(--contrary-accent)] font-bold'>
            REST API
          </span>{' '}
          para el intercambio de datos y{' '}
          <span className='text-[var(--contrary-accent)] font-bold'>
            Styled-Components
          </span>{' '}
          para los estilos, además de implementar un diseño completamente
          adaptable. <br /> <br />
          Actualmente (y esto es muy importante), estoy revisando el proyecto:
          mejorando el rendimiento, la accesibilidad y las pruebas, y también
          planeo integrar React Hook Form. En esta etapa, me interesa aplicar
          los nuevos conocimientos que he adquirido y hacer mejoras con una
          visión más fresca. <br /> <br />
          Continuará . . .
        </p>
      ),
    },
    preview: [
      imgCreateYourElement1,
      imgCreateYourElement2,
      imgCreateYourElement3,
    ],
    code: 'https://github.com/VerkaLev/verkalev.github.io',
    demo: 'https://verkalev.github.io/',
  },
  {
    id: 2,
    title: 'Weather Mix App',
    description: {
      ru: (
        <p>
          Технологии:{' '}
          <span className='text-[var(--contrary-accent)] font-bold'>
            TypeScript, Next.js, React, REST API (fetch, JSON), TailwindCSS,
            Context API, Vercel.
          </span>
          <br />
          <br />
          Данное приложение прогноза погоды{' '}
          <span className='text-[var(--contrary-accent-more)] font-bold'>
            позволяет получать данные с 5 разных независимых источников и
            демонстрировать пользователю средние значения
          </span>
          , что экономит время для сравнения показателей на разных сайтах. В
          тоже время можно просмотреть данные каждого отдельного источника.
          <br /> <br />
          Приложение предоставляет подробные прогнозы: <br />
          <span className='text-[var(--contrary-accent-more)]'>•</span> текущие
          погодные условия, <br />
          <span className='text-[var(--contrary-accent-more)]'>•</span>{' '}
          почасовой прогноз, <br />
          <span className='text-[var(--contrary-accent-more)]'>•</span> прогноз
          на несколько дней и недель вперёд.
          <br /> <br />
          Кроме того, реализован{' '}
          <span className='text-[var(--contrary-accent-more)] font-bold'>
            поиск городов
          </span>
          , а интерфейс доступен на{' '}
          <span className='text-[var(--contrary-accent-more)] font-bold'>
            трех языках
          </span>
          , что делает сервис удобным для международных пользователей.
          <br />
          <br />
          Особое внимание уделено{' '}
          <span className='text-[var(--contrary-accent-more)] font-bold'>
            оптимизации производительности
          </span>{' '}
          - используется загрузка изображений в формате WebP и ленивая загрузка
          (lazy loading), что{' '}
          <span className='text-[var(--contrary-accent-more)] font-bold'>
            позволило сократить время загрузки страницы примерно на 30%
          </span>{' '}
          .
          <br />
          <br />
          На данный момент работаю над улучшением приложения с помощью
          использования React Query, увеличением оптимизации производительности
          и доступностью (WCAG).{' '}
        </p>
      ),
      en: (
        <p>
          Technologies:{' '}
          <span className='text-[var(--contrary-accent)] font-bold'>
            TypeScript, Next.js, React, REST API (fetch, JSON), TailwindCSS,
            Context API, Vercel.
          </span>
          <br />
          <br />
          This weather app{' '}
          <span className='text-[var(--contrary-accent-more)] font-bold'>
            gets data from five different independent sources and shows users
            the average values
          </span>
          , which saves time when comparing information across multiple
          websites. Users can also check data from each source separately.
          <br /> <br />
          The app provides detailed forecasts, including: <br />
          <span className='text-[var(--contrary-accent-more)]'>•</span> current
          weather conditions, <br />
          <span className='text-[var(--contrary-accent-more)]'>•</span> hourly
          forecast, <br />
          <span className='text-[var(--contrary-accent-more)]'>•</span>{' '}
          forecasts for several days and weeks ahead.
          <br /> <br />
          There is also{' '}
          <span className='text-[var(--contrary-accent-more)] font-bold'>
            a city search feature
          </span>
          , and the interface is available in{' '}
          <span className='text-[var(--contrary-accent-more)] font-bold'>
            three languages
          </span>
          , making the service convenient for international users.
          <br />
          <br />A lot of attention was given to{' '}
          <span className='text-[var(--contrary-accent-more)] font-bold'>
            performance optimization
          </span>{' '}
          - the app uses WebP images and lazy loading, which helped{' '}
          <span className='text-[var(--contrary-accent-more)] font-bold'>
            reduce the page load time by about 30%
          </span>{' '}
          .
          <br />
          <br />I am currently improving the app by adding React Query,
          increasing performance, and working on accessibility (WCAG).{' '}
        </p>
      ),
      es: (
        <p>
          Tecnologías:{' '}
          <span className='text-[var(--contrary-accent)] font-bold'>
            TypeScript, Next.js, React, REST API (fetch, JSON), TailwindCSS,
            Context API, Vercel.
          </span>
          <br />
          <br />
          Esta aplicación de pronóstico del tiempo{' '}
          <span className='text-[var(--contrary-accent-more)] font-bold'>
            obtiene datos de cinco fuentes independientes y muestra a los
            usuarios los valores promedio
          </span>
          , lo que ahorra tiempo al comparar información de diferentes sitios
          web. Los usuarios también pueden ver los datos de cada fuente por
          separado.
          <br /> <br />
          La aplicación ofrece pronósticos detallados, incluyendo: <br />
          <span className='text-[var(--contrary-accent-more)]'>•</span> las
          condiciones actuales del clima, <br />
          <span className='text-[var(--contrary-accent-more)]'>•</span> el
          pronóstico por horas, <br />
          <span className='text-[var(--contrary-accent-more)]'>•</span> el
          pronóstico para varios días y semanas.
          <br /> <br />
          También se incluye{' '}
          <span className='text-[var(--contrary-accent-more)] font-bold'>
            un buscador de ciudades
          </span>
          , y la interfaz está disponible en{' '}
          <span className='text-[var(--contrary-accent-more)] font-bold'>
            tres idiomas
          </span>
          , lo que hace que el servicio sea cómodo para usuarios
          internacionales.
          <br />
          <br />
          Se ha puesto especial atención en{' '}
          <span className='text-[var(--contrary-accent-more)] font-bold'>
            el rendimiento
          </span>{' '}
          - la aplicación usa imágenes en formato WebP y carga diferida (lazy
          loading){' '}
          <span className='text-[var(--contrary-accent-more)] font-bold'>
            lo que ayudó a reducir el tiempo de carga de la página en
            aproximadamente un 30%
          </span>{' '}
          .
          <br />
          <br />
          Actualmente estoy mejorando la aplicación con React Query, optimizando
          el rendimiento y trabajando en la accesibilidad (WCAG).{' '}
        </p>
      ),
    },
    preview: [
      imgWeatherMixApp1,
      imgWeatherMixApp2,
      imgWeatherMixApp3,
      imgWeatherMixApp4,
    ],
    code: 'https://github.com/VerkaLev/weather-mix-next',
    demo: 'https://weather-mix-next.vercel.app/',
  },
  {
    id: 3,
    title: 'My Portfolio App',
    description: {
      ru: (
        <p>
          Технологии:{' '}
          <span className='text-[var(--contrary-accent)] font-bold'>
            React, Tailwind, Framer Motion, React Testing Library , Vitest,
            Vercel.
          </span>
          <br />
          <br />
          Данное приложение - это сайт-портфолио (именно на нём вы сейчас и
          находитесь!).
          <br />
          <br />
          Сайт имеет: <br />
          <span className='text-[var(--contrary-accent-more)]'>•</span>{' '}
          адаптивный дизайн для разных устройств, <br />
          <span className='text-[var(--contrary-accent-more)]'>•</span>{' '}
          поддерживает светлую и тёмную темы, <br />
          <span className='text-[var(--contrary-accent-more)]'>•</span> три
          языка интерфейса, <br />
          <span className='text-[var(--contrary-accent-more)]'>•</span>{' '}
          соответствует принципам доступности (WCAG).
          <br />
          <br />
          Особое внимание уделено{' '}
          <span className='text-[var(--contrary-accent-more)] font-bold'>
            оптимизации производительности
          </span>{' '}
          - используется загрузка изображений в формате WebP и ленивая загрузка
          (lazy loading), что{' '}
          <span className='text-[var(--contrary-accent-more)] font-bold'>
            позволило сократить время загрузки страницы примерно на 30%
          </span>{' '}
          .
        </p>
      ),
      en: (
        <p>
          Technologies:{' '}
          <span className='text-[var(--contrary-accent)] font-bold'>
            React, Tailwind, Framer Motion, React Testing Library , Vitest,
            Vercel.
          </span>
          <br />
          <br />
          This project is a portfolio website (you’re actually browsing it right
          now!).
          <br />
          <br />
          The site includes: <br />
          <span className='text-[var(--contrary-accent-more)]'>•</span> a
          responsive design for different devices, <br />
          <span className='text-[var(--contrary-accent-more)]'>•</span> light
          and dark themes, <br />
          <span className='text-[var(--contrary-accent-more)]'>•</span> three
          interface languages, <br />
          <span className='text-[var(--contrary-accent-more)]'>•</span>{' '}
          accessibility following WCAG principles.
          <br />
          <br />
          Special attention was given to{' '}
          <span className='text-[var(--contrary-accent-more)] font-bold'>
            performance optimization
          </span>{' '}
          - the site uses WebP images and lazy loading{' '}
          <span className='text-[var(--contrary-accent-more)] font-bold'>
            which helped reduce page load time by around 30%
          </span>{' '}
          .
        </p>
      ),
      es: (
        <p>
          Tecnologías:{' '}
          <span className='text-[var(--contrary-accent)] font-bold'>
            React, Tailwind, Framer Motion, React Testing Library , Vitest,
            Vercel.
          </span>
          <br />
          <br />
          Este proyecto es un sitio web de portafolio (¡de hecho, estás
          navegándolo ahora mismo!).
          <br />
          <br />
          El sitio cuenta con: <br />
          <span className='text-[var(--contrary-accent-more)]'>•</span> diseño
          adaptable para distintos dispositivos, <br />
          <span className='text-[var(--contrary-accent-more)]'>•</span> temas
          claro y oscuro, <br />
          <span className='text-[var(--contrary-accent-more)]'>•</span> tres
          idiomas de interfaz, <br />
          <span className='text-[var(--contrary-accent-more)]'>•</span>{' '}
          accesibilidad según los principios de WCAG.
          <br />
          <br />
          Se prestó especial atención a{' '}
          <span className='text-[var(--contrary-accent-more)] font-bold'>
            la optimización del rendimiento
          </span>{' '}
          - se usan imágenes en formato WebP y carga diferida (lazy loading){' '}
          <span className='text-[var(--contrary-accent-more)] font-bold'>
            lo que ayudó a reducir el tiempo de carga de la página en
            aproximadamente un 30%
          </span>{' '}
          .
        </p>
      ),
    },
    preview: [
      imgMyPortfolioApp1,
      imgMyPortfolioApp2,
      imgMyPortfolioApp3,
      imgMyPortfolioApp4,
    ],
    code: 'https://github.com/VerkaLev/',
    demo: '',
  },
];
