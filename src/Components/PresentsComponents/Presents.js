import dataPresents from "../../data/dataPresents";
import Present from "./Present";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/presentsSlice";


const Presents = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (<div>
        {dataPresents
        .filter(present => {
            if (selectedCategory === 'ALL') return true;
            return selectedCategory === present.category;
        }
        )
        .map(present => <Present present={present}/>)}
        </div>)
}

export default Presents;