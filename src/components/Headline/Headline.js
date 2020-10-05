import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import Works from "../Works/Works";

export const works = [
  {
      name:"Child Support",
      picture:"childSupport.png"
  },
  {
      name:"Animal Shelter",
      picture:"animalShelter.png"
  },
  {
      name:"Bird House",
      picture:"birdHouse.png"
  },
  {
      name:"Baby Sitting",
      picture:"babySit.png"
  },
  {
    name:"Clean Water",
    picture:"cleanWater.png"
},
{
    name:"Clean Park",
    picture:"clearnPark.png"
},
{
    name:"Cloth Swap",
    picture:"clothSwap.png"
},
{
    name:"Drive Safety",
    picture:"driveSafety.png"
},
{
  name:"Food Charity",
  picture:"foodCharity.png"
},
{
  name:"Good Education",
  picture:"goodEducation.png"
},
{
  name:"IT Help",
  picture:"ITHelp.png"
},
{
  name:"Library Books",
  picture:"libraryBooks.png"
},
{
name:"Music Lessons",
picture:"musicLessons.png"
},
{
name:"New Books",
picture:"newBooks.png"
},
{
name:"Refuse Shelter",
picture:"refuseShelter.png"
},
{
name:"River Clean",
picture:"riverClean.png"
},
{
name:"School Suffiles",
picture:"schoolSuffiles.png"
},
{
name:"Study Group",
picture:"studyGroup.png"
},
{
name:"Stuffed Animals",
picture:"stuffedAnimals.png"
},
{
name:"Vote Register",
picture:"voteRegister.png"
}
];

const Headline = () => {
  
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>
          I GROW BY HELPING PEOPLE IN NEED.
        </h1>
      </div>

      <div style={{marginBottom: "20px"}}>
        <Form style={{ justifyContent: "center" }} inline>
          <FormControl
            type="text"
            placeholder="Search..."
            className=" mr-sm-2"
          />
          <Button type="submit">Search</Button>
        </Form>
      </div>
      <div className="row">
      {
        works.map(work => <Works key={work.name} work={work}></Works>)
      }
      </div>

      
    </div>
  );
};

export default Headline;
