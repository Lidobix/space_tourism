import { createContext, ReactNode, useContext, useState } from 'react';

interface ContextProps {
  isVisible: boolean;
  toggleNav: () => void;
  closeNav: () => void;
}

const initialState = false;

const NavContext = createContext<ContextProps>({
  isVisible: initialState,
  toggleNav: () => null,
  closeNav: () => null,
});

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsvisible] = useState<boolean>(initialState);
  const toggleNav = () => {
    setIsvisible(!isVisible);
  };

  const closeNav = () => {
    setIsvisible(false);
  };

  return (
    <NavContext.Provider value={{ isVisible, toggleNav, closeNav }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);
