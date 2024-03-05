import PropTypes from  'prop-types'

const getSaludo = (nombre) => {
    return `Saludos ${nombre}`;
};

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <div data-testid="test-title" > { title } </div>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  );
};

FirstApp.propTypes = {
    tittle: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    name: 'Anderson',
    //title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
}