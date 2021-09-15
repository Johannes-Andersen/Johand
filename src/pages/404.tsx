import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { UserConfig, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const FourOhFourPage: FC = () => {
  const { t } = useTranslation('FourOhFourPage')

  return (
    <>
      <Head>
        <title>{t('FourOhFourPage:pageTitle')}</title>
      </Head>
      <Box
        as="section"
        pt="16"
        pb="24"
        maxW={{ base: 'xl', md: '7xl' }}
        mx="auto"
        px={{ base: '6', md: '8' }}
      >
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: '3rem', lg: '2rem' }}
          mt="8"
          align={{ lg: 'center' }}
          justify="space-between"
        >
          <Box flex="1" maxW={{ lg: '720px' }}>
            <Text
              size="xs"
              textTransform="uppercase"
              fontWeight="semibold"
              color={mode('gray.600', 'gray.400')}
              letterSpacing="wide"
            >
              {t('FourOhFourPage:shortDescription')}
            </Text>
            <Heading
              as="h1"
              size="3xl"
              color={mode('red.600', 'red.300')}
              mt="8"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              {t('FourOhFourPage:title')}
            </Heading>
            <Text
              color={mode('gray.600', 'gray.400')}
              mt="4"
              fontSize="lg"
              fontWeight="medium"
            >
              {t('FourOhFourPage:description')}
            </Text>
            <Link href="/" passHref>
              <Button
                size="lg"
                minW="210px"
                colorScheme="green"
                bg={mode('green.600', 'green.400')}
                height="14"
                px="8"
                mt="8"
                as="a"
              >
                {t('FourOhFourPage:backButton')}
              </Button>
            </Link>
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export const getStaticProps = async ({
  locale,
}: Record<string, string>): Promise<{
  props: {
    _nextI18Next: {
      initialI18nStore: unknown
      userConfig: UserConfig | null
    }
  }
}> => ({
  props: {
    ...(await serverSideTranslations(locale, ['FourOhFourPage'])),
  },
})

export default FourOhFourPage
