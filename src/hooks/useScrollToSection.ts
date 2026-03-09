import { useCallback } from 'react';

const useScrollToSection = () => {
  const scrollToSection = useCallback((id: string) => {
    const section = document.getElementById(id) || document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return scrollToSection;
};

export default useScrollToSection;