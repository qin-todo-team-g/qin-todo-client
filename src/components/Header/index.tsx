import logo from '../../images/logo.svg';
import profile from '../../images/profile.png';
import { SimpleGrid, Box, Image } from "@chakra-ui/react"

export const Header = () => {
  return (
    <header>
      <SimpleGrid columns={{base: 3, sm: 6}} spacing={8} px='24px'>     {/* スマホは3カラム */}
        <Box height='80px'></Box>
        <Box height='80px' display='flex' justifyContent={{base: 'center', sm: 'flex-start'}} alignItems='center'>
          <Image src={logo} alt="logo" w={{base: '100px', sm: 'none'}} h={{base: 'none', sm: '24px'}} maxW='none'/>
        </Box>
        <Box height='80px' display={{base: 'none', sm: 'block'}}></Box> {/* スマホは非表示 */}
        <Box height='80px' display={{base: 'none', sm: 'block'}}></Box> {/* スマホは非表示 */}
        <Box height='80px' display='flex' justifyContent={{base: 'center', sm: 'flex-end'}} alignItems='center'>
          <Image src={profile} alt="profile" borderRadius='full' boxSize='36px' />
        </Box>
        <Box height='80px' display={{base: 'none', sm: 'block'}}></Box> {/* スマホは非表示 */}
      </SimpleGrid>
    </header>
  )
}