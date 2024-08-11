import Vue from "vue";

function useScrollList(options = {}) {
  const { requestApi, pageParams } = options;
  const list = Vue.observable([]);
  const pageData = Vue.observable({
    page: 1,
    pageSize: 15,
    lastPage: 1,
  });
  if (pageParams) {
    Object.assign(pageData, pageParams);
  }
  let loading = false;
  async function getList(options) {
    try {
      if (pageData.page > pageData.lastPage || loading) return;
      loading = true;
      const res = await requestApi({
        page: pageData.page,
        pageSize: pageData.pageSize,
      });
      list.push(...res.data);
      pageData.lastPage = res.last_page;
      pageData.page += 1;
    } catch (error) {
    } finally {
      loading = false;
    }
  }

  return {
    list,
    getList,
  };
}

export { useScrollList };
