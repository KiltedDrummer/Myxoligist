
export const RemoveItem = (id) => {
  const obj = {
    type: 'REMOVE_ITEM',
    id,
  };
  return obj;
}