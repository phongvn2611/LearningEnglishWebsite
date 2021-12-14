import { useEffect } from 'react';

function useCloseContact() {
  useEffect(() => {
    document.getElementById('dynoContact').style.display = 'none';
    return () => {
      document.getElementById('dynoContact')?.removeAttribute('style');
    };
  }, []);

  return null;
}

export default useCloseContact;
