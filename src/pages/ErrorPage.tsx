import error404 from '../assets/img/error404.png';
export const ErrorPage = () => {
      return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={error404} alt='error404' />
                  <h1>Ты чоч наделал?</h1>
            </div>
      );
};
