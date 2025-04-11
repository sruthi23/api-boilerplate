async function getAllUsers(supabase) {
  const { data, error } = await supabase.from('users').select('*')
  if (error) throw error
  return data
}


module.exports = {
  getAllUsers
}
