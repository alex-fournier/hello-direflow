import {
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  RootRef,
  Select
} from '@material-ui/core'
import { EventContext, Styled } from 'direflow-component';
import React, { FC, useContext, useRef, useState } from 'react';
import styles from './App.css';

interface IProps {
  componentTitle: string;
  sampleList: string[];
}

const useStyles = makeStyles((theme) => createStyles({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const App: FC<IProps> = (props) => {
  const dispatch = useContext(EventContext);
  const [age, setAge] = useState('10');
  const classes = useStyles();
  const domRef = useRef()

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  const renderSampleList = props.sampleList.map((sample: string) => (
    <div key={sample} className='sample-text'>
      → {sample}
    </div>
  ));

  return (
    <Styled styles={styles}>
      <div className='app'>
        <RootRef rootRef={domRef}>
          <div className='top'>
            <div className='header-image' />
          </div>
          <div className='bottom'>
            <div className='header-title'>{props.componentTitle}</div>
            <div>{renderSampleList}</div>
            <FormControl className={classes.formControl}>
              <InputLabel id="simple-select-label">Age</InputLabel>
              <Select
                labelId="simple-select-label"
                id="simple-select"
                value={age}
                onChange={handleChange}
                MenuProps={{
                  container: () => domRef.current || document.body
                }}
              >
                <MenuItem value="10">Ten</MenuItem>
                <MenuItem value="20">Twenty</MenuItem>
                <MenuItem value="30">Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </RootRef>
      </div>
    </Styled>
  );
};

App.defaultProps = {
  componentTitle: 'Foo Component',
  sampleList: [
    'Create with React',
    'Build as Web Component',
    'Use it anywhere!',
  ],
}

export default App;
