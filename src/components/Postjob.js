import { useEffect, useState } from "react";
import { Button, Tabs, Tab,  Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
function Postjob() 
{

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [Jobs, setJobs] = useState([]);


  useEffect(() => {

    axios
      .get("http://localhost:8080/jobs")
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //This is how we created the createBooks function!
  const createJobs = (event) => {
    event.preventDefault();
    if (localStorage.getItem("token"))  {
    console.log(event);
    console.log("Name", name);
    console.log("description", description);
    console.log("date", date);
    console.log("price", price);
    console.log("address", address);
 

        axios
          .post("http://localhost:8080/jobs", {
           name: name,
           description: description,
           date: date,
           price: price,
           address: address,
          
          }
          )
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => console.log(err));
      }
    }
    


    return(
    
            <div className="App mt-5">
           
              <Tabs defaultActiveKey="addjobs" id="uncontrolled-tab-example">
               
             
                  <Tab eventKey="addjobs" name="Add Jobs">
                    <h1 className="m-5">Add Jobs</h1>
        
                 
                    <Card className="bg-light mx-auto" style={{ width: "30rem" }}>
                      <Card.Header>Add Jobs</Card.Header>
        
                   
                      <Form onSubmit={(event) => createJobs(event)} className="m-3">
                        <Form.Group controlId="name">
                          <Form.Label>Task</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Provide task"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                          />
                        </Form.Group>
        
                        <Form.Group controlId="description">
                          <Form.Label>description</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Provide description"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                          />
                        </Form.Group>
        
                        <Form.Group controlId="date">
                          <Form.Label>date</Form.Label>
                          <Form.Control
                             type="date"
                             placeholder="Provide date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                          >
                          </Form.Control>
                        </Form.Group>
        
                        <Form.Group controlId="price">
                          <Form.Label>price</Form.Label>
                          <Form.Control
                           type="text"
                           placeholder="Provide Service charge"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          >
                            
                          </Form.Control>
                        </Form.Group>
        
                        <Form.Group controlId="address">
                          <Form.Label>address</Form.Label>
                          <Form.Control
                           type="text"
                           placeholder="Provide address charge"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          >
                            
                          </Form.Control>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                          Add
                        </Button>
                      </Form>
                    </Card>
                  </Tab>
             
        
              
               
              </Tabs>
            </div>
    )
}

export default Postjob;