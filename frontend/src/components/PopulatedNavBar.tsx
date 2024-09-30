import { useRouter } from 'next/router';
import { IoMdArrowDropdown } from "react-icons/io";
import NavBar from "./nav/NavBar";
import NavDropdown from "./nav/NavDropdown";
import NavItem from "./nav/NavItem";

const PopulatedNavBar = () => {
    const router = useRouter();

    // Check if the current page is an admin page
    const onAdminPage = router.pathname.startsWith('/admin');

    return (
        <NavBar>
            <div className="speedTitle">SPEED</div> 
            <NavItem route="/" end>Home</NavItem>
            <NavItem dropdown route="/articles">
                Articles <IoMdArrowDropdown />
                <NavDropdown>
                    <NavItem route="/articles">View Articles</NavItem>
                    <NavItem route="/articles/new">Submit New</NavItem>
                </NavDropdown>
            </NavItem>
            {onAdminPage && (
                <NavItem dropdown>
                    User Management <IoMdArrowDropdown />
                    <NavDropdown>
                        <NavItem route="/admin/users">View Users</NavItem>
                        <NavItem route="/admin/permissions">Manage Permissions</NavItem>
                        <NavItem route="/admin/settings">Settings</NavItem>
                    </NavDropdown>
                </NavItem>
            )}
        </NavBar>
    );
};

export default PopulatedNavBar;
