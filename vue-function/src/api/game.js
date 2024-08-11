const mockData = Array.from({ length: 232 }, (_, index) => {
  return {
    name: `游戏${index + 1}`,
    id: index + 1,
    description: `游戏${index + 1}的简介`,
    category: `游戏${index + 1}的分类`,
    publisher: `游戏${index + 1}的发行商`,
    releaseDate: `2021-08-0${index + 1}`,
    platform: `游戏${index + 1}的平台`,
  };
});

export function getGameApi(data = { page: 1, pageSize: 10 }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const start = (data.page - 1) * data.pageSize;
      const end = start + data.pageSize;
      const result = mockData.slice(start, end);
      const last_page = Math.ceil(mockData.length / data.pageSize);
      resolve({
        total: mockData.length,
        last_page,
        data: result,
      });
    }, 60);
  });
}
