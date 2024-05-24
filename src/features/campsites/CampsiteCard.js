
// I worked on this code as part of a coding bootcamp curriculum. I followed along with the instructions 
// (i.e. followed/copied instructions from the course/instructors and didn't design everything from scratch myself) while
//  writing code in this project/file. Moreover, I  acknowledge receiving support from and/or working/collaborating
//   with instructors/classmates, generally as is expected from being a participant in the coding bootcamp.


import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";
import { Link } from 'react-router-dom';

const CampsiteCard = ({campsite}) => {
  const { id, image, name } = campsite;
  return (
    <Link to={`${id}`}>
        <Card>
          <CardImg 
              width='100%'
              src={image}
              alt={name}
            /> 

            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    </Link>
  )
}

export default CampsiteCard
