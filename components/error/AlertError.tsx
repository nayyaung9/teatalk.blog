import React from 'react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'

interface AlertProps {
  status: String
  message: String
}

const AlertError: React.FC<AlertProps> = ({ status, message }) => {
  return (
    <Alert
      status={status}
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        {message}
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        There was an error processing your request. Please try again later.
      </AlertDescription>
    </Alert>
  )
}

export default AlertError
