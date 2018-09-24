export const tracker = {
	setrow
};

function setrow(row) {
  return {
    type: 'setrow',
    payload: row
  }
}
