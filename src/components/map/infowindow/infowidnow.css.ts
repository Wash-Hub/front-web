import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const infowindowContainer = style({
  position: 'absolute',
  left: '0.9rem',
  bottom: '35px',
  width: '300px',
  height: '89px',
  marginLeft: '-144px',
  textAlign: 'left',
  overflow: 'hidden',
  fontSize: '12px',
  lineHeight: '1.5',
});

export const infowindowWrapper = style({
  width: '300px',
  height: '77px',
  borderRadius: '15px',
  overflow: 'hidden',
  backgroundColor: '#fff',
  border: '0',
  boxShadow: '0px 1px 2px #888',

  '::after': {
    content: '""',
    position: 'absolute',
    left: '40%',
    bottom: '0',
    width: '22px',
    height: '12px',
    background: 'url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png)',
  },
});

export const infowindowTextBase = style({
  display: 'block',
  color: '#333',
  padding: '1px 15px 0 5px',
  textDecoration: 'none',
  fontWeight: 'bold',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  cursor: 'pointer',
});

export const infowindowText = recipe({
  base: infowindowTextBase,
  variants: {
    fontSize: {
      small: { fontSize: '10px', padding: '11px 18px 0 0', color: '#004c80' },
      medium: { fontSize: '11px' },
      large: { fontSize: '15px', padding: '7px 3px 0 5px' },
      link: { color: '#004c80', fontSize: '11px' },
    },
  },
});

export const infowindowTitle = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});
