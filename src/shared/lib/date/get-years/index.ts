const MIN_YEAR = 1874;

export const getCurrentYear = () => new Date().getFullYear();

export const getYears = () => `${MIN_YEAR}-${getCurrentYear()}`;
