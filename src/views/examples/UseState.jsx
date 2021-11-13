import React, {useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import '../../index.css'

const UseState = (props) => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Initial...")
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
              <span className="text">{count}</span>
              <div>
              <button className="btn" onClick={() =>setCount(count-1)}>-1</button>
              <button className="btn" onClick={() =>setCount(count+1)}>+1</button>
              <button className="btn" onClick={() =>setCount(0)}>0</button>
              <button className="btn" onClick={() => setCount(current => current +10)}>+10</button>
              <button className="btn" onClick={() => setCount(count +10)}>+10</button>
              </div>
            </div>
            <SectionTitle title="Exercício #02" />
            <input type="text" className="input" value={name} onChange={e => setName(e.target.value)} />
            <p>{name}</p>
        </div>
    )
}

export default UseState
