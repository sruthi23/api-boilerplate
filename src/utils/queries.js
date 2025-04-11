async function getAllUsers(supabase) {
  const { data, error } = await supabase
    .from('users')
    .select('id,email,created_at')
  if (error) throw error
  return data
}

module.exports = {
  getAllUsers
}
