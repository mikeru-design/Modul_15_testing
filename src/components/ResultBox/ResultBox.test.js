import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResultBox from './ResultBox';

  describe('Component ResultBox', () => {
    it('should render without crash with proper values', () =>{
      render(<ResultBox from={'PLN'} to={'USD'} amount={100}/>)
    });

    const testCases = [
      { amount: 100, from: 'PLN', to: 'USD' },
      { amount: 20, from: 'PLN', to: 'USD' },
      { amount: 20000, from: 'PLN', to: 'USD' },
      { amount: 345.7, from: 'PLN', to: 'USD' },
    ];

    for ( let testCase of testCases ) {

      const amount = Math.round(testCase.amount);

      it('should render proper info about conversion when PLN -> USD', () => {
        render(<ResultBox amount={amount} from={testCase.from} to={testCase.to} />);

        const resultBox = screen.getByTestId('resultBox');


        expect(resultBox).toHaveTextContent(`${(new Intl.NumberFormat('en-US', { style: 'currency', currency: testCase.from }).format(amount).replace(/\u00a0/g, ' '))} = $${((amount/3.5).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`)

        cleanup();
      });



      it('should render proper info about conversion when USD -> PLN', () => {
        render(<ResultBox amount={amount} from={testCase.to} to={testCase.from} />);

        const resultBox = screen.getByTestId('resultBox');

        expect(resultBox).toHaveTextContent(`$${(amount.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} = ${testCase.from} ${((amount*3.5).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`)

        cleanup();
      })



      it('should render proper info about conversion when USD -> USD', () => {
        render(<ResultBox amount={amount} from={testCase.to} to={testCase.to} />);

        const resultBox = screen.getByTestId('resultBox');

        expect(resultBox).toHaveTextContent(`$${(amount.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} = $${(amount.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`)

        cleanup();
      })



      it('should render proper info about conversion when PLN -> PLN', () => {
        render(<ResultBox amount={amount} from={testCase.from} to={testCase.from} />);

        const resultBox = screen.getByTestId('resultBox');

        expect(resultBox).toHaveTextContent(`${testCase.from} ${(amount.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} = ${testCase.from} ${(amount.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`)

        cleanup();
      })
    }

    const testCasesNegative = [
      { amount: -100, from: 'PLN', to: 'USD' },
      { amount: -20, from: 'USD', to: 'USD' },
      { amount: -20000, from: 'PLN', to: 'PLN' },
      { amount: -345.7, from: 'USD', to: 'USD' },
    ];

    for ( let testCase of testCasesNegative ) {

      const amount = Math.round(testCase.amount);

        it('should render “Wrong value…” info when amount < 0', () => {
        render(<ResultBox amount={amount} from={testCase.from} to={testCase.from} />);

        const resultBox = screen.getByTestId('resultBox');

        expect(resultBox).toHaveTextContent(`Wrong value…`)

        cleanup();
      })
    }
});
