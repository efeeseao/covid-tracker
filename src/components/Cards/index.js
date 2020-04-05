import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import './styles.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'A processar...'
  }
  return (
    <div className="cards">
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className="card">
          <CardContent className="infected">
            <Typography color="textSecondary" gutterBottom>
              Infetados
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator="."
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Casos ativos do Covid-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="card">
          <CardContent className="recovered">
            <Typography color="textSecondary" gutterBottom>
              Recuperados
            </Typography>
            <Typography variant="h5">
            <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator="."
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Casos recuperados do Covid-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="card">
          <CardContent className="deaths">
            <Typography color="textSecondary" gutterBottom>
              Mortes
            </Typography>
            <Typography variant="h5">
            <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator="."
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Mortes causadas pelo Covid-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards;