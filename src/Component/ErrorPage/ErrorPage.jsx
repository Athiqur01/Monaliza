
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const errorDetect=useRouteError();
    console.log(errorDetect)


    return (
        <div>

<h2 className="mt-12 lg:mt-36 text-5xl font-bold opacity-60 text-center ">Oops</h2>
            
            {errorDetect.status===404 && <div>
                <h2 className="pt-4 text-2xl font-medium opacity-60 text-center">Page not found  </h2></div>}
            
        </div>
    );
};

export default ErrorPage;