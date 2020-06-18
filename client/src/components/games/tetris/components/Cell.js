import React from 'react';
import {StyledCell} from  './styles/StyledCell';
import {Tetrominos} from '../tetrominos';

const Cell = ({type}) => (
     <StyledCell type= {type} color= {Tetrominos[type].color}>
          {console.log('rerender cell')}
     </StyledCell>
     
);

export default React.memo(Cell);

