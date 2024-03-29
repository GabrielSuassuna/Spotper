import React,{useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import API from '../../API/API'

import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#b3b3b3'
  },
  content: {
    flex: '1 0 auto',
    backgroundColor: '#b3b3b3'
  },
  cover: {
    width: 120,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MusicCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [descricao,setDescricao] = useState(props.info.descricao)
  const [tempo,setTempo] = useState(props.info.tempo)

  async function addMusic(){
    alert("Sinto muito, vá até Spotper>src>components>MusicCard.js>addmusic() e insira na url os parametros cod_playlist/num_faixa/cod_album")
    const res = await API.post(`/addMusic/1/${props.num_faixa}/2`)
  }

  return (
    
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {descricao}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {tempo}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton>
            <PlaylistAddIcon onClick={()=> addMusic()}/>
          </IconButton>
          
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://i.scdn.co/image/b93eac6763ccb68ba8f9a7658b4555a40d382128"
        title="Live from space album cover"
      />
    </Card>
  );
}