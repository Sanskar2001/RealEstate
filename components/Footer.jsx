import { Box } from '@chakra-ui/layout';
const year=new Date().getFullYear();
const Footer = () => (
  <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
    © {year} Realty.com
  </Box>
);

export default Footer;