import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const selectLoginContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'fit-content',
  width: '100%',
});

export const selectLoginTitle = style({
  fontSize: '20px',
  fontWeight: 'bolder',
  width: '90%',
  textAlign: 'center',
  marginLeft: '8%',
});

export const selectLoginTitleClose = style({
  fontSize: '26px',
  fontWeight: 'bolder',
  width: 'fit-content',
  cursor: 'pointer',
  marginTop: '1%',
});

export const selectLoginTitleWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '100%',
  padding: '10px 0',
  borderBottom: '1px solid #c0c0c0',
});

export const selectLoginContent = style({
  alignItems: 'center',
  padding: '10% 0 6% 3%',
  fontSize: '17px',
  fontWeight: 'bolder',
});

export const selectLoginButtonWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 0 5% 0',
  margin: '0 0 0 0',
});

export const selectLoginButtonText = recipe({
  base: {
    fontSize: '15px',
    fontWeight: 'bold',
  },
  variants: {
    margin: {
      google: {
        marginRight: '2%',
      },
    },
  },
});

export const selectLoginButtonIcon = recipe({
  base: {
    fontSize: '20px',
  },
  variants: {
    background: {
      kakao: {
        marginRight: '8px',
      },
      google: {
        marginRight: '4%',
      },
    },
  },
});

export const selectLoginButton = recipe({
  base: {
    width: '55vh',
    height: '40px',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '10px 0 0 0',
    fontWeight: 'bolder',
    '@media': {
      '(max-width: 1500px)': {
        width: '30vh',
      },
      '(max-width: 1000px)': {
        width: '20vh',
      },
    },
  },
  variants: {
    background: {
      kakao: {
        backgroundColor: '#f7e600',
        border: 'none',
      },
      google: {
        backgroundColor: 'transparent',
        border: '1px solid #c0c0c0',
      },
    },
  },
});
