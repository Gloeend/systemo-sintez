import ReactDOM from 'react-dom/client'
import {I18nextProvider} from "react-i18next";
import {Provider} from "react-redux";
import {AppRouter} from "@app/app-router";
import {BrowserRouter} from "react-router-dom";
import store from "@app/store/store.ts";
import './index.scss';
import "./_reset.css";
import i18n from "@shared/lang/lang.ts";
import * as WebFont from "webfontloader";
import {Header} from "@widgets/header";
import {CookiesProvider} from "react-cookie";

WebFont.load({
  google: {
    families: ["Inter:300,400,500,600,700,800", "sans-serif"]
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CookiesProvider>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
          <main>
            <AppRouter/>
          </main>
        </BrowserRouter>
      </Provider>
    </I18nextProvider>
  </CookiesProvider>,
)