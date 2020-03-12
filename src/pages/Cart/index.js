import React from 'react';

import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from "react-icons/md"

import { Container, ProductTable, Total } from "./styles";

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="//www.dhresource.com/webp/m/0x0s/f2-albu-g6-M01-08-63-rBVaSFuMg3CAAAWGAAC1BiLeTbA734.jpg/ajust-vel-casual-snapbacks-homens-maldita.jpg" alt="Cap" />
            </td>
            <td>
              <strong>Cap black DAMN</strong>
              <span>$ 40.99</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#00AACC" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#00AACC" />
                </button>
              </div>
            </td>
            <td>
              <strong>$82.98</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#00AACC" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalize pedido</button>
        <Total>
          <span>Total</span>
          <strong>$117.98</strong>
        </Total>
      </footer>
    </Container>
  );
}
