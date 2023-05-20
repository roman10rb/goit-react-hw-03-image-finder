import { Oval } from "react-loader-spinner";
import css from './Loader.module.css'
export default function Loader() {
    
    
    return <div className={css.Loader}>
        <Oval
      height={60}
  width={60}
  color="blue"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="grey"
  strokeWidth={2}
  strokeWidthSecondary={2}
    
    />
    </div> 
}