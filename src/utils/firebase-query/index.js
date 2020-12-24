const firebaseQuery = (ref, user, limit, filters) => {
  let query

  query = ref.where('owner', '==', user.uid)

  filters.forEach(filter => {
    query = query.where(filter[0], '==', filter[1])
  })

  if (limit !== null) {
    query = query.limit(limit)
  }

  return query
}

export default firebaseQuery