
export default function drawerReducer(prevState = true, action) {
  if (action.type === 'ETAT_DRAWER') {
    return action.payload;
  }
  return prevState;
}
