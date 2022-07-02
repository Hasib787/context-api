import Departments from './Departments';

const University = (props) => {
    const {announcement, count} = props;
    return (
        <div>
           <small>{announcement}</small> 
           <Departments count={count} announcement={announcement} />
        </div>
    );
};

export default University;