import { useSelector, useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { RouterPathEnum } from '../../../enums/RouterPathEnum';
import { RootState } from '../../../redux/store';
import { AppDispatch } from '../../../redux/store';
import { thunkRunPool } from '../../../redux/reducers/poolReducer';

function PoolList(props: any) {
  //React Redux Hooks
  const poolList = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  //Rendering
  return (
    <Box>
      <Box mt={10}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Count</TableCell>
                <TableCell align="right">Is Parallel</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { poolList.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    <Link component={RouterLink} to={RouterPathEnum.POOL_LIST+'/'+row.id}>{row.name}</Link>
                  </TableCell>
                  <TableCell align="right">{row.count}</TableCell>
                  <TableCell align="right">{row.isParallel ? 'Yes' : 'No'}</TableCell>
                  <TableCell align="right">
                    {row.isStartManually && !row.dateRunStarted && <PlayCircleOutline
                      onClick={() => {dispatch(thunkRunPool(row.id))}} 
                      style={{ cursor: 'pointer' }}
                      fontSize="small" color="primary" />}
                  </TableCell>
                </TableRow>
              ))}  
            </TableBody>            
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default PoolList;
