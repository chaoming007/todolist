export default {
  getAllState(state) { //全部数据
    return state.dat;
  },
  getYiState(state) { //已经完成
    let dat = [];
    dat = state.dat.filter((item) => {
      return item.state == true;
    })
    return dat;
  },
  getWeiState(state) { //未完成
    let dat = [];
    dat = state.dat.filter((item) => {
      return item.state == false;
    })
    return dat;
  },
  getEditState(state) { //编辑数据
    return state.editDat;
  }
}
