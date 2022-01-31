import React, { useEffect, useRef, useState } from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'



const SearchTabs = () => {

  const [activeTab, setActiveTab] = useState("first")
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef();


  useEffect(() => {
    console.log('hi', inputRef)
  },[inputRef, enteredFilter])

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
      <Row style={{paddingBottom: 10 + 'px'}}>
          <Nav variant="pills" className="nav ">
        <Col sm={6}>
            <Nav.Item>
              <Nav.Link eventKey="first" onClick={()=>setActiveTab("first")}>Tab 1</Nav.Link>
            </Nav.Item>
        </Col>
        <Col sm={6}>
            <Nav.Item>
              <Nav.Link eventKey="second" onClick={()=>setActiveTab('second')}>Tab 2</Nav.Link>
            </Nav.Item>
        </Col>
          </Nav>
      </Row>

      <Row style={{paddingBottom: 25 + 'px'}}>
        <Col sm={12}>
          <Tab.Content>
            {activeTab == "first" ?
              <Tab.Pane eventKey="first">
                <input
                  type='text'
                  ref={inputRef}
                  value={enteredFilter}
                  onChange={event => setEnteredFilter(event.target.value)}/>
              </Tab.Pane> 
            : null  
            }
           
            {activeTab == "second" ? 
              <Tab.Pane eventKey="second">
                {enteredFilter}
              </Tab.Pane>
              : null
            }

          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    

  )
}

export default SearchTabs