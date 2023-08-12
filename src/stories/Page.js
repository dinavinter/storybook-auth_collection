import { html } from 'lit-html';
import { Header } from './Header';
import './page.css';

export const Page = ({ title, user, onLogin, onLogout, onCreateAccount }) => html`
  <article>
    ${Header({
      user,
      onLogin,
      onLogout,
      onCreateAccount,
    })}

    <section>
      <h2>${title}</h2>
      <p>
        We recommend building UIs with a
        <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
          <strong>component-driven</strong> </a
        >process starting with atomic components and ending with pages.
      </p>
      <p>
        Render pages with mock data. This makes it easy to build and review page states without
        needing to navigate to them in your app. Here are some handy patterns for managing page data
        in Storybook:
      </p>
      <ul>
        <li>
          Use a higher-level connected component. Storybook helps you compose such data from the
          "args" of child component stories
        </li>
        <li>
          Assemble data in the page component from your services. You can mock these services out
          using Storybook.
        </li>
      </ul>

    </section>
  </article>
`;
