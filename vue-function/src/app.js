import { getGameApi } from "./api/game";
import { useScrollList } from "./hook/useList";
import { useMouse } from "./hook/useMouse";

const { list: gameList, getList: getGameList } = useScrollList({
  requestApi: getGameApi,
  pageParams: {
    pageSize: 12,
  },
});

const { x: mouseX, y: mouseY, mixins: mouseMixins } = useMouse();

export { gameList, getGameList, mouseX, mouseY, mouseMixins };
