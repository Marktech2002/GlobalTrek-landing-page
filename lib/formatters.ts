export const formatPrice = (price: number): string => {
  return `$${price.toLocaleString()}`;
};

export const formatDuration = (days: number): string => {
  return days === 1 ? "One day" : `${days === 2 ? "Two" : days === 4 ? "Four" : days} days`;
};

export const formatStatistic = (value: number, suffix: string): string => {
  if (value >= 1000) {
    return `${Math.floor(value / 1000)}K+`;
  }
  return `${value}${suffix}`;
};