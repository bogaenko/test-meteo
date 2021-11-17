// Material-UI Imports
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { AppDispatch } from '../../../redux/store';
import { addPool, thunkRunRequests } from '../../../redux/reducers/poolReducer';
import { RouterPathEnum } from '../../../enums/RouterPathEnum';

function AddPool(props: any) {
  let [poolName, setPoolName] = useState("");
  let [poolCount, setPoolCount] = useState(0);
  let [poolIsParallel, setPoolIsParallel] = useState(false);
  let [isStartManually, setStartManually] = useState(false);
  const navigate = useNavigate();
  
  const dispatch = useDispatch<AppDispatch>();
  
  const onPoolAdd = (name: string, count: number, isParallel: boolean, isStartManually: boolean) => {
    const params = {
      id: '',
      name: poolName,
      count: poolCount,
      isParallel: poolIsParallel,
      isStartManually
    };
    if (isStartManually) {      
      dispatch(addPool(params));            
    } else {
      dispatch(thunkRunRequests(params));
    }
    navigate(RouterPathEnum.POOL_LIST);
  }
  
  //Rendering
  return (
    <Box>
      <Box mt={5} sx={{width: 400}}>
        <FormGroup>
          <Box>
            <TextField
              variant="outlined"
              label="Pool name"
              name="name"
              size="small"
              fullWidth
              onChange={(e) => setPoolName(e.target.value)}              
            />
          </Box>
          <Box mt={4}>
            <TextField
              variant="outlined"
              label="Count"
              name="count"
              size="small"
              fullWidth
              onChange={(e) => setPoolCount(Number(e.target.value))}              
            />
          </Box>
          <Box mt={2}>
            <FormControlLabel control={<Checkbox onChange={(e) => setPoolIsParallel(e.target.checked)} />} label="Parallel" />            
          </Box>
          <Box mt={2}>
            <FormControlLabel control={<Checkbox onChange={(e) => setStartManually(e.target.checked)} />} label="Start manually" />            
          </Box>
        </FormGroup>
      </Box>     
      <Box mt={5}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            onPoolAdd(poolName, Number(poolCount), Boolean(poolIsParallel), Boolean(isStartManually));
          }}
        >
          Add Pool
        </Button>        
      </Box>
    </Box>
  );
}

export default AddPool;
