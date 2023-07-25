import { useState } from 'react';
import categoryList from '../jsondata/categoryList.json';

function CategoryBar(props) {
    // const { age } = props;

    const [selectedOption, setSelectedOption] = useState('додому'); // null or ''

    const menuClick = (catId, catName) => {

        setSelectedOption(catName);// for setting "category-active" class set userstate

        //alert(catName + "["+catId+"] Button is clicked");

        // toggle isActive state on click
        //setIsActive(current => !current);
        
    };

    return (
        <>
            <div className="extra-mian" />
            <div className="w-100 bg-theme">
                <div className="category-container mobile-scroll">
                    {
                        categoryList.map((CI, CIIndex) => {
                            //catNameWithoutSpace = CI.cat_name.replace(/\s/g, "");

                            const isSelected = selectedOption === CI.cat_name.replace(/\s/g, "");

                            const optionClass = isSelected
                                ? 'category-active'
                                : '';
                            //console.log(" optionClass => " + selectedOption + " === " + CI.cat_name.replace(/\s/g, ""));
                            //console.log(" optionClass => " + optionClass);
                            return (
                                <a key={CI.cat_id} href={"/menu#" + CI.cat_name.replace(/\s/g, "")}
                                    className={`${optionClass}`}
                                    onClick={() => menuClick(CI.cat_id, CI.cat_name.replace(/\s/g, ""))}>{CI.cat_name}</a>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default CategoryBar;