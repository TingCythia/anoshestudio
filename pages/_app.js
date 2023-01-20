import '../styles/globals.css';
import { Layout } from '../components';
import { StateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@mui/material/styles';
import {policy} from './policy';

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <ThemeProvider policy={policy}>
      </ThemeProvider>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}
