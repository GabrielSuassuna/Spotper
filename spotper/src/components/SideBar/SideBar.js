import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import QueueIcon from '@material-ui/icons/Queue';

import Icon from '../../assets/icon.png'

import { Link, Redirect } from 'react-router-dom'

import API from '../../API/API'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: '#282828',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  userIcon:{
      height: "100%",
      color: "whitesmoke",
  },
  ListItemText:{
    color: "rgb(170,170,170)",
    '&:hover': {
      color: 'whitesmoke'
    }
  }
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  function buscar(){
    return <Redirect from='/' to='/search'/>
  }

  const [data,setData] = useState([])

  useEffect(()=>{
    async function getData(){
      const res = await API.get('/allplaylist')
      setData(res.data)
    }
    getData()
  })


  return (
    <div className={classes.root}>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
            <ListItem button key={"Inicio"}>
              <ListItemIcon> <HomeIcon/> </ListItemIcon>
              <ListItemText classes={{primary: classes.ListItemText}} primary={"Inicio"} />
            </ListItem>
            <ListItem button key={"Buscar"}>
              <ListItemIcon> <SearchIcon/> </ListItemIcon>
              <Link to ='search'>
              <ListItemText classes={{primary: classes.ListItemText}} primary={"Buscar"}/>
      </Link>
              {/*<ListItemText classes={{primary: classes.ListItemText}} primary={"Buscar"}/>
              */}
              
            </ListItem>
            <ListItem button key={"SuaBiblioteca"}>
              <ListItemIcon> <LibraryMusicIcon/> </ListItemIcon>
              <ListItemText classes={{primary: classes.ListItemText}} primary={"Sua Biblioteca"} />
            </ListItem>

        </List>
        <Divider />

        <List>
          <ListItem>
            <ListItemText classes={{primary: classes.ListItemText}}> Playlists</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon> <QueueIcon/> </ListItemIcon>
            <ListItemText classes={{primary: classes.ListItemText}}> Criar Playlist </ListItemText>
          </ListItem>
          
            {data.map((info)=>{
              return(
                <ListItem>
                <Link to={"/album/"+info.cod}>
                  <ListItemText classes={{primary: classes.ListItemText}}> {info.nome} </ListItemText>
                </Link>
                
              </ListItem>
              )
            })}
            
        </List>
        
        <ListItem>
          <Avatar  alt="Remy Sharp" src={Icon} className={classes.avatar} />
          <ListItemText classes={{primary: classes.userIcon}} primary="Pedro Victor" />
        </ListItem>
      </Drawer>
    </div>
  );
}