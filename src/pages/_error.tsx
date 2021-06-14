import { ReactElement } from 'react'
interface Props {
  statusCode: string
}

const Error = ({ statusCode }: Props): ReactElement => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({
  res,
  err,
}: {
  err: { statusCode?: number }
  res: { statusCode?: number }
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
