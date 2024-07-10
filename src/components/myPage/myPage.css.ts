import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { BiBorderBottom } from 'react-icons/bi';

export const myPageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '350px',
  height: '100vh',
  backgroundColor: 'white',
  borderLeft: '1px solid #e0e0e0',
  borderRight: '1px solid #e0e0e0',
});

export const myPageSearch = style({
  width: '360px',
  marginLeft: '13%',
  '@media': {
    '(max-width: 1600px)': {
      width: '300px',
      marginLeft: '16%',
    },
  },
});

export const myPageTop = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingTop: '20px',
  padding: '15px',
  alignItems: 'center',
});

export const myPageProfile = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const myPageProfileImg = style({
  width: '35px',
  height: '35px',
  borderRadius: '50%',
  marginRight: '0.5rem',
  border: '1px solid black',
});

export const myPageProfileIconContainer = style({
  position: 'relative',
  display: 'inline-block',
});

export const myPageProfileIcon = style({
  width: '20px',
  height: '20px',
  cursor: 'pointer',
});

export const myPageProfileDropdown = style({
  display: 'block',
  position: 'absolute',
  top: '100%',
  left: '0',
  backgroundColor: 'white',
  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
  borderRadius: '10px',
  zIndex: '1',
  minWidth: '160px',
  padding: '6px 6px',
});

export const myPageProfileDropdownItemVar = style({
  color: 'black',
  cursor: 'pointer',
  padding: '8px 16px',
  borderRadius: '10px',
  textDecoration: 'none',
  display: 'block',
  ':hover': {
    backgroundColor: '#f1f1f1',
  },
});

export const myPageProfileDropdownItem = recipe({
  base: myPageProfileDropdownItemVar,
  variants: {
    border: {
      BorderBottom: { borderBottom: '1px solid #e0e0e0', borderEndStartRadius: '0px', borderEndEndRadius: '0px' },
      BorderTop: {
        borderStartEndRadius: '0px',
        borderStartStartRadius: '0px',
      },
    },
  },
});

export const myPageContent = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const myPageContentTitle = style({
  paddingLeft: '1rem',
  fontSize: '1.0rem',
  paddingBottom: '1rem',
  fontWeight: '600',
});

export const myPageItemContent = style({
  display: 'flex',
  flexDirection: 'row',
  justifyItems: 'center',
  width: '90%',
  padding: '7px',
  cursor: 'pointer',
  border: '1px solid #e0e0e0',
  borderRadius: '10px',
  margin: '5px',
  marginLeft: '10px',
  backgroundColor: 'white',
});

export const myPageItemImg = style({
  width: '23%',
  height: '65px',
  borderRadius: '10px',
});

export const myPageItemContentTextContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: '10px',
});

export const myPageItemContentText = style({
  fontSize: '15px',
  fontWeight: 'bold',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  marginTop: '10px',
});

export const myPageItemAddress = style({
  fontSize: '12px',
  color: '#a0a0a0',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  width: '100%',
  height: '20px',
  marginBottom: '5px',
  marginTop: '5px',
  paddingBottom: '0',
  paddingTop: '0',
});
