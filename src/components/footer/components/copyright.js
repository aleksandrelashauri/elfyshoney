import React from 'react'
import { Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  bstflexible: {
    display: 'flex',
    justifyContent: 'center',
    background: '#252525',
    color: 'white',
    alignItems: 'center',
  },
  padd: {
    padding: '1rem',
    fontSize: '.9rem',
    color: 'grey',
  },
}))
export default function CopyRight() {
  const classes = useStyles()
  return (
    <Grid container className={classes.bstflexible}>
      <Box className={classes.padd}>
        © 2024 Copyright:
      </Box>
      <Box >
        Maintained
      </Box>
    </Grid>
  )
}