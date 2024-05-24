
// I worked on this code as part of a coding bootcamp curriculum. I followed along with the instructions 
// (i.e. followed/copied instructions from the course/instructors and didn't design everything from scratch myself) while
//  writing code in this project/file. Moreover, I  acknowledge receiving support from and/or working/collaborating
//   with instructors/classmates, generally as is expected from being a participant in the coding bootcamp.

import { useSelector } from 'react-redux';

import { Col, Row } from 'reactstrap';

import CampsiteCard from "./CampsiteCard";

import { selectAllCampsites } from "./campsitesSlice";

import Error from '../../components/Error';

import Loading from '../../components/Loading';


const CampsitesList = () => {
  const campsites = useSelector(selectAllCampsites);
  console.log('campsites:', campsites);

  const isLoading = useSelector((state) => state.campsites.isLoading);
  const errMsg = useSelector((state) => state.campsites.errMsg);

  if (isLoading) {
    return (
      <Row>
        <Loading />
      </Row>
    );
  }

  if (errMsg) {
    return (
      <Row>
        <Error errMsg={errMsg} />
      </Row>
    );
  }

  return (
    <Row className="ms-auto">
        { campsites.map(
            campsite => {
                return (
                    <Col 
                      md="5" 
                      className="m-4" 
                      key={campsite.id}
                    >
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}

    </Row>
  )
}

export default CampsitesList
