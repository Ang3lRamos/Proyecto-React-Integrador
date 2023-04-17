import React from 'react';

import { UseState } from "react";

export default function App() {
    const [names, setNames] = useState([{id: 1, name: 'foo'}, {id: 2, name: 'bar'}, 
    {id: 3, name: 'ded'}, {id: 4, name: 'wde'}]);

    return(
          <h1>
            Listado de usuarios
          <h1>
          <div>
            <ul>
              {names.map((element) =>
                <li>{element.name}</li>
              )}
            </ul>
          </div>
    )
}