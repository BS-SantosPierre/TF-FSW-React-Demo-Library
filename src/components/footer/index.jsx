import { Box } from '@mui/material';
import HeartBroken from '@mui/icons-material/HeartBroken';

const Footer = () => {
  return (
    <Box component='footer' mb='15px'>
      <Box display='flex' alignItems='center' justifyContent='center'>
        Made With Love <HeartBroken color='error' />
      </Box>
    </Box>
  );
};

export default Footer;
