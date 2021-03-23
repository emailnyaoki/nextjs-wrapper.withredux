
const gstyle= {

container: {
    minHeight: '100vh',
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
main: {
    padding: '5rem 0',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  

title: {
    margin: '0 30',
    lineHeight: '1.15',
    fontSize: '2rem',
    textAlign: 'center',
  },

description: {
    textAlign: 'center',
  },
  
description: {
    lineHeight: '1.5',
    fontSize: '1.5rem',
  },
  
code: {
    background: '#fafafa',
    borderRadius: '5px',
    padding: '0.75rem',
    fontSize: '1.1rem',
    fontFamily: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
  },
  
grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '800px',
    marginTop: '3rem',
  },
  
card: {
    margin: '1rem',
    flexBasis: '45%',
    padding: '1.5rem',
    textAlign: 'left',
    color: 'inherit',
    textDecoration: 'none',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    transition: 'color 0.15s ease, border-color 0.15s ease',
  },

  card:{

    '& h3': {
        margin: '0 0 1rem 0',
        fontSize: '1.5rem',
    },
    '& p': {
        margin: '0',
    fontSize: '1.25rem',
    lineHeight: '1.5',
    },

    '&:hover': {
        color: '#0070f3',
        borderColor: '#0070f3',
    },
    '&:focus': {
        color: '#0070f3',
        borderColor: '#0070f3',
    },
    '&:active': {
        color: '#0070f3',
        borderColor: '#0070f3',
    }

  },

   logo: {
    height: '1em',
  },
  
  '@media (maxWidth: 600px)': {
    grid: {
      width: '100%',
      flexDirection: 'column',
    }
  }

}
  