import { ReactNode } from 'react'
import {
  Box,
  Flex,
  HStack,
  Link,
  Container,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Grid,
  GridItem
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'

const Links = ['Dashboard', 'Projects', 'Team']

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700')
    }}
    href={'#'}
  >
    {children}
  </Link>
)

export default function PostAddLayout({
  children,
  onFormSubmit
}: {
  children: ReactNode
  onFormSubmit: () => void
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div style={{ background: '#eef0f1', height: '100%' }}>
      <Box px={4}>
        <Container maxW="container.xl">
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: !isOpen ? 'none' : 'inherit' }}
              onClick={isOpen ? onClose : onOpen}
            />

            <HStack spacing={8} alignItems={'center'}>
              <Box>Write a new Story</Box>
            </HStack>
            <Flex alignItems={'center'}>
              <Button
                variant={'solid'}
                colorScheme="blue"
                size={'sm'}
                mr={4}
                onClick={onFormSubmit}
              >
                Publish
              </Button>
            </Flex>
          </Flex>
        </Container>
        {isOpen ? (
          <Box pb={4}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Grid h="80vh" templateColumns="repeat(1, 1fr)" gap={4}>
        <GridItem>
          <Flex
            display={{ base: 'none', md: 'flex' }}
            style={{ height: '100%' }}
          >
            <Container maxW="container.lg">
              <div
                style={{
                  background: '#fff',
                  height: '100%',
                  padding: 20,
                  boxShadow: '0 0 0 1px rgba(8, 9, 10, 0.1)'
                }}
              >
                {children}
              </div>
            </Container>
          </Flex>

          <Flex
            display={{ base: 'block', md: 'none' }}
            style={{ height: '100%' }}
          >
            <div
              style={{
                background: '#fff',
                height: '100%',
                boxShadow: '0 0 0 1px rgba(8, 9, 10, 0.1)'
              }}
            >
              <Container maxW="container.lg">{children}</Container>
            </div>
          </Flex>
        </GridItem>
      </Grid>
    </div>
  )
}
