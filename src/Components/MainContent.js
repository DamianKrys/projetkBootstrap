import React from 'react';
import './MainContent.css';
import obrazek from '../Images/wlodkowic.jpg';
import obrazek2 from '../Images/anonim.jpg';
import pr1 from '../Images/pr1.jpg';
import pr2 from '../Images/pr2.jpg';
import pr3 from '../Images/pr3.jpg';
import pr4 from '../Images/pr4.jpg';
import { Card, ListGroup, Badge } from 'react-bootstrap';




const MainContent = () => {
    
  
  return (
    <div>
      {
       <div className="main-content-container">
       <div className="content-div" >
         {/* Zawartość pierwszego diva */}
         
         <img
           src={obrazek} alt="Opis obrazka"
           />
           <img 
           src={obrazek2} alt="anonim"
           />
         <h1>Damian Krysiewicz</h1>
         <h2>
        Student siódmego semestru informatyki na uczelni: SZKOŁA WYŻSZA IM. PAWŁA WŁODKOWICA W PŁOCKU.
           Aktualna strona jest projektem zaliczeniowym przedmiotu: Front-end developer.
           Praca została zaprojektowana na ocenę 3.
         </h2>
       </div>
     
       <div className="content-div">
  {/* Zawartość drugiego diva */}
  <h1>Projekty</h1>
  <h2>Więcej szczegółów po wybraniu interesującego projektu</h2>

  <div className="frames-container">
    <div className="frame">
      <div className="image-container">
        <img src={pr1} alt="Opis zdjęcia 1" className="centered-image" />
      </div>
      <div className="text-container">
        <h1>Projekt 2018</h1>
        <p>Projekt wykonany w 2018 roku na zapotrzebowanie BMW</p>
      </div>
    </div>

    <div className="frame">
      <div className="image-container">
        <img src={pr2} alt="Opis zdjęcia 2" className="centered-image" />
      </div>
      <div className="text-container">
        <h1>Projekt AVB</h1>
        <p>Projekt wykonany w 2018 roku na zapotrzebowanie AUDI</p>
      </div>
    </div>

    <div className="frame">
      <div className="image-container">
        <img src={pr3} alt="Opis zdjęcia 2" className="centered-image" />
      </div>
      <div className="text-container">
        <h1>Projekt LHE</h1>
        <p>Projekt wykonany na zapotrzebowanie Lamborghini</p>
      </div>
    </div>
  </div>
</div>
    

       <div className="content-div" >
         {/* Zawartość trzeciego diva */}
         <h1>Doświadczenie</h1>

         <Card className="Card custom-card">
      <Card.Body>
        <Card.Title>Audi</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Dealer</Card.Subtitle>
        <Card.Text>
         Sprzedaż samochodów dla Audi
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <Badge variant="primary">09.2016</Badge> - <Badge variant="secondary">07.2019</Badge>
        </ListGroup.Item>
        <ListGroup.Item>
          Location: Manchester, England
        </ListGroup.Item>
      </ListGroup>
    </Card>


    <Card className="Card custom-card">
      <Card.Body>
        <Card.Title>BMW</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Dealer</Card.Subtitle>
        <Card.Text>
         Sprzedaż samochodów dla BMW
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <Badge variant="primary">09.2019</Badge> - <Badge variant="secondary">07.2021</Badge>
        </ListGroup.Item>
        <ListGroup.Item>
          Location: New York, USA
        </ListGroup.Item>
      </ListGroup>
    </Card>


    <Card className="Card custom-card">
      <Card.Body>
        <Card.Title>Cupra</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Dealer</Card.Subtitle>
        <Card.Text>
         Sprzedaż samochodów dla Cupra
        </Card.Text>
      </Card.Body>
      <ListGroup className="custom-card`">
        <ListGroup.Item>
          <Badge variant="primary">11.2021</Badge> - <Badge variant="secondary"></Badge>
        </ListGroup.Item>
        <ListGroup.Item>
          Location: Barcelona, Spain
        </ListGroup.Item>
      </ListGroup>
    </Card>

 

       </div>

       <div className="content-div" >
         {/* Zawartość czwartego diva */}
         <h1>Projekt główny</h1>
         <img src={pr4} alt="Opis zdjęcia 2" className="centered-image" />
       </div>



       <div className="content-div" >
         {/* Zawartość piątego diva */}
         <h1>Kontakt</h1>
        
         <div className="container">
  <form action="action_page.php">

    <label htmlFor="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label htmlFor="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." className="custom-input" />
    
    <label htmlFor="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

    <input type="submit" value="Wyślij" />
  
  </form>
       </div>
    </div>
</div>

      }
    </div>
  );
}

export default MainContent;







