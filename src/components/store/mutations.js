import * as TYPES from './types'
export default {
  [TYPES.CHANGE_STATES](state, dat) { //改变状态
    state.dat.forEach((item) => {
      if (item.id == dat.id) {
        item.state = true;
      }
    })
  },
  [TYPES.ADD_DAT](state, dat) { //增加数据
    if (dat.state == false) {
      state.dat.forEach((item) => {
        if (item.id == dat.id) {
          item.dat = dat.dat;
        }
      })
    } else {
      state.id++;
      state.dat.push({
        id: state.id,
        dat: dat.dat,
        state: false
      });
    }
  },
  [TYPES.DEL_DAT](state, dat) { //删除数据
    state.dat.forEach((item, key) => {
      if (item.id == dat.id && dat.state) {
        state.dat.splice(key, 1);
      }
    })
  },
  [TYPES.EDIT_DAT](state, dat) { //编辑数据
    state.editDat = { ...dat
    };
  }

}
