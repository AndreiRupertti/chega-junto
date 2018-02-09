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
  insertOrg (org) {
    return Api().post('insertOrg', org)
  }
}
