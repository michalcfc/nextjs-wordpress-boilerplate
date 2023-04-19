// icons
// components
import { Box } from '@chakra-ui/react';
import { SendFilesBtn } from '@/components/common/SendFilesBtn';

const StepsFooter = () => (
  <Box
    mt={16}
    textAlign="center"
  >
    <SendFilesBtn
      isSolid
    />
  </Box>
);

export default StepsFooter;
