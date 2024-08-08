export const filterHealthInfo = (search: string, data: any[]) => {
  return data.filter((item) => {
    return (
      item.tags.some((tag: string) => tag.toLowerCase().includes(search.toLowerCase())) ||
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  });
};

export const searchPages = (search: string, data: any[]) => {
  return data.filter((item) => {
    return item.path.toLowerCase().includes(search.toLowerCase());
  });
};
