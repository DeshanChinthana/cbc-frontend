import { BsBoxSeam, BsCart4, BsGraphUp, BsPeopleFill } from "react-icons/bs";
import { Link, Route, Routes } from "react-router-dom";
import AdminProducts from "./adminProducts";

export default function AdminPanel() {
  return (
    <div className="bg-blue-200 w-full h-screen flex">
      <div className="w-[20%] h-screen bg-blue-950 flex flex-col items-start px-10 py-10">
        <Link
          className="flex flex-row items-center mb-4 text-white hover:text-blue-200"
          to="/admin/dashboard"
        >
          <BsGraphUp className="mr-2" /> Dashboard
        </Link>

        <Link
          className="flex flex-row items-center mb-4 text-white hover:text-blue-200"
          to="/admin/products"
        >
          <BsBoxSeam className="mr-2" /> Products
        </Link>

        <Link
          className="flex flex-row items-center mb-4 text-white hover:text-blue-200"
          to="/admin/orders"
        >
          <BsCart4 className="mr-2" /> Orders
        </Link>

        <Link
          className="flex flex-row items-center text-white hover:text-blue-200"
          to="/admin/customers"
        >
          <BsPeopleFill className="mr-2" /> Customers
        </Link>
      </div>

      <div className="w-[80%] h-screen bg-blue-200">
        <Routes path="/*">
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/products" element={<AdminProducts/>} />
          <Route path="/orders" element={<h1>Orders</h1>} />
          <Route path="/customers" element={<h1>Customers</h1>} />
          <Route path="/*" element={<h1>404 not found the admin page</h1>} />
        </Routes>
      </div>
    </div>
  )
}
