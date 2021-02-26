export const success = (str: string): void => {
  console.log(['Success'], str);
};

export const error = (str: string): void => {
  console.log(['Error'], str);
};

export const info = (str: string): void => {
  console.log(['Info'], str);
};

export const warning = (str: string): void => {
  console.log(['Warning'], str);
};
