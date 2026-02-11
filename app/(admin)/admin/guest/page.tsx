import Button from "@/app/component/button";
import Header from "../../ui/header";
import { FaPlus } from "react-icons/fa6";
import GuestTable from "../../components/guest/guest-table";


const GuestManagement = () => {
return (
    <div className="px-14 pt-13 space-y-4">
        <Header title="Guest Management" subtitle="Manage all guest data">
            <Button><FaPlus /> Add New Guest</Button>
        </Header>
        <GuestTable />
    </div>
)
}

export default GuestManagement;