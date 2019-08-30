export default ({ $http }) => {
  $http.onRequest((config) => {
    // alert('Making request to ' + config)
  })

  $http.onResponse((response) => {
    return response
  })

  $http.onError((error) => {
    if (error.response.status === 500) {
      // alert('Request Error!')
    }
  })
}
