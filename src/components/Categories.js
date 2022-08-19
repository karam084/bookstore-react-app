import { useSelector, useDispatch } from 'react-redux/es/exports';
import { CheckStatus } from '../redux/categories/categories';

const Category = () => {
  const response = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(CheckStatus())} type="button">Check status</button>
      <p>{response}</p>
    </div>
  )
};

export default Category;
