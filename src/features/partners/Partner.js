
// I worked on this code as part of a coding bootcamp curriculum. I followed along with the instructions 
// (i.e. followed/copied instructions from the course/instructors and didn't design everything from scratch myself) while
//  writing code in this project/file. Moreover, I  acknowledge receiving support from and/or working/collaborating
//   with instructors/classmates, generally as is expected from being a participant in the coding bootcamp.


const Partner = ({ partner }) => {
    if (partner) {

        const { image, name, description } = partner;

        return (
            <>
                <img src={image} alt={name} and style={{ width: '150px' }} />
                <div className='m-4'>
                <h5 className='fw-bold'>{name}</h5>
                        {description}
                </div>

            </>
         );

         return null;

    }

}




export default Partner;