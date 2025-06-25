// FilterContext.tsx
'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type FilterData = {
  feeRangeStart?: number;
  feeRangeEnd?: number;
  location?: string;
  category?: string;
  language?: string;
};

type FilterContextType = {
  filter: FilterData;
  setFilter: (value: FilterData) => void;
  resetFilter: () => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilterState] = useState<FilterData>({});

  const setFilter = (value: FilterData) => {
    setFilterState(value);
  };

  const resetFilter = () => {
    setFilterState({});
  };

  return (
    <FilterContext.Provider value={{ filter, setFilter, resetFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};
