import logo from '../../logo.svg';
import profile from '../../profile.png';
import { SimpleGrid, Box } from "@chakra-ui/react"

export const Header = () => {
  return (
    <header>
      <SimpleGrid columns={6} spacing={8} px='24px'>
        <Box height='80px'></Box>
        <Box height='80px' display='flex' alignItems='center'>
          <img src={logo} alt="logo" />
        </Box>
        <Box height='80px'></Box>
        <Box height='80px'></Box>
        <Box height='80px' display='flex' alignItems='center'>
          <img src={profile} alt="" />
        </Box>
        <Box height='80px'></Box>
      </SimpleGrid>
    </header>
  )
}