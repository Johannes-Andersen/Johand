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

import { UserConfig, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const OfflinePage: FC = () => {
  const { t } = useTranslation('OfflinePage')

  return (
    <>
      <Head>
        <title>{t('OfflinePage:pageTitle')}</title>
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
              {t('OfflinePage:shortDescription')}
            </Text>
            <Heading
              as="h1"
              size="3xl"
              color={mode('red.600', 'red.300')}
              mt="8"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              {t('OfflinePage:title')}
            </Heading>
            <Text
              color={mode('gray.600', 'gray.400')}
              mt="4"
              fontSize="lg"
              fontWeight="medium"
            >
              {t('OfflinePage:description')}
            </Text>
            <Button
              size="lg"
              minW="210px"
              colorScheme="green"
              bg={mode('green.600', 'green.400')}
              height="14"
              px="8"
              mt="8"
              onClick={() => location.reload()}
            >
              {t('OfflinePage:reconnectButton')}
            </Button>
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
      initialLocale: string
      userConfig: UserConfig | null
    }
  }
}> => ({
  props: {
    ...(await serverSideTranslations(locale, ['OfflinePage'])),
  },
})

export default OfflinePage
