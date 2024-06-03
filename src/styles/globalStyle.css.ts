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
  width: '100%',
  height: '100vh',
});
