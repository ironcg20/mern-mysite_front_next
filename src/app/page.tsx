'use client'

import { useRouter } from 'next/navigation'
import styles from './page.module.css'
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import Dashboard from "./dashboard/page"

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Page() {
  const router = useRouter()

  return (
    <Dashboard />
    //     <div>
    //       <Button type="button" onClick={() => router.push('/dashboard')}>
    // //       Dashboard
    // //     </Button>
    //     </div>
  );
}