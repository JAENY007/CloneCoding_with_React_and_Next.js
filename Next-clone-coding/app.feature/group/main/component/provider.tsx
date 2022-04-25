import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import { createContext, useContext, useState } from 'react';
import AppContext from './appContext';

export function Provider(props) {
  const [state, setState] = useState('');

  return (
    <AppContext.Provider value={{ state: state }}>
      {props.children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
