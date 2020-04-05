import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import './styles.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'A processar...'
  }
  return (
    <div className="container">
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infetados</Typography>
            <Typography variant="h5">{confirmed.value}</Typography>
            <Typography color="textSecondary">Data Real</Typography>
            <Typography variant="body2">Casos ativos do Covid-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recuperados</Typography>
            <Typography variant="h5">Dados Reais</Typography>
            <Typography color="textSecondary">Data Real</Typography>
            <Typography variant="body2">Casos recuperados do Covid-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Mortes</Typography>
            <Typography variant="h5">Dados Reais</Typography>
            <Typography color="textSecondary">Data Real</Typography>
            <Typography variant="body2">Mortes causadas pelo Covid-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards;