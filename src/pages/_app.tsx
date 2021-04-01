import { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro';
import { FuegoProvider } from '@nandorojo/swr-firestore';

import { FirebaseFuego } from '@configs/firebase';

import '../styles/globals.css';

const fuego = new FirebaseFuego();
const Frame: React.FC = ({ children }) => (
  <FuegoProvider fuego={fuego}>{children}</FuegoProvider>
);

function App({ Component, pageProps }: AppProps) {
  return (
    <Frame>
      <GlobalStyles />
      <Component {...pageProps} />
    </Frame>
  );
}

export default App;
