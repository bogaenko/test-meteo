import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { RootState } from '../../../redux/store';
import { RouterPathEnum } from '../../../enums/RouterPathEnum';

function PoolDetails(props: any) {
  const navigate = useNavigate();
  const poolList = useSelector((state: RootState) => state);
    
  const location = useLocation();
  const poolId = location.pathname.replace(RouterPathEnum.POOL_LIST+'/', '');
  const pool = poolList.find(item => item.id === poolId);
  console.log(pool);
  
  if (!pool) {
    return (<Box mt={5}>Invalid uuid</Box>);
  }
  
  //Rendering
  return (
    <Box>
      <Box mt={5}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(RouterPathEnum.POOL_LIST)}
        >
          Back
        </Button> 
        <Box mt={2} sx={{border: '1px solid #ceced0', width: '500px'}}>
          <Box sx={{borderBottom: '1px solid #ceced0', padding: '10px'}}>
            <Box component='span' sx={{width: '200px', display: 'inline-block', fontWeight: 'bold'}}>Uuid</Box>
            <Box component='span'>{pool.id}</Box>
          </Box>
          <Box sx={{borderBottom: '1px solid #ceced0', padding: '10px'}}>
            <Box component='span' sx={{width: '200px', display: 'inline-block', fontWeight: 'bold'}}>Count</Box>
            <Box component='span'>{pool.count}</Box>
          </Box>
          <Box sx={{borderBottom: '1px solid #ceced0', padding: '10px'}}>
            <Box component='span' sx={{width: '200px', display: 'inline-block', fontWeight: 'bold'}}>Is Parallel?</Box>
            <Box component='span'>{pool.isParallel ? 'Yes' : 'No'}</Box>
          </Box>
          <Box sx={{borderBottom: '1px solid #ceced0', padding: '10px'}}>
            <Box component='span' sx={{width: '200px', display: 'inline-block', fontWeight: 'bold'}}>Created At</Box>
            <Box component='span'>{pool.dateCreated}</Box>
          </Box>
          <Box sx={{borderBottom: '1px solid #ceced0', padding: '10px'}}>
            <Box component='span' sx={{width: '200px', display: 'inline-block', fontWeight: 'bold'}}>Run Started At</Box>
            <Box component='span'>{pool.dateRunStarted ? pool.dateRunStarted : ''}</Box>
          </Box>
          <Box sx={{padding: '10px'}}>
            <Box component='span' sx={{width: '200px', display: 'inline-block', fontWeight: 'bold'}}>Run Finished At</Box>
            <Box component='span'>{pool.dateRunFinished ? pool.dateRunFinished : ''}</Box>
          </Box>
        </Box>
      </Box>  
    </Box>
  );
}

export default PoolDetails;
