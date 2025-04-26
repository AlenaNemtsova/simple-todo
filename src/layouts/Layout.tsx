import { Outlet } from 'react-router';
import { Header } from '../components/Header/Header';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export const Layout = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous' //важен для preconnect к fonts.gstatic.com.
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
        {/* можно также переместить сюда meta-теги и title из index.html */}
      </Helmet>
      <Header />
      <Outlet />
    </HelmetProvider>
  );
};
