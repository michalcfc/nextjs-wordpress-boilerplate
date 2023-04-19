export const isCustomPageUri = (uri: string) => {
  const pagesToExclude = [
    '/',
    '/about/',
    '/contact/',
  ];

  return pagesToExclude.includes(uri);
};
