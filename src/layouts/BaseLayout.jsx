import { Box, Container, CssBaseline } from '@mui/material';
import Footer from '../components/footer';
import Header from '../components/Header';

const BaseLayout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Box display='flex' minHeight='100vh' flexDirection='column'>
        <Header />
        <Box flex={1}>
          <main>
            <Container>{children}</Container>
          </main>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default BaseLayout;
