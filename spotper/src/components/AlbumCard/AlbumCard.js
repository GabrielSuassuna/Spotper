import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  const [tipoCompra,setTipoCompra] = useState(props.info.tipo_compra)
  const [preco,setPreco] = useState(props.info.preco)
  const [descricao,setDescricao] = useState(props.info.descricao)

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://i.scdn.co/image/b93eac6763ccb68ba8f9a7658b4555a40d382128"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {descricao}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {"Tipo: "+tipoCompra+" Preço: "+preco}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
            Ouvir
        </Button>
        <Button size="small" color="primary">
            Compartilhar
        </Button>
      </CardActions>
    </Card>
  );
}