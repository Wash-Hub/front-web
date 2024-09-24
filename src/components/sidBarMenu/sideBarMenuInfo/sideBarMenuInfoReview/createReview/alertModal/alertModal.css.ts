export const modalButton = {
  base: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    margin: '0 0.5rem', // 버튼 사이 간격
  },
  confirm: {
    backgroundColor: '#007BFF', // 파란색 확인 버튼
    color: '#fff',
    ':hover': {
      backgroundColor: '#0056b3', // 호버 시 어두운 파란색
    },
  },
  cancel: {
    backgroundColor: '#6c757d', // 회색 취소 버튼
    color: '#fff',
    ':hover': {
      backgroundColor: '#5a6268', // 호버 시 어두운 회색
    },
  },
};
