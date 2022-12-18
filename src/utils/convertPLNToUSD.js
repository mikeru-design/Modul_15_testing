export const convertPLNToUSD = (PLN) => {

  if ( typeof PLN !== 'string' && typeof PLN !== 'number' && PLN !== undefined ){
    return 'Error';
  }

  if ( typeof PLN === 'string' ||  PLN === undefined) {
    return NaN;
  }

  let PLNtoUSD = '';

  if( typeof PLN === 'number' && PLN > 0){

    PLNtoUSD = PLN / 3.5;

  } else if ( typeof PLN === 'number' && PLN < 0 ){

    PLNtoUSD = 0.00;
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
}