import React, { Component } from 'react';
import ShoppingCart from '../ShoppingCart';

class Checkout extends Component {
  render() {
    return (
      <section>
        <header>
          <h3>Revise seus Produtos</h3>
          <ShoppingCart />
        </header>
        <section>
          <h3>Informações do Comprador</h3>
          <form
            name="checkOutForm"
            action="/"
          >
            <label htmlFor="nameInput">
              Nome Completo
              <input
                type="text"
                data-testid="checkout-fullname"
                id="nameInput"
                name="nameInput"
                required
              />
            </label>
            <br />
            <label htmlFor="cpfInput">
              CPF
              <input
                type="text"
                data-testid="checkout-cpf"
                id="cpfInput"
                name="cpfInput"
                required
              />
            </label>
            <br />
            <label htmlFor="emailInput">
              Email
              <input
                type="email"
                data-testid="checkout-email"
                id="emailInput"
                name="emailInput"
                required
              />
            </label>
            <br />
            <label htmlFor="telInput">
              Telefone
              <input
                type="tel"
                data-testid="checkout-phone"
                id="telInput"
                name="telInput"
              />
            </label>
            <br />
            <label htmlFor="cepInput">
              CEP
              <input
                type="text"
                data-testid="checkout-cep"
                id="cepInput"
                name="cepInput"
              />
            </label>
            <br />
            <label htmlFor="addressInput">
              Endereço
              <input
                type="text"
                data-testid="checkout-address"
                id="addressInput"
                name="addressInput"
              />
            </label>
            <br />
            <label htmlFor="complementInput">
              Complemento
              <input
                type="text"
                id="complementInput"
                name="complementInput"
              />
            </label>
            <br />
            <label htmlFor="numberInput">
              Numero
              <input
                type="number"
                id="numberInput"
                name="numberInput"
              />
            </label>
            <br />
            <label htmlFor="cityInput">
              Cidade
              <input
                type="text"
                id="cityInput"
                name="cityInput"
              />
            </label>
            <br />
            <label htmlFor="stateInput">
              Estado
              <input
                type="text"
                id="stateInput"
                name="stateInput"
              />
            </label>
            <br />
            <div>
              <h3>Metodo de Pagamento</h3>
              <input
                type="radio"
                id="bankSlip"
                name="paymentMethod"
              />
              <label htmlFor="bankSlip">
                Boleto
                <h4>Cartao de Credito</h4>
                <input
                  type="radio"
                  id="visa"
                  name="paymentMethod"
                />
              </label>
              <label htmlFor="visa">
                Visa
                <input
                  type="radio"
                  id="master"
                  name="paymentMethod"
                />
              </label>
              <label htmlFor="master">
                MasterCard
                <input
                  type="radio"
                  id="elo"
                  name="paymentMethod"
                />
              </label>
              <label htmlFor="elo">
                Elo
                <button type="submit">Comprar</button>
              </label>
            </div>
          </form>
        </section>
      </section>
    );
  }
}

export default Checkout;
