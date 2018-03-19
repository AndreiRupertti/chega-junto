import Api from '@/services/Api'

export default {
  insertItem (item) {
    return Api().post('insertItem', item)
  },
  findOrgs () {
    return Api().get('findOrgs')
  },
  findEventById (id) {
    return Api().post(`findEventById/${id}`)
  },
  insertUser (user) {
    return Api().post('insertUser', user)
  },
  validation (user) {
    return Api().post('validation', user)
  }
}
