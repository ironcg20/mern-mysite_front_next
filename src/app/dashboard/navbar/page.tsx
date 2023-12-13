import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import { Tabs, Tab } from "@mui/material";
import { useRouter } from 'next/navigation'
import Login from '../login/page'

export default function Navbar() {
    const router = useRouter()

    return (
        <AppBar>
            <Toolbar style={{ justifyContent: 'flex-end' }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => router.push('/signup')}
                    style={{ marginRight: '1rem' }}
                >
                    SignUp
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => router.push('/dashboard/login')}
                >
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    )
}