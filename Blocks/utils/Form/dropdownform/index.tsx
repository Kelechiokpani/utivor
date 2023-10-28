import React, { useState } from 'react';
import { DropdownDiv } from './styles/dropdown.styles';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

interface DropdownType {
    categories: any;
}

interface DropdownType {
    categories: any;
    pageIndex: number;
    pageTotal: number;
    totalPagesData: any;
    setCategories: any;
    setPageIndex: any;
}


const Dropdown: React.FC<DropdownType> = ({ categories, pageIndex, pageTotal, totalPagesData, setCategories, setPageIndex }) => {

    const [showCategory, setShowCategory] = useState(false);

    const [category, setCategory] = useState('');

    const [subCatgoryData, setSubCategoryData] = useState('');
    const [subCategoryItems, setSubCategoryItems] = useState([]);

    const [subSubCategoryData, setSubSubCategoryData] = useState('');
    const [subSubSubCategoryItems, setSubSubCategoryItems] = useState([]);


    const handlePrevious = () => {
        if (categories?.length > 0 && showCategory) {
            if (pageIndex > 1) {
                const indexState = pageIndex - 1;

                setPageIndex(pageIndex - 1);

                setCategories(totalPagesData[indexState - 1]);
            }
        }
    };

    const handleNext = () => {
        if (categories?.length > 0 && showCategory) {
            if (pageIndex < pageTotal) {
                const indexState = pageIndex + 1;

                setPageIndex(pageIndex + 1);

                setCategories(totalPagesData[indexState - 1]);
            }
        }
    };



    return (
        <DropdownDiv>
            <div
                className="select_dropdown"
                onClick={() => {
                    setShowCategory(!showCategory);
                    setCategory('');
                    setSubCategoryItems([]);
                    setSubCategoryData('');
                    setSubSubCategoryItems([]);
                    setSubSubCategoryData('');
                }}
            >
                <p>Select Categories</p>

                <div className="select_dropdown_arrange">
                    <FiChevronDown className="select_dropdown_arrange_icon" />
                </div>
            </div>

            {categories?.length > 0 && showCategory && (
                <div className="dropdown_component">
                    {categories?.map((item: any, key: any) => (
                        <div className="dropdown_component_content" key={key}>
                            <div className="dropdown_component_category">
                                <div
                                    className="dropdown_component_category_content"
                                    onClick={() => {
                                        setCategory(item?.name);
                                        setSubCategoryItems(item?.subcategories);
                                        setSubCategoryData('');
                                        setSubSubCategoryItems([]);
                                        setSubSubCategoryData('');
                                    }}
                                >
                                    <p className="dropdown_component_category_text">{item?.name}</p>
                                    <div className="dropdown_component_category_arrange">
                                        <FiChevronRight className="dropdown_component_category_icon" />
                                    </div>
                                </div>

                                {category === item?.name && (
                                    <>
                                        <div className="dropdown_component_subcategory">
                                            {!subCatgoryData && (
                                                <div style={{ width: '100%', padding: '15px 0px' }}>
                                                    <span className="p-float-label mt-2" style={{ width: '100%' }}>
                                                        <InputText id="username" style={{ width: '100%' }} />
                                                        <label htmlFor="username">Name</label>
                                                    </span>
                                                    {/* <span className="p-float-label mt-2" style={{ width: '100%' }}>
                                                        <InputTextarea id="description" rows={2} cols={30} style={{ width: '100%' }} />
                                                        <label htmlFor="description">Description</label>
                                                    </span> */}
                                                    <div className="mt-2">
                                                        <Button label="Create Sub-Category" type="submit" icon="pi pi-check" className='bg-bluegray-700 border-round-lg outline-none' />
                                                    </div>
                                                </div>
                                            )}

                                            {subCategoryItems?.map((data: any, index: any) => (
                                                <div className="dropdown_component_subcategory_content" key={index}>
                                                    <div
                                                        onClick={() => {
                                                            setSubCategoryData(data?.name);
                                                            setSubSubCategoryItems(data?.subcategories);
                                                        }}
                                                        className="dropdown_component_subcategory_content_space">
                                                        <p className="dropdown_component_subcategory_text">{data?.name}</p>
                                                        <div className="dropdown_component_subcategory_arrange">
                                                            <FiChevronRight className="dropdown_component_subcategory_icon" />
                                                        </div>
                                                    </div>

                                                    {subCatgoryData === data?.name && (
                                                        <div className="dropdown_component_subMaincategory">
                                                            <div style={{ width: '100%', padding: '15px 0px', marginBottom: '15px' }}>
                                                                <span className="p-float-label mt-2" style={{ width: '100%' }}>
                                                                    <InputText id="username" style={{ width: '100%' }} />
                                                                    <label htmlFor="username">Name</label>
                                                                </span>
                                                                {/* <span className="p-float-label mt-2" style={{ width: '100%' }}>
                                                                    <InputTextarea id="description" rows={2} cols={30} style={{ width: '100%' }} />
                                                                    <label htmlFor="description">Description</label>
                                                                </span> */}
                                                                <div className="mt-2">
                                                                    <Button label="Submit" type="submit" icon="pi pi-check" className='bg-bluegray-700 border-round-lg outline-none' />
                                                                </div>
                                                            </div>

                                                            {subSubSubCategoryItems?.map((res: any, ind: any) => (
                                                                <div className="dropdown_component_subMaincategory_content" key={ind}>
                                                                    <p className="dropdown_component_subMaincategory_text">{res?.name}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}


            <div className="overflow-hidden">
                <div className="flex">
                    <div className="flex-1 md:flex-none flex align-items-center justify-content-center cursor-pointer mt-6 font-bold text-gray-700 px-5 py-3 border-round" onClick={handlePrevious}>Prev </div>
                    <div className="flex-1 md:flex-none flex align-items-center justify-content-center cursor-pointer mt-6 font-bold text-gray-700 px-5 py-3 border-round">{pageIndex}</div>
                    <div className="flex-1 md:flex-none flex align-items-center justify-content-center cursor-pointer mt-6 font-bold text-gray-700 px-5 py-3 border-round" onClick={handleNext}>Next</div>
                </div>
            </div>
        </DropdownDiv>
    );
};

export default Dropdown;
