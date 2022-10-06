import { Dashboard } from "../components/templates/Dashboard";
import { ProtectedLayout } from "../components/templates/ProtectedLayout";

interface SystemProps {
  userType: 'admin' | 'colaborador'
}
export function System(props: SystemProps) {
  return (
    <ProtectedLayout>
      <Dashboard userType={props.userType} />
    </ProtectedLayout>
  )
}