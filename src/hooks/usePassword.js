import { useState } from 'react';

export function usePassword() {
  const [isPasswordVisible, setIsPassworVisible] = useState(false);

  function onShowPasswordClick() {
    setIsPassworVisible(!isPasswordVisible);
  }

  return { isPasswordVisible, onShowPasswordClick };
}
