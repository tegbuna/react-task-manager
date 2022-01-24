// import Button from './Button';

// const Header = () => {
//     const name="Amara"
//   return <div>
//       <h1>{name}'s Tasks</h1>
//       <Button/>
//   </div>;
// };

// export default Header;
import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({title}) => {
    const onClick = (e) => {
        alert('Hey, you clicked the add button.')
    }
  return (
  <header>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick}/>
  </header>
  )
}

// Creates default prop type
Header.defaultProps = {
    title: 'Task Tracker'
}

// Creates prop type requirement
Header.propTypes = {
    title: PropTypes.string,
    // or to require a prop type:
    // title: PropTypes.string.isRequired

}

export default Header;
