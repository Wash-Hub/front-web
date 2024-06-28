import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const sidebarMenuImg = style({
  width: '100%',
  height: '250px',
});

export const sidebarMenuInfo = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '95%',
  padding: '10px',
});

export const sidebarMenuInfoTitle = style({
  fontSize: '20px',
  fontWeight: 'bold',
});

export const sidebarMenuInfoAddress = style({
  fontSize: '12px',
  color: '#808080',
});

export const sidebarMenuBookmark = style({
  fontSize: '25px',
  color: '#808080',
  cursor: 'pointer',
  ':hover': {
    color: '#000',
  },
});

export const sidebarMenuInfoDetail = style({
  width: '100%',
  paddingTop: '20px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
});

export const sidebarMenuInfoDetailItem = recipe({
  base: {
    width: '100%',
    textAlign: 'center',
    padding: '10px',
    fontSize: '15px',
    cursor: 'pointer',
    borderBottom: '2px solid #e0e0e0',
  },
  variants: {
    active: {
      borderBottom: { borderBottom: '2px solid #000' },
    },
  },
});
