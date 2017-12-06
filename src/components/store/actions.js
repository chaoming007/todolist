import * as TYPES from './types'
export default {
  changeState({
    commit
  }, dat) {
    commit(TYPES.CHANGE_STATES, dat);
  },
  addDat({
    commit
  }, dat) {
    commit(TYPES.ADD_DAT, dat);
  },
  delDat({
    commit
  }, dat) {
    commit(TYPES.DEL_DAT, dat);
  },
  editDat({
    commit
  }, dat) {
    commit(TYPES.EDIT_DAT, dat);
  }
}
