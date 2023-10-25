const MIN_YEAR = 0;

export const getCurrentYear = () => new Date().getFullYear();

export const getYears = () => `${MIN_YEAR}-${getCurrentYear()}`;
