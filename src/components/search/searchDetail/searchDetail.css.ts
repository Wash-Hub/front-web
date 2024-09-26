import { style } from '@vanilla-extract/css';

export const searchDetailContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '350px',
  height: '100vh',
  backgroundColor: 'white',
  borderLeft: '1px solid #e0e0e0',
  borderRight: '1px solid #e0e0e0',
});

export const searchDetailSearch = style({
  width: '360px',
  marginLeft: '30%',
  '@media': {
    '(max-width: 1600px)': {
      width: '300px',
      marginLeft: '18%',
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
  fontSize: '1.1rem',
  fontWeight: 'bold',
});

export const searchDetailItemContent = style({
  display: 'flex',
  flexDirection: 'row',
  padding: '10px',
  cursor: 'pointer',
  border: '1px solid #e0e0e0',
  borderRadius: '10px',
  width: '90%',
  margin: '5px',
  marginLeft: '8px',
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

export const noResultsMessage = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50%',
  color: '#888',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0',
  padding: '0',
  textAlign: 'center',
});
