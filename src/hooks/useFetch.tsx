import { useState } from 'react';

export default function useFetch() {
  const [ok, isOk] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
}
