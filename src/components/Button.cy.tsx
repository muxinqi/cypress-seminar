import Button from './Button';

describe('Button', () => {
  it('should mount', () => {
    cy.mount(<Button>Click Me</Button>);
    cy.get('button').contains('Click Me');
  });

  it('when button is clicked, should call onClick', () => {
    const onClickSpy = cy.spy().as('onClickSpy');
    cy.mount(<Button onClick={onClickSpy}>Click Me</Button>);
    cy.get('button').contains('Click Me').click();
    cy.get('@onClickSpy').should('have.been.called');
  });
});
