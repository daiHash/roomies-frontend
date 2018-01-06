import * as types from '../mutation-types'

// User Profile State
const state = {
  dateOfBirth: '',
  name: '',
  lastname: '',
  occupation: '',
  nationality: '',
  isSmoker: false
}

// Change user states sync
const mutations = {
  [types.USER_BIRTHDAY] (state, date) {
    state.dateOfBirth = date
  },
  [types.USER_NAME_AND_LASTNAME] (state, payload) {
    state.name = payload.name
    state.lastname = payload.lastname
  },
  [types.USER_OCCUPATION] (state, occupation) {
    state.occupation = occupation
  },
  [types.USER_NATIONALITY] (state, nationality) {
    state.nationality = nationality
  },
  [types.USER_IS_USER_SMOKER] (state, status) {
    state.isSmoker = status
  }
}

// Manipulate state async
const actions = {
  setUserBirthday ({commit}, userBirthday) {
    commit(types.USER_BIRTHDAY, userBirthday)
  },
  setUserNameAndLastname ({commit}, payload) {
    commit(types.USER_NAME_AND_LASTNAME, payload)
  },
  setUserOccupation ({commit}, occupation) {
    commit(types.USER_OCCUPATION, occupation)
  },
  setUserNationality ({commit}, nationality) {
    commit(types.USER_NATIONALITY, nationality)
  },
  setIsUserSmoker ({commit}, status) {
    commit(types.USER_IS_USER_SMOKER, status)
  }
}

// Get Data
const getters = {
  userProfileData (state) {
    return {
      name: state.name,
      lastname: state.lastname,
      isSmoker: state.isSmoker,
      occupation: state.occupation,
      nationality: state.nationality,
      dateOfBirth: state.dateOfBirth
    }
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
