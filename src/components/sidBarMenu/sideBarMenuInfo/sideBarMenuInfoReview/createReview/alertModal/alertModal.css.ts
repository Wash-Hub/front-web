export const modalButton = {
  base: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    margin: '0 0.5rem',
  },
  confirm: {
    backgroundColor: '#04befe',
    color: '#fff',
    ':hover': {
      backgroundColor: '#0056b3',
    },
  },
  cancel: {
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid #ccc',
    ':hover': {
      backgroundColor: '#f0f0f0',
    },
  },
};
