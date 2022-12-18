import { render } from '@testing-library/react';
import ResultBox from './ResultBox';

  describe('Component ResultBox', () => {
    it('should render without crash with proper values', () =>{
      render(<ResultBox from={'PLN'} to={'USD'} amount={100}/>)
    });
    it('should render proper info about conversion when PLN -> USD', () => {
      
    })
});
