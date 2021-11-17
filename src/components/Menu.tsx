import ListItemText from '@material-ui/core/ListItemText';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import { Link as RouterLink } from 'react-router-dom';
import { RouterPathEnum } from '../enums/RouterPathEnum';

function Menu(props: any) {
  return(
    <MenuList style={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
      <MenuItem component={RouterLink} to={RouterPathEnum.HOME}>
        <ListItemIcon style={{ minWidth: '30px' }}>
          <HomeIcon fontSize="small" color="primary" />
        </ListItemIcon>
        <ListItemText>Home</ListItemText>          
      </MenuItem>               
      <MenuItem component={RouterLink} to={RouterPathEnum.POOL_ADD}>
        <ListItemIcon style={{ minWidth: '30px' }}>
          <AddIcon fontSize="small" color="primary" />
        </ListItemIcon>
        <ListItemText>Add Pool</ListItemText>          
      </MenuItem>               
      <MenuItem component={RouterLink} to={RouterPathEnum.POOL_LIST}>
        <ListItemIcon style={{ minWidth: '30px' }}>
          <PlaylistAdd fontSize="small" color="primary" />
        </ListItemIcon>
        <ListItemText>Pool List</ListItemText>          
      </MenuItem>                 
    </MenuList>
  );
}

export default Menu;