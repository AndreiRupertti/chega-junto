import Api from '@/services/Api'

export default {
  insertItem (item) {
    return Api().post('insertItem', item)
  },
  findEvents () {
    return Api().get('findEvents')
  }
}
