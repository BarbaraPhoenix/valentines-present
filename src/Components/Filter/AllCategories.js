import Filter from "./Filter";
const AllCategories = () => {
    return (<div>
        <h1>💕 Valentines Presents 💕</h1>

        {['FLOWERS', 'VINES', 'SWEETS', 'ALL'].
        map(category => <Filter category={category}/>

        )}
        
        </div>)
}

export default AllCategories;