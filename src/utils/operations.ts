import { REGISTERED_TIMES } from "../api/querys";

export function pxToRem(px: number) {
  return `${px / 16}rem`;
}
export function constructDataForTable(data: REGISTERED_TIMES) {
  return data?.registeredTimes.map(register => ({
    id: register.id,
    colaborador: register.user.name,
    data: new Intl.DateTimeFormat('pt-BR').format(new Date(register.created_at)),
    hora: new Intl.DateTimeFormat('pt-BR', { timeStyle: "short" }).format(new Date(register.created_at))
  }))
}