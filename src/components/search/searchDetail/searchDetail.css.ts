import { style } from '@vanilla-extract/css';

export const searchDetailContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '35vh',
  height: '100vh',
  backgroundColor: 'white',
  borderLeft: '1px solid #e0e0e0',
  borderRight: '1px solid #e0e0e0',
  '@media': {
    '(max-width: 1600px)': {
      width: '43vh',
    },
  },
});

export const searchDetailSearch = style({
  width: '37vh',
  marginLeft: '30%',
  '@media': {
    '(max-width: 1600px)': {
      marginLeft: '17%',
      width: '43vh',
    },
  },
});

export const searchDetailItem = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
  backgroundColor: 'white',
});

export const searchDetailItemTitle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '7vh',
  borderBottom: '1px solid #e0e0e0',
  fontSize: '1.1rem',
  fontWeight: 'bold',
});

export const searchDetailItemSemiTitle = style({
  fontSize: '1rem',
  fontWeight: 'bold',
  marginBottom: '5px',
  padding: '10px',
  paddingLeft: '15px',
  paddingBottom: '0',
});

export const searchDetailItemContent = style({
  display: 'flex',
  flexDirection: 'row',
  padding: '10px',
  cursor: 'pointer',
});

export const searchDetailItemImg = style({
  width: '23%',
  height: '65px',
  borderRadius: '10px',
});

export const searchDetailItemContentTextContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: '10px',
});

export const searchDetailItemContentText = style({
  fontSize: '15px',
  fontWeight: 'bold',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  marginTop: '10px',
});

export const searchDetailItemAddress = style({
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
