
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./AdminPages/Dashboard"
import Category from "./AdminPages/Category"
import SubCategory from "./AdminPages/SubCategory"
import ThirdCategory from "./AdminPages/ThirdCategory"
import Brand from "./AdminPages/Brand"
import AdminMaster from "./AdminPages/AdminMaster"
import SpecificationList from "./AdminPages/SpecificationType"
import SpecificationOption from "./AdminPages/SpecificationOption"
import Country from "./AdminPages/Country"
import State from "./AdminPages/State"
import City from "./AdminPages/City"
import Area from "./AdminPages/Area"
import Products from "./AdminPages/Products"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/admin" element={<AdminMaster></AdminMaster>}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="categoryList" element={<Category></Category>}></Route>
            <Route path="subcategoryList" element={<SubCategory></SubCategory>}></Route>
            <Route path="thirdcategoryList" element={<ThirdCategory></ThirdCategory>}></Route>
            <Route path="brand" element={<Brand></Brand>}></Route>
            <Route path="product" element={<Products></Products>}></Route>
            <Route path="country" element={<Country></Country>}></Route>
            <Route path="state" element={<State></State>}></Route>
            <Route path="city" element={<City></City>}></Route>
            <Route path="area" element={<Area></Area>}></Route>
            <Route path="specificationtype" element={<SpecificationList></SpecificationList>}></Route>
            <Route path="specificationoption" element={<SpecificationOption></SpecificationOption>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
