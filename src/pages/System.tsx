import { Dashboard } from "../components/templates/Dashboard";

interface SystemProps {
  userType: 'admin' | 'colaborador'
}
export function System(props: SystemProps) {
  return (
    <Dashboard userType={props.userType} />
  )
}