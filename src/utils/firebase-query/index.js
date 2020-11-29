const firebaseQuery = (ref, user, limit, filterTerm) => {
  let query

  query = ref.where('owner', '==', user.uid)

  if (limit !== null) {
    query = query.limit(limit)
  }

  if (filterTerm !== null) {
    // add query term later to filter
  }

  return query
}

export default firebaseQuery