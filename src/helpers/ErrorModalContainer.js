import React from 'react';
import ErrorModal from './ErrorModal';
import { useError } from './ErrorContext';

function ErrorModalContainer() {
  const { error, hideError } = useError();

  return (
    <ErrorModal
      show={!!error}
      errorMessage={error}
      onHide={() => hideError()}
    />
  );
}

export default ErrorModalContainer;
