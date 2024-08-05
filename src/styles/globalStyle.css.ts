import { style, globalStyle } from '@vanilla-extract/css';

export const globalStyleExample = style({
  margin: 0,
});

globalStyle('body', {
  fontFamily: 'Pretendard-Regular',
  background: '#fff',
  margin: 0,
  padding: 0,
});

globalStyle('*::-webkit-scrollbar', {
  width: '10px',
});

globalStyle('*::-webkit-scrollbar-thumb', {
  backgroundColor: '#cdcccc',
  borderRadius: '10px',
});

export const map = style({
  position: 'relative',
  zIndex: '1',
  width: '100%',
  height: '100vh',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  position: 'relative',
});

export const pageSideBar = style({
  position: 'absolute',
  top: '0',
  left: '0',
  height: '100vh',
  width: '70px',
  zIndex: '2',
  backgroundColor: '#fff',
});

export const pageSearch = style({
  position: 'absolute',
  top: '10px',
  left: '12%',
  transform: 'translateX(-50%)',
  zIndex: '2',
  backgroundColor: '#fff',
});

export const loginModal = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 2,
    width: '100%',
    height: '100%',
  },
  content: {
    width: '27%',
    height: '35%',
    margin: 'auto',
    marginTop: '10%',
    borderRadius: '10px',
    border: '1px solid #C1C1BB',
    padding: '0.5rem',
    paddingTop: '5px',
  },
};
